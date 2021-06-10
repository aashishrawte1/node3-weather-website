const request = require('request')

const forecast = (latitutde, longitude, callback) => {
    const url = 'http://api.weatherstack.com/forecast?access_key=ffb7dcd52fff2f437a53753a104c6936&query=' + latitutde + ',' + longitude 

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('unable to connet weather service',undefined)
        } else if (body.error) {
            callback('',undefined)
        } else {
            callback(undefined, 'It is currently' + body.current.temperature + ' degree out. There is a ' + body.current.precip + ' % chance of rain'
            )
        }
    })
}

module.exports = forecast