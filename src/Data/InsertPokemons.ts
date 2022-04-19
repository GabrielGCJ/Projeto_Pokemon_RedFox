import { connection } from "./BaseDataBase"
import { TodosOsPokemons } from "./TodosOsPokemons"

export const InsertPokemon = async ( num:number ) => {
    try{
        console.log("Iniciando Transferencia de Pokemons") 

        const Id = TodosOsPokemons[num].Id 
        const Name = TodosOsPokemons[num].Name
        const Generation = TodosOsPokemons[num].Generation
        const EvolutionStage = TodosOsPokemons[num].EvolutionStage
        const Type1 = TodosOsPokemons[num].Type1
        const Type2 = TodosOsPokemons[num].Type2
        const Weather1 = TodosOsPokemons[num].Weather1
        const Weather2 = TodosOsPokemons[num].Weather2
        const STATTOTAL = TodosOsPokemons[num].STATTOTAL
        const ATK = TodosOsPokemons[num].ATK
        const DEF = TodosOsPokemons[num].DEF
        const STA = TodosOsPokemons[num].STA

        await connection 
       ('Poke_Red_Fox')
          .insert({ Id, Name, Generation, EvolutionStage, Type1, Type2, Weather1, Weather2, STATTOTAL, ATK, DEF, STA })
            
        console.log ( `Pokemon ${Name} Adicionado Com sucesso...` )

    }catch(error: any){
      
        console.log( "Algo de errado, NÃO ESTÁ CERTO...", error.sqlMessage || error.message )
    }
}


export const InsertAllPokemons = () => {

  for (let i = 0 ; i < 821; i++){

    InsertPokemon(i)

  }
}

export const UpdatePokemon = async ( num:number ) => {
  try{
      console.log("Iniciando Transferencia de Pokemons") 

      const Id = TodosOsPokemons[num].Id 
      const Name = TodosOsPokemons[num].Name
      const Generation = TodosOsPokemons[num].Generation
      const EvolutionStage = TodosOsPokemons[num].EvolutionStage
      const Type1 = TodosOsPokemons[num].Type1
      const Type2 = TodosOsPokemons[num].Type2
      const Weather1 = TodosOsPokemons[num].Weather1
      const Weather2 = TodosOsPokemons[num].Weather2
      const STATTOTAL = TodosOsPokemons[num].STATTOTAL
      const ATK = TodosOsPokemons[num].ATK
      const DEF = TodosOsPokemons[num].DEF
      const STA = TodosOsPokemons[num].STA

      await connection 
     ('Poke_Red_Fox')
        .update({ Id, Name, Generation, EvolutionStage, Type1, Type2, Weather1, Weather2, STATTOTAL, ATK, DEF, STA })
          
      console.log("Pokemon Atualizado Com sucesso...")

  } catch (error: any){
      console.log("Algo de errado, NÃO ESTÁ CERTO...", error.sqlMessage || error.message)
  }
}

