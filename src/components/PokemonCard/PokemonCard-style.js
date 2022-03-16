import styled from "styled-components";

const PokemonCardContainer = styled.article`
    width: 180px;
    padding: 15px;
    margin-bottom: 16px;
    border: solid 1px black;
    border-radius: 15px;
    box-shadow: 1px 2px 4px rgba(0,0,0,.2);
    h3{
        font-size: 24px;
        line-height:48px;
        text-transform: Capitalize;
    }
    img{
        max-width:100px;
    }
    span{
        background-color: red;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        color: white;
    }

`;

export default PokemonCardContainer;