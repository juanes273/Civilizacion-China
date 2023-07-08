import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Cargando');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => prevText === 'Cargando...' ? 'Cargando' : prevText + '.');
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post('https://civilizacion-china.onrender.com/api/register', { name, email, password });
      setMessage(response.data.message);
      navigate('/principal');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm='6'>
          <div className='d-flex flex-row ps-1 pt-1'>
            <MDBIcon fas icon='crow fa-3x me-3' style={{ color: '#709085' }} />
            <img
              src='https://www.logocrea.com/wp-content/uploads/2016/07/buda1.png'
              alt='Register image'
              className='w-0.1'
              style={{ objectPosition: 'left' }}
            />
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
            <h3 className='fw-normal mb-3 ps-5 pb-3' style={{ letterSpacing: '1px' }}>
              Registro
            </h3>

            <form onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                label='Nombre'
                id='formControlLg'
                type='text'
                size='lg'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                label='Correo'
                id='formControlLg'
                type='email'
                size='lg'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                label='Contraseña'
                id='formControlLg'
                type='password'
                size='lg'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <MDBBtn className='mb-4 px-5 mx-5 w-100' color='info' size='lg' type='submit'>
                Registrarse
              </MDBBtn>
            </form>

            <p className='small mb-5 pb-lg-3 ms-5'>
              <Link to='/login' className='text-muted'>
                Ya tienes una cuenta? Ingresa aquí
              </Link>
            </p>
          </div>
        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Soldier_Horse.JPG'
            alt='Register image'
            className='w-100'
            style={{ objectFit: 'cover', objectPosition: 'left' }}
          />
        </MDBCol>
      </MDBRow>

      {isLoading && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '9999'
          }}
        >
          <div
            className='spinner-border text-light'
            role='status'
            style={{ width: '3rem', height: '3rem' }}
          >
            <span className='visually-hidden'>Loading...</span>
          </div>
          <p className="text-light ms-2">{loadingText}</p>
        </div>
      )}
    </MDBContainer>
  );
}

export default RegisterPage;
