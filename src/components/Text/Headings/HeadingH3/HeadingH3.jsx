import { useContext } from "react";

import HeadingH3Container from "./HeadingH3-style";

import { ThemeContext } from '../../../../context/ThemeContext';

const HeadingH3 = ({text}) => {
        const themeValue = useContext(ThemeContext);
    return(
        <HeadingH3Container 
            theme={themeValue.theme}
        >
            {text}
        </HeadingH3Container>
    );
}
export default HeadingH3;