import './style.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import Form from './Form'
import Prueba from './prueba'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Prueba/>
    </StrictMode>
)

//<Form/>