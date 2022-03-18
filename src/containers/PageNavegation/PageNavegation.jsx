import React from "react";
import PageButton from "../../components/Buttons/PageButton/PageButton";
import PageNavegationContainer from "./PageNavegation-style";

const PageNavegation = ({ prevUrl, nextUrl } ) =>{
    return(
        <PageNavegationContainer>
            <PageButton url={prevUrl}>Prev</PageButton>
            <PageButton url={nextUrl}>Next</PageButton>
        </PageNavegationContainer>
    );
};

export default PageNavegation;
