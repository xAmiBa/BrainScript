import './App.css';
import React from "react";
import { useNavigate, Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import Setup from '../Setup/Setup';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <HomePage navigate={ useNavigate() } />} />
          <Route path="/setup" element={ <Setup navigate={ useNavigate() } />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
