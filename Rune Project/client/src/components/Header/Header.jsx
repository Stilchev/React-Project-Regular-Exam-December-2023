import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="dark-diablo-header">
    <div className="header-background"></div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/runes">Runes</Link>
        </li>
        <li>
          <Link to="/runes-calculator">Rune Calculator</Link>
        </li>
        <li>
          <Link to="/runes-project">Rune Project</Link>
        </li>
        <li>
          <Link to="/hrs">High Runes</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  </header>
  );
};

export default Header;