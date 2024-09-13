// Home.js
import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the CSS file for styling

function Home() {
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch random image URL from the server
    fetch('http://localhost:3001/artworks')
      .then((response) => response.json())
      .then((items) => {
        if (items && items.length > 0) {
          const randomImage = items[Math.floor(Math.random() * items.length)];
          setImage(randomImage.imagePath);
        } else {
          setError('No artworks found in the response');
        }
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
        setError('Error fetching image');
      });
  }, []);

  return (
    <div className="home-container">

      <div className="description-container">

        <h1>Interact with Arts</h1>
        <p>
          Are you an Art maniac?
          Then you are in the right place.
        </p>
        {error && <p className="error-message">{error}</p>}

        <div className="buttons-container">
          <button className="get-account-button">Get Free Account</button>
          <button className="learn-more-button">Learn More</button>
        </div>

      </div>
      

      <div className="image-container">
        {image && (
          <img
            src={image}
            alt="Artwork"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
