import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to NCAA Stats</h1>
        <p>Your go-to destination for NCAA match analytics</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Real-time Stats</h2>
          <p>Get access to live updates and statistics of ongoing matches.</p>
          <Link to="/latest">Go to Latest Game Data</Link>
        </div>
        <div className="feature">           
          <h2>Game Analysis</h2>
          <p>Explore in-depth analysis and historical data of past games.</p>
          <Link to="/query">Go to Query Game by ID</Link>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 NCAA Stats</p>
      </footer>
    </div>
  );
};

export default Home;
