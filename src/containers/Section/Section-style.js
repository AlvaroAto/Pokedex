import styled from "styled-components";


const SectionContainer = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    div.buscador{
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:20px;
        text-align:center;      
        img{
            width:48px;
            height:36px;
            cursor:pointer;
        }
    }
    div.loading{
        display: flex;
        justify-content: center;
        align-items:center;
        width:180px;
        height:180px;
        img{
            width: 180px;
            height:180px;
        }
    }   
`;

export default SectionContainer;