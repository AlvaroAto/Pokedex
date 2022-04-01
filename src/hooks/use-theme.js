import { useState } from "react";

export const useTheme = () => {
    const [theme,setTheme]= useState('light');

    const handleTheme = () =>{
        const updateTheme = (theme ==='light') ? 'dark' : 'light';   
        setTheme(updateTheme);     
    }

    //custom hook
    return{
        theme,
        handleTheme
    }
};