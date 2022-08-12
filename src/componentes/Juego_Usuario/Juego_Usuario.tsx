import React from 'react'
import './Juego_Usuario.css'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";

function Juego_Usuario() {

  return (

    <div className="fondo" >
      <h2 className="text-center  mt-6 " id="titulo">The Forest Temple</h2>

      <div id="probado">
        <div className="text-center  mt-6">
        <br />
        <br />
        <br />
        <br />
        <br />
        <NavLink to={"/Vista_Juego"}>
        <button className="btn btn-primary" id="Rectangle_5" type="button">Jugar</button>
        </NavLink>
        <br />
        <br />
        <NavLink to={"/Estadisticas"}>
        <button className="btn btn-primary" id="Rectangle_5" type="button">Estadisticas</button>
        </NavLink>
        <br />
        <br />
        <NavLink to={"/"}>
        <button className="btn btn-primary" id="Rectangle_5" type="button">Cerrar sesión</button>
        </NavLink>
        </div>
        </div>


    </div>
  )
}

export default Juego_Usuario