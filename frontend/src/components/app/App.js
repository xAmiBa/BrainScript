import './App.css';
import React from "react";
import { useNavigate, Routes, Route} from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import Setup from '../Setup/Setup';

function App() {
  
  return (
      <Routes>
          <Route path="/" element={ <HomePage navigate={ useNavigate() } />} />
          <Route path="/setup" element={ <Setup navigate={ useNavigate() } />} />
      </Routes>
  );
}

export default App;
