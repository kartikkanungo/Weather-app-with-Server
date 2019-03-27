const request = require("request")

const geocode = (address, callback) => {
    const mapBoxurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) +
        ".json?access_token=pk.eyJ1Ijoia2FydGlra2FudW5nbyIsImEiOiJjanRvb2NkNzcxcW0xM3lwZ3NreWlpZTFrIn0.LgGb-pKf4iCCiYzKbLD8HA"

    request({ url: mapBoxurl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location Services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find the location. Try Another Search.', undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                place: response.body.features[0].place_name

            })


        }


    })

}


module.exports = geocode