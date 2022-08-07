import React, { useEffect, Component, useState } from "react";
import "./Registro.css"
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import {NavLink} from "react-router-dom"

var data: {
    usuario: String,
    contrasena: String,
    edad: Number,
    pais: String,
    departamento: String,
    municipio: String
}

//class Localidad extends Component {

// componentDidMount() {
//     axios.get("https://restcountries.com/v3.1/all").
//         then(Response => {
//             this.setState(this.localidad = Response.data );
//             console.log(this.localidad);

//         }).catch(error => {
//             console.error(error)
//         }
//         )
// }
//}

const Pais = () => {
    return (
        <div id="registro">
            <div id="espacios" className="i-input">
                <p className="i-campos">País</p>
                <select>
                    <option value=""></option>
                </select>
            </div>
            <div id="espacios" className="i-input">
                <p className="i-campos">Departamento</p>
                <select>
                    <option value=""></option>
                </select>
            </div>
            <div id="espacios" className="i-input">
                <p className="i-campos">Municipio</p>
                <select>
                    <option value=""></option>
                </select>
            </div>
            <div className="espacio">
            </div>
        </div>
    )
}

const Registro = () => {

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
        pais: 'Argentina',
        departamento: 'number',
        municipio: 'string',
    },
    {
        pais: 'Colombia',
        departamento: 'number',
        municipio: 'string',
    }
    ]

    const [paises, valorx] = useState<Array<Paises>>([]);

    useEffect(() => {
        valorx(arregloPaises);
    }, []);


    return (
        <div className="cols" >

            <div className="col-7 columns1">
                <div className="i-tabla">
                    <h1 id="espacios" className="i-title">Bienvenido a The Forest Temple</h1>
                    <div id="espacios" className="i-container">
                        <div id="espacio">
                            <h2 className="i-subtitle" onClick={() => cambiar(1)}>Perfil</h2>
                            { click ? (<div className="linea"></div>):(<div></div>)}
                        </div>
                        <div>
                            <h2 className="i-subtitle" onClick={() => cambiar(2)}>Localidad</h2>
                            { click ? (<div></div>):(<div className="linea"></div>)}
                        </div>
                    </div>
                    {click ? (
                        <div id="registro">
                            <div id="espacios" className="i-input">
                                <p className="i-campos">Usuario</p>
                                <input id="usuario" type="text" />
                            </div>
                            <div id="espacios" className="i-input">
                                <p className="i-campos">Contraseña</p>
                                <input type="text" />
                            </div>
                            <div id="espacios" className="i-input">
                                <p className="i-campos">Confirmar contraseña</p>
                                <input type="text" />
                            </div>
                            <div id="espacios" className="i-input">
                                <p className="i-campos">Edad</p>
                                <input type="text" />
                            </div>
                        </div>
                    ) : (
                        <div id="registro">
                            <div id="espacios" className="i-input">
                                <p className="i-campos">País</p>
                                <select>
                                    <option></option>
                                    {
                                        paises.map(sub => {
                                            return (
                                                <option key={sub.pais}>{sub.pais}</option>
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
                                                <option key={sub.pais}>{sub.departamento}</option>
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
                                                <option key={sub.pais}>{sub.municipio}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <button disabled={false} type="button" className="i-btn">REGISTRAR</button>
                            <div className="espacio">
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <div className="col-5 columns2">
                <div className="i-fotoGanme">
                    <div className="foto">
                        <p className="relleno">The Forest Temple es un Videojuego Roguelike donde deberás explorar una misteriosa mazmorra llena de peligros y adversidades, ¿Listo para demostrar que tan lejos puedes llegar?</p>
                    </div>
                </div>
                <p className="i-link">¿Ya tienes una cuenta? Ingresa <a className="i-link2" href="">aquí</a></p>
            </div>

        </div>
    );

}

export default Registro;