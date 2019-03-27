const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/7f04f85e904abc814602275a279a4147/" + encodeURIComponent(longitude) + "," + encodeURIComponent(latitude) + "?units=si"

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect to Weather Services!', undefined)
        } else if (longitude == undefined || latitude == undefined) {
            callback('Unable to find the location. Try another Search.', undefined)
        } else {
            callback(undefined, {
                Summary: response.body.daily.data[0].summary,
                Temperature: response.body.currently.temperature,
                percipProbability: response.body.currently.precipProbability


            })
        }

    })

}

module.exports = forecast