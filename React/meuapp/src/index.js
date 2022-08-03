import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Paginas/Login/Login';
import Cadastro from './Paginas/Cadastro/Cadastro';
import Acesso from './Paginas/Acesso/Acesso';
import Error from './Paginas/Error/Error';
import Perfil from './Paginas/Perfil/Perfil';
import Kabum from './Paginas/SubPaginas/Kabum/Kabum';
import Dev from './Paginas/SubPaginas/Dev/Dev';
import Marcas from './Paginas/SubPaginas/Marcas/Marcas';
// import { useEffect, useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Acesso" element={<Acesso />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Acesso" element={<Acesso />} />
        <Route path="/Kabum" element={<Kabum />} />
        <Route path="/Dev" element={<Dev />} />
        <Route path="/Marcas" element={<Marcas />} />
      </Routes>
    </Router>
  </div>
);

