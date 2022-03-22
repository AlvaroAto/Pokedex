import React from 'react';

//assets
import Logo from '../../components/Logo/Logo';

//styled-components
import HeaderContainer from './Header-style';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo></Logo> 
            <Link to="/">Home</Link>
            <Link to="/pokemons">Pokemons</Link>
            <Link to="/contacto">Contacto</Link>
        </HeaderContainer>
    );   
};

export default Header;