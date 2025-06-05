import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Benvenuto su TotalZone</h1>
        <p>Il tuo shop di ricambi moto e bici</p>
      </main>
    </div>
  );
}

export default App;