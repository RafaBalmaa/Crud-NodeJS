import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Componentes/Login/Login';
import Cadastro from './Componentes/Cadastro/Cadastro';
import Acesso from './Componentes/Acesso/Acesso';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Acesso" element={<Acesso />} />
      </Routes>
    </Router>
  </div>
);

