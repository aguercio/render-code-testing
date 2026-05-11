import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_BANNER_URL } from '../config';

function Home() {
  return (
    // Recreate the provided home-page hero using the large travel image.
    <div
      className="banner"
      style={{
        backgroundImage: `url("${HOME_BANNER_URL}")`,
        height: '800px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        <h1>Travel Photos</h1>
        <h3>Upload and Share</h3>
        <p>
          {/* These links move the user directly to the other required pages. */}
          <Link to="/browse" className="button-link">
            Browse
          </Link>
          <Link to="/about" className="button-link">
            About
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
