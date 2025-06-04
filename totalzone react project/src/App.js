import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{padding: '20px', textAlign: 'center'}}>
        <h1>Benvenuto su TotalZone</h1>
        <p>Il tuo shop di ricambi moto e bici</p>
      </div>
    </div>
  );
}

export default App;
