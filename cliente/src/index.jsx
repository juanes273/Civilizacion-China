import './style.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import Form from './Form'
import HTMLViewer from './aja'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <HTMLViewer/>
    </StrictMode>
)

//<Form/>