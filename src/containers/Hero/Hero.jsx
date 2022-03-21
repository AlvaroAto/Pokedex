import React from 'react';

import HeroContainer from './Hero-style';

const Hero = ({ height, children }) => {
    return (
        <HeroContainer height={height}>
            {children}
        </HeroContainer>
    );
};  

export default Hero;