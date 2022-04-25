import { Request, Response } from "express"
import { connection } from "../Data/BaseDataBase"




export const pokemonsPag = async (req: Request , res: Response) => {

    try{
        var meuValor = req.query.page


        switch (meuValor) {

            case '0':
                var pag = 0 
              break

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

            case '29':
                var pag = 279
              break

            case '30':
                var pag = 289
              break

            case '31':
                var pag = 299
              break

            case '32':
                var pag = 309
              break

            case '33':
                var pag = 319
              break

            case '34':
                var pag = 329
              break

            case '35':
                var pag = 339
              break

            case '36':
                var pag = 349
              break

            case '37':
                var pag = 359
              break

            case '38':
                var pag = 369
              break

            case '39':
                var pag = 379
              break

            case '40':
                var pag = 389
              break

            case '41':
                var pag = 399
              break

            case '42':
                var pag = 409
              break

            case '43':
                var pag = 419
              break

            case '44':
                var pag = 429
              break

            case '45':
                var pag = 439
              break

            case '46':
                var pag = 449
              break

            case '47':
                var pag = 459
              break

            case '48':
                var pag = 469
              break

            case '49':
                var pag = 479
              break

            case '50':
                var pag = 489
              break

            case '51':
                var pag = 499
              break

            case '52':
                var pag = 509
              break

            case '53':
                var pag = 519
              break

            case '54':
                var pag = 529
              break

            case '55':
                var pag = 539
              break

            case '56':
                var pag = 549
              break

            case '57':
                var pag = 559
              break

            case '58':
                var pag = 569
              break

            case '59':
                var pag = 579
              break

            case '60':
                var pag = 589
              break

            case '61':
                var pag = 599
              break

            case '62':
                var pag = 609
              break

            case '63':
                var pag = 619
              break

            case '64':
                var pag = 629
              break

            case '65':
                var pag = 639
              break

            case '66':
                var pag = 649
              break

            case '67':
                var pag = 659
              break

            case '68':
                var pag = 669
              break

            case '69':
                var pag = 679
              break

            case '70':
                var pag = 689
              break

            case '71':
                var pag = 699
              break

            case '72':
                var pag = 709
              break

            case '73':
                var pag = 719
              break

            case '74':
                var pag = 729
              break

            case '75':
                var pag = 739
              break

            case '76':
                var pag = 749
              break

            case '77':
                var pag = 759
              break

            case '78':
                var pag = 769
              break

            case '79':
                var pag = 779
              break

            case '80':
                var pag = 789
              break

            case '81':
                var pag = 799
              break

            case '82':
                var pag = 809
              break

            case '83':
                var pag = 819
              break
              
            case '84':
                var pag = 829
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