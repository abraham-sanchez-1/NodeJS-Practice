const request = require('request')
const secrets = require('../secrets')

const mkeCoordinates = '43.0389,-87.9065'

const searchLocation = 'Los%20Angeles'

const weatherURL = 'http://api.weatherstack.com/current?access_key=' + secrets.weatherStackKey + mkeCoordinates +'&query='+'&units=f'

const geoCodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ searchLocation+'.json?access_token='+ secrets.mapBoxKey +'&limit=1'


//GETWEATHER
request({url: weatherURL, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to weather service!')
    }else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.current.weather_descriptions[0] + '. It is currently: ' + response.body.current.temperature +' degrees.')
        console.log('It feels like: ' + response.body.current.feelslike +' degrees.')
    }
    })


//GEOCODING
request({url: geoCodingURL, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to geocoding service!')
    } else if(response.body.features.length === 0){
        console.log('Unable to find user input location. Try a different search.')
    } else{
        const latidude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log('Latitude is: ' + latidude + '   Longitude is: ' + longitude)
    }
    })


