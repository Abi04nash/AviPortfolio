import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav'
import First from './components/First'
import Second from './components/Second'
import Foot from './components/Foot'
import Third from './components/Third';
import Fourth from './components/Fourth';



function AnimatedRoutes() {
  const location = useLocation(); // Get current route

  return (
    <div key={location.pathname} className="page">
       <Routes>
        <Route path="/" element={<First />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
      </Routes>
    </div>
  );
}



  

  function App() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
  document.body.style.overflow = isOpen ? 'hidden' : 'auto';
}, [isOpen]);

  return (
    <HashRouter>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Apply blur to entire content when nav is open */}
      <div className={`main-content ${isOpen ? 'blurred' : ''}`}>
        <AnimatedRoutes />
        <Foot />
      </div>

      {/* Overlay for blur effect */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </HashRouter>
  )
}



export default App



