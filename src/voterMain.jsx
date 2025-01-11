import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Voter from "./voter.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Voter />
    </StrictMode>,
)
