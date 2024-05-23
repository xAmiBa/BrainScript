import "./App.css";
import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Setup from "../Setup/Setup";
import Project from "../Project/Project";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import NavBar from "../NavBar/NavBar";

function App() {
  return (
    <div>
      <div>
        <NavBar navigate={useNavigate()} />
      </div>
      <Routes>
        <Route path="/" element={<HomePage navigate={useNavigate()} />} />
        <Route path="/setup" element={<Setup navigate={useNavigate()} />} />
        <Route
          path="/your-project"
          element={<Project navigate={useNavigate()} />}
        />
        <Route
          path="/browse-projects"
          element={<ProjectsPage navigate={useNavigate()} />}
        />
      </Routes>
    </div>
  );
}

export default App;
