import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa los componentes de las diferentes páginas
import Principal from './PaginaP';
import LoginPage from './Form';
import MiComponente from './prueba';
import Index2 from './index2';
import RegisterPage from './Register_form';
import { AuthProvider } from './authContext';

function Rutas() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<MiComponente />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/tour" element={<Index2 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default Rutas;
