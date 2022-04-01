import React, {useState} from "react";

//container
import Form from "../../containers/Form/Form";

const Contact = () => {

    const [formMessage,setFormMessage] = useState({});
    const [labelMessage,setLabelMessage] = useState({});

    //crear variable error,seterror
    const [error, setError] = useState();

    const handleForm = (e) => {
        const updateMessage = {
            ...formMessage,
            [e.target.name]:e.target.value
        }
        setFormMessage(updateMessage);
    }

    const handleLabel = (e) => {
        const updateMessage = {
            ...labelMessage,
            [e.target.name]:e.target.value
        }
        setLabelMessage(updateMessage);
    }

    const sendForm = () => {
        //validacion de formulario aqui
        if(formMessage.nombre === ""){
        //    labelMessage.value="*El nombre debe contener un valor"};
        
        }
        console.log(formMessage);
        console.log(labelMessage);
    }
    return(
        <div>
            <h1>Pagina de contacto</h1>
            <form>                
                    <label htmlFor="nombre" name="nombre" onMouseMove={(e)=>handleLabel(e)}>Nombre:</label>
                    <br></br>
                    <input 
                        type="text" 
                        name="nombre" 
                        placeholder="Nombre y Apellido" 
                        onBlur={(e)=>handleForm(e)}
                        /><br></br>
                    <label htmlFor="email" onMouseMove={(e)=>handleLabel(e)}>Correo:</label>
                    <br></br>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Correo" 
                        onBlur={(e)=>handleForm(e)}
                        /><br></br>                    
                    <label htmlFor="mensaje" onMouseMove={(e)=>handleLabel(e)}>Mensaje:</label>
                    <br></br>
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