const request = require('request')
const secrets = require('../secrets')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const mkeCoordinates = '43.0389,-87.9065'
const searchLocation = 'Los%20Angeles'
const weatherURL = 'http://api.weatherstack.com/current?access_key=' + secrets.weatherStackKey + mkeCoordinates +'&query='+'&units=f'
const geoCodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ searchLocation+'.json?access_token='+ secrets.mapBoxKey +'&limit=1'


//GETWEATHER
// request({url: weatherURL, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently: ' + response.body.current.temperature +' degrees.')
//         console.log('It feels like: ' + response.body.current.feelslike +' degrees.')
//     }
//     })




// geocode('Milwaukee', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

