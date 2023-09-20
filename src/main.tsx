import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Restauracao from './pages/Restauracao'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Restauracao />
  </React.StrictMode>,
)
