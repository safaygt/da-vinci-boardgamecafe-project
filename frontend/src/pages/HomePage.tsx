import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/css/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Web Development Assignment</h1>
        <p className="home-subtitle">Lütfen görüntülemek istediğiniz listeyi seçin:</p>
        <div className="home-actions">
          <Link to="/users" className="home-link">
            <button className="home-btn users-btn">👤 View Users</button>
          </Link>
          <Link to="/posts" className="home-link">
            <button className="home-btn posts-btn">📝 View Posts</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
