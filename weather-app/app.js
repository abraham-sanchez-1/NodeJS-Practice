const request = require('request')
const secrets = require('../secrets')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const mkeCoordinates = '43.0389,-87.9065'
const searchLocation = 'Los%20Angeles'
const weatherURL = 'http://api.weatherstack.com/current?access_key=' + secrets.weatherStackKey + mkeCoordinates +'&query='+'&units=f'
const geoCodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ searchLocation+'.json?access_token='+ secrets.mapBoxKey +'&limit=1'

geocode('Milwaukee', (error, data) => {
    if(error){
        return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error){
            return console.log(error)
        }

        console.log(data.location)
        console.log(forecastData)

      })
})




