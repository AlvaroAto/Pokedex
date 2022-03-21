import styled from 'styled-components';

const HeroContainer = styled.section`
    width: 100%;
    height: ${(props) => props.height};
    background-color: red; 
`;

export default HeroContainer;