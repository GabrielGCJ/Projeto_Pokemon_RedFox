import { app } from "./app,"
import { InsertAllPokemons } from "./Data/InsertPokemons"
import { Migrations } from "./Data/Migrations"
import { AllPokemonsList } from "./Endpoint/AllPokemons"
import { ProcurarPokemonPorNome } from "./Endpoint/PokemonName"
import { pokemonsPag } from "./Endpoint/PokemonsPag"


    console.log("Iniciando RedFox_Project")
    
// Migrations() 

// InsertAllPokemons()

// UpdatePokemon()

app.get('/pokemons', AllPokemonsList)
app.get('/nome', ProcurarPokemonPorNome)
app.get('/pag', pokemonsPag)