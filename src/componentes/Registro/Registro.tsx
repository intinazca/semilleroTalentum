import React, { useEffect, Component, useState } from "react";
import "./Registro.css"
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { NavLink } from "react-router-dom";
import UseForm from "./UseForm";

type datos = {
    usuario: String,
    contrasena: String,
    edad: Number,
    pais: String,
    departamento: String,
    municipio: String
}

function data() {
    axios.get("https://restcountries.com/v3.1/all").
        then(Response => {            
            console.log(Response.data);

        }).catch(error => {
            console.error(error)
        })
}

// class Localidad extends Component {

//     componentDidMount() {

//         axios.get("https://restcountries.com/v3.1/all").
//             then(Response => {
//                 this.setState(this.datos = Response.data);
//                 console.log(this.datos);

//             }).catch(error => {
//                 console.error(error)
//             }
//             )
//     }
// }

//data del formulario
const initialForm = {
    name:"",
    password: "",
    passwordC: "",
    edad:"",
}

var errorss = {
    name: '',
    password: '',
    passwordC: '',
    edad:'',
  }; //objeto que retorna el error
// funcion que se manda a las variables de estado al validator de useform
const validationForm = (form:any)=>{
    // --expresiones regulares
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    // let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    // let bregexComments = /^.{1,255}$/;

     if(!form.name.trim()){
        errorss.name = "El campo 'usuario' es requerido"; 
     }else if(!regexName.test(form.name.trim())){
        errorss.name = "El campo 'usuario' solo acepta letras";
     }else{
        errorss.name = "";
     }

     if(!form.password.trim()){
        errorss.password = "La contraseña es requerida"; 
     }else{
        errorss.password = "";
     }

     if(!form.passwordC.trim()){
        errorss.passwordC = "Debe confirmar la constraseña"; 
     }else if(form.passwordC.trim()!=(form.password.trim())){
        errorss.passwordC = "Las contraseñas no coinciden";
     }else{
        errorss.passwordC = "";
     }

     if(!form.edad.trim()){
        errorss.edad = "La edad es requerida"; 
     }else{
        errorss.edad = "";
     }

    return errorss;
}

const Registro = () => {

    data();
    const [click, setClick] = useState(true);
    const cambiar = (tipo: number) => {

        if (tipo == 1) {
            setClick(true);
        } else if (tipo == 2) {
            setClick(false);

        }
    }

    interface Paises {
        pais: string,
        departamento: string,
        municipio: string,
    }

    var arregloPaises = [{
        pais: 'Colombia',
        departamento: 'Valle del cauca',
        municipio: 'Cali',
    },
    {
        pais: 'Venezuela',
        departamento: 'Choco',
        municipio: 'Palmira',
    }
    ]

    const [paises, valorx] = useState<Array<Paises>>([]);

    useEffect(() => {
        valorx(arregloPaises);
    }, []);

    // validaciones formulario
        const{form, errors, loanding, response, handleChangue, handleBlur, handleSubmit} = UseForm(initialForm, validationForm);
    //
    return (
        <div className="cols" >

            <div className="col-7 columns1">
                <div className="i-tabla">
                    <h1 id="espacios" className="i-title">Bienvenido a The Forest Temple</h1>
                    <div id="espacios" className="i-container">
                        <div id="espacio">
                            <h2 className="i-subtitle" onClick={() => cambiar(1)}>Perfil</h2>
                            {click ? (<div className="linea"></div>) : (<div></div>)}
                        </div>
                        <div>
                            <h2 className="i-subtitle" onClick={() => cambiar(2)}>Localidad</h2>
                            {click ? (<div></div>) : (<div className="linea"></div>)}
                        </div>
                    </div>
                    {click ? (
                        <form id="registro" onSubmit={handleSubmit}>
                            <div id="espacios" className="i-input">
                                <p className="i-campos">Usuario</p>
                                <input id="usuario" type="text" name="name" onBlur={handleBlur} onChange={handleChangue} value={form.name} required/>
                                {errorss.name && <p className="alertas">{errorss.name}</p>}
                            </div>
                            <div id="espacios" className="i-input">
                                <p className="i-campos">Contraseña</p>
                                <input type="text" name="password" onBlur={handleBlur} onChange={handleChangue} value={form.password} required/>
                                {errorss.password && <p className="alertas">{errorss.password}</p>}
                            </div>
                            <div id="espacios" className="i-input">
                                <p className="i-campos">Confirmar contraseña</p>
                                <input type="text"  name="passwordC" onBlur={handleBlur} onChange={handleChangue} value={form.passwordC} required/>
                                {errorss.passwordC && <p className="alertas">{errorss.passwordC}</p>}
                            </div>
                            <div id="espacios" className="i-input">
                                <p className="i-campos">Edad</p>
                                <input type="text" name="edad" onBlur={handleBlur} onChange={handleChangue} value={form.edad} required/>
                                {errorss.edad && <p className="alertas">{errorss.edad}</p>}
                            </div>
                        </form >
                    ) : (
                        <form id="registro">
                            <div id="espacios" className="i-input">
                                <p className="i-campos">País</p>
                                <select>
                                    <option></option>
                                    {
                                        paises.map(sub => {
                                            return (
                                                <option key={sub.pais.toString()} value={sub.pais}>{sub.pais}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div id="espacios" className="i-input">
                                <p className="i-campos">Departamento</p>
                                <select>
                                    <option></option>
                                    {
                                        paises.map(sub => {

                                            return (
                                                <option value={sub.departamento}>{sub.departamento}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div id="espacios" className="i-input">
                                <p className="i-campos">Municipio</p>
                                <select>
                                    <option></option>
                                    {
                                        paises.map(sub => {
                                            return (
                                                <option value={sub.municipio}>{sub.municipio}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <button disabled={false} type="button" className="i-btn">REGISTRAR</button>
                            <div className="espacio">
                            </div>
                        </form>
                    )}

                </div>
            </div>

            <div className="col-5 columns2">
                <div className="i-fotoGanme">
                    <div className="foto">
                        <p className="relleno">The Forest Temple es un Videojuego Roguelike donde deberás explorar una misteriosa mazmorra llena de peligros y adversidades, ¿Listo para demostrar que tan lejos puedes llegar?</p>
                    </div>
                </div>
                <p className="i-link">¿Ya tienes una cuenta? Ingresa</p>
                <nav className="i-link2">
                    <NavLink to="/">Aquí</NavLink>
                </nav>
            </div>

        </div>
    );

}

export default Registro;