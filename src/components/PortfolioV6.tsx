import React from 'react';
import './PortfolioV6.css';

const PortfolioV6: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="portfolio-v6">
      <div className="pv6-container">
        <header className="pv6-header">
          <h1 className="pv6-title">
            <span className="pv6-title-line">THE WAY</span>
            <span className="pv6-title-line">OF CODE</span>
          </h1>
          <p className="pv6-subtitle">The Timeless Art of Digital Craftsmanship</p>
        </header>
        
        <div className="pv6-symbol">
          <div className="pv6-circle pv6-circle-1"></div>
          <div className="pv6-circle pv6-circle-2"></div>
          <div className="pv6-dot"></div>
        </div>
        
        <section className="pv6-section pv6-philosophy">
          <h2>Philosophy</h2>
          <p>
            In the realm of code, as in life, simplicity reveals profound elegance.
            My work embodies balance between form and function, aesthetics and performance.
          </p>
          <p>
            "The skilled programmer writes code that seems not to have been written at all."
          </p>
        </section>
        
        <section className="pv6-section pv6-craft">
          <h2>Craft</h2>
          <div className="pv6-craft-items">
            <div className="pv6-craft-item">
              <h3>Mindful Architecture</h3>
              <p>Systems designed with intention, clarity, and foresight.</p>
            </div>
            <div className="pv6-craft-item">
              <h3>Elegant Solutions</h3>
              <p>Finding the simplest path through complexity.</p>
            </div>
            <div className="pv6-craft-item">
              <h3>Harmonious Integration</h3>
              <p>Creating technology that works in concert with human needs.</p>
            </div>
          </div>
        </section>
        
        <section className="pv6-section pv6-journey">
          <h2>Journey</h2>
          <div className="pv6-timeline">
            <div className="pv6-timeline-item">
              <div className="pv6-timeline-year">Now</div>
              <div className="pv6-timeline-content">
                <h3>IT Operations Manager</h3>
                <p>Leading with wisdom, empowering through technology</p>
              </div>
            </div>
            <div className="pv6-timeline-item">
              <div className="pv6-timeline-year">Past</div>
              <div className="pv6-timeline-content">
                <h3>Data Analyst</h3>
                <p>Finding meaning in patterns, truth in numbers</p>
              </div>
            </div>
            <div className="pv6-timeline-item">
              <div className="pv6-timeline-year">Beginning</div>
              <div className="pv6-timeline-content">
                <h3>Developer</h3>
                <p>Learning the foundational principles of creation</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="pv6-section pv6-contact">
          <h2>Connection</h2>
          <p className="pv6-contact-text">
            The journey of a thousand miles begins with a single email.
          </p>
          <a href="mailto:julio.meza@example.com" className="pv6-contact-link">
            julio.meza@example.com
          </a>
        </section>
        
        <footer className="pv6-footer">
          <p>Julio Meza © {currentYear}</p>
          <p className="pv6-footer-quote">"Code not for what it does today, but for what it reveals tomorrow"</p>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioV6;
