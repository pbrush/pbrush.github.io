// components/Navbar.js
import React, { useImperativeHandle } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="site-title">Phil Brush Portfolio</Link>
      <ul>
        <CustomLink to="/"> Home </CustomLink>
        <CustomLink to="/Projects"> Projects </CustomLink>
        <CustomLink to="/About"> About </CustomLink>
      {/* <li  className="active">
          <Link to="/"> Home </Link>
        </li>
        <li  className="active">
          <Link to="/Projects"> Projects </Link>
        </li>
        <li className="active">
          <Link to="/About"> About </Link>
        </li> */}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
