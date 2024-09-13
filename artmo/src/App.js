// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import SignUp from './Components/SignUp'; // Import your SignUp component
import LogIn from './Components/LogIn'; // Import your LogIn component
import Artworks from './Components/ArtWorks'; // Import your Artworks component
import Cart from './Components/Cart'; // Import your Cart component
import More from './Components/More'; // Import your More component

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/more" element={<More />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
