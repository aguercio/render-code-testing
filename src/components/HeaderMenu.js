import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderMenu() {
  return (
    // Use NavLink so the active route can be styled differently.
    <nav aria-label="Primary">
      <NavLink
        exact
        to="/home"
        className="button-link"
        activeClassName="button-link-active"
      >
        Home
      </NavLink>
      <NavLink
        to="/browse"
        className="button-link"
        activeClassName="button-link-active"
      >
        Browse
      </NavLink>
      <NavLink
        to="/about"
        className="button-link"
        activeClassName="button-link-active"
      >
        About
      </NavLink>
    </nav>
  );
}

export default HeaderMenu;
