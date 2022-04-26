import React from "react";
import PageButton from "../../components/Buttons/PageButton/PageButton";
import PageNavigationContainer from "./PageNavigation-style";

const PageNavigation = ({ prevUrl, nextUrl, onClick } ) =>{
    return(
        <PageNavigationContainer>
            {
                prevUrl !== null && <PageButton onClick={()=>onClick(prevUrl)}>Prev</PageButton>
                
            }
            {
                nextUrl !== null && <PageButton onClick={()=>onClick(nextUrl)}>Next</PageButton>
            }        
        </PageNavigationContainer>

    );
};

export default PageNavigation;
