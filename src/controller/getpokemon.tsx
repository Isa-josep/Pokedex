import {Pokemon} from '../models/pokemon.m'

export async function getPokemons(): Promise<Pokemon[]>{
    /*se llaman toda la info mediate la api
     */
    const response =await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    const datos = await response.json();
    const pokemons = datos.results.map((pokemon:any)=>({
        name: pokemon.name, 
        id: pokemon.national_number,
        imggif: corregir(pokemon.sprites['animated']),
        imgnormal: corregir(pokemon.sprites['normal']),
        imglarge: corregir(pokemon.sprites['large']),
        total: pokemon.total,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        sp_atk: pokemon.sp_atk,
        sp_def: pokemon.sp_def,
        speed: pokemon.speed,
        tipo: pokemon.type[0]
    }));
    const unicos =pokemons.filter(
        (pokemon :any,index:number)=>
        pokemons.findIndex((other:any)=> other.id === pokemon.id) ===index
    );

    return unicos;
}
export function corregir(name: string): string{
    if(name.includes("farfetch'd")){
        return name.replace("farfetch'd","farfetchd");
    }
    else if(name.includes("mr.-mime")){
        return name.replace("mr.-mime","mr-mime");
    }

    else if(name.includes("♂")){
        return name.replace("♂","-m");
    }

    else if(name.includes("♀")){
        return name.replace("♀","-f");
    }

    else{
        return name;
    }
   
}