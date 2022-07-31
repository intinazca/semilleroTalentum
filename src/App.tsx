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
    avatar: 'https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg',
    description: "bien wapo"    
  }]

  const[persona, valor] = useState <Array<persona>> ([]);

  useEffect(() => {
    valor(arregloPersonas)
  }, []);


  return (
    <div className="App">
      <div>
        <JuegoUnity></JuegoUnity>
      </div>
      <div>
        {
          persona.map( sub =>{
            return (
              <li key={ sub.nombre}>
                <img src={sub.avatar} alt={`avatar for ${sub.nombre}`}></img>
                <h4>{sub.nombre} (<small>{sub.edad}</small>)</h4>
                <p>{sub.description?.substring(0 ,10)}</p>
              </li>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
