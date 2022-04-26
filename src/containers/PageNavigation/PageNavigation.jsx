import React from "react";
import PageButton from "../../components/Buttons/PageButton/PageButton";
import PageNavigationContainer from "./PageNavigation-style";

const PageNavigation = ({ prevUrl, nextUrl } ) =>{
    return(
        <PageNavigationContainer>
            <PageButton url={prevUrl} >Prev</PageButton>
            <PageButton url={nextUrl} >Next</PageButton>
        </PageNavigationContainer>
    );
};

export default PageNavigation;
