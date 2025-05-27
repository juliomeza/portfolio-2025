import './PortfolioV1.css'

function PortfolioV1() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">Julio Meza</div>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            IT Operations Manager & 
            <span className="highlight"> Data Analyst</span>
          </h1>
          <p className="hero-subtitle">
            Transforming business operations through technology and data-driven insights
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                As an IT Operations Manager with a passion for data analysis and automation, 
                I bridge the gap between technology and business strategy. Currently pursuing 
                advanced skills through Columbia University's Data Analyst Bootcamp.
              </p>
              <p>
                My expertise spans IT operations, Python development, and data visualization, 
                enabling me to create comprehensive solutions that drive business growth and 
                operational efficiency.
              </p>
            </div>
            <div className="skills">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Data Analysis</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">IT Operations</span>
                <span className="skill-tag">Dashboard Development</span>
                <span className="skill-tag">Process Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Experience & Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>IT Operations Manager</h3>
                <p className="timeline-company">Current Position</p>
                <p>Leading IT infrastructure and operations, implementing strategic technology 
                solutions to optimize business processes and improve system reliability.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Data Analyst Bootcamp</h3>
                <p className="timeline-company">Columbia University</p>
                <p>Intensive program focusing on data analysis, visualization, and statistical 
                modeling using Python, SQL, and modern analytics tools.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>IT Support Specialist</h3>
                <p className="timeline-company">Professional Development</p>
                <p>Completed comprehensive IT support training covering system administration, 
                troubleshooting, and customer service excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Customer Portal</h3>
              <p>
                Comprehensive web application for creating and managing sales orders 
                and purchase orders, streamlining customer interactions and order processing.
              </p>
              <div className="project-tags">
                <span className="tag">Web Development</span>
                <span className="tag">Order Management</span>
                <span className="tag">Customer Experience</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Executive Dashboard</h3>
              <p>
                Real-time KPI metrics dashboard providing executive-level insights 
                into business performance, operational efficiency, and strategic indicators.
              </p>
              <div className="project-tags">
                <span className="tag">Data Visualization</span>
                <span className="tag">KPI Tracking</span>
                <span className="tag">Business Intelligence</span>
              </div>
            </div>
            <div className="project-card">
              <h3>SQL Chat Interface</h3>
              <p>
                Interactive chat application that enables natural language queries 
                to SQL databases, featuring dynamic charts and data tables for analysis.
              </p>
              <div className="project-tags">
                <span className="tag">AI Integration</span>
                <span className="tag">SQL</span>
                <span className="tag">Data Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <p>
              Interested in collaborating on data-driven solutions or discussing 
              IT operations strategies? I'd love to hear from you.
            </p>
            <div className="contact-buttons">
              <a href="mailto:john.meza@email.com" className="btn btn-primary">
                Send Email
              </a>
              <a href="https://linkedin.com/in/johnmeza" className="btn btn-secondary">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 John Meza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default PortfolioV1
