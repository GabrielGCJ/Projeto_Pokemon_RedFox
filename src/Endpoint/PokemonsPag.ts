import { Request, Response } from "express"
import { connection } from "../Data/BaseDataBase"




export const pokemonsPag = async (req: Request , res: Response) => {

    try{
        var meuValor = req.query.page 

        var pag = 0

        switch (meuValor) {
            case '1':
                var pag = 0 
              break

            case '2':
                var pag = 9 
              break

            case '3':
                var pag = 19 
              break
            
            case '4':
                var pag = 29 
              break

            case '5':
                var pag = 39 
              break

            case '6':
                var pag = 49 
              break

            case '7':
                var pag = 59 
              break

            case '8':
                var pag = 69 
              break

            case '9':
                var pag = 79 
              break

            case '10':
                var pag = 89 
              break

            case '11':
                var pag = 99 
              break
              
            case '12':
                var pag = 109 
              break

            case '13':
                var pag = 119 
              break

            case '14':
                var pag = 129 
              break
            case '15':
                var pag = 139 
              break
            case '16':
                var pag = 149 
              break
            case '17':
                var pag = 159 
              break
            case '18':
                var pag = 169 
              break
            case '19':
                var pag = 179
              break
            case '20':
                var pag = 189
              break
            case '21':
                var pag = 199
              break
            case '22':
                var pag = 209
              break
            case '23':
                var pag = 219 
              break
            case '24':
                var pag = 229
              break
            case '25':
                var pag = 239 
              break
            case '26':
                var pag = 249
              break
            case '27':
                var pag = 259 
              break
            case '28':
                var pag = 269
              break
            
            default:
              console.log(`Sorry`);
          }

        if(!meuValor){res.status(300).send("Insira o numero da pagina...")}

        const Pokemons: any = await connection.raw(` 
            SELECT * FROM Poke_Red_Fox ORDER BY ID ASC LIMIT 10 OFFSET ${pag}
        `)
    
        res.status(300).send(Pokemons[0])

    }catch(error:any){
        res.status(300).send( error.sqlMessage || error.message ).send("Algo de Errado, Não está certo...")
    }
}