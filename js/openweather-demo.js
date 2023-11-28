import {getForecast} from "./api/openweather.js";
import {getCoordinates, getAddress, handleDragEnd} from "./api/mapbox.js";

// MAIN
(async () => {
     const sanAntonioForecast = await getForecast(29.46, -98.68);
     console.log(sanAntonioForecast);
     const map = new mapboxgl.Map({
          container: 'map', // container ID
          // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
          style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
          center: coordinates, // starting position [lng, lat]
          zoom: 9 // starting zoom
     });
})();