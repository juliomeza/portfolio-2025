import './PortfolioV2.css'

function PortfolioV2() {
  return (
    <div className="portfolio-v2">
      {/* Minimal Navigation */}
      <nav className="nav-minimal">
        <div className="nav-content">
          <div className="nav-brand">JM</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Minimal */}
      <section className="hero-minimal">
        <div className="hero-container">
          <h1 className="hero-name">Julio Meza</h1>
          <p className="hero-role">IT Operations Manager & Data Analyst</p>
          <p className="hero-description">
            Creating efficient solutions through technology and data insights
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-minimal">
        <div className="content-container">
          <div className="section-header">
            <h2>About</h2>
          </div>
          <div className="about-grid">
            <div className="about-intro">
              <p>
                I'm an IT Operations Manager with a passion for transforming business 
                processes through technology and data analysis. Currently advancing my 
                skills through Columbia University's Data Analyst Bootcamp.
              </p>
              <p>
                I specialize in bridging the gap between technical implementation 
                and business strategy, creating solutions that drive measurable results.
              </p>
            </div>
            <div className="skills-minimal">
              <div className="skill-category">
                <h4>Technical</h4>
                <ul>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>Data Analysis</li>
                  <li>Dashboard Development</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Operations</h4>
                <ul>
                  <li>IT Infrastructure</li>
                  <li>Process Automation</li>
                  <li>System Administration</li>
                  <li>Strategic Planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-minimal section-gray">
        <div className="content-container">
          <div className="section-header">
            <h2>Experience</h2>
          </div>
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-period">Current</div>
              <div className="experience-details">
                <h3>IT Operations Manager</h3>
                <p>
                  Leading technology infrastructure and operations strategy. 
                  Implementing data-driven solutions to optimize business processes 
                  and improve system reliability across the organization.
                </p>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-period">2024</div>
              <div className="experience-details">
                <h3>Data Analyst Bootcamp</h3>
                <p className="experience-company">Columbia University</p>
                <p>
                  Intensive program covering advanced data analysis, statistical modeling, 
                  and visualization techniques using Python, SQL, and modern analytics frameworks.
                </p>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-period">Previous</div>
              <div className="experience-details">
                <h3>IT Support Specialist</h3>
                <p>
                  Comprehensive technical training in system administration, 
                  troubleshooting methodologies, and customer service excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section-minimal">
        <div className="content-container">
          <div className="section-header">
            <h2>Selected Work</h2>
          </div>
          <div className="work-list">
            <div className="work-item">
              <div className="work-number">01</div>
              <div className="work-content">
                <h3>Customer Portal</h3>
                <p>
                  Full-stack web application for order management, streamlining 
                  customer interactions and sales processes with intuitive interface design.
                </p>
                <div className="work-tags">
                  Web Development • Order Management • UX Design
                </div>
              </div>
            </div>
            <div className="work-item">
              <div className="work-number">02</div>
              <div className="work-content">
                <h3>Executive Dashboard</h3>
                <p>
                  Real-time KPI visualization platform providing executive insights 
                  into business performance with interactive charts and automated reporting.
                </p>
                <div className="work-tags">
                  Data Visualization • Business Intelligence • Analytics
                </div>
              </div>
            </div>
            <div className="work-item">
              <div className="work-number">03</div>
              <div className="work-content">
                <h3>SQL Chat Interface</h3>
                <p>
                  AI-powered chat application enabling natural language database queries 
                  with dynamic visualization and real-time data analysis capabilities.
                </p>
                <div className="work-tags">
                  AI Integration • Natural Language Processing • Database Management
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-minimal section-gray">
        <div className="content-container">
          <div className="section-header">
            <h2>Get In Touch</h2>
          </div>
          <div className="contact-minimal">
            <p>
              Interested in collaborating or discussing opportunities? 
              Let's connect and explore how we can work together.
            </p>
            <div className="contact-links">
              <a href="mailto:john.meza@email.com" className="contact-link">
                Email
              </a>
              <a href="https://linkedin.com/in/johnmeza" className="contact-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="footer-minimal">
        <div className="content-container">
          <p>© 2025 Julio Meza</p>
        </div>
      </footer>
    </div>
  )
}

export default PortfolioV2
