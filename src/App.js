import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// import components
import Navbar from "./components/Navbar/Navbar";

// import pages
import Home from "./pages/Home/Home";
import Kosakata from "./pages/Kosakata/Kosakata.jsx";
import DaftarPelajaran from "./pages/Pelajaran/Index.jsx";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/kosakata" element={<Kosakata/>}/>
          <Route path="/pelajaran" element={<DaftarPelajaran />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
