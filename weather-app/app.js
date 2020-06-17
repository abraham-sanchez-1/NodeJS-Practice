const request = require('request')
const secrets = require('../secrets')

const mkeCoordinates = '43.0389,-87.9065'

const searchLocation = 'Los%20Angeles'

const url = 'http://api.weatherstack.com/current?access_key=' + secrets.weatherStackKey + '&query='+ mkeCoordinates+'&units=f'

const geoCodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ searchLocation+'.json?access_token='+ secrets.mapBoxKey +'&limit=1'

// request({url: url, json: true}, (error, response) => {
//     // console.log(response.body.current)

//     console.log(response.body.current.weather_descriptions[0] + '. It is currently: ' + response.body.current.temperature +' degrees.')
//     console.log('It feels like: ' + response.body.current.feelslike +' degrees.')
// })

request({url: geoCodingURL, json: true}, (error, response) => {
    const latidude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log('Latitude is: ' + latidude + '   Longitude is: ' + longitude)
})


