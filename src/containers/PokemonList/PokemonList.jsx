import React from "react";
import PokemonListContainer from "./PokemonList-style";

const PokemonList = ({children}) => {
    return (
        <PokemonListContainer>
            {children}
        </PokemonListContainer>
    );
};

export default PokemonList;