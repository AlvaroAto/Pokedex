import styled from "styled-components";

const HeadingH2Container = styled.h2`

    font-size: 30px;
    line-height: 60px;
    color:${(props)=> props.color}
    img{
        min-width:200px;
        display:flex;
        justify-content:center;
        align-items:center;
        
    }
`;

export default HeadingH2Container;