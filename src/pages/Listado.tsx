import react, { useEffect,useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';

import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";
const Listado=()=>{

    
    const[pokemons,setPokemons]= useState<Pokemon[]>([]);
    const[query,setQuery] = useState("");

    useEffect(()=>{
        const ObtenerTodos= async() =>{
            const allPokemons =await getPokemons();
            setPokemons(allPokemons);
        }
        ObtenerTodos();
    });

    const filtrarpokemons=pokemons?.slice(0,151).filter((pokemons)=>{
        return pokemons.name.toLowerCase().match(query.toLowerCase());
    })

    return (
        <>
        <h1> Pokemon Isa</h1>
        <header>
            <input value={query} placeholder="Buscar Pokemon" onChange={(event) => setQuery(event.target.value.trim())} type="text" />
        </header>
        <div className="content-wrapper">
            <div className="content">
                <div className="row gap-3">
                    {filtrarpokemons?.slice(0,151).map((pokemon)=>(
                
                <Card className="mx-auto" style={{ width: '18rem' }}>
                <Card.Header>Tipo: {pokemon.tipo}</Card.Header>
            <Card.Img width="100" height="180" variant="top" src={pokemon.imglarge} className="d-block mx-auto w-80" />
        <Card.Body>
             <Card.Title className="text-center" >{pokemon.id}-{pokemon.name}</Card.Title>
             <ListGroup variant="flush">
                <ListGroup.Item>
                    <Figure.Image
                    width={16}
                    height={16}
                    src="https://cdn-icons-png.flaticon.com/128/665/665900.png"
                    /><b> HP: </b> {pokemon.hp}
                </ListGroup.Item>

                <ListGroup.Item>
                    <Figure.Image
                    width={16}
                    height={16}
                    src="https://cdn-icons-png.flaticon.com/128/13/13377.png"
                    /><b> Ataque</b>: {pokemon.attack}

                </ListGroup.Item>

                <ListGroup.Item>
                    <Figure.Image
                    width={16}
                    height={16}
                    src="https://cdn-icons-png.flaticon.com/128/1912/1912612.png"
                /><b> Defensa</b>: {pokemon.defense} 
                </ListGroup.Item>

                <ListGroup.Item>
                <Figure.Image
                    width={16}
                    height={16}
                    src="https://cdn-icons-png.flaticon.com/128/3311/3311830.png"
                /><b> E.Ataque</b>:{pokemon.sp_atk} 
                </ListGroup.Item>

                <ListGroup.Item>
                <Figure.Image
                    width={16}
                    height={16}
                    src="https://cdn-icons-png.flaticon.com/128/3587/3587040.png"
                /><b> E.Defensa</b> {pokemon.defense}
                </ListGroup.Item>

                <ListGroup.Item>
                <Figure.Image
                    width={16}
                    height={16}
                    src="https://cdn-icons-png.flaticon.com/128/863/863667.png"
                /><b> Veocidad</b>: {pokemon.speed}
                </ListGroup.Item>
            </ListGroup>
        </Card.Body>
        </Card>
                ))}        
                </div>
            </div>
        </div>
        
        </>
    
    )

}

export default Listado;