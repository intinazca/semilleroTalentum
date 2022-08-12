import React from 'react'
import { NavLink } from 'react-router-dom';
import './Vista_Juego.css'

export default function Vista_Juego() {
  return (
    <div className="background">
    <div>
    <NavLink to={"/Juego_Usuario"}>
          <button className="undo"></button>
        </NavLink>
    </div>

    <div className="alinear">
    <iframe className="" src="https://pruebaphp-unity.web.app/" ></iframe >
    </div>

    </div>
  )
}
