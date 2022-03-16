import styled from 'styled-components';
const ParagraphContainer = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: ${(prop) => prop.color}
`;

export default ParagraphContainer