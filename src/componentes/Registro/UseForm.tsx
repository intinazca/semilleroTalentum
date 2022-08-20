import React, { useState } from "react";
import axios from "axios";
import { helpHttp } from "./HelpHttp";


const UseForm = (initialForm: any, validateForm: any) => {
    //variables de estado 
    const [form, setForm] = useState(initialForm);
    const [errors, setError] = useState({});
    const [loanding, setLoanding] = useState(false);
    const [response, setResponse] = useState(false);
    //maneja el estado de los input del formulario
    const handleChangue = (e: any) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };
    //cuando los elementos del form cambie el focus 
    const handleBlur = (e: any) => {
        handleChangue(e);
        setError(validateForm(form)); //valida cada una de las variables del formulario
    };

    var x: any;

    x = errors;

    const handleSubmit = (e: any) => {//para el envio del formulario
        e.preventDefault();
        setError(validateForm(form));//se evalua que no exitan errores

        //si el objeto de los errores esta vacio, se ejecuta la instruccion de codigo
        console.log(form);
        
        if (x.name == '' || x.password == '' || x.edad == '') {
            alert("Enviando formulario");
            setLoanding(true);
            axios.post("https://63002ebb9350a1e548eae86a.mockapi.io/formulario",form).then((res)=>{
                setLoanding(false);
                setResponse(true); //la informacion fue true y se manda el formulario
                setForm(initialForm); //con esto banlqueamos los input del formulario
                setTimeout(() => {
                    setResponse(false);
                }, 3000);
            });
        }else{
            return
        }

    };

    //retornamos los eventos
    return {
        form, errors, loanding, response, handleChangue, handleBlur, handleSubmit
    }
};

export default UseForm;