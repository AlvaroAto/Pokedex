import styled from 'styled-components';

import {lightTheme, darkTheme} from '../../../../constants/color';

const HeadingH1Container = styled.h1`
    font-size: 36px;
    line-height: 70px;
    color: ${(props) => props.theme === 'light' ? lightTheme.black : darkTheme.black};
`;

export default HeadingH1Container;