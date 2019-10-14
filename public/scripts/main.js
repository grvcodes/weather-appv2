//saveWeatherDate savedData locations
const dummyData = {
    "hourly":{"summary":"Breezy later this afternoon and mostly cloudy starting this evening.","icon":"wind",
    "data":[{"time":1559728800,"summary":"Breezy","icon":"wind","precipIntensity":0,"precipProbability":0,"temperature":29.82,"apparentTemperature":29.82,"dewPoint":3,"humidity":0.18,"pressure":1009.6,"windSpeed":9.36,"windGust":16.28,"windBearing":270,"cloudCover":0,"uvIndex":7,"visibility":10.01,"ozone":355.82},{"time":1559732400,"summary":"Breezy","icon":"wind","precipIntensity":0,"precipProbability":0,"temperature":30.53,"apparentTemperature":30.53,"dewPoint":-0.04,"humidity":0.14,"pressure":1009.89,"windSpeed":8.87,"windGust":15.17,"windBearing":271,"cloudCover":0,"uvIndex":8,"visibility":11.47,"ozone":357.81},{"time":1559736000,"summary":"Breezy","icon":"wind","precipIntensity":0,"precipProbability":0,"temperature":30.13,"apparentTemperature":30.13,"dewPoint":-0.2,"humidity":0.14,"pressure":1010.01,"windSpeed":7.53,"windGust":12.08,"windBearing":283,"cloudCover":0,"uvIndex":9,"visibility":16.09,"ozone":358.3},{"time":1559739600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":30.27,"apparentTemperature":30.27,"dewPoint":0.74,"humidity":0.15,"pressure":1009.92,"windSpeed":6.23,"windGust":9.57,"windBearing":300,"cloudCover":0,"uvIndex":8,"visibility":16.09,"ozone":356.6},{"time":1559743200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":30.54,"apparentTemperature":30.54,"dewPoint":1.26,"humidity":0.15,"pressure":1009.7,"windSpeed":4.94,"windGust":8.25,"windBearing":269,"cloudCover":0,"uvIndex":7,"visibility":16.09,"ozone":353.33},{"time":1559746800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":30.48,"apparentTemperature":30.48,"dewPoint":2.02,"humidity":0.16,"pressure":1009.56,"windSpeed":4.48,"windGust":7.18,"windBearing":288,"cloudCover":0,"uvIndex":5,"visibility":16.09,"ozone":350.07},{"time":1559750400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":30.32,"apparentTemperature":30.32,"dewPoint":2.83,"humidity":0.17,"pressure":1009.59,"windSpeed":3.87,"windGust":6.66,"windBearing":325,"cloudCover":0,"uvIndex":3,"visibility":16.09,"ozone":346.9},{"time":1559754000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":29.72,"apparentTemperature":29.72,"dewPoint":3.97,"humidity":0.19,"pressure":1009.69,"windSpeed":2.94,"windGust":6.4,"windBearing":199,"cloudCover":0,"uvIndex":1,"visibility":16.09,"ozone":343.71},{"time":1559757600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":28.68,"apparentTemperature":28.68,"dewPoint":5.28,"humidity":0.23,"pressure":1009.98,"windSpeed":2.61,"windGust":6.09,"windBearing":232,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":341.41},{"time":1559761200,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":26.87,"apparentTemperature":26.87,"dewPoint":6.78,"humidity":0.28,"pressure":1010.49,"windSpeed":1.71,"windGust":5.63,"windBearing":248,"cloudCover":0.29,"uvIndex":0,"visibility":16.09,"ozone":339.99},{"time":1559764800,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":24.78,"apparentTemperature":24.78,"dewPoint":8.32,"humidity":0.35,"pressure":1011.16,"windSpeed":2.99,"windGust":5.13,"windBearing":199,"cloudCover":0.68,"uvIndex":0,"visibility":16.09,"ozone":339.45},{"time":1559768400,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":23.02,"apparentTemperature":23.02,"dewPoint":9.38,"humidity":0.42,"pressure":1011.74,"windSpeed":2.82,"windGust":4.54,"windBearing":205,"cloudCover":0.94,"uvIndex":0,"visibility":16.09,"ozone":340.89},{"time":1559772000,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":21.94,"apparentTemperature":21.94,"dewPoint":9.79,"humidity":0.46,"pressure":1012.14,"windSpeed":2.3,"windGust":3.71,"windBearing":207,"cloudCover":0.94,"uvIndex":0,"visibility":16.09,"ozone":345.99},{"time":1559775600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":21.11,"apparentTemperature":21.11,"dewPoint":9.68,"humidity":0.48,"pressure":1012.43,"windSpeed":1.71,"windGust":2.79,"windBearing":263,"cloudCover":0.82,"uvIndex":0,"visibility":16.09,"ozone":353.12},{"time":1559779200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":20.23,"apparentTemperature":20.23,"dewPoint":9.07,"humidity":0.49,"pressure":1012.59,"windSpeed":1.8,"windGust":2.22,"windBearing":239,"cloudCover":0.65,"uvIndex":0,"visibility":16.09,"ozone":357.9},{"time":1559782800,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":19.87,"apparentTemperature":19.87,"dewPoint":7.73,"humidity":0.45,"pressure":1012.46,"windSpeed":1.17,"windGust":2.3,"windBearing":185,"cloudCover":0.44,"uvIndex":0,"visibility":16.09,"ozone":358.34},{"time":1559786400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":19.46,"apparentTemperature":19.46,"dewPoint":5.99,"humidity":0.41,"pressure":1012.21,"windSpeed":1.56,"windGust":2.71,"windBearing":5,"cloudCover":0.18,"uvIndex":0,"visibility":16.09,"ozone":356.46},{"time":1559790000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":19.33,"apparentTemperature":19.33,"dewPoint":4.82,"humidity":0.38,"pressure":1012.03,"windSpeed":1.75,"windGust":2.94,"windBearing":327,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":354.31},{"time":1559793600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":19.47,"apparentTemperature":19.47,"dewPoint":4.52,"humidity":0.37,"pressure":1012.07,"windSpeed":1.48,"windGust":2.59,"windBearing":319,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":352.24},{"time":1559797200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":19.86,"apparentTemperature":19.86,"dewPoint":4.76,"humidity":0.37,"pressure":1012.21,"windSpeed":1.23,"windGust":2.07,"windBearing":325,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":349.85},{"time":1559800800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":20.61,"apparentTemperature":20.61,"dewPoint":5.29,"humidity":0.37,"pressure":1012.37,"windSpeed":1.27,"windGust":1.93,"windBearing":340,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":348.44},{"time":1559804400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":22.04,"apparentTemperature":22.04,"dewPoint":6.17,"humidity":0.36,"pressure":1012.61,"windSpeed":1.81,"windGust":2.5,"windBearing":9,"cloudCover":0.03,"uvIndex":1,"visibility":16.09,"ozone":348.87},{"time":1559808000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":23.86,"apparentTemperature":23.86,"dewPoint":7.44,"humidity":0.35,"pressure":1012.87,"windSpeed":2.65,"windGust":3.46,"windBearing":49,"cloudCover":0.08,"uvIndex":3,"visibility":16.09,"ozone":350.16},{"time":1559811600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":25.76,"apparentTemperature":25.76,"dewPoint":8.73,"humidity":0.34,"pressure":1012.96,"windSpeed":3.48,"windGust":4.43,"windBearing":83,"cloudCover":0.14,"uvIndex":5,"visibility":16.09,"ozone":350.67},{"time":1559815200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":26.19,"apparentTemperature":26.19,"dewPoint":9.99,"humidity":0.36,"pressure":1012.74,"windSpeed":4.35,"windGust":5.49,"windBearing":99,"cloudCover":0.22,"uvIndex":6,"visibility":16.09,"ozone":349.52},{"time":1559818800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":26.11,"apparentTemperature":26.11,"dewPoint":11.19,"humidity":0.39,"pressure":1012.35,"windSpeed":5.24,"windGust":6.55,"windBearing":107,"cloudCover":0.32,"uvIndex":7,"visibility":16.09,"ozone":347.53},{"time":1559822400,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":25.71,"apparentTemperature":25.71,"dewPoint":12.06,"humidity":0.43,"pressure":1011.89,"windSpeed":5.75,"windGust":7.09,"windBearing":113,"cloudCover":0.36,"uvIndex":7,"visibility":16.09,"ozone":345.22},{"time":1559826000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":25.62,"apparentTemperature":25.62,"dewPoint":12.27,"humidity":0.44,"pressure":1011.33,"windSpeed":5.61,"windGust":6.68,"windBearing":118,"cloudCover":0.31,"uvIndex":7,"visibility":16.09,"ozone":342.26},{"time":1559829600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":25.42,"apparentTemperature":25.42,"dewPoint":12.12,"humidity":0.44,"pressure":1010.69,"windSpeed":5.11,"windGust":5.73,"windBearing":120,"cloudCover":0.21,"uvIndex":6,"visibility":16.09,"ozone":339.02},{"time":1559833200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":25.1,"apparentTemperature":25.1,"dewPoint":12.11,"humidity":0.44,"pressure":1010.14,"windSpeed":4.64,"windGust":4.94,"windBearing":120,"cloudCover":0.13,"uvIndex":5,"visibility":16.09,"ozone":336.92},{"time":1559836800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":24.78,"apparentTemperature":24.78,"dewPoint":12.46,"humidity":0.46,"pressure":1009.65,"windSpeed":4.37,"windGust":4.61,"windBearing":122,"cloudCover":0.1,"uvIndex":3,"visibility":16.09,"ozone":336.81},{"time":1559840400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":24.21,"apparentTemperature":24.21,"dewPoint":12.97,"humidity":0.5,"pressure":1009.26,"windSpeed":4.13,"windGust":4.44,"windBearing":121,"cloudCover":0.08,"uvIndex":1,"visibility":16.09,"ozone":337.77},{"time":1559844000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":23.36,"apparentTemperature":23.36,"dewPoint":13.54,"humidity":0.54,"pressure":1009.14,"windSpeed":3.82,"windGust":4.18,"windBearing":120,"cloudCover":0.07,"uvIndex":0,"visibility":16.09,"ozone":338.52},{"time":1559847600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":22.22,"apparentTemperature":22.22,"dewPoint":14.21,"humidity":0.6,"pressure":1009.52,"windSpeed":3.37,"windGust":3.74,"windBearing":117,"cloudCover":0.04,"uvIndex":0,"visibility":16.09,"ozone":338.53},{"time":1559851200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":20.74,"apparentTemperature":20.74,"dewPoint":14.91,"humidity":0.69,"pressure":1010.17,"windSpeed":2.84,"windGust":3.22,"windBearing":113,"cloudCover":0.02,"uvIndex":0,"visibility":16.09,"ozone":338.36},{"time":1559854800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":19.75,"apparentTemperature":19.76,"dewPoint":15.36,"humidity":0.76,"pressure":1010.66,"windSpeed":2.34,"windGust":2.75,"windBearing":112,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":338.01},{"time":1559858400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":19.36,"apparentTemperature":19.38,"dewPoint":15.36,"humidity":0.78,"pressure":1010.78,"windSpeed":1.82,"windGust":2.36,"windBearing":122,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":337.47},{"time":1559862000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":18.84,"apparentTemperature":18.84,"dewPoint":15.08,"humidity":0.79,"pressure":1010.76,"windSpeed":1.31,"windGust":2.03,"windBearing":138,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":336.78},{"time":1559865600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":18.2,"apparentTemperature":18.2,"dewPoint":14.72,"humidity":0.8,"pressure":1010.72,"windSpeed":1.06,"windGust":1.83,"windBearing":133,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":336.32},{"time":1559869200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":17.37,"apparentTemperature":17.37,"dewPoint":14.28,"humidity":0.82,"pressure":1010.65,"windSpeed":1.2,"windGust":1.8,"windBearing":84,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":336.31},{"time":1559872800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":16.89,"apparentTemperature":16.89,"dewPoint":13.74,"humidity":0.82,"pressure":1010.58,"windSpeed":1.53,"windGust":1.9,"windBearing":18,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":336.53},{"time":1559876400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":16.77,"apparentTemperature":16.77,"dewPoint":13.26,"humidity":0.8,"pressure":1010.67,"windSpeed":1.77,"windGust":2.08,"windBearing":332,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":336.5},{"time":1559880000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":16.99,"apparentTemperature":16.99,"dewPoint":12.97,"humidity":0.77,"pressure":1011.04,"windSpeed":1.96,"windGust":2.35,"windBearing":320,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":336.04},{"time":1559883600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":17.75,"apparentTemperature":17.75,"dewPoint":12.73,"humidity":0.72,"pressure":1011.57,"windSpeed":2.18,"windGust":2.69,"windBearing":323,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":335.39},{"time":1559887200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":18.99,"apparentTemperature":18.99,"dewPoint":12.27,"humidity":0.65,"pressure":1012.15,"windSpeed":2.48,"windGust":3.15,"windBearing":327,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":334.68},{"time":1559890800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":20.93,"apparentTemperature":20.93,"dewPoint":11.27,"humidity":0.54,"pressure":1012.8,"windSpeed":2.94,"windGust":3.91,"windBearing":322,"cloudCover":0,"uvIndex":1,"visibility":16.09,"ozone":333.98},{"time":1559894400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":23.48,"apparentTemperature":23.48,"dewPoint":10.08,"humidity":0.43,"pressure":1013.48,"windSpeed":3.44,"windGust":4.78,"windBearing":317,"cloudCover":0,"uvIndex":3,"visibility":16.09,"ozone":333.29},{"time":1559898000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":26.09,"apparentTemperature":26.09,"dewPoint":9.33,"humidity":0.35,"pressure":1014.06,"windSpeed":3.71,"windGust":5.27,"windBearing":323,"cloudCover":0,"uvIndex":5,"visibility":16.09,"ozone":332.7},{"time":1559901600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":27.34,"apparentTemperature":27.34,"dewPoint":9.37,"humidity":0.32,"pressure":1014.44,"windSpeed":3.49,"windGust":4.96,"windBearing":348,"cloudCover":0,"uvIndex":7,"visibility":16.09,"ozone":332.37}]}
  }
let form = document.querySelector("form.special")
let input = document.querySelector("input");

let state =  [];

let loader = document.querySelectorAll(".loader")

let fallback = document.querySelector('.fallback')

let wrapperTo = document.querySelector(".wrapperTo") /*{summary,dataTab}*/
let container = document.querySelector('.container');
 
    let locationName = document.querySelector(".locationName h3");
    let iconTop = document.querySelector(".icon-top");
    let summary = document.querySelector("p.summary")
    
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
let displayGraph = (data)=>{
    let date = new Date(data.hourly.data[0].time)
    let hrs = date.getHours();
    let elements = 24 - hrs + 1;
    let DATA = [];
    for(i=0;i<elements;i++){
        DATA.push(data.hourly.data[i]);
    }
    document.querySelector('svg').style.width= elements*50

    console.log(DATA);
    let maxY = d3.max(DATA,d=>d.temperature)
    
    let xScale = d3.scaleLinear().domain([DATA[0].time,DATA[elements-1].time]).range([hrs,24*50])
    
    
    let yScale = d3.scaleLinear().domain([0,maxY]).range([0,400])
   
    let tempLine = d3.line().x(d=>xScale(d.time)).y(d=>600-yScale(d.temperature))
    
    let dAttribute = tempLine(DATA).replace('M','M0 600,L')
    dAttribute += `L${xScale(DATA[elements-1].time)} 600Z`
    console.log(dAttribute);
    d3.select("svg")
        .append('path')
        .attr('d',dAttribute)
        .attr('fill','dodgerblue')
        .attr('stroke','dodgerblue')
        .attr('stroke-width',)

} 
displayGraph(dummyData);

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
}

function createLocationTab(location,temp,icon,summ){
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let img = document.createElement('img');

    img.src = icons[icon] || icons["fallback"]
    h3.textContent= location;
    p.innerHTML = summ;

    let divFooter = document.createElement("div");
    divFooter.classList.add("footer");
    let h4=[];
    for(i=0;i<2;i++){
        h4[i]=document.createElement('h4');
        h4[i].textContent=temp[i];
    }
    divFooter.append(h4[0],h4[1]);
    div.append(h3,img,p,divFooter);
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
        fallback.textContent="permission to access location denied or no internet connection"
        loader[0].classList.add('hide');
    })
    console.log(state,"saved locations")
    if(state.length > 0){
        console.log("we have saved locations")
        let date = Date().split(" ")[2];
        console.log(date,localStorage.getItem('savedWeatherDate'));
        if(date == localStorage.getItem('saveWeatherDate')){
                console.log('data for today is avlvl,loading frm locStore');
                let savedData = localStorage.getItem('savedData').split(" ");
                let savedIcons = localStorage.getItem('icons').split(' ');
                let savedSumm = localStorage.getItem('summary').split('@');
                console.log(savedData,"saved data min/maxTemp",savedSumm,"oooo");
                state.forEach((e,i)=>{
                    let temp =[]
                    icon = savedIcons[i]
                    summary = savedSumm[i]
                    temp[0]= savedData[2*i];
                    temp[1] = savedData[2*i + 1];
                    createLocationTab(e,temp,icon,summary)
                })
                loader[1].classList.add('hide')
        }else{
            console.log('saved locatioins but no saved data')
            let saveData = [];
            let icons = []
            let summaries= []
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
                     let summary = data.forecast.hourly.summary;
                     createLocationTab(e,temp,icon)
                     saveData.push(temp[0],temp[1])
                     icons.push(icon)
                     summaries.push(summary,'@')
                    })
                 })
            })
            loader[1].classList.add('hide');
            if(saveData.length !== 0){
                console.log('saving data',Date().split(" ")[2])
                localStorage.setItem('saveWeatherDate',Date().split(" ")[2]);
                localStorage.setItem('savedData',saveData.join(' '));
                localStorage.setItem('icons',icons.join(' '));
                localStorage.setItem('summary',summaries)
            }
        }
    }else{
       console.log('No saved locations');
       loader[1].classList.add('hide');
       locationTabFb.innerHTML ="No saved location."
    }
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

 
