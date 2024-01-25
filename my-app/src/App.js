import React from 'react';
import HomePage from './pages/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar';

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;