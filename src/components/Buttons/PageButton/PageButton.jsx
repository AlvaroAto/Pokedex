import React from "react";
import PageButtonContainer from "./PageButton";

const PageButton = ({children}) =>{
    return(
        <PageButtonContainer>
            {children}
        </PageButtonContainer>    
    );
};

export default PageButton;
