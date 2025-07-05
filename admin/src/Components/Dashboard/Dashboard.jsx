import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>

      <div className="dashboard-content">
        <section className="dashboard-welcome">
          <h2>Welcome, Mohamed Derfoufi!</h2>
          <p>Here’s a quick overview of your recent activities and performance:</p>
        </section>

        <section className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Sales</h3>
            <p>$12,345</p>
          </div>

          <div className="stat-card">
            <h3>New Users</h3>
            <p>320</p>
          </div>

          <div className="stat-card">
            <h3>Pending Orders</h3>
            <p>45</p>
          </div>
        </section>

        <section className="dashboard-recent-activities">
          <h2>Recent Activities</h2>
          <ul>
            <li>John Doe placed an order for Laptop.</li>
            <li>Jane Smith updated her profile.</li>
            <li>New feedback received from customer feedback form.</li>
          </ul>
        </section>

        <section className="dashboard-action">
          <h2>Quick Actions</h2>
          <div className="dashboard-actions">
            <div className="action-card">
              <h3>Manage Products</h3>
              <p>Update, add, or remove products from your catalog.</p>
            </div>
            <div className="action-card">
              <h3>View Reports</h3>
              <p>Analyze sales data and customer insights.</p>
            </div>
            <div className="action-card">
              <h3>Settings</h3>
              <p>Adjust your dashboard preferences and security settings.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
