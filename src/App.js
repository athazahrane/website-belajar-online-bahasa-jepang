import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// import components
import Navbar from "./components/Navbar/Navbar";

// import pages
import Home from "./pages/Home/Home";
import Kosakata from "./pages/Kosakata/Kosakata.jsx";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/kosakata" element={<Kosakata/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
