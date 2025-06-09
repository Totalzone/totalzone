import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-black text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TotalZone - Your Quality Zone</h1>
          <nav>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/products" className="mr-4">Products</Link>
          </nav>
        </header>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <footer className="bg-black text-white p-4 text-center">
          <p>&copy; 2025 TotalZone. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to TotalZone</h2>
      <p>Your destination for premium products.</p>
    </div>
  );
}

function Products() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <p>Products coming soon.</p>
    </div>
  );
}

export default App;