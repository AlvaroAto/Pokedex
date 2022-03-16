import React from 'react';

//assets
import logo from '../../assets/images/pokedex_logo.png';

//styled-components
import LogoContainer from './Logo-style';


const Logo = () => {
    return (
     <LogoContainer>
         <img className="logo-image" src={logo} alt="Logotipo pokedex" />
     </LogoContainer>
    );
};

export default Logo;