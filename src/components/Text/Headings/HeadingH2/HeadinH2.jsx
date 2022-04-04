import { useContext } from "react";

import HeadingH2Container from "./HeadingH2-style";

import { ThemeContext } from '../../../../context/ThemeContext';

const HeadingH2 = ({text}) => {
    const themeValue = useContext(ThemeContext);
    return(
        <HeadingH2Container 
            theme={themeValue.theme}
        >
            {text}
        </HeadingH2Container>
    );
}
export default HeadingH2;