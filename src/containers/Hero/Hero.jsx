import React from 'react';

import HeroContainer from './Hero-style';

const Hero = ({ children }) => {
    return (
        <HeroContainer>
            {children}
        </HeroContainer>
    );
};  

export default Hero;