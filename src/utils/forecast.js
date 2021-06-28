const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=921b541080e0578f0849485bee951f8d&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' . It is currently ' + body.current.temperature + ' degress out but it feels like ' + body.current.feelslike + '% chance of rain.'+' Humidity is '+body.current.humidity+'.')
        }
    })
}

module.exports = forecast