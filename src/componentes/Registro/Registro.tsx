import React,{useState} from "react";
import "./Registro.css"
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

var data: {
    usuario: String,
    contrasena: String,
    edad: number,
    pais: String,
    departamento: String,
    municipio: String 
}

function guardarDatos(){

}



const Registro =()=> {

    const [click, setClick] = useState(true);
    const cambiar =(tipo:number)=>{
        
        if(tipo == 1){
            setClick(true); 
        }  else if(tipo == 2){
            setClick(false);  

        }     
    }
        return (
            <div className="cols" >

                <div className="col-7 columns1">
                    <div className="i-tabla">
                        <h1 id="espacios" className="i-title">Bienvenido a The Forest Temple</h1>
                        <div id="espacios" className="i-container">
                            <div>
                                <h2 className="i-subtitle" onClick={()=> cambiar(1) }>Perfil</h2>
                            </div>
                            <div>
                                <h2 className="i-subtitle" onClick={ ()=> cambiar(2) }>Localidad</h2>
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
                                    <input type="text" />
                                </div>
                                <div id="espacios" className="i-input">
                                    <p className="i-campos">Departamento</p>
                                    <input  type="text" />
                                </div>
                                <div id="espacios" className="i-input">
                                    <p className="i-campos">Municipio</p>
                                    <input type="text" />
                                </div>
                                <div className="espacio"></div>
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
        )
    
}

export default Registro;