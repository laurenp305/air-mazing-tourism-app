//WHEN user inputs city
//THEN list of flights show up and weather details for that location
const cityNameInput = document.querySelector("#city-name");
const currentConditionsH3 = document.querySelector("#airline-card h3");
const currentConditionsUl = document.querySelector("#airline-card #conditions");
const searchForm = document.querySelector(".button");
const flightlist = document.querySelector("#flight-list");

const getFlight = (city) => {
  const apiUrlCoords =
    "http://api.aviationstack.com/v1/flights?access_key=4613b548eb3115bdfa2d64057b8fe768";

  fetch(apiUrlCoords).then(function (response) {
    if (!response.ok) {
      currentConditionsH3.textContent = "Try again!";
    } else {
      response.json().then(function (data) {
        var values = data;

        for (let i = 0; i < values.pagination.count; i++) {
          const newRow = document.createElement("tr");

          // Creating new flightStatus;
          const newFlightStatus = document.createElement("th");
          newFlightStatus.innerHTML = data.data[i].flight_status;
          if (data.data[i].flight_status === "scheduled") {
            newFlightStatus.style.color = "blue";
          } else if (data.data[i].flight_status === "cancelled") {
            newFlightStatus.style.color = "red";
          } else {
            newFlightStatus.style.color = "green";
          }
          newRow.appendChild(newFlightStatus);
          // Creating new flightDate;
          const newFlightDate = document.createElement("th");
          newFlightDate.innerHTML = data.data[i].flight_date;
          newRow.appendChild(newFlightDate);
          // Creating new departureAirport;
          const newDepAirport = document.createElement("th");
          newDepAirport.innerHTML = data.data[i].departure.airport;
          newRow.appendChild(newDepAirport);
          // Creating new arivalAirport;
          const newArivalAirport = document.createElement("th");
          newArivalAirport.innerHTML = data.data[i].arrival.airport;
          newRow.appendChild(newArivalAirport);
          // Creating new airlineName;
          const newAirlineName = document.createElement("th");
          newAirlineName.innerHTML = data.data[i].airline.name;
          newRow.appendChild(newAirlineName);
          // Creating new flightNumber;
          const newFlightNumber = document.createElement("th");
          newFlightNumber.innerHTML = data.data[i].flight.number;
          newRow.appendChild(newFlightNumber);
          // Creating new arivalTime;
          const newArivalTime = document.createElement("th");
          //newArivalTime.innerHTML = data.data[i].arrival.estimated;
          newArivalTime.innerHTML = new Date(
            data.data[i].arrival.estimated
          ).toLocaleString();
          newRow.appendChild(newArivalTime);
          // Creating new departureTime;
          const newDepartureTime = document.createElement("th");
          newDepartureTime.innerHTML = new Date(
            data.data[i].departure.estimated
          ).toLocaleString();
          newRow.appendChild(newDepartureTime);
          // Displaying in UI;
          flightlist.appendChild(newRow);
        }
      });
    }
  });
};

searchForm.addEventListener("click", (event) => {
  event.preventDefault();

  let searchValue = cityNameInput.value.trim("");

  if (searchValue === "") {
    currentConditionsH3.textContent = "Please enter a city!";
  } else {
    currentConditionsH3.textContent = "";
    getFlight(searchValue);
  }
});

//WEATHER
// Assigning a unique API to a variable
const weatherApi = "c9171a22ca52ca8877ccb46ef06fe2f9";


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