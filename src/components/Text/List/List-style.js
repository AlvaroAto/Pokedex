import styled from "styled-components";

import { lightTheme, darkTheme } from "../../../constants/color";

const ListContainer = styled.ul`
    color: ${(props) => props.theme === 'light' ? lightTheme.black : darkTheme.black};
    background-color: ${(props) => props.theme === 'light' ? darkTheme.black : lightTheme.black};
`;

export default ListContainer;