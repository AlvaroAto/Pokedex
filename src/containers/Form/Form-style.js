import styled from "styled-components";

const FormContainer = styled.form`
    border: solid 1px red;
    border-shadow: 0 2 6px rgba(0,0,0,.3);
    
    span{
        cursor: pointer;
        padding: 5px 10px;
        background-color: lightgrey;
        color: red;
        border-radius: 8px;
        border: solid 2px red;
    }
`;

export default FormContainer;