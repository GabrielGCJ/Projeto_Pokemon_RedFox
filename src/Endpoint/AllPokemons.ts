import { Request, Response } from "express"
import { connection } from "../app,"



export const AllPokemonsList = async (req: Request, res: Response) => {
   try{

      const Pokemons: any = await connection("Poke_Red_Fox")
      .select("Name")
 
      res.status(200).send(Pokemons)
 
   }catch (error: any) {
       
      res.status(300).send( error.sqlMessage || error.message ).send("Algo de Errado, Não está certo...")
   
   }
}