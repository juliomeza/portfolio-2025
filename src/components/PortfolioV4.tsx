import React from 'react';
import './PortfolioV4.css';

const PortfolioV4: React.FC = () => {
  return (
    <div className="portfolio-v4">
      <header className="pv4-header">
        <div className="pv4-container">
          <h1 className="pv4-name">Julio Meza</h1>
          <p className="pv4-tagline">IT Operations Manager & Data Analyst</p>
        </div>
      </header>

      <main className="pv4-main-content">
        <section id="pv4-intro" className="pv4-section">
          <div className="pv4-container">
            <p className="pv4-intro-text">
              Leveraging technology and data to optimize operations and drive insightful business decisions. 
              Dedicated to creating efficient, scalable solutions with a focus on clarity and impact.
            </p>
          </div>
        </section>

        <section id="pv4-focus" className="pv4-section">
          <div className="pv4-container">
            <h2 className="pv4-section-title">Core Focus</h2>
            <div className="pv4-focus-grid">
              <div className="pv4-focus-item">IT Operations Excellence</div>
              <div className="pv4-focus-item">Data-Driven Analysis</div>
              <div className="pv4-focus-item">Process Automation</div>
              <div className="pv4-focus-item">Strategic Technology Implementation</div>
            </div>
          </div>
        </section>

        <section id="pv4-work" className="pv4-section">
          <div className="pv4-container">
            <h2 className="pv4-section-title">Selected Work</h2>
            <div className="pv4-work-grid">
              <div className="pv4-project-card">
                <h3 className="pv4-project-title">Project Alpha</h3>
                <p className="pv4-project-description">Streamlined IT support system, reducing ticket resolution time by 30%.</p>
                <span className="pv4-project-tech">React / Node.js / PostgreSQL</span>
              </div>
              <div className="pv4-project-card">
                <h3 className="pv4-project-title">Data Insights Dashboard</h3>
                <p className="pv4-project-description">Developed an interactive dashboard for visualizing key business metrics.</p>
                <span className="pv4-project-tech">Python (Pandas, Plotly) / Tableau</span>
              </div>
              <div className="pv4-project-card">
                <h3 className="pv4-project-title">Automation Initiative</h3>
                <p className="pv4-project-description">Automated repetitive tasks, saving an estimated 200+ man-hours annually.</p>
                <span className="pv4-project-tech">PowerShell / Python / UiPath</span>
              </div>
            </div>
          </div>
        </section>

        <section id="pv4-connect" className="pv4-section">
          <div className="pv4-container pv4-connect-content">
            <h2 className="pv4-section-title">Connect</h2>
            <p>
              Open to collaborations and new opportunities. <br />
              Let's discuss how we can achieve great results together.
            </p>
            <a href="mailto:julio.meza@example.com" className="pv4-email-link">julio.meza@example.com</a>
          </div>
        </section>
      </main>

      <footer className="pv4-footer">
        <div className="pv4-container">
          <p>&copy; {new Date().getFullYear()} Julio Meza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioV4;
