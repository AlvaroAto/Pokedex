import styled from 'styled-components';

import {lightTeme, darkTheme} from '../../../constants/color';

const HeadingH1Container = styled.h1`
    font-size: 36px;
    line-height: 70px;
    color: ${(props) => props.theme === 'light' ? lightTeme.black : darkTheme.black};
`;

export default HeadingH1Container;