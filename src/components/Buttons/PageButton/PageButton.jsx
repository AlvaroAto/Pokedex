import React from "react";
import PageButtonContainer from "./PageButton";

const PageButton = ({url,onClick,children}) =>{
    return(
        (url!==null)
        ?(
            <PageButtonContainer onClick={() => onClick(url)}>
                {children}
            </PageButtonContainer>
        )
        : (
            <PageButtonContainer>
                {children}
            </PageButtonContainer>
        )       
    );
};

export default PageButton;
