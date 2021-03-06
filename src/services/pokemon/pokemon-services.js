import { useState } from 'react'; 
import { getPokemonsRequest } from '../../lib/pokemon-api/requests/get-pokemons-request';
import { getPokemonRequest } from '../../lib/pokemon-api/requests/get-pokemon-request';
import { getMorePokemonsRequest } from '../../lib/pokemon-api/requests/get-more-pokemons-request';

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
            console.log('pokemonResponse:'+pokemonResponse);
            return pokemonResponse; 
        }catch(error){
            setPokemonListError(error);
            setLoading(false);
        }
    };

    const getMorePokemon = async (url) => {
        try{
            const pokemonResponse = await getMorePokemonsRequest(url); 
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
        getMorePokemon,
        loading,
        pokemonListError
    }
}