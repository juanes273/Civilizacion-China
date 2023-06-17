import React from 'react';
import './App.css';

const Prueba = () => {
  return (
    <div className="container">
      <header>
        <h1>Bienvenido a mi página principal</h1>
        <p>Esta es una página principal personalizada en React</p>
      </header>
      <main>
        <section>
          <h2>Sobre nosotros</h2>
          <p>Somos un equipo dedicado a crear aplicaciones web increíbles utilizando React.</p>
        </section>
        <section>
          <h2>Proyectos</h2>
          <ul>
            <li>Proyecto 1</li>
            <li>Proyecto 2</li>
            <li>Proyecto 3</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Derechos de autor &copy; 2023</p>
      </footer>
    </div>
  );
};

export default Prueba;
