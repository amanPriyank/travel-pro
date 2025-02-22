import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./LandingPage.css";
import parisImage from "./assets/paris.jpg"; 
import dubaiImage from "./assets/dubai.jpg"; 

const LandingPage = () => {
  const navigate = useNavigate(); 

  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">TriPier</div>
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Destination</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <div className="auth-links">
          <a onClick={() => navigate("/login")}>Sign in</a>
          <button onClick={() => navigate("/register")} className="signup-btn">
            Sign up
          </button>
        </div>
      </nav>
      <header className="hero-section">
        <h1>Discover the Best <br /> Place Welcome!</h1>
        <p>For a very low cost, visit every beautiful place on the planet. The ascent to the summit of the location is never lengthier than you expect.</p>
        <div className="search-bar">
          <input type="text" placeholder="Start your search" />
        </div>
      </header>
      <section className="places">
        <div className="place">
          <img src={parisImage} alt="Paris" />
          <h3>Paris, France</h3>
          <p>Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy, and culture.</p>
        </div>
        <div className="place">
          <img src={dubaiImage} alt="Dubai" />
          <h3>Dubai, UAE</h3>
          <p>Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture, and a lively nightlife scene.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
