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

const createCards = weather => {
     const weatherCard = document.createElement('article');
     weatherCard.innerHTML = `
          <p>${weather.daily[0].dt}</p>
          `;
     document.querySelector('main .col').appendChild(weatherCard);
}

(()=>{
     getForecast(0, 0)
          .then(weather=> {
               createCards(weather);
          });
})();