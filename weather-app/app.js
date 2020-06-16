const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=' + key + '&query=43.0389,-87.9065'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})