import {React, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Header from './components/Navbar/Header/Header';
import { useLocation } from 'react-router-dom';

// Different Roboto font weights for Material UI
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;