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
exports.AllPokemonsList = void 0;
const app_1 = require("../app,");
const AllPokemonsList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Pokemons = yield (0, app_1.connection)("Poke_Red_Fox")
            .select("Id", "Name")
            .orderBy("Id");
        res.status(200).send(Pokemons);
    }
    catch (error) {
        res.status(300).send(error.sqlMessage || error.message).send("Algo de Errado, Não está certo...");
    }
});
exports.AllPokemonsList = AllPokemonsList;
//# sourceMappingURL=AllPokemons.js.map