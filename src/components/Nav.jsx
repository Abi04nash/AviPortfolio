import React from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className='nav'>
        <h1 className='head' style={{
          background: 'linear-gradient(to right, rgb(89, 89, 228), rgb(144, 144, 230), rgb(237, 91, 203), rgb(251, 153, 153))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          fontFamily: `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`,
          fontSize: "2.3rem"
        }}>Avi's Portfolio</h1>


<div className='M'><h1 className="mobile-heading">AviX</h1></div>

<div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      

<div className={`overla ${isOpen ? "show" : ""}`} onClick={() => setIsOpen(false)}></div>




        <div className={`list ${isOpen ? "open" : ""}`}>
          <NavLink  style={{
    textDecoration: "none",  
  }} to="/first" className={({ isActive }) => isActive ? "active" : ""}>
            <li><i class="fa-solid fa-house"></i> Home</li>
          </NavLink>
          <NavLink style={{
    textDecoration: "none", 
  }} to="/second" className={({ isActive }) => isActive ? "active" : ""}>
          <li><i class="fa-solid fa-user"></i> About</li>
            </NavLink>
             <NavLink style={{
    textDecoration: "none",  
  }} to="/third" className={({ isActive }) => isActive ? "active" : ""}>
          <li><i class="fa-solid fa-file"></i> Project</li>
            </NavLink>
             <NavLink style={{
    textDecoration: "none",  // Removes underline
  }} to="/fourth" className={({ isActive }) => isActive ? "active" : ""}>
          <li><i class="fa-solid fa-id-badge"></i> Contact</li>
            </NavLink>
        </div>


      </div>
    </>
  )
}

export default Nav
