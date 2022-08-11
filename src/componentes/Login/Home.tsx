import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="fondo">
      <div className="rectangle2"></div>
      <h1 className="iniciar_sesion">Iniciar Sesión</h1>
      <input type="text" placeholder="Usuario" className="rectangle3"></input>
      <input type="text" placeholder="Contraseña" className="rectangle4"></input>
      <span className="usuario"></span>
      <span className="contrasena"></span>
      <NavLink to={"/Juego_Usuario"}>
        <button className="rectangle">Iniciar</button>
      </NavLink>
      <div className="look"></div>
      <div className="user"></div>
      <span className="prueba">Aun no tienes una cuenta, crea una</span>
      <NavLink to={"/Registro"}>
        <span className="prueba2">aquí</span>
      </NavLink>
      <span className="titulo">The Forest Temple</span>
    </div>
  )
}

export default Home