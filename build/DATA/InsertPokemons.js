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
exports.InsertPokemons = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
const TodosOsPokemons_1 = require("./TodosOsPokemons");
const InsertPokemons = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Iniciando Transferencia de Pokemons");
        const Id = TodosOsPokemons_1.TodosOsPokemons[1].Id;
        const Name = TodosOsPokemons_1.TodosOsPokemons[1].Name;
        const Generation = TodosOsPokemons_1.TodosOsPokemons[1].Generation;
        const EvolutionStage = TodosOsPokemons_1.TodosOsPokemons[1].EvolutionStage;
        const Type1 = TodosOsPokemons_1.TodosOsPokemons[1].Type1;
        const Type2 = TodosOsPokemons_1.TodosOsPokemons[1].Type2;
        const Weather1 = TodosOsPokemons_1.TodosOsPokemons[1].Weather1;
        const Weather2 = TodosOsPokemons_1.TodosOsPokemons[1].Weather2;
        const STATTOTAL = TodosOsPokemons_1.TodosOsPokemons[1].STATTOTAL;
        const ATK = TodosOsPokemons_1.TodosOsPokemons[1].ATK;
        const DEF = TodosOsPokemons_1.TodosOsPokemons[1].DEF;
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
            DEF
        });
        console.log("Todos Os Pokemons Adicionados Com sucesso...");
    }
    catch (_a) {
        console.log("Algo de errado, NÃO ESTÁ CERTO...");
    }
});
exports.InsertPokemons = InsertPokemons;
//# sourceMappingURL=InsertPokemons.js.map