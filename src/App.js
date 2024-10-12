import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// import components
import Navbar from "./components/Navbar/Navbar";

// import pages
import Home from "./pages/Home/Home";
import Kosakata from "./pages/Kosakata/Kosakata.jsx";
import DaftarPelajaran from "./pages/Pelajaran/Index.jsx";
import N5 from './pages/Pelajaran/Pages/N5/Index.jsx'

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollHeight(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kosakata" element={<Kosakata />} />
          <Route path="/pelajaran" element={<DaftarPelajaran />} />
          <Route path='/pelajaran/Minna-no-nihon-go-1' element={<N5 />} />
        </Routes>
      </Router>

      <div
        className="scrollbar"
        style={{ height: `${scrollHeight}%`, backgroundColor: 'tomato' }}
      ></div>
    </div>
  );
}

export default App;