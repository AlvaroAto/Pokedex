import React, {useState} from "react";

const Contact = () => {

    const [formMessage,setFormMessage] = useState({});
    //crear variable error,seterror

    const handleForm = (e) => {
        const updateMessage = {
            ...formMessage,
            [e.target.name]:e.target.value
        }
        setFormMessage(updateMessage);
    }

    const sendForm = () => {
        //validacion de formulario aqui
        console.log(formMessage);
    }
    return(
        <div>
            <h1>Pagina de contacto</h1>
            <form>
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
        </div>
    );
};

export default Contact;