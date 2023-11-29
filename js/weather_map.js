import {keys} from "./keys.js";

/**
 * Fetches the weather data in order to pass it to renderCards
 * @param lat - latitude
 * @param lng - longitude
 * @returns {Promise<void>} - returns renderCards function
 */
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

/**
 * Utility function to parse the timestamp to a short date in the weatherCard
 * @param timestamp - fed from weather data.daily.dt in ms
 * @returns {string} - returns date in format (day, mon date)
 */
const formatDate = timestamp => {
     let options = {
          weekday: "short",
          month: "short",
          day: "numeric",
     }
     const parsedDate = new Intl.DateTimeFormat("en-US", options).format(timestamp);
     return parsedDate;
}

/**
 * creates 1 card in a loop x5 , with provided weather data from getForecast
 * @param weather - fetch Promise object from getForecast
 */
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

/**
 * renders the map in #map element, contains all map related methods, events, geocoder, navigation
 * @param lat - latitude
 * @param lng - longitude
 */
const getMap = (lat=29.5190442, lng=-98.4564535) => {
     mapboxgl.accessToken = keys.mapbox;

     const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: 5
     });

     const bounds = [
          [-180, -90],
          [180, 90]
     ];
     map.setMaxBounds(bounds);

     const start = [-98.4564535, 29.5190442];

     async function getRoute(end) {
          // make a directions request using cycling profile
          // an arbitrary start will always be the same
          // only the end or destination will change
          const query = await fetch(
              `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
              { method: 'GET' }
          );
          const json = await query.json();
          const data = json.routes[0];
          const route = data.geometry.coordinates;
          const geojson = {
               type: 'Feature',
               properties: {},
               geometry: {
                    type: 'LineString',
                    coordinates: route
               }
          };
          // if the route already exists on the map, we'll reset it using setData
          if (map.getSource('route')) {
               map.getSource('route').setData(geojson);
          }
          // otherwise, we'll make a new request
          else {
               map.addLayer({
                    id: 'route',
                    type: 'line',
                    source: {
                         type: 'geojson',
                         data: geojson
                    },
                    layout: {
                         'line-join': 'round',
                         'line-cap': 'round'
                    },
                    paint: {
                         'line-color': '#3887be',
                         'line-width': 5,
                         'line-opacity': 0.75
                    }
               });
          }
          // add turn instructions here at the end
          // get the sidebar and add the instructions
          const instructions = document.getElementById('instructions');
          const steps = data.legs[0].steps;

          let tripInstructions = '';
          for (const step of steps) {
               tripInstructions += `<li>${step.maneuver.instruction}</li>`;
          }
          instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
              data.duration / 60
          )} min 🚴 </strong></p><ol>${tripInstructions}</ol>`;
     }
     map.on('load', () => {
          // make an initial directions request that
          // starts and ends at the same location
          getRoute(start);

          // Add starting point to the map
          map.addLayer({
               id: 'point',
               type: 'circle',
               source: {
                    type: 'geojson',
                    data: {
                         type: 'FeatureCollection',
                         features: [
                              {
                                   type: 'Feature',
                                   properties: {},
                                   geometry: {
                                        type: 'Point',
                                        coordinates: start
                                   }
                              }
                         ]
                    }
               },
               paint: {
                    'circle-radius': 10,
                    'circle-color': '#3887be'
               }
          });
          // this is where the code from the next step will go
          map.on('click', (event) => {
               const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
               const end = {
                    type: 'FeatureCollection',
                    features: [
                         {
                              type: 'Feature',
                              properties: {},
                              geometry: {
                                   type: 'Point',
                                   coordinates: coords
                              }
                         }
                    ]
               };
               if (map.getLayer('end')) {
                    map.getSource('end').setData(end);
               } else {
                    map.addLayer({
                         id: 'end',
                         type: 'circle',
                         source: {
                              type: 'geojson',
                              data: {
                                   type: 'FeatureCollection',
                                   features: [
                                        {
                                             type: 'Feature',
                                             properties: {},
                                             geometry: {
                                                  type: 'Point',
                                                  coordinates: coords
                                             }
                                        }
                                   ]
                              }
                         },
                         paint: {
                              'circle-radius': 10,
                              'circle-color': '#f30'
                         }
                    });
               }
               getRoute(coords);
          });
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
     findCity(lat, lng);

     marker.on("dragend", e=> {
          map.flyTo({
               center: [e.target._lngLat.lng, e.target._lngLat.lat],
               zoom: 10,
               speed: 1,
          });
          findCity(e.target._lngLat.lat, e.target._lngLat.lng)
          getForecast(e.target._lngLat.lat, e.target._lngLat.lng);
          getRoute([e.target._lngLat.lng, e.target._lngLat.lat]);
     });

     map.on('click', e=> {
          findCity(e.lngLat.lat, e.lngLat.lng);
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
               findCity(e.target._lngLat.lat, e.target._lngLat.lng);
               getForecast(e.target._lngLat.lat, e.target._lngLat.lng);
               getRoute([e.target._lngLat.lng, e.target._lngLat.lat]);
          });
          getForecast(e.lngLat.lat, e.lngLat.lng);
     });

     geocoder.on('result', e => {
          marker.remove();
          findCity(e.result.center[1], e.result.center[0]);
          getForecast(e.result.center[1], e.result.center[0]);
          getRoute([e.result.center[0], e.result.center[1]])
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
               findCity(e.target._lngLat.lat, e.target._lngLat.lng);
               getForecast(e.target._lngLat.lat, e.target._lngLat.lng);
               getRoute([e.target._lngLat.lng, e.target._lngLat.lat]);
          });
     });
};

/**
 * for the #nav-city element, grabs coordinates and returns the city, zip, state, country
 * @param lat - latitude
 * @param lng - longitude
 * @returns {Promise<any>} - the innerHTML reflects location
 */
const findCity = (lat=29.4587654, lng=-98.8440411) => {
     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${keys.mapbox}`;
     const options = {
          method: "GET",
     }
     return fetch(url, options)
     .then(response=>response.json())
     .then((geoData)=> {
          document.querySelector('.nav-city').innerHTML = `Location: <strong>${geoData.features[2].place_name}</strong>`;
          return geoData;
     })
     .catch(error=>error);
}

/**
 * Utility function to clear marker whenever a new one is placed
 */
const clearMarkers = () => {
     document.querySelector(".mapboxgl-marker").remove();
}

(()=>{
     getMap();
     getForecast();
})();