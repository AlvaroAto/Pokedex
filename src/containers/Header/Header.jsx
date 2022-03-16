import React from 'react';

//assets
import Logo from '../../components/Logo/Logo';

//styled-components
import HeaderContainer from './Header-style';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
        </HeaderContainer>
    );   
};

export default Header;