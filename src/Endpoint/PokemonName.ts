import { Request, Response } from "express"
import { connection } from "../app,"



export const ProcurarPokemonPorNome = async (req: Request, res: Response) => {
    try {

        const namenew = "Bulbasaur"

        const resposta = await connection.raw(`
    
            SELECT * FROM Poke_Red_Fox WHERE Name = "${namenew}" ;
    
        `)

  res.status(200).send(resposta[0])

 
      } catch (error: any) {
            res.status(300).send( error.sqlMessage || error.message ).send("Algo de Errado, Não está certo...")
       
}

}
