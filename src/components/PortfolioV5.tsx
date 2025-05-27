import React from 'react';
import './PortfolioV5.css';

const PortfolioV5: React.FC = () => {
  return (
    <div className="portfolio-v5">
      <aside className="pv5-sidebar">
        <div className="pv5-sidebar-header">
          <h1 className="pv5-name">Julio Meza</h1>
          <span className="pv5-role">Tech Leader & Data Enthusiast</span>
        </div>
        <nav className="pv5-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <footer className="pv5-sidebar-footer">
          <span>&copy; {new Date().getFullYear()} JM</span>
        </footer>
      </aside>
      <main className="pv5-main">
        <section id="about" className="pv5-section pv5-about">
          <h2>About</h2>
          <p>
            I am passionate about building robust systems and empowering teams to deliver impactful solutions. My approach combines technical expertise with a human touch.
          </p>
        </section>
        <section id="experience" className="pv5-section pv5-experience">
          <h2>Experience</h2>
          <ul>
            <li>
              <strong>IT Operations Manager</strong> — Woodfield, 2021–Present
              <br />
              Leading a team to optimize infrastructure and automate business processes.
            </li>
            <li>
              <strong>Data Analyst</strong> — Freelance, 2018–2021
              <br />
              Delivered actionable insights for clients in retail and logistics.
            </li>
          </ul>
        </section>
        <section id="projects" className="pv5-section pv5-projects">
          <h2>Projects</h2>
          <div className="pv5-project-list">
            <div className="pv5-project-card">
              <h3>OpsBoard</h3>
              <p>Unified dashboard for IT operations monitoring and alerting.</p>
            </div>
            <div className="pv5-project-card">
              <h3>InsightFlow</h3>
              <p>Data pipeline for real-time analytics and reporting.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="pv5-section pv5-contact">
          <h2>Contact</h2>
          <p>
            Email: <a href="mailto:julio.meza@example.com">julio.meza@example.com</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default PortfolioV5;
