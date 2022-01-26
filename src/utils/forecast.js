//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require("request")


// const geocode = (address, callback) => {
//     const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYm5hbyIsImEiOiJja3lvOTRxcngybTNuMm5wOXNlYmJxcnJiIn0.LBsSIxTDX9KHpACHKP7QLQ&limit=1'
//     request({ url: url, json: true}, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services', undefined)
//         } else if (response.body.features.length === 0) {
//             callback('Unable to find location. Please specify a different location.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=361a2473cfc3a961293c2c8ff8dc9b88&query=' + latitude + ',' + longitude + '&units=f'
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather services.', undefined);
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] +". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.")
        }
    })
}

module.exports = forecast