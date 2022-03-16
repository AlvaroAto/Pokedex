import styled, { createGlobalStyle } from "styled-components";
// import styled from "styled-components";
// const GlobalStyle = styled.createGlobalStyle``;

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    img{
        max-width: 100%;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
`;


export default GlobalStyle;