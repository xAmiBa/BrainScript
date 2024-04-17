import './App.css';
import React from "react";
import { useNavigate, Routes, Route} from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import Setup from '../Setup/Setup';
import Project from '../project/Project';

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
