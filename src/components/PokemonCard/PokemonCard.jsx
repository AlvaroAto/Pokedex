import React,{useContext} from "react";
import PokemonCardContainer from "./PokemonCard-style";
import HeadingH3 from "../Text/Headings/HeadingH3/HeadingH3";

import { ThemeContext } from '../../context/ThemeContext';

// const PokemonCard = ({number, name, image, handleClick}) => {
const PokemonCard = ({name, handleClick, children}) => {
    
    const themeValue = useContext(ThemeContext);
    return(
        <PokemonCardContainer theme={themeValue.theme}>
            {/* <h4>{number}</h4> */}
            <HeadingH3 
                text={name}
            />
            {/* <img src={image} alt={name}/> */}
            <span onClick={() => handleClick()}>Ver ataques</span>            
            {children}
        </PokemonCardContainer>
    );
}

export default PokemonCard;