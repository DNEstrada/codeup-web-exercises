import {keys} from "./keys.js";

const getForecast = (lat, lng) => {
     if (Array.isArray(lat)) {
          lng = lat[1];
          lat = lat[0];
     };
     const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${keys.openweather}`;
     const options = {
          method: "GET",
     };
     return fetch(url, options)
          .then(response=>response.json())
          .then((weather)=> {
               console.log(weather)
               return weather;
          })
          .catch(error=>error);
};

// const createCards = weather => {
//
// }

const renderCards = weather => {
     for(let i = 0; i<5; i++) {
          const weatherCard = document.createElement('article');
          weatherCard.classList.add('weather-card', 'col-2');
          weatherCard.innerHTML = `
          <p>${new Date((weather.daily[i].dt)*1000)}</p>
          <p>Max: ${weather.daily[i].temp.max} / Min: ${weather.daily[i].temp.min}</p>
          <img class="weather-icon" src="../img/weather_map/${weather.daily[i].weather[0].icon}@2x.png">
          <p>Description: ${weather.daily[i].summary}</p>
          <p>Humidity: ${weather.daily[i].humidity}</p>
          <p>Wind: ${weather.daily[i].wind_speed}</p>
          <p>Pressure: ${weather.daily[i].pressure}</p>
          `;
          document.querySelector('main .col').appendChild(weatherCard);
     }
}

const getMap = (lat, lng) => {
     mapboxgl.accessToken = keys.mapbox;

     const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [-98.8440411, 29.4587654],
          zoom: 5
     });
}

(()=>{
     getMap(0, 0);
     getForecast(0, 0)
          .then(weather=> {
               renderCards(weather);
          });
})();