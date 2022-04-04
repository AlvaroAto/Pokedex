import React,{useContext} from "react";
import HeadingH2 from "../../components/Text/Headings/HeadingH2/HeadinH2";
import List from "../../components/Text/List/List";

//import styled-components
import MainModalContainer from "./MainModal-style";

import { ThemeContext } from '../../context/ThemeContext';

const MainModal = ({children,handleClick}) => {
    const themeValue = useContext(ThemeContext);
    return(
        <MainModalContainer>
            <div className="modal-wrapper">
                <div className="topbar">
                    <HeadingH2 text="Ataques"></HeadingH2>
                    <span onClick={() => handleClick()}>X</span>
                </div>
                <div className="body">
                    <List>{children}</List>
                </div>
            </div>
        </MainModalContainer>
    );
};

export default MainModal;