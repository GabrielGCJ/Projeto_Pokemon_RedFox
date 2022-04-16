import { connection } from "./BaseDataBase"
import { TodosOsPokemons } from "./TodosOsPokemons"



export const InsertPokemons = async () => {
    try{
        console.log("Iniciando Transferencia de Pokemons")


    //    const { Id,Name,Generation,EvolutionStage,Type1,Type2,Weather1,Weather2,STATTOTAL,ATK,DEF,@CP40,CP@39 } = TodosOsPokemons[0]
        const Id = TodosOsPokemons[1].Id
        const Name = TodosOsPokemons[1].Name
        const Generation = TodosOsPokemons[1].Generation
        const EvolutionStage = TodosOsPokemons[1].EvolutionStage
        const Type1 = TodosOsPokemons[1].Type1
        const Type2 = TodosOsPokemons[1].Type2
        const Weather1 = TodosOsPokemons[1].Weather1
        const Weather2 = TodosOsPokemons[1].Weather2
        const STATTOTAL = TodosOsPokemons[1].STATTOTAL
        const ATK = TodosOsPokemons[1].ATK
        const DEF = TodosOsPokemons[1].DEF
        // const CP@40 = TodosOsPokemons[0].CP@40
        // const CP@39 = TodosOsPokemons[0].CP@39



        await connection
       ('Poke_Red_Fox')
          .insert({
            Id,
            Name,
            Generation,
            EvolutionStage,
            Type1,
            Type2,
            Weather1,
            Weather2,
            STATTOTAL,
            ATK,
            DEF
            // CP@40,
            // CP@39

          })
            
        console.log("Todos Os Pokemons Adicionados Com sucesso...")
    }catch{
        console.log("Algo de errado, NÃO ESTÁ CERTO...")
    }
}
