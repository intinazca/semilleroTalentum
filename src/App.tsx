import React, { useEffect, useState } from 'react';
import './App.css';
import JuegoUnity from './componentes/juego/JuegoUnity';
import Home from './componentes/Login/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registro from './componentes/Registro/Registro';
import Estadisticas from './componentes/Estadisticas/Estadisticas';
import Juego_Usuario from './componentes/Juego_Usuario/Juego_Usuario';
import Grafico from './componentes/Estadisticas/Grafico/Gracfico';
import Vista_Juego from './componentes/Vista_Juego/Vista_Juego';

//app es el componente que renderiza
function App() {
  


  return (
    <div className="App">
              <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Registro" element={<Registro/>} />
                <Route path="/Estadisticas" element={<Estadisticas/>} />
                <Route path="/Juego_Usuario" element={<Juego_Usuario/>} />
                <Route path="/Vista_Juego" element={<Vista_Juego/>} />
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;


