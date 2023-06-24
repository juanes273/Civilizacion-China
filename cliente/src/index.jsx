import './style.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import Form from './Form'
import 'bootstrap/dist/css/bootstrap.css';
import Principal from './PaginaP';

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Principal/>
    </StrictMode>
)