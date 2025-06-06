import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const Categorie = [
  { nome: 'Moto', sottocategorie: ['Strada', 'Enduro', 'Motocross', 'Custom', 'Ricambi', 'Accessori'] },
  { nome: 'Scooter', sottocategorie: ['Ricambi', 'Accessori'] },
  { nome: 'Moto Elettriche', sottocategorie: ['Stradali', 'Fuoristrada'] },
  { nome: 'Bici', sottocategorie: ['Corsa', 'MTB', 'Ricambi', 'Accessori'] },
  { nome: 'Bici Elettriche', sottocategorie: ['City', 'Trekking'] },
  { nome: 'Offerte', sottocategorie: [] }
]

const Menu = () => (
  <nav className="menu">
    {Categorie.map(cat => (
      <div key={cat.nome} className="menu-item">
        <strong>{cat.nome}</strong>
        {cat.sottocategorie.length > 0 && (
          <ul>
            {cat.sottocategorie.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        )}
      </div>
    ))}
  </nav>
)

const App = () => (
  <div>
    <header className="header">
      <img src="/logo.png" alt="TotalZone" className="logo"/>
      <h1>TotalZone</h1>
      <p className="slogan">Your Quality Zone</p>
    </header>
    <Menu />
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
