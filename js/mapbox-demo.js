import {keys} from "./keys.js";

(async()=>{
     mapboxgl.accessToken = keys.mapbox;
     const map = new mapboxgl.Map({
          container: 'map', // container ID
          // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
          style: 'mapbox://styles/mapbox/streets-v12', // style URL
          center: [-98.4916, 29.4252], // starting position [lng, lat]
          zoom: 9 // starting zoom
     });

     const marker = new mapboxgl.Marker()
     .setLngLat([-98.4916, 29.4260])
     .addTo(map);

     const popup = new mapboxgl.Popup()
     .setLngLat([-98.4916, 29.4260])
     .setHTML("<p>We don't live here anymore</p>")
     .addTo(map);

     map.flyTo({
          center: [-98.4916, 29.4252],
          zoom: 16,
     });
})();