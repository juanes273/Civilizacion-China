import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Index2 from './index2';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/index2" element={<Index2 />} />
      </Routes>
    </Router>
  );
}

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://civilizacion-china.onrender.com/api/login', { email, password });
      setMessage(response.data.message);
      navigate('/index2');
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
            alt='Login image'
            className='w-0.1'
            style={{ objectPosition: 'left' }}
          />
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
            <h3 className='fw-normal mb-3 ps-5 pb-3' style={{ letterSpacing: '1px' }}>
              Log in
            </h3>

            <form onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                label='Email address'
                id='formControlLg'
                type='email'
                size='lg'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                label='Password'
                id='formControlLg'
                type='password'
                size='lg'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <MDBBtn className='mb-4 px-5 mx-5 w-100' color='info' size='lg' type='submit'>
                Login
              </MDBBtn>
            </form>

            <p className='small mb-5 pb-lg-3 ms-5'>
              <a className='text-muted' href='#!'>
                Forgot password?
              </a>
            </p>
          </div>
        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Soldier_Horse.JPG'
            alt='Login image'
            className='w-100'
            style={{ objectFit: 'cover', objectPosition: 'left' }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
