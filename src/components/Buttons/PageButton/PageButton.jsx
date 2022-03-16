import React from "react";
import PageButtonContainer from "./PageButton";

const PageButton = ({url,text}) =>{
    return(
        <PageButtonContainer href={url}>
            {text}
        </PageButtonContainer>
    );
};

export default PageButton;
