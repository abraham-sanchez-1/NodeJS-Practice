const request = require('request')
const secrets = require('../../secrets')

const forecast = (lat, long, callback) => {
    const coords = lat + ',' + long
    console.log(coords)
    const weatherURL = 'http://api.weatherstack.com/current?access_key=' + secrets.weatherStackKey + '&query=' + coords +'&units=f'

    request({url: weatherURL, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather services', undefined)
        }else if (response.body.error){
            callback('Unable to find location via weather services', undefined)
        }else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently: ' + response.body.current.temperature +' degrees.' + '  It feels like: ' + response.body.current.feelslike +' degrees.')
        }
    })


}

module.exports = forecast


















//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })