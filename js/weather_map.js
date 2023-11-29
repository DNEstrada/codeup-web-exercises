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
               return renderCards(weather);
          })
          .catch(error=>error);
};

const renderCards = weather => {
     let cardBody = document.querySelector('main .col');
     cardBody.innerHTML = "";
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
          cardBody.appendChild(weatherCard);
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
          clearMarkers(currentMarkers);
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

const clearMarkers = () => {
     document.querySelector(".mapboxgl-marker").remove();
}

(()=>{
     getMap();
     getForecast();
})();