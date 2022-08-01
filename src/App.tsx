import React, { useEffect, useState } from 'react';
import './App.css';
import JuegoUnity from './componentes/juego/JuegoUnity';

//app es el componente que renderiza
function App() {
  interface persona {
    nombre: string,
    edad: number,
    avatar: string,
    description?: string
  }
  
  var arregloPersonas = [{
    nombre: 'inti',
    edad: 26,
    avatar: 'https://juanbenitez2600.github.io/pruebajuego/',
    description: "bien wapo"    
  }]

  const[persona, valor] = useState <Array<persona>> ([]);

  useEffect(() => {
    valor(arregloPersonas)
  }, []);


  return (
    <div className="App">
      <div>
        {/* <JuegoUnity></JuegoUnity> */}
      </div>
      <div>
        {
          persona.map( sub =>{
            return (
              <div key={ sub.nombre}>
                <iframe src={sub.avatar}></iframe>
                <h4>{sub.nombre} (<small>{sub.edad}</small>)</h4>
                <p>{sub.description?.substring(0 ,10)}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
