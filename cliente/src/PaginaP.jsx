import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Index2 from "./index2";
import backgroundImage from "./background.jpg";
import { render } from "@react-three/fiber";
import logo from "./assets/img/logo.png"

// Componente Principal
function Principal() {
    return (
      <div>
        {/* notification for small viewports and landscape oriented smartphones */}
        <div className="device-notification">
          <a className="device-notification--logo" href="#0">
            <img src={logo} alt="Global" />
            <p>Global</p>
          </a>
          <p className="device-notification--message">Global has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't be disappointed.</p>
        </div>
  
        <div className="perspective effect-rotate-left">
          <div className="container">
            <div className="outer-nav--return"></div>
            <div id="viewport" className="l-viewport">
              <div className="l-wrapper">
                <header className="header">
                  <a className="header--logo" href="#0">
                    <img src={logo} alt="Global" />
                    <p>Global</p>
                  </a>
                  <button className="header--cta cta">Hire Us</button>
                  <div className="header--nav-toggle">
                    <span></span>
                  </div>
                </header>
                <nav className="l-side-nav">
                  <ul className="side-nav">
                    <li className="is-active"><span>Home</span></li>
                    <li><span>Works</span></li>
                    <li><span>About</span></li>
                    <li><span>Contact</span></li>
                    <li><span>Hire us</span></li>
                  </ul>
                </nav>
                <ul className="l-main-content main-content">
                  <li className="l-section section section--is-active">
                    <div className="intro">
                      <div className="intro--banner">
                        <h1>Your next<br />interactive<br />experience</h1>
                        <button className="cta">Hire Us
                          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style={{ enableBackground: 'new 0 0 150 118' }} xmlSpace="preserve">
                            <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                              <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                            </g>
                          </svg>
                          <span className="btn-background"></span>
                        </button>
                        <img src="assets/img/introduction-visual.png" alt="Welcome" />
                      </div>
                    </div>
                  </li>
                  <li className="l-section section">
                    <div className="work">
                      <h2>Selected Works</h2>
                      <div className="work--lockup">
                        <ul className="slider">
                          <li className="slider--item slider--item-left">
                            <a href="#0">
                              <div className="slider--item-image">
                                <img src="assets/img/work-image.jpg" alt="Work" />
                              </div>
                              <p className="slider--item-title">Digital Agency</p>
                            </a>
                          </li>
                          <li className="slider--item slider--item-center">
                            <a href="#0">
                              <div className="slider--item-image">
                                <img src="assets/img/work-image.jpg" alt="Work" />
                              </div>
                              <p className="slider--item-title">Photography Studio</p>
                            </a>
                          </li>
                          <li className="slider--item slider--item-right">
                            <a href="#0">
                              <div className="slider--item-image">
                                <img src="assets/img/work-image.jpg" alt="Work" />
                              </div>
                              <p className="slider--item-title">Architecture Studio</p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="l-section section">
                    <div className="about">
                      <h2>About Us</h2>
                      <div className="about--banner">
                        <div className="about--banner-image">
                          <img src="assets/img/about-image.png" alt="About" />
                        </div>
                        <div className="about--banner-text">
                          <h3>We shape brands through exploration, applying in-depth<br />research to challenge assumptions at every turn.</h3>
                          <p className="preamble">Our team of experts are equipped with the knowledge and experience needed to<br />tell your brand's story and craft&nbsp;a design that truly represents you.</p>
                          <p>Our clients come to us for our&nbsp;unparalleled&nbsp;ability to&nbsp;create<br />and execute&nbsp;groundbreaking brand experiences.</p>
                          <p><a href="#0">Learn more</a></p>
                        </div>
                      </div>
                      <div className="about--options">
                        <ul className="options--list">
                          <li><a href="#0"><h4>Start a project</h4></a></li>
                          <li><a href="#0"><h4>View our work</h4></a></li>
                          <li><a href="#0"><h4>Meet the team</h4></a></li>
                          <li><a href="#0"><h4>Contact us</h4></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="l-section section">
                    <div className="contact">
                      <h2>Contact</h2>
                      <div className="contact--lockup">
                        <div className="location">
                          <h3>We Are Here</h3>
                          <ul>
                            <li>Level 13, 2 Elizabeth St,</li>
                            <li>Melbourne, Victoria 3000</li>
                            <li><a href="#0">Get directions</a></li>
                          </ul>
                        </div>
                        <div className="phone">
                          <h3>Give Us A Call</h3>
                          <ul>
                            <li>Office: +61 03 8376 6284</li>
                            <li>Mobile: +61 040 465 345</li>
                          </ul>
                        </div>
                        <div className="email">
                          <h3>Send Us An Email</h3>
                          <ul>
                            <li><a href="mailto:info@global.co">info@global.co</a></li>
                            <li><a href="mailto:account@global.co">account@global.co</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="l-side-nav--open">
                  <span className="nav-trigger"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

// Estilos
const Wrapper = styled.div`
  padding-top: 150px;
  display: grid;
  justify-items: center;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Description = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  margin-top: 40px;
`;

const ModelViewer = styled.div`
  /* Estilos para el contenedor del modelo .glb */
`;

const Paragraph = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

// Componente de enrutamiento
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/otrocomponente" element={<Index2 />} />
      </Routes>
    </Router>
  );
}

export default App;
