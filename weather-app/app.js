const request = require('request')
const secrets = require('../secrets')

const mkeCoordinates = '43.0389,-87.9065'

const url = 'http://api.weatherstack.com/current?access_key=' + secrets.weatherStackKey + '&query='+ mkeCoordinates+'&units=f'

request({url: url, json: true}, (error, response) => {
    // console.log(response.body.current)

    console.log(response.body.current.weather_descriptions[0] + '. It is currently: ' + response.body.current.temperature +' degrees.')
    console.log('It feels like: ' + response.body.current.feelslike +' degrees.')
})


