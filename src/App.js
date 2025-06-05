import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ backgroundColor: '#000', color: 'gold', minHeight: '100vh', fontFamily: 'Arial' }}>
      <header style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid gold' }}>
        <h1>TotalZone</h1>
        <nav>
          <Link to="/" style={{ margin: '0 10px', color: 'gold' }}>Home</Link>
          <Link to="/shop" style={{ margin: '0 10px', color: 'gold' }}>Shop</Link>
          <Link to="/login" style={{ margin: '0 10px', color: 'gold' }}>Login</Link>
          <Link to="/register" style={{ margin: '0 10px', color: 'gold' }}>Registrati</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Benvenuto su TotalZone</h2>;
}

function Shop() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Shop</h2>
      <ul>
        <li>Moto</li>
        <li>Scooter</li>
        <li>Moto Elettriche</li>
        <li>Bici</li>
        <li>Bici Elettriche</li>
        <li>Accessori per Moto</li>
        <li>Accessori per Bici</li>
      </ul>
    </div>
  );
}

function Login() {
  return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Pagina di Login</h2>;
}

function Register() {
  return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Pagina di Registrazione</h2>;
}

export default App;