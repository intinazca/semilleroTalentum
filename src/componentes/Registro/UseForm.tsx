import React, { useState } from "react";


const UseForm = (initialForm: any, validateForm: any) =>{
    //variables de estado
    const [form, setForm] = useState(initialForm);
    const [errors, setError] = useState({});
    const [loanding, setLoanding] = useState(false);
    const [response, setResponse] = useState(null);

    //manea el estado de los inpuit del formulario
    const handleChangue =(e:any)=>{
        const{name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };

    //cuando los elementos del form cambie el focus 
    const handleBlur =(e:any)=>{
        handleChangue(e);
        setError(validateForm(form)); //valida cada una de las variables del formulario
    };

    const handleSubmit =(e:any)=>{

    };

    //retornamos los eventos
    return{
        form, errors, loanding, response, handleChangue, handleBlur, handleSubmit
    }
};

export default UseForm;