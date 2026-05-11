import React from 'react';
import HeaderMenu from './HeaderMenu';

function Header() {
  return (
    // Show the shared app title and navigation across all routes.
    <header className="header">
      <div className="header-titles">
        <h1>Travel Image App</h1>
        <p>Using create-react-app</p>
      </div>
      {/* HeaderMenu contains the route links for the app pages. */}
      <HeaderMenu />
    </header>
  );
}

export default Header;
