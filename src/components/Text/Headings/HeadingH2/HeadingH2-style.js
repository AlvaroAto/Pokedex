import styled from "styled-components";

import {lightTheme, darkTheme} from '../../../../constants/color';

const HeadingH2Container = styled.h2`

    font-size: 30px;
    line-height: 60px;
    color: ${(props) => props.theme === 'light' ? lightTheme.black : darkTheme.black};
    img{
        min-width:200px;
        display:flex;
        justify-content:center;
        align-items:center;
        
    }
`;

export default HeadingH2Container;