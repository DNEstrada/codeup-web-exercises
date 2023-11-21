import { getPokemon, getPokemonAll } from "./pokemon-api.js";

(async() => {
     const list = await getPokemonAll();
     console.log(list);
})();