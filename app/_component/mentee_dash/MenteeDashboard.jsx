// pages/dashboard.js
import React from 'react';

const MenteeDashboard = () => {
  return (
    <div className="dashboard-container">
      <header>
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="welcome-section">
          <h1>Mentee Dashboard</h1>
          <p>Welcome to your dashboard!</p>
        </section>
        <section className="stats-section">
          <h2>Statistics</h2>
          <ul>
            <li><strong>Completed tasks:</strong> 10</li>
            <li><strong>Upcoming tasks:</strong> 5</li>
            <li><strong>Total progress:</strong> 60%</li>
          </ul>
        </section>
        <section className="tasks-section">
          <h2>Tasks</h2>
          <ul>
            <li><a href="#">Task 1: Complete assignment</a></li>
            <li><a href="#">Task 2: Attend meeting</a></li>
            <li><a href="#">Task 3: Review notes</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MenteeDashboard;