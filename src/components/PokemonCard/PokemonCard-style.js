import styled from "styled-components";

import {lightTheme, darkTheme} from '../../constants/color';

const PokemonCardContainer = styled.article`
    width: 180px;
    padding: 15px;
    margin-bottom: 16px;
    border: solid 1px ${(props) => props.theme === 'light' ? lightTheme.black : darkTheme.black};
    border-radius: 15px;
    box-shadow: 0px 0px 6px ${(props) => props.theme === 'light' ? lightTheme.black : darkTheme.black};
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
    a{
        display:inline-block;
        margin-top:15px;
        color:red;
        padding:5px;
        background-color: #efefef;
        border-radius: 5px;
    }

`;

export default PokemonCardContainer;