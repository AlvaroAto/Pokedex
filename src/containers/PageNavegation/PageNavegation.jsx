import React from "react";
import PageButton from "../../components/Buttons/PageButton/PageButton";
import PageNavegationContainer from "./PageNavegation-style";

const PageNavegation = ({ prevUrl, nextUrl,handleClick } ) =>{
    return(
        <PageNavegationContainer>
            <PageButton url={prevUrl}>Prev</PageButton>
            <PageButton url={nextUrl} onClick={()=>handleClick()}>Next</PageButton>
        </PageNavegationContainer>
    );
};

export default PageNavegation;
