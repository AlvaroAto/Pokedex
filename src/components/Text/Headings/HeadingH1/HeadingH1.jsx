import { useState, useContext } from "react";
import React from 'react';

import HeadingH1Container from './HeadingH1-style';

import { ThemeContext } from '../../../../context/ThemeContext';

const HeadingH1 = ({text}) =>{
    const themeValue = useContext(ThemeContext);
    return (
        <HeadingH1Container 
            theme={themeValue.theme}>
            {text}
        </HeadingH1Container>
    );
};

export default HeadingH1;
