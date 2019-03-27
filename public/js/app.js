console.log('Client Side JavaScript')





const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    messageTwo.textContent = 'Loading.....'

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {

            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = 'Try another Search!  :) '

            } else {
                messageOne.textContent = 'Place: ' + data.location
                messageTwo.textContent = 'Temperature: ' + data.forecast.Temperature + '......' + data.forecast.Summary

            }
        })
    })


})