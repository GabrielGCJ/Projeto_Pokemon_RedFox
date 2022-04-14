export class Pokemon {
    constructor(

        public Id: number,
        public Name: string,
        public PokedexNumber: number, 
        public Generation: number,
        public EvolutionStage: number,
        public Evolved: number,
        public FamilyID: number,
        public CrossGen: number,
        public Type1: string,
        public Type2: string,
        public Weather1: string,
        public Weather2: string,
        public STATTOTAL: number,
        public ATK: number, 
        public DEF: number,
        public STA: number,
        public Legendary: number,
        public Aquireable: number,
        public Spawns: number,
        public Regional: number, 
        public Raidable: number,
        public Hatchable: number,
        public Shiny: number,
        public Nest: number,
        public New: number,
        public NotGettable: number,
        public FutureEvolve: number,
        public CP40: number,
        public CP39: number,

    ){}
}