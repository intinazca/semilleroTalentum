import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/Login/Home';
import Registro from './componentes/Registro/Registro';


export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/Registro" element={<Registro/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;