import { app } from "./app,"
import { InsertAllPokemons, UpdatePokemon } from "./Data/InsertPokemons"
import { Migrations } from "./Data/Migrations"
import { AllPokemonsList } from "./Endpoint/AllPokemons"




console.log("Tá FuncionanIIIIIIIII...!!!!")

// Migrations() 

// InsertAllPokemons()

// UpdatePokemon()

app.get('/pokemons', AllPokemonsList)