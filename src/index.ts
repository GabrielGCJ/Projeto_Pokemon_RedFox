import { app } from "./app,"
import { InsertAllPokemons } from "./Data/InsertPokemons"
import { Migrations } from "./Data/Migrations"
import { AllPokemonsList } from "./Endpoint/AllPokemons"
import { ProcurarPokemonPorNome } from "./Endpoint/PokemonName"


    console.log("Iniciando Aplicação em...")
    console.log("00,3 segundos")
    console.log("00,2 segundos")
    console.log("00,1 segundos")



// Migrations() 

// InsertAllPokemons()

// UpdatePokemon()

app.get('/pokemons', AllPokemonsList)
app.get('/nome', ProcurarPokemonPorNome)