import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Tienda</Link></li>
          <li><Link to="/category/moviles">Moviles</Link></li>
          <li><Link to="/category/consolas">Consolas</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;