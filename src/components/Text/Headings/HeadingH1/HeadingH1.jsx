import React from 'react';

import HeadingH1Container from './HeadingH1-style';

const HeadingH1 = ({text,color}) =>{
    return (
        <HeadingH1Container color={color}>{text}</HeadingH1Container>
    );
};

export default HeadingH1;
