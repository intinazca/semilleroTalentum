import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  return (
    <div className="fondo">
    <div className="rectangle2"></div>
    <h1 className="iniciar_sesion">Iniciar Sesión</h1>
    <input type="text" placeholder="Usuario" className="rectangle3"></input>
    <input type="text" placeholder="Contraseña" className="rectangle4"></input>
    <span className="usuario"></span>
    <span className="contrasena"></span>
    <button className="rectangle">Iniciar</button>
    <div className="look"></div>
    <div className="user"></div>
    <span className="prueba">Aun no tienes una cuenta, crea una</span>
    <span className="prueba2">aquí</span>
    <span className="titulo">The Forest Temple</span>
    </div>
  )
}

export default Home