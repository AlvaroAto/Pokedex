import React from 'react';

//assets
import Logo from '../../components/Logo/Logo';

//styled-components
import HeaderContainer from './Header-style';

import { Link } from "react-router-dom";

const Header = ({ handleTheme }) => {
    // const handleClick = (e) =>{
    //     e.preventdefault();
    // }
    return (
        <HeaderContainer>
            <Logo></Logo> 
            <nav>
                <Link to="/">Home</Link>
                <Link to="/pokemons">Pokemons</Link>
                <Link to="/contacto">Contacto</Link>
                {/* <span onClick={(e) => handleClick(e)}>Pasar a modo oscuro</span> */}
                <span onClick={()=>handleTheme()}>Pasar a modo oscuro</span>
            </nav>
        </HeaderContainer>
    );   
};

export default Header;