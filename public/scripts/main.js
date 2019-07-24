let form = document.querySelector("form.special")
let input = document.querySelector("input");

let state =  [];
localStorage.setItem('locations',"almora@delhi@mumbai@");
localStorage.setItem('almora','25@12@');
localStorage.setItem('delhi','25@12@');localStorage.setItem('mumbai','25@12@');
let loader = document.querySelector(".loader")

let fallback = document.querySelector('.fallback')

let wrapperTo = document.querySelector(".wrapperTo")/*{summary,dataTab}*/
 
    let locationName = document.querySelector(".locationName");
    let summary = document.querySelector("div.summary")
    let temp = document.querySelectorAll("sapn#temp")
    let maxTemp = document.querySelector("span#maxTemp")
    let minTemp = document.querySelector("span#minTemp")
    let pressure = document.querySelector("span#pressure")
    let wind = document.querySelector("span#wind")
    let humidity = document.querySelector("span#humidity")

let locationTab = document.querySelector('div.locations')

 if(localStorage.getItem('locations')){
     state = localStorage.getItem('locations').split("@");
     state.pop();
     console.log(state);
 }



function mainView(data){
    console.log(data.forecast);
    locationName.textContent = data.location;
    
    temp[0].textContent  = data.forecast.currently.temperature;
    temp[1].textContent  = data.forecast.currently.temperature;
    
    maxTemp.textContent = data.forecast.daily.data[0].temperatureHigh;
    minTemp.textContent = data.forecast.daily.data[0].temperatureLow;
    pressure.textContent = data.forecast.daily.data[0].pressure;
    wind.textContent = data.forecast.daily.data[0].windSpeed;
    precipProbab.textContent = data.forecast.daily.data[0].precipProbability;
    humidity.textContent = data.forecast.daily.data[0].humidity;
    summary.textContent = data.forecast.daily.data[0].summary;
    
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
            console.log("have this class")
            return true
        }
    }
    return false
}

const getWeather = function(location){

    fetch("/weather?q="+location).then((res)=>{
        res.json().then((data)=>{

            if(data.error){
                return ({error : data.error});
            }
            console.log(data.forecast);
            return({data:data.forecast,
                    location:data.location}
            )
        })
    })
}

window.addEventListener('load',()=>{
    fallback.textContent="";
    navigator.geolocation.getCurrentPosition((pos)=>{
        
        loader.classList.toggle("hide");/*remove hide class to display the loader*/
       
        fetch("/geoweather?lat="+pos.coords.latitude+"long="+pos.coords.longitude).then((res)=>{
            res.json().then((data)=>{
                loader.classList.toggle("hide");/*add hide class to hide the loader*/
                if(data.error){
                    fallback.textContent= data.error;
                }
                else
                {
                   wrapperTo.classList.toggle("hide");/*remove hide class to display data ehen available*/
                   mainView(data);
                }}
                )
            })
        },
        ()=>{
        console.log('accesss denied')
        fallback.textContent="permission denied."
       })
       if(state){
           state.forEach(e=>createLocationTab(e, localStorage.getItem(e).split('@')));
           let addTab = document.createElement('div');
           addTab.className= "add more";
           addTab.innerHTML= `<a href="./addLoc.html">add location</a>`;
           locationTab.appendChild(addTab); 
       
       }else{
           locationTab.innerHTML ="you have no saved location :)"
       }
       
    
})



///display weather details on form serarch ////

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    fallback.textContent="";
    /*remove hide class to loader if present to show loader*/
    if((hasClass(loader,'hide'))){
        loader.classList.toggle("hide");
    }
    /*add hide class to data if class removed from it by previous display of data*/
    if(!(hasClass(wrapperTo,'hide'))){
        wrapperTo.classList.toggle("hide");
    }
    
    let location = input.value;
    if(! location){
        loader.classList.toggle("hide");
        fallback.textContent =  "please provide a location to search for..."; 
        return;
    }
    let data = getWeather(location)
    if(!data){
        loader.classList.toggle('hide');
        fallback.textContent = "no internet connection"
        return;
    }
    if(data.error){
        fallback.textContent= data.error;
    }
    else{
        mainView(data);
    }

});


