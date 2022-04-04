import { useContext } from "react";

import ListContainer from "./List-style";

import { ThemeContext } from '../../../context/ThemeContext';

const List = ({children}) => {
    const themeValue = useContext(ThemeContext);
    return(
        <ListContainer 
            theme={themeValue.theme}
        >
            {children}
        </ListContainer>
    );
}
export default List;