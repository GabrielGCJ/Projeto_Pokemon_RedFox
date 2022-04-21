import { Request, Response } from "express"
import { connection } from "../app,"



export const ProcurarPokemonPorNome = async (req: Request, res: Response) => {
    try {

        const namenew = req.query.name

        const resposta = await connection.raw(`
    
            SELECT * FROM Poke_Red_Fox WHERE Name = "${namenew}" ;
    
        `)

        if(!resposta){res.status(300).send("Pokemon não encontrado....")}

  res.status(200).send(resposta[0])

 
      } catch (error: any) {
            res.status(300).send( error.sqlMessage || error.message ).send("Algo de Errado, Não está certo...")
       
}

}
