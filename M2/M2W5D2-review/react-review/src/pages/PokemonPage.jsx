import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function PokemonPage() {

  const [pokemons, setPokemons] = useState([]);
  const POKE_API = 'https://pokeapi.co/api/v2/pokemon/'
  const fetchPokemons = async () => {
    const result = await axios.get(POKE_API);
    setPokemons(result.data.results);
  }
  
  useEffect( () => {
    
    fetchPokemons();

  }, []);

  return (
    <>
      <h2>Pokemon Page here</h2>
      {
        pokemons.map( (p, index) => (
          <li key={p.name}>
            <Link to={`/pokemon/${index + 1}`}>{p.name}</Link>
          </li>
        )
      )}
    </>
  )
}