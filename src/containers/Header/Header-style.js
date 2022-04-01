import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px black;
    background-color: #eeeeee;
    a{
        margin-left: 15px;
    }
    span{
        cursor: pointer;
    }
`;

export default HeaderContainer;