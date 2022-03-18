import React from "react";
import PageButtonContainer from "./PageButton";

const PageButton = ({url,children}) =>{
    return(
        <PageButtonContainer href={url}>
            {children}
        </PageButtonContainer>
    );
};

export default PageButton;
