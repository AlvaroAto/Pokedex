import React from "react";
import PageButtonContainer from "./PageButton";

const PageButton = ({url,onClick,children}) =>{
    return(
        <PageButtonContainer 
            onClick={() => onClick(url)}
        >
            {children}
        </PageButtonContainer>
    );
};

export default PageButton;
