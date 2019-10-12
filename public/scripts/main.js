//saveWeatherDate savedData locations
let form = document.querySelector("form.special")
let input = document.querySelector("input");

let state =  [];

let loader = document.querySelectorAll(".loader")

let fallback = document.querySelector('.fallback')

let wrapperTo = document.querySelector(".wrapperTo") /*{summary,dataTab}*/
let container = document.querySelector('.container');
 
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
let locationTabFb = document.querySelector('p.location-tab-fallback')

let icons={
    "clear":"./img/svg/Sun.svg",
    "clear-day":"./img/svg/Sun.svg",
    "clear-night":"./img/svg/Moon.svg",
    "rain":"./img/svg/Cloud-Rain.svg",
    "snow":"./img/svg/Snow.svg",
    "wind":"./img/svg/Wind.svg",
    "fog":"./img/svg/Fog.svg",
    "cloudy":"./img/svg/Cloud.svg",
    "fallback":"./img/svg/Sun.svg"
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
    //display graph
}

function createLocationTab(location,temp,icon){
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let img = document.createElement('img');
    img.src = icons[icon] || icons["fallback"]
    h3.textContent= location;
    let divFooter = document.createElement("div");
    divFooter.classList.add("footer");
    let h4=[];
    for(i=0;i<2;i++){
        h4[i]=document.createElement('h4');
        h4[i].textContent=temp[i];
    }
    divFooter.append(h4[0],h4[1]);
    div.append(h3,img,divFooter);
    locationTab.appendChild(div);    
}


window.addEventListener('load',()=>{
    console.log("fetching data for current locations ->on load")
    loader[0].classList.remove("hide");/*remove hide class to display the loader*/
    loader[1].classList.remove('hide');
    container.classList.add('hide');
    fallback.textContent="";
    locationTabFb.innerHTML="";
    navigator.geolocation.getCurrentPosition((pos)=>{
        fetch("/geoweather?lat="+pos.coords.latitude+"&long="+pos.coords.longitude).then((res)=>{
            res.json().then((data)=>{
                if(data.error){
                    loader[0].classList.add("hide");/*add hide class to hide the loader*/
                    fallback.textContent= data.error;
                    console.log(data.error);
                    return;
                }
                else
                {
                    console.log('data arrived');
                    mainView(data);
                    loader[0].classList.add("hide");/*add hide class to hide the loader*/
                    container.classList.remove("hide");/*remove hide class to display data when available*/
                }}
                )
            })
        },
        ()=>{
        console.log('accesss denied')
        fallback.textContent="permission to access location denied."
        loader[0].classList.add('hide');
    })
    console.log(state,"saved locations")
    if(state.length > 0){
        console.log("we have saved locations")
        let date = Date().split(" ")[2];
        console.log(date);
        if(date == localStorage.getItem('savedWeatherDate')){
                console.log('data for today is avlvl,loading frm locStore');
                let savedData = localStorage.getItem('savedData').split(" ");
                let savedIcons = localStorage.getItem('icons').split(' ');
                console.log(savedData,"saved data min/maxTemp");
                state.forEach((e,i)=>{
                    let temp =[]
                    icon = savedIcons[i]
                    temp[0]= savedData[2*i];
                    temp[1] = savedData[2*i + 1];
                    createLocationTab(e,temp,icon)
                })
                loader[1].classList.add('hide')
        }else{
            console.log('saved locatioins but no saved data')
            let saveData = [];
            let icons = []
            state.forEach(e=>{
                fetch("/weather?q="+e).then((res)=>{
                    res.json().then((data)=>{
                     if(data.error){
                         loader[1].classList.add('hide')
                         locationTabFb.innerHTML="<h2>No Internet connection,Could not load weather details..</h2>"
                         return
                     }
                     let temp =[]
                     let icon = data.forecast.daily.data[0].icon; 
                     temp[0] = data.forecast.daily.data[0].temperatureHigh;
                     temp[1] = data.forecast.daily.data[0].temperatureLow;
                     createLocationTab(e,temp,icon)
                     saveData.push(temp[0],temp[1])
                     icons.push(icon)
                    })
                 })
            })
            loader[1].classList.add('hide');
            if(saveData.length !== 0){
                localStorage.setItem('saveWeatherDate',Date().split(" ")[2]);
                localStorage.setItem('savedData',saveData.join(' '));
                localStorage.setItem('icons',icons.join(' '));
            }
        }
    }else{
       console.log('no saved locations');
       loader[1].classList.add('hide');
       locationTabFb.innerHTML ="you have no saved location :)"
    }
    // let addTab = document.createElement('div');
    // addTab.className= "add-more";
    // addTab.innerHTML= `<a href="./addLoc.html">add location </a>`;
    // locationTab.appendChild(addTab);  
})



///display weather details on form serarch ////

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    fallback.textContent="";
    loader[0].classList.remove('hide');
    container.classList.add('hide');
    
    let location = input.value;
    if(! location){
        loader[0].classList.add("hide");
        fallback.textContent =  "please provide a location to search for..."; 
        return;
    }
    fetch("/weather?q="+location).then((res)=>{
            res.json().then((data)=>{
                if(data.error){
                    console.log(data.error)
                    loader[0].classList.add("hide");
                    fallback.textContent= data.error
                    return 
                }
                console.log(data,"from form")
                mainView(data)
                loader[0].classList.add("hide");
                container.classList.remove("hide");
            })
        })
})
