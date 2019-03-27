const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



const app = express()

// Define paths for Express
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup Static Directory
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: "Kartik's Weather App",
        name: 'Kartik Kanungo',
        age: 22
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: "Kartik's Weather App",
        name: 'Kartik Kanungo',
        age: 22
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        msg: 'Hi! If you need Help, You are at right path',
        title: "Kartik's Weather App",
        name: 'Kartik Kanungo',
        age: 22
    })
})


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please Provide a Location'
        })
    }

    geocode(req.query.address, (error, { longitude, latitude, place } = {}) => {
        if (error) {
            return res.send({
                error: 'Please Provide a valid Location'
            })
        }



        // forecast(data.longitude, data.latitude, (error, fdata) => {
        forecast(longitude, latitude, (error, fdata) => {
            if (error) {
                return res.send({
                    error: 'Error'
                })
            }


            res.send({
                forecast: fdata,
                location: place,
                address: req.query.address
            })
        })
    })




})



app.get('/help/*', (req, res) => {
    res.render('error', {
        error: 'Help Article Not Found'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        error: 'Page Not Found!'
    })

})
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})