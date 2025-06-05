import React from 'react';

const Navbar = () => (
  <nav style={{ backgroundColor: '#000', padding: '10px', color: '#FFD700' }}>
    <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', padding: 0 }}>
      <li>Moto</li>
      <li>Scooter</li>
      <li>Moto elettriche</li>
      <li>Bici</li>
      <li>Bici elettriche</li>
      <li>Accessori</li>
    </ul>
  </nav>
);

export default Navbar;