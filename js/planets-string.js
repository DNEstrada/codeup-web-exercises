(function(){
     "use strict";

     var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
     var planetsArray = planetsString.split("|");

     /**
      * TODO:
      * Convert planetsString to an array, and save it in a variable named
      * planetsArray.
      * console.log planetsArray to check your work
      */

     console.log(planetsArray);

     /**
      * TODO:
      * Create a string with <br> tags between each planet. console.log() your
      * results. Why might this be useful?
      *
      * BONUS:
      * Create another string that would display your planets in an undordered
      * list. You will need an opening AND closing <ul> tags around the entire
      * string, and <li> tags around each planet.
      */
     let breakPlanets = planetsArray.join("<br>");
     document.body.innerHTML += breakPlanets;
     console.log(breakPlanets);
     let unorderedPlanets = "<ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>"
     document.body.innerHTML += unorderedPlanets;
})();