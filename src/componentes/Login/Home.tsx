import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function Home() {
  return (
    <div className="fondo">
      <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center  mt-5 " id="titulo">The Forest Temple</h2>
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-5">

            <div className="text-center">
            </div>

            <div className="mb-3">
              <h1 className="iniciar_sesion">Iniciar Sesión</h1>
              <input type="text" className="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="Usuario">
              </input>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="Contraseña">
              </input>
      
            </div>
            <NavLink to={"/Juego_Usuario"}>
            <div className="text-center" id="boton"><button type="submit" className="btn  px-5 mb-5 w-100">Iniciar</button>
            </div>
            </NavLink>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">¿Aun no tienes una cuenta?, crea una <span className="text-dark fw-bold"></span><NavLink to={"/Registro"}>
            <span className="prueba2">aquí</span>
            </NavLink>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
    </div>
   
  )
}

export default Home