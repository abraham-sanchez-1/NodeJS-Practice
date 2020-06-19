const request = require('request')
const secrets = require('../../secrets')

const forecast = (lat, long, callback) => {
    const coords = lat + ',' + long
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

