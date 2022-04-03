import React from "react";
import PageButton from "../../components/Buttons/PageButton/PageButton";
import PageNavegationContainer from "./PageNavegation-style";

const PageNavegation = ({ prevUrl, nextUrl,onClick } ) =>{
    return(
        <PageNavegationContainer>
            <PageButton url={prevUrl} onClick={onClick}>Prev</PageButton>
            <PageButton url={nextUrl} onClick={onClick}>Next</PageButton>
        </PageNavegationContainer>
    );
};

export default PageNavegation;
