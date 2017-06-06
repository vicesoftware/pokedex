import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink to="/pokedex">Pokedex</NavLink></li>
      <li><NavLink to="/deck">Deck</NavLink></li>
      <li><NavLink to="/addnew">NewPokemon</NavLink></li>
    </ul>
  </header>
);

export default Header;
