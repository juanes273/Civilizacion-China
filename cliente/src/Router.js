import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa los componentes de las diferentes páginas
import Principal from './PaginaP';
import LoginPage from './Form';
import Index2 from './index2';
import RegisterPage from './Register_form';
import { AuthProvider } from './authContext';
import Secciones from './Secciones';
import Historia from './Historia';
import Cultura from './Cultura';
import Religion from './Religion';
import Ciencia from './Ciencia';

function Rutas() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/tour" element={<Index2 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/secciones" element={<Secciones />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/cultura" element={<Cultura />} />
        <Route path="/religion" element={<Religion />} />
        <Route path="/ciencia" element={<Ciencia />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default Rutas;
