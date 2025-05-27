import './PortfolioV3.css'

function PortfolioV3() {
  return (
    <div className="portfolio-v3">
      {/* Creative Navigation */}
      <nav className="nav-creative">
        <div className="nav-wrapper">
          <div className="nav-brand-creative">
            <span className="brand-first">Julio</span>
            <span className="brand-last">Meza</span>
          </div>
          <div className="nav-menu-creative">
            <a href="#intro" className="nav-item-creative">
              <span className="nav-number">01</span>
              <span className="nav-text">Intro</span>
            </a>
            <a href="#skills" className="nav-item-creative">
              <span className="nav-number">02</span>
              <span className="nav-text">Skills</span>
            </a>
            <a href="#projects" className="nav-item-creative">
              <span className="nav-number">03</span>
              <span className="nav-text">Projects</span>
            </a>
            <a href="#connect" className="nav-item-creative">
              <span className="nav-number">04</span>
              <span className="nav-text">Connect</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Creative Layout */}
      <section className="hero-creative">
        <div className="hero-grid">
          <div className="hero-main">
            <div className="hero-badge">IT Operations & Data Analytics</div>
            <h1 className="hero-title-creative">
              Building the future
              <span className="hero-accent">through data</span>
              and technology
            </h1>
            <p className="hero-lead">
              Transforming complex business challenges into streamlined, 
              data-driven solutions that drive measurable impact.
            </p>
            <div className="hero-actions">
              <button className="btn-creative btn-primary-creative">
                <span>Explore Projects</span>
                <div className="btn-arrow">→</div>
              </button>
              <button className="btn-creative btn-secondary-creative">
                <span>Download CV</span>
                <div className="btn-icon">↓</div>
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hero-card-1">
              <div className="card-icon">📊</div>
              <div className="card-title">Data Analysis</div>
              <div className="card-desc">Python • SQL • Analytics</div>
            </div>
            <div className="hero-card hero-card-2">
              <div className="card-icon">⚙️</div>
              <div className="card-title">IT Operations</div>
              <div className="card-desc">Infrastructure • Automation</div>
            </div>
            <div className="hero-card hero-card-3">
              <div className="card-icon">🚀</div>
              <div className="card-title">Innovation</div>
              <div className="card-desc">Strategy • Implementation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="section-creative intro-section">
        <div className="container-creative">
          <div className="section-label">About Me</div>
          <div className="intro-layout">
            <div className="intro-content">
              <h2 className="section-title-creative">
                Bridging technology and business strategy
              </h2>
              <div className="intro-text">
                <p>
                  As an IT Operations Manager pursuing advanced data analytics through 
                  Columbia University's intensive bootcamp, I specialize in creating 
                  comprehensive solutions that merge technical excellence with strategic vision.
                </p>
                <p>
                  My approach combines deep technical knowledge with business acumen, 
                  enabling organizations to leverage technology for competitive advantage 
                  and sustainable growth.
                </p>
              </div>
              <div className="intro-stats">
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="intro-sidebar">
              <div className="sidebar-item">
                <h4>Current Focus</h4>
                <p>Data Analytics Bootcamp at Columbia University</p>
              </div>
              <div className="sidebar-item">
                <h4>Location</h4>
                <p>Available for remote and on-site collaboration</p>
              </div>
              <div className="sidebar-item">
                <h4>Approach</h4>
                <p>Data-driven solutions with measurable business impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-creative skills-section">
        <div className="container-creative">
          <div className="section-label">Expertise</div>
          <h2 className="section-title-creative">Technical Arsenal</h2>
          <div className="skills-grid-creative">
            <div className="skill-category-creative">
              <div className="category-header">
                <div className="category-icon">🐍</div>
                <h3>Programming & Analysis</h3>
              </div>
              <div className="skill-list-creative">
                <div className="skill-item-creative">
                  <span className="skill-name">Python</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item-creative">
                  <span className="skill-name">SQL</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item-creative">
                  <span className="skill-name">Data Visualization</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-category-creative">
              <div className="category-header">
                <div className="category-icon">🔧</div>
                <h3>Operations & Infrastructure</h3>
              </div>
              <div className="skill-list-creative">
                <div className="skill-item-creative">
                  <span className="skill-name">System Administration</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item-creative">
                  <span className="skill-name">Process Automation</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="skill-item-creative">
                  <span className="skill-name">Strategic Planning</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-creative projects-section">
        <div className="container-creative">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title-creative">Featured Work</h2>
          <div className="projects-showcase">
            <div className="project-creative project-featured">
              <div className="project-visual">
                <div className="project-mockup">
                  <div className="mockup-screen">
                    <div className="mockup-header"></div>
                    <div className="mockup-content">
                      <div className="mockup-chart"></div>
                      <div className="mockup-data"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-category">Web Application</div>
                <h3 className="project-title">Customer Portal System</h3>
                <p className="project-description">
                  Comprehensive order management platform featuring real-time tracking, 
                  automated workflows, and intuitive customer interfaces that increased 
                  processing efficiency by 40%.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Full-Stack Development</span>
                  <span className="tech-tag">Order Management</span>
                  <span className="tech-tag">User Experience</span>
                </div>
                <div className="project-link">
                  <span>View Project</span>
                  <div className="link-arrow">→</div>
                </div>
              </div>
            </div>

            <div className="projects-grid-secondary">
              <div className="project-creative">
                <div className="project-number">02</div>
                <h4>Executive Dashboard</h4>
                <p>Real-time KPI visualization with interactive analytics and automated reporting capabilities.</p>
                <div className="project-tags-small">
                  <span>Business Intelligence</span>
                  <span>Data Visualization</span>
                </div>
              </div>
              <div className="project-creative">
                <div className="project-number">03</div>
                <h4>SQL Chat Interface</h4>
                <p>AI-powered natural language to SQL converter with dynamic chart generation and data analysis.</p>
                <div className="project-tags-small">
                  <span>AI Integration</span>
                  <span>Natural Language Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="connect" className="section-creative contact-section">
        <div className="container-creative">
          <div className="contact-layout">
            <div className="contact-content">
              <div className="section-label">Let's Connect</div>
              <h2 className="section-title-creative">Ready to collaborate?</h2>
              <p className="contact-description">
                Whether you're looking to optimize operations, implement data-driven solutions, 
                or explore innovative technology strategies, I'd love to discuss how we can 
                work together to achieve your goals.
              </p>
              <div className="contact-methods">
                <a href="mailto:julio.meza@email.com" className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-info">
                    <div className="method-label">Email</div>
                    <div className="method-value">julio.meza@email.com</div>
                  </div>
                </a>
                <a href="https://linkedin.com/in/juliomeza" className="contact-method">
                  <div className="method-icon">💼</div>
                  <div className="method-info">
                    <div className="method-label">LinkedIn</div>
                    <div className="method-value">linkedin.com/in/juliomeza</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="contact-visual">
              <div className="contact-card">
                <div className="card-header">Available for</div>
                <div className="availability-list">
                  <div className="availability-item">
                    <span className="availability-dot"></span>
                    <span>Consulting Projects</span>
                  </div>
                  <div className="availability-item">
                    <span className="availability-dot"></span>
                    <span>Technical Leadership</span>
                  </div>
                  <div className="availability-item">
                    <span className="availability-dot"></span>
                    <span>Data Analytics</span>
                  </div>
                  <div className="availability-item">
                    <span className="availability-dot"></span>
                    <span>Strategic Planning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Footer */}
      <footer className="footer-creative">
        <div className="container-creative">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="brand-first">Julio</span>
              <span className="brand-last">Meza</span>
            </div>
            <div className="footer-year">© 2025</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PortfolioV3
