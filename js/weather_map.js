import {keys} from "./keys.js";

const getForecast = (lat=29.4587654, lng=-98.8440411) => {
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
               console.log(weather);
               return renderCards(weather);
          })
          .catch(error=>error);
};

const formatDate = timestamp => {
     let options = {
          weekday: "short",
          month: "short",
          day: "numeric",
     }
     const parsedDate = new Intl.DateTimeFormat("en-US", options).format(timestamp);
     return parsedDate;
}

const renderCards = weather => {
     let cardBody = document.querySelector('main .col');
     cardBody.innerHTML = "";
     for(let i = 0; i<5; i++) {
          const weatherCard = document.createElement('article');
          weatherCard.classList.add('card');
          const dateTitle = formatDate((weather.daily[i].dt)*1000);
          weatherCard.innerHTML = `
               <div class="card-body">
                    <p class="card-title text-center">${dateTitle}</p>          
                    <p class="d-flex justify-content-center align-items-center temps m-0"><img class="temp-icon" src="../img/weather_map/caret-up-fill.svg">${parseInt(weather.daily[i].temp.max)}°<img class="temp-icon" src="../img/weather_map/caret-down-fill.svg">${parseInt(weather.daily[i].temp.min)}°</p>
                    <p class="d-flex justify-content-center m-0"><img class="weather-icon" src="../img/weather_map/${weather.daily[i].weather[0].icon}@2x.png"></p>
                    <p class="card-description">${weather.daily[i].summary}</p>
                    <hr>
                    <p class="subtext">Feels Like: <strong>${weather.daily[i].feels_like.day}°</strong></p>
                    <p class="subtext">Hum: <strong>${weather.daily[i].humidity}%</strong></p>
                    <p class="subtext">Wind: <strong>${weather.daily[i].wind_speed}mph</strong></p>
                    <p class="subtext">Press: <strong>${weather.daily[i].pressure}mb</strong></p>
                    <p class="subtext">UV Index: <strong>${weather.daily[i].uvi}</strong></p>
               </div>
               `;
          cardBody.appendChild(weatherCard);
          document.querySelector('.nav-temp').innerHTML = `Current Temperature: <strong>${weather.current.temp}°</strong>`;
     }
}

const getMap = (lat=29.4587654, lng=-98.8440411) => {
     mapboxgl.accessToken = keys.mapbox;

     const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: 5
     });

     map.addControl(new mapboxgl.NavigationControl());

     let geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          marker: false,
          mapboxgl: mapboxgl
     });
     map.addControl(geocoder);

     const popup = new mapboxgl.Popup();
     let currentMarkers = [];
     let marker = new mapboxgl.Marker({
          draggable: true,
     })
     .setLngLat([lng, lat])
     .addTo(map)
     map.flyTo({
          center: [lng, lat],
          zoom: 5,
          speed: 5,
     });

     marker.on("dragend", e=> {
          map.flyTo({
               center: [e.target._lngLat.lng, e.target._lngLat.lat],
               zoom: 10,
               speed: 1,
          });
          getForecast(e.target._lngLat.lat, e.target._lngLat.lng);
     });

     map.on('click', e=> {
          clearMarkers();
          marker = new mapboxgl.Marker({
               draggable: true,
          })
          .setLngLat([e.lngLat.lng, e.lngLat.lat])
          .addTo(map)
          map.flyTo({
               center: [e.lngLat.lng, e.lngLat.lat],
               zoom: 10,
               speed: 1,
          });
          marker.on("dragend", e=> {
               map.flyTo({
                    center: [e.target._lngLat.lng, e.target._lngLat.lat],
                    zoom: 10,
                    speed: 1,
               });
               getForecast(e.target._lngLat.lat, e.target._lngLat.lng);
          });
          getForecast(e.lngLat.lat, e.lngLat.lng);
     });

     geocoder.on('result', e => {
          marker.remove();
          getForecast(e.result.center[1], e.result.center[0]);
          marker = new mapboxgl.Marker({
               draggable: true,
          })
          .setLngLat([e.result.center[0], e.result.center[1]])
          .addTo(map)
          marker.on("dragend", e=> {
               map.flyTo({
                    center: [e.target._lngLat.lng, e.target._lngLat.lat],
                    zoom: 10,
                    speed: 1,
               });
               getForecast(e.target._lngLat.lat, e.target._lngLat.lng);
          });
     });
};

const findCity = (lat=29.4587654, lng=-98.8440411) => {
     mapboxgl.accessToken = keys.mapbox;
     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json`;
     const options = {
          method: "GET",
     }
}

const clearMarkers = () => {
     document.querySelector(".mapboxgl-marker").remove();
}

(()=>{
     getMap();
     getForecast();
})();