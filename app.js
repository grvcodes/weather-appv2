const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const express= require('express');
const path= require('path');

console.log(__dirname);
const staticPath=  path.join(__dirname,"/public"); 
const app =express();
const port = process.env.PORT || 3000;

app.use(express.static(staticPath));

//weather details on the basis of location 
app.get('/weather',(req,res)=>{
    if(!req.query.q){
        return res.send({error : "please provide a location"})
    }
    let location = req.query.q;
    console.log(location);
    geocode(location,1,(err,geoData)=>{
        console.log('fetching geo-data')
        if(err){
            console.log("error -> fetching geo data");
            return  res.send({error : err});
        }
        forecast(geoData,(err,forecastData)=>{
            console.log("fetching weather from geo data");
            if(err){
                console.log("error -> fetching weather data");
                return res.send({error : err})
            }
            res.send({            
                forecast: forecastData,
                location: geoData.location
            })
        })
    })
})

///To get data about locations

app.get('/location',(req,res)=>{
    if(!req.query.q){
        return res.send({error : "please provide a location"})
    }
    let location = req.query.q;
    console.log(location);
    geocode(location,10,(err,geoData)=>{
        if(err){
            console.log("error");
            return  res.send({error : err});
        }
        res.send({
            location: geoData.location
        })
        
        })
})

// to get weather details for current position using browser api ///

app.get('/geoweather',(req,res)=>{
    console.log(req.query.lat,"/",req.query.long);
    if(!(req.query.lat) || !(req.query.long)){
        return res.send({error : "please provide a valid location"})
    }
    let geoData = {
                    latitude : req.query.lat,
                    longitude : req.query.long
                  }
    forecast(geoData,(err,forecastData)=>{
            if(err){
                console.log("error2");
                return res.send({error : err})
            }
            console.log("fetc");
            res.send({            
                forecast: forecastData,
                location: "cuurent location"
            })
        })
    })

    
app.listen(port,()=>{
    console.log("server started");
});

