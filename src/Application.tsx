import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/Login/Home';
import Registro from './componentes/Registro/Registro';
import Estadisticas from './componentes/Estadisticas/Estadisticas';


export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/Registro" element={<Registro/>} />
                <Route path="/Estadisticas" element={<Estadisticas/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;