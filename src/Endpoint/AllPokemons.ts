import { Request, Response } from "express"
import { connection } from "../app,"



export const AllPokemonsList = async (req: Request, res: Response) => {
    try {
       let message = "Success!"
 
 
       const Pokemons: any = await connection("Poke_Red_Fox")
          .select("Name")
 
       res.status(200).send(Pokemons)
 
      } catch (error: any) {
       
         console.log( "Algo de errado, NÃO ESTÁ CERTO...", error.sqlMessage || error.message )
      }
}