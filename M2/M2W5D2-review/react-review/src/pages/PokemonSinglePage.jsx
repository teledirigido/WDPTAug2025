import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function PokemonSinglePage() {

  const { pokeName } = useParams();
  const [pokemon, setPokemon] = useState({})
  const POKE_API = 'https://pokeapi.co/api/v2/pokemon/'
  const getPokemon = async () => {
    const result = await axios.get(POKE_API + pokeName)
    setPokemon(result.data);
  }

  useEffect( () => {
    getPokemon()
  }, [])

  return (
    <>
      <h3>Pokemon Single Page {pokeName}</h3>
      <img src={pokemon.sprites?.front_default} />
      <p>Base Experience: {pokemon.base_experience}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </>
  )
}