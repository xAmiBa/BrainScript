import './App.css';
import React from "react";
import { useNavigate, Routes, Route} from "react-router-dom";
import HomePage from '../HomePage/HomePage.js';
import Setup from '../Setup/Setup.js';
import Project from '../project/Project.js';

function App() {
  
  return (
      <Routes>
          <Route path="/" element={ <HomePage navigate={ useNavigate() } />} />
          <Route path="/setup" element={ <Setup navigate={ useNavigate() } />} />
          <Route path="/your-project" element={ <Project navigate={ useNavigate() } />} />
      </Routes>
  );
}

export default App;
