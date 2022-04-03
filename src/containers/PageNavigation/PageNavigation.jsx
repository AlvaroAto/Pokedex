import React from "react";
import PageButton from "../../components/Buttons/PageButton/PageButton";
import PageNavigationContainer from "./PageNavigation-style";

const PageNavigation = ({ prevUrl, nextUrl,onClick } ) =>{
    return(
        <PageNavigationContainer>
            <PageButton url={prevUrl} onClick={onClick}>Prev</PageButton>
            <PageButton url={nextUrl} onClick={onClick}>Next</PageButton>
        </PageNavigationContainer>
    );
};

export default PageNavigation;
