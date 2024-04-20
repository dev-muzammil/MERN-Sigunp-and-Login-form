import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <i className="fa-solid fa-font-awesome"></i>
        <a href="#">Muzammil Shaikh</a>
      </div>
      <div className="menu">
        <div className="menu-links">
          <a href="/">Home</a>
        </div>
        <button className="log-in"><a href="/register">Register</a></button>
        <button className="log-in"><a href="/login">Login</a></button>      
      </div>
    </nav>
    </>
  )
}

export default Navbar
