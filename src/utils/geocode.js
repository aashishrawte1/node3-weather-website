const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWFzaGlzaHJhd3RlMSIsImEiOiJja3BheDdld3Qwc2JtMm9sbHlrdHQ0Ym5pIn0.jJLVeD8yfQHv2Npas8vQ1A&limit=1'

    request({ url, json: true}, (error,{body})=>{
        if(error){
            callback('unable to connect to location service!', undefined)
        } else if (body.features.length === 0) {
            callback('unable to find location. try another search', undefined)
        } else {
            callback('undefined', {
                latitutde: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode