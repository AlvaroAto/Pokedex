import styled from "styled-components";
import { lightTheme, darkTheme } from "../../constants/color";

const HomeContainer = styled.div`
    background: ${(props) => props.theme === 'light' ? lightTheme.white : darkTheme.white};
`;

export default HomeContainer;