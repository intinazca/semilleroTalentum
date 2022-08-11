import React from 'react'
import './Juego_Usuario.css'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";

function Juego_Usuario() {

  return (

    <div className="fondo" >
      <NavLink to={""}>
        <button className="Rectangle_5">Jugar</button>
      </NavLink>
      <NavLink to={"/Estadisticas"}>
        <button className="boton_iniciar">Estadisticas</button>
      </NavLink>
      <NavLink to={"/"}>
        <button className="boton_cerrar_sesion">Cerrar sesión</button>
      </NavLink>
      <h1 className="titulo">The Forest temple</h1>
    </div>
  )
}

export default Juego_Usuario