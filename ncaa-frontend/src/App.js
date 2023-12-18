// App.js (or Home.js in some cases)

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; // Import the Home component
import LatestGameData from './components/LatestGameData';
import QueryGameId from './components/QueryGameId';
import './styles/Navigation.css'

const App = () => {
  return (
    <Router>
      <div>
        <nav className="nav-container">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/latest">LatestGame</Link>
            </li>
            <li className="nav-item">
              <Link to="/query">QueryGame</Link>
            </li>
          </ul>
        </nav>

        {/* Routes should be enclosed in <Routes> */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use the Home component as the homepage */}
          <Route path="/latest" element={<LatestGameData />} />
          <Route path="/query" element={<QueryGameId />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
