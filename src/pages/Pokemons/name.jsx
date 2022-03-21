import React, { useState } from 'react';

import { useParams } from 'react-router';

//Hooks
import { usePokemons } from '../../services/pokemon/pokemon-services';

const PokemonDetail = () => {
    const params = useParams();
    const pokemonService = usePokemons();
    const [selectedPokemon, setSelectedPokemon] = useState({});
    const handlePokemon = async (url) => {
        const pokemon = await pokemonService.getPokemon(url);
        const pokemonInfo = await pokemon.data;
        setSelectedPokemon(pokemonInfo);
    };
    return(
        <h1>Aquí están los detalles del pokémon</h1>
    );
};

export default PokemonDetail;