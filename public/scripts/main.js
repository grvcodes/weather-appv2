let form = document.querySelector("form.special")
let input = document.querySelector("input");

let state =  [];
// localStorage.setItem('locations',"almora@delhi@mumbai@");
// localStorage.setItem('almora','25@12@');
// localStorage.setItem('delhi','25@12@');localStorage.setItem('mumbai','25@12@');
let loader = document.querySelector(".loader")

let fallback = document.querySelector('.fallback')

let wrapperTo = document.querySelector(".wrapperTo") /*{summary,dataTab}*/
 
    let locationName = document.querySelector(".locationName");
    let iconTop = document.querySelector(".icon-top");
    let summary = document.querySelector("div.summary")
    
    let temp = document.querySelectorAll("span#temp")
    let maxTemp = document.querySelector("span#maxTemp")
    let minTemp = document.querySelector("span#minTemp")
    let pressure = document.querySelector("span#pressure")
    let wind = document.querySelector("span#wind")
    let humidity = document.querySelector("span#humidity")

let locationTab = document.querySelector('div.locations')
let icons={
    "clear":"./img/climacons-master/SVG/Sun.svg",
    "clear-day":"./img/climacons-master/SVG/Sun.svg",
    "clear-night":"./img/climacons-master/SVG/Sun.svg",
    "rain":"./img/climacons-master/SVG/Cloud-Rain.svg",
    "snow":"./img/climacons-master/SVG/Snowflake.svg",
    "wind":"./img/climacons-master/SVG/Wind.svg",
    "fog":"./img/climacons-master/SVG/Cloud.svg",
    "cloudy":"./img/climacons-master/SVG/Cloud.svg",
    "fallback":"./img/climacons-master/SVG/Thermometer.svg"
}
 if(localStorage.getItem('locations')){
     state = localStorage.getItem('locations').split("@");
     state.pop();
 }

function mainView(data){
    locationName.textContent = data.location;
    temp[0].textContent  = data.forecast.currently.temperature;
    maxTemp.textContent = data.forecast.daily.data[0].temperatureHigh;
    minTemp.textContent = data.forecast.daily.data[0].temperatureLow;
    pressure.textContent = data.forecast.daily.data[0].pressure;
    wind.textContent = data.forecast.daily.data[0].windSpeed;
    iconTop.src= icons[data.forecast.daily.icon] || icons["fallback"];
    humidity.textContent = data.forecast.daily.data[0].humidity;
    summary.textContent = data.forecast.hourly.summary;
    //display gaph
}

function createLocationTab(location,temp){
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent= location;
    let divFooter = document.createElement("div");
    divFooter.classList.add("footer");
    let h4=[];
    for(i=0;i<2;i++){
        h4[i]=document.createElement('h4');
        h4[i].textContent=temp[i];
    }
    divFooter.append(h4[0],h4[1]);
    div.append(h3,divFooter);
    locationTab.appendChild(div);    
}

function hasClass(element,className){
    let x= element.classList;
    for(i=0;i<x.length;i++){
        if(x[i]==className){
            return true
        }
    }
    return false
}

window.addEventListener('load',()=>{
    console.log("fetching data for current locations ->on load")
    loader.classList.remove("hide");/*remove hide class to display the loader*/
    fallback.textContent="";
    navigator.geolocation.getCurrentPosition((pos)=>{
        fetch("/geoweather?lat="+pos.coords.latitude+"&long="+pos.coords.longitude).then((res)=>{
            res.json().then((data)=>{
                if(data.error){
                    loader.classList.add("hide");/*add hide class to hide the loader*/
                    fallback.textContent= data.error;
                    console.log(data.error);
                    return;
                }
                else
                {
                    console.log('data arrived');
                    mainView(data);
                    loader.classList.add("hide");/*add hide class to hide the loader*/
                    wrapperTo.classList.remove("hide");/*remove hide class to display data when available*/
                }}
                )
            })
        },
        ()=>{
        console.log('accesss denied')
        fallback.textContent="permission to access location denied."
        loader.classList.add('hide');
    })
    if(state){
        state.forEach(e=>{
            let temp =[]
            temp[0]= 35 || data.forecast.daily.data[0].temperatureHigh;
            temp[1] = 25 || data.forecast.daily.data[0].temperatureLow;
            createLocationTab(e,temp)
        })
    }
    //    state.forEach(e=>{
    //    fetch("/weather?q="+e).then((res)=>{
    //        res.json().then((data)=>{
    //         if(!data){
    //             locationTab.innerHTML="could not load weather details.."
    //             return
    //          }
    //         if(data.error){
    //             locationTab.innerHTML="<h2>No Internet connection.Could not load weather details..</h2>"
    //             return fallback.textContent = data.error;
    //         }
    //         let temp =[]
    //         temp[0]= 35 || data.forecast.daily.data[0].temperatureHigh;
    //         temp[1] = 25 || data.forecast.daily.data[0].temperatureLow;
    //         createLocationTab(e,temp)
    //        })
    //     })
    //    })
    // }else{
    //    locationTab.innerHTML ="you have no saved location :)"
    // }
    let addTab = document.createElement('div');
    addTab.className= "add-more";
    addTab.innerHTML= `<a href="./addLoc.html">add location </a>`;
    locationTab.appendChild(addTab);  
})



///display weather details on form serarch ////

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    fallback.textContent="";
    loader.classList.remove('hide');
    wrapperTo.classList.add('hide');
    
    let location = input.value;
    if(! location){
        loader.classList.add("hide");
        fallback.textContent =  "please provide a location to search for..."; 
        return;
    }
    fetch("/weather?q="+location).then((res)=>{
            res.json().then((data)=>{
                if(!data){
                   loader.classList.add("hide");
                   fallback.textContent="no internet connection";
                   return
                }
                if(data.error){
                    loader.classList.add("hide");
                    fallback.textContent= data.error
                    return 
                }
                console.log(data,"from form")
                mainView(data)
                loader.classList.add("hide");
                wrapperTo.classList.remove("hide");
            })
        })
    

})
