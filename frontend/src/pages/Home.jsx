import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>
        AI Employee Analytics
        <br />
        & Recommendation System
      </h1>

      <p>
        Smart AI powered HR platform for employee management,
        analytics, promotion recommendations and performance tracking.
      </p>

      <Link to="/employees">
        <button className="hero-btn">
          Explore Employees
        </button>
      </Link>

      <div className="stats-grid container">
        <div className="stats-card">
          <h2>100+</h2>
          <p>Employees Managed</p>
        </div>

        <div className="stats-card">
          <h2>AI</h2>
          <p>Smart Recommendations</p>
        </div>

        <div className="stats-card">
          <h2>24/7</h2>
          <p>Analytics Monitoring</p>
        </div>
      </div>
    </div>
  );
}

export default Home;