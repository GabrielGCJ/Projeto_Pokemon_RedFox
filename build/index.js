"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app,");
const AllPokemons_1 = require("./Endpoint/AllPokemons");
const PokemonName_1 = require("./Endpoint/PokemonName");
console.log("Iniciando Aplicação em...");
console.log("00,3 segundos");
console.log("00,2 segundos");
console.log("00,1 segundos");
app_1.app.get('/pokemons', AllPokemons_1.AllPokemonsList);
app_1.app.get('/nome', PokemonName_1.ProcurarPokemonPorNome);
//# sourceMappingURL=index.js.map