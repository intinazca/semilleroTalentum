import React, { useState } from "react";

export const validarCampos = (initialForm: any) =>{
    //variables de estado
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState({});
    const [loanding, setLoanding] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChangue =()=>{

    };

    const handleBlur =()=>{

    };

    const handleSubmit =()=>{

    };

    //retornamos los eventos
    return{
        form, error, loanding, response, handleChangue, handleBlur, handleSubmit
    }
}