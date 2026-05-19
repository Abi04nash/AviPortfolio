import React from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <>
    {/* <main className='container'></main> */}
      <div className='nav'>
        <main className='containe'>
        <h1 className='head' style={{
          background: 'linear-gradient(to right ,rgba(98, 136, 253, 1),rgba(219, 188, 253, 1))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          fontSize: "1.5rem",
          // fontWeight:"0",
          paddingLeft:"15px",
          paddingRight:"10px",
          cursor: "pointer",
        }}
        onClick={() => window.location.href = "https://abi04nash.github.io/AviPortfolio/"}
        >AvI Portfolio</h1>


<div className='M'><p className="mobile-heading" onClick={() => window.location.href = "https://abi04nash.github.io/AviPortfolio/"}>AviX</p></div>

<div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "fa-solid fa-xmark rotate" : "fa-solid fa-bars-staggered"}></i>
      </div>

      

<div className={`overla ${isOpen ? "show" : ""}`} onClick={() => setIsOpen(false)}></div>




        <div className={`list ${isOpen ? "open" : ""}`}>
          <NavLink  style={{
    textDecoration: "none",  
  }} to="/first" className={({ isActive }) => isActive ? "active" : ""}>
            <li>
            <span>Home</span>
            </li>
          </NavLink>
          <NavLink style={{
    textDecoration: "none", 
  }} to="/second" className={({ isActive }) => isActive ? "active" : ""}>
          <li>
          <span>About</span>
          </li>
            </NavLink>
             <NavLink style={{
    textDecoration: "none",  
  }} to="/third" className={({ isActive }) => isActive ? "active" : ""}>
          <li>
          <span>Projects</span>
          </li>
            </NavLink>
             <NavLink style={{
    textDecoration: "none",  // Removes underline
  }} to="/fourth" className={({ isActive }) => isActive ? "active" : ""}>
          <li>
          <span>Contact</span>
          </li>
            </NavLink>
        </div>
        </main>
      </div>
      

    </>
  )
}

export default Nav
