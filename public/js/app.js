// Making http request from client side javascript using Fetch API (browser-based API)

//Selecting html elements
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = ''
    messageTwo.textContent =''
    const location = search.value
    var myURL = "http://localhost:3000/weather?address=" + location
    messageOne.textContent = "Fetching data"

    fetch(myURL).then((response) => {
    response.json().then((data) => { // data is parsed response
        if (data.error) {
            return messageOne.textContent = data.error
        }
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
    })
    
})
})
