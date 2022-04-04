import styled from "styled-components";

import {lightTheme, darkTheme} from '../../../../constants/color';

const HeadingH3Container = styled.h3`
    font-weight:bold;
    
    color: ${(props) => props.theme === 'light' ? lightTheme.black : darkTheme.black};
`;

export default HeadingH3Container;