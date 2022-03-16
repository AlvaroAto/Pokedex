import React from "react";
import HeadingH2 from "../../components/Text/Headings/HeadingH2/HeadinH2";
//import styled-components
import MainModalContainer from "./MainModal-style";

const MainModal = ({children,handleClick}) => {
    return(
        <MainModalContainer>
            <div className="modal-wrapper">
                <div className="topbar">
                    <HeadingH2 text="Ataques"></HeadingH2>
                    <span onClick={() => handleClick()}>X</span>
                </div>
                <div className="body">
                    <ul>{children}</ul>
                </div>
            </div>
        </MainModalContainer>
    );
};

export default MainModal;