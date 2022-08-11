import React from 'react'
import './Estadisticas.css'
import 'bootstrap/dist/css/bootstrap.css';
import Grafico from './Grafico/Gracfico';
import { NavLink } from 'react-router-dom';

function Estadisticas() {
  let puntaje = 5;
  let numOleadas = 10;
  let eliminados = 200;


  return (

    <div className="background">

      <div className='i-header'>
        <NavLink to={"/Juego_Usuario"}>
          <div className="undo"></div>
        </NavLink>
        <h1 className="ESTADSTICAS">Estadisticas</h1>
      </div>
      <div className='i-container'>

        <div className='i-grafico'>
          <div>
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

          <div className="rectangle_8"></div>
          <div className="rectangle_20"></div>
          <span className="puntaje">Puntaje</span>
          <span className="puntaje_523">523</span>

          <div className="rectangle_18"></div>
          <div className="rectangle_21"></div>
          <span className="numero_de_oleadas">Numero de oleadas</span>
          <span className="puntaje_2">5</span>

          <div className="rectangle_19"></div>
          <div className="rectangle_22"></div>
          <span className="total_enemigos_eliminados">Total enemigos eliminados</span>
          <span className="puntaje_3">25</span>
        </div>

      </div>

    </div>
  )
}

export default Estadisticas