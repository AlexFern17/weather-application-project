let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
};

function revealCity(){
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = (cityInput.value);
  city=city.toLowerCase();
  let h1=document.querySelector("h1");
  h1.innerHTML = `${city}`;
  cityPopup();
}

let cityForm = document.querySelector(".citySearch");
cityForm.addEventListener("submit", revealCity);


function cityPopup(){
  let cityInput = document.querySelector("#city-input");
  let city = (cityInput.value);
  city=city.toLowerCase();
  if (
      weather[city] !== undefined)
  {
      let newTemp = weather[city].temp;
      let newHumid = weather[city].humidity;
      let tempC = Math.round(newTemp);
      let tempF = Math.round((newTemp * 9/5) + 32 )

     alert(`It is currently ${tempC}°C (${tempF}°F) in ${city} with a humidity of ${newHumid}%.`);
  } else {

    alert("Sorry, we don't know the weather for this city, please try going to https://www.google.com/search?q=weather");
          };
};


let now=new Date();
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${week[now.getDay()]} ${now.getHours()}:${now.getMinutes()}`;





