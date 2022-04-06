import React, {useState,useContext} from "react";

import Header from "../../containers/Header/Header";
import { ThemeContext } from "styled-components";

import FormContainer from "../../containers/Form/Form-style";

const Contact = () => {

    const [formMessage,setFormMessage] = useState({});
    //crear variable error,seterror
    const [errorMessage, setErrorMessage] = useState("");

    const themeValue = useContext(ThemeContext);

    const handleForm = (e) => {
        const updateMessage = {
            ...formMessage,
            [e.target.name]:e.target.value
        }
        setFormMessage(updateMessage);
    }

    const sendForm = () => {
        setErrorMessage('');
        if(formMessage.nombre === ''){
            setErrorMessage("El campo nombre no puede estar vacío");
        }
        if(formMessage.email === ''){
            setErrorMessage("El campo email no puede estar vacío");
        }
        if(formMessage.mensaje === ''){
            setErrorMessage("El campo mensaje no puede estar vacío");
        }
    }
    return(
        <>
        <Header
            handleTheme={() => themeValue.handleTheme()}
        />
        <FormContainer>
            <h1>Pagina de contacto</h1>
            <form>
                <label>
                {errorMessage && (errorMessage) }
                </label><br></br>
                <input 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre y Apellido" 
                    onBlur={(e)=>handleForm(e)}
                    /><br></br>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Correo" 
                    onBlur={(e)=>handleForm(e)}
                    /><br></br>
                <textarea 
                    name="mensaje" 
                    cols="30" 
                    rows="10"
                    onBlur={(e)=>handleForm(e)}
                    ></textarea><br></br>
                <span onClick={()=>sendForm()}>Enviar</span>
            </form>
        </FormContainer>
        </>        
    );
};

export default Contact;