import React from 'react'
import './Estadisticas.css'
import 'bootstrap/dist/css/bootstrap.css';
import Grafico from './Grafico/Gracfico';
import { NavLink } from 'react-router-dom';

function Estadisticas() {
  let puntaje = 500;
  let numOleadas = 10;
  let eliminados = 200;


  return (

    <div className="background">

      <div className='i-header e-header'>
        <NavLink to={"/Juego_Usuario"}>
          <button className="undo"></button>
        </NavLink>
        <h1 className="estadisticas">Estadisticas</h1>
      </div>
      
      <div className='i-container e-container'>

        <div className='e-grafico'>
          <div className='i-indicadores'>
            <span className="info_partidas">Información sobre tus últimas 10 partidas</span>

            <select name="color" className="rectangle_7">
              <option value="r">Indicadores</option>
              <option value="a">Prueba1</option>
              <option value="v">Prueba2</option>
            </select>
          </div>
          <Grafico puntaje={puntaje} numOleadas={numOleadas} eliminados={eliminados}></Grafico>
        </div>

        <div className='i-datos'>
          <span className="mejores_puntajes">Mejores Puntajes</span>

          <div className='i-card sombra'>
            <div className='i-titlecard'>
              <p className='e-title'>Puntaje</p>
            </div>
            <h1 id='puntaje'> {puntaje}</h1>
          </div>

          <div className='i-card sombra'>
            <div className='i-titlecard oleadas'>
              <p className='e-title i-oleadas'>Número de oleadas</p>
            </div>
            <h1 id='puntaje' className='i-oleadas'> {numOleadas}</h1>
          </div>

          <div className='i-card sombra'>
            <div className='i-titlecard eliminados'>
              <p className='e-title i-eliminados'>Total enemigos eliminados</p>
            </div>
            <h1 id='puntaje' className='i-eliminados'> {eliminados}</h1>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Estadisticas