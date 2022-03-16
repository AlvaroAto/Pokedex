import React from "react";

//import styled-components
import SectionContainer from "./Section-style";

const Section = ({children}) => {
    return (
        <SectionContainer>
            {children}
        </SectionContainer>
    );
};

export default Section;