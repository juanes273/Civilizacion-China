import './style.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Rutas from './Router';


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Rutas/>
    </StrictMode>
)