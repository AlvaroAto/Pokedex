import React from "react";
import PokemonCardContainer from "./PokemonCard-style";

// const PokemonCard = ({number, name, image, handleClick}) => {
const PokemonCard = ({name, handleClick, children}) => {
    return(
        <PokemonCardContainer>
            {/* <h4>{number}</h4> */}
            <h3>{name}</h3>
            {/* <img src={image} alt={name}/> */}
            <span onClick={() => handleClick()}>Ver ataques</span>            
            {children}
        </PokemonCardContainer>
    );
}

export default PokemonCard;