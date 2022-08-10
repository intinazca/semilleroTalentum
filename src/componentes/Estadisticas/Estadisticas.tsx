import React from 'react'
import Grafico from './Grafico/Gracfico'

export default function Estadisticas() {
  let puntaje =5;
  let numOleadas = 10;
  let eliminados = 200;

  return (
    <div>
        <div>
            
            <div>
              <Grafico puntaje={puntaje} numOleadas={numOleadas} eliminados={eliminados }></Grafico>
            </div>
        </div>
    </div>
  )
}
