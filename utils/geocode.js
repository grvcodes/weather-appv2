const request = require('request');
require('dotenv').config();

const geocode = (location,num,callback)=>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ location +".json?limit=" + num + "&access_token=" + process.env.GEOCODE;
    request({url :url,json: true },(err,res)=>{
        console.log("fetching geo locations",location);
        if(err){
            console.log("no internet connection")
            callback("Unable to connect",undefined)
        }
        else if(res.body.features.length == 0){
            console.log("could not find any relevant location")
            callback("Unable to find location.Please be more specific by adding country or state name",undefined)
        }
        else{

            if(num == 1){
                console.log("single location ->form search")
            callback(undefined,{
                    longitude:res.body.features[0].center[0],
                    latitude:res.body.features[0].center[1],
                    location:res.body.features[0].place_name
            })
            }else{
                console.log("5 locations ->addLoc",res.body)
                callback(undefined,res.body)
            }
            
        }
    })
}


module.exports = geocode;