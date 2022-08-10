import React, { useEffect, useState } from 'react';
import './App.css';
import JuegoUnity from './componentes/juego/JuegoUnity';
import Home from './componentes/Login/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registro from './componentes/Registro/Registro';
import Estadisticas from './componentes/Estadisticas/Estadisticas';

//app es el componente que renderiza
function App() {
  


  return (
    <div className="App">
              <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Registro" element={<Registro/>} />
                <Route path="/estadisticas" element={<Estadisticas/>} /> 
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;


