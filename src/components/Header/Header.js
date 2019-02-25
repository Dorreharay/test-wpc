import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header({ currentLocation }) {
  return (
    <header className="header">
      <div className="lg" />
      <div className="nav">
        <ul className="ulNav">
          <Link to="/" className={currentLocation === '/' ? 'tabHovered' : 'tab'}>
            Рецепт
          </Link>
          <Link
            to="b"
            className={currentLocation === '/b' ? 'tabHovered' : 'tab'}
          >
            Облік
          </Link>
          <Link to="/c" className={currentLocation === '/c' ? 'tabHovered' : 'tab'}>
            Зміни
          </Link>
          <Link
            to="/d"
            className={currentLocation === '/d' ? 'tabHovered' : 'tab'}
          >
            Правила
          </Link>
        </ul>
        <button type="button" className="exit">
          <Link to="/">Вийти</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
