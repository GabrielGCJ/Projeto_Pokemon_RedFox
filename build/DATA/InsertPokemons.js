"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertAllPokemons = exports.InsertPokemons = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
const TodosOsPokemons_1 = require("./TodosOsPokemons");
const InsertPokemons = (num) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Iniciando Transferencia de Pokemons");
        const Id = TodosOsPokemons_1.TodosOsPokemons[num].Id;
        const Name = TodosOsPokemons_1.TodosOsPokemons[num].Name;
        const Generation = TodosOsPokemons_1.TodosOsPokemons[num].Generation;
        const EvolutionStage = TodosOsPokemons_1.TodosOsPokemons[num].EvolutionStage;
        const Type1 = TodosOsPokemons_1.TodosOsPokemons[num].Type1;
        const Type2 = TodosOsPokemons_1.TodosOsPokemons[num].Type2;
        const Weather1 = TodosOsPokemons_1.TodosOsPokemons[num].Weather1;
        const Weather2 = TodosOsPokemons_1.TodosOsPokemons[num].Weather2;
        const STATTOTAL = TodosOsPokemons_1.TodosOsPokemons[num].STATTOTAL;
        const ATK = TodosOsPokemons_1.TodosOsPokemons[num].ATK;
        const DEF = TodosOsPokemons_1.TodosOsPokemons[num].DEF;
        const STA = TodosOsPokemons_1.TodosOsPokemons[num].STA;
        yield (0, BaseDataBase_1.connection)('Poke_Red_Fox')
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
            DEF,
            STA
        });
        console.log("Pokemon Adicionado Com sucesso...");
    }
    catch (error) {
        console.log("Algo de errado, NÃO ESTÁ CERTO...", error.sqlMessage || error.message);
    }
});
exports.InsertPokemons = InsertPokemons;
const InsertAllPokemons = () => {
    for (let i = 0; i < 821; i++) {
        (0, exports.InsertPokemons)(i);
    }
};
exports.InsertAllPokemons = InsertAllPokemons;
//# sourceMappingURL=InsertPokemons.js.map