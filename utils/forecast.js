const request = require('request');
require('dotenv').config();

const forecast = (geocode,callback)=>{
    const url = `https://api.darksky.net/forecast/${process.env.FORECAST}/${geocode.latitude},${geocode.longitude}?exclude=minutely,alerts,flags&units=si`;
    request({url :url,json: true },(err,res)=>{
        if(err){
            console.log(err);
            callback("Unable to connect",undefined)
        }
        else if(res.body.error){
            callback("Unable to get weather details",undefined)
        }
        else{
            console.log(res.body);
            callback(undefined, res.body);
        }
    })
}

module.exports = forecast;                              