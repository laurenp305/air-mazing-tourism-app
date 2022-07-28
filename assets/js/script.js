//AIRLINE VARIABLES
let statusEl = document.getElementById('flight_status');
let dateEl = document.getElementById('flight_date');
let airlineNameEl = document.getElementById('airline_name');
let flightNumEL = document.getElementById('flight_number');
let airlineCardEl = document.getElementById('airline-card');

//Assigning API for airline 

const airlineApiKey = "f3cea198850c652641a128d60fee4060";

function getAirline(city) {
    const airlineUrl = "https://api.aviationstack.com/v1/flights?q=" + city + "f3cea198850c652641a128d60fee4060";
    fetch(airlineUrl) 
        .then(function (response) {
        return 
        })

    .then (function (response) {
            return response.json()
 
    })
 
    .then (function (data) {
    })

}

// Assigning a unique API to a variable
const weatherApi = "84b79da5e5d7c92085660485702f4ce8";


var citySearchEl = document.getElementById('search-query');
var searchButtonEl = document.getElementById('search-button');
var cityNameEl = document.getElementById('city-name');
var descriptionEl = document.getElementById('city-weather');
var temperatureEL = document.getElementById('temp');
var windSpeedEl = document.getElementById('wind-speed');
var feelsLikeEl = document.getElementById('feels-like');
var weatherIconEl = document.getElementById('weather-icon');

queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearchEl + "&appid=" + weatherApi;

//kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.

function convertion(val){
    return (val - 273).toFixed(2)
}

    searchButtonEl.addEventListener('click', function(){

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+citySearchEl.value+'&appid='+weatherApi)
        .then(res => res.json())

         //.then(data => console.log(data))

        .then(data => {

//Now you need to collect the necessary information with the API link. Now I will collect that information and store it in different constants.

            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temperature = data['main']['temp']
            var wndspd = data['wind']['speed']
            var feelsLike = data['main']['feels_like']
            var weatherPic = data['weather']['icon']
//Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
            cityNameEl.innerHTML=`Weather of <span>${nameval}<span>`
            temperatureEL.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`
            feelsLikeEl.innerHTML = `Feels Like: <span>${feelsLike}<span>`
            descriptionEl.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            windSpeedEl.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
            weatherIconEl.innerHTML = {weatherPic}
        })

//Now the condition must be added that what if you do not input anything in the input box.
        .catch(err => alert('You entered an invalid city name. Try again!'))
    })

 //getAirline();
 //getWeather();
