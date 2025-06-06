
import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const Menu = () => (
  <nav className="menu">
    <ul>
      <li>Moto
        <ul>
          <li>Ricambi</li>
          <li>Accessori</li>
        </ul>
      </li>
      <li>Scooter</li>
      <li>Moto elettriche</li>
      <li>Bici
        <ul>
          <li>Ricambi</li>
          <li>Accessori</li>
        </ul>
      </li>
      <li>Bici elettriche</li>
      <li>Offerte</li>
    </ul>
  </nav>
)

const App = () => (
  <div>
    <h1 style={{ textAlign: 'center', color: 'gold' }}>TotalZone</h1>
    <Menu />
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
