import { useState } from 'react'; 
import { getPokemonsRequest } from '../../lib/pokemon-api/requests/get-pokemons-request';
import { getPokemonRequest } from '../../lib/pokemon-api/requests/get-pokemon-request';
import { getNextPokemonsRequest } from '../../lib/pokemon-api/requests/get-next-pokemons-request';

export const usePokemons = () => {
    const [loading, setLoading] = useState(true);
    const [pokemonListError, setPokemonListError] =useState("");

    const getPokemons = async () => {
        try{
            const pokemonResponse = await getPokemonsRequest(); 
            setLoading(false);
            return pokemonResponse; 
        }catch(error){
            setPokemonListError(error);
            setLoading(false);
        }
    };

    const getPokemon = async (url) => {
        try{
            const pokemonResponse = await getPokemonRequest(url); 
            setLoading(false);
            return pokemonResponse; 
        }catch(error){
            setPokemonListError(error);
            setLoading(false);
        }
    };

    const getNextPokemon = async (url) => {
        try{
            const pokemonResponse = await getNextPokemonsRequest(url); 
            setLoading(false);
            return pokemonResponse; 
        }catch(error){
            setPokemonListError(error);
            setLoading(false);
        }
    };

    return {
        getPokemons,
        getPokemon,
        getNextPokemon,
        loading,
        pokemonListError
    }
}