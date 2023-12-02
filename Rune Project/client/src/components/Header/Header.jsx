import React from 'react';
import { Link } from 'react-router-dom';
import './Header.module.css';

const Header = () => {
  return (
    <header className="dark-diablo-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/runes">Runes</Link>
          </li>
          <li>
            <Link to="/rune-calculator">Rune Calculator</Link>
          </li>
          <li>
            <Link to="/rune-project">Rune Project</Link>
          </li>
          <li>
            <Link to="/high-runes">High Runes</Link>
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