import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__links">
        <NavLink to="/"
          className={({isActive}) => (isActive ? "header__link header__link_active" : "header__link")}>
          Все котики
        </NavLink>
        <NavLink to="/liked-cats"
          className={({isActive}) => (isActive ? "header__link header__link_active" : "header__link")}>
          Любимые котики
        </NavLink>
      </div>
    </header>
  );
};

export default Header;