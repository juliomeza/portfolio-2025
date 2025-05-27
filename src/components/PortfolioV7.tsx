import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';
import './PortfolioV7.css';

const PortfolioV7 = () => {
  const [currentWisdom, setCurrentWisdom] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const wisdoms = [
    "Building systems that think",
    "Where operations meet intelligence", 
    "The art of digital transformation",
    "Simplicity in complexity"
  ];

  const infinityPathVariants = {
    initial: {
      pathLength: 0,
      opacity: 0
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        },
        opacity: { duration: 0.5 }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentWisdom((prev) => (prev + 1) % wisdoms.length);
        setFadeIn(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="philosophical-portfolio">
      {/* Hero Section - Book Cover Style */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Main Title */}
          <h1 className="main-title">
            THE
            <br />
            ARCHITECT
          </h1>
          
          {/* Subtitle */}
          <p className={`subtitle ${fadeIn ? 'fade-in' : 'fade-out'}`}>
            {wisdoms[currentWisdom]}
          </p>

          {/* Geometric Symbol - Infinity */}
          <div className="symbol-container">
            <motion.svg 
              width="120" 
              height="60"              viewBox="0 0 100 100" 
              className="infinity-svg"
            >
              {/* Static circles */}
              <path
                d="M20 50 A30 30 0 1 1 80 50 A30 30 0 1 1 20 50"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                opacity="0.2"
              />
              
              {/* Animated dot */}
              <motion.circle
                cx="20"
                cy="50"
                r="2.5"
                fill="currentColor"
                animate={{
                  cx: [20, 50, 80, 50, 20],
                  cy: [50, 20, 50, 80, 50],
                }}
                transition={{
                  duration: 8,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                  times: [0, 0.25, 0.5, 0.75, 1]
                }}
              />
            </motion.svg>
          </div>

          {/* Attribution */}
          <div className="attribution">
            <p>IT Operations Manager · Data Analyst</p>
            <p>Based on The Way of Code</p>
            <p>Adapted by Julio Meza</p>
          </div>
        </div>

        {/* Footer - Acknowledgment */}
        <div className="acknowledgment">
          Inspired by Rick Rubin's "The Way of Code"
        </div>
      </section>

      {/* Chapter 1: The Path */}
      <section className="chapter-section">
        <div className="chapter-content">
          <div className="chapter-header">
            <p className="chapter-number">CHAPTER I</p>
            <h2 className="chapter-title">The Foundation</h2>
          </div>
          
          <div className="chapter-grid">
            <div className="chapter-text">
              <p className="first-paragraph">
                The journey began not with code, but with understanding. Eight years 
                as an IT Operations Manager taught me that true efficiency comes not from 
                force, but from flow.
              </p>
              <p>
                In the realm of IT Operations, I discovered that systems, like water, 
                find their own level. My role was not to command, but to guide—to 
                create channels through which innovation could naturally flow.
              </p>
            </div>
            <div className="chapter-text">
              <p>
                Columbia University's Data Analytics Bootcamp opened new dimensions. 
                Numbers transformed into narratives, patterns into possibilities. 
                The analyst's eye merged with the operator's wisdom.
              </p>
              <p>
                Now, at the threshold of AI Product Management, I architect bridges—
                connecting the solid foundations of operations with the fluid 
                intelligence of tomorrow's systems.
              </p>
            </div>
          </div>
        </div>

        {/* Page number */}
        <div className="page-number">
          II
        </div>
      </section>

      {/* Chapter 2: The Work */}
      <section className="chapter-section">
        <div className="chapter-content">
          <div className="chapter-header">
            <p className="chapter-number">CHAPTER II</p>
            <h2 className="chapter-title">The Work</h2>
          </div>

          <div className="projects-container">
            {/* Project 1 */}
            <div className="project-item">
              <div className="project-number">
                <p className="project-index">001</p>
                <h3 className="project-name">Customer Portal</h3>
              </div>
              <div className="project-description">
                <p className="project-text">
                  A gateway where complexity met simplicity. Five hundred souls daily 
                  found their path through an interface that understood before being asked.
                </p>
                <p className="project-tech">
                  React · Node.js · PostgreSQL · 2024
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-item">
              <div className="project-number">
                <p className="project-index">002</p>
                <h3 className="project-name">Executive Dashboard</h3>
              </div>
              <div className="project-description">
                <p className="project-text">
                  Where data streams converged into wisdom. A single view that spoke 
                  the language of leadership, translating complexity into clarity.
                </p>
                <p className="project-tech">
                  Python · Power BI · SQL · 2024
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-item">
              <div className="project-number">
                <p className="project-index">003</p>
                <h3 className="project-name">AI SQL Assistant</h3>
              </div>
              <div className="project-description">
                <p className="project-text">
                  Teaching machines to understand intent, not just syntax. A bridge 
                  between human thought and database logic, speaking both languages fluently.
                </p>
                <p className="project-tech">
                  LangChain · OpenAI · FastAPI · 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page number */}
        <div className="page-number">
          III
        </div>
      </section>

      {/* Chapter 3: The Skills */}
      <section className="chapter-section skills-section">
        <div className="chapter-content">
          <div className="chapter-header">
            <p className="chapter-number">CHAPTER III</p>
            <h2 className="chapter-title">The Tools</h2>
          </div>

          <div className="skills-grid">
            <div className="skills-column">
              <h3 className="skills-category">Technical Mastery</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <p className="skill-name">Languages of Logic</p>
                  <p className="skill-description">Python · JavaScript · SQL · The universal tongues of machines</p>
                </div>
                <div className="skill-item">
                  <p className="skill-name">Frameworks of Form</p>
                  <p className="skill-description">React · Node.js · LangChain · The structures that shape possibility</p>
                </div>
                <div className="skill-item">
                  <p className="skill-name">Clouds of Computing</p>
                  <p className="skill-description">AWS · Azure · Docker · The ethereal infrastructure of our age</p>
                </div>
              </div>
            </div>

            <div className="skills-column">
              <h3 className="skills-category">Human Understanding</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <p className="skill-name">Leadership</p>
                  <p className="skill-description">Guiding teams through transformation · Building bridges between vision and reality</p>
                </div>
                <div className="skill-item">
                  <p className="skill-name">Strategy</p>
                  <p className="skill-description">ITIL · Agile · The methodologies that bring order to chaos</p>
                </div>
                <div className="skill-item">
                  <p className="skill-name">Learning</p>
                  <p className="skill-description">Columbia University · Continuous evolution · The eternal student</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page number */}
        <div className="page-number">
          IV
        </div>
      </section>

      {/* Chapter 4: The Connection */}
      <section className="chapter-section connection-section">
        <div className="chapter-content">
          <div className="chapter-header">
            <p className="chapter-number">CHAPTER IV</p>
            <h2 className="chapter-title">The Connection</h2>
          </div>

          <div className="connection-content">
            <p className="connection-text">
              In the convergence of operations and intelligence lies opportunity. 
              If you seek someone who understands both the poetry of possibility 
              and the prose of implementation, our paths may align.
            </p>

            <div className="connection-symbol">
              <div className="circle-container">
                <Circle className="circle-icon" />
                <div className="center-dot"></div>
              </div>
            </div>

            <div className="contact-links">
              <p>
                <a href="mailto:your.email@example.com" className="contact-link">
                  your.email@example.com
                </a>
              </p>
              <p>
                <a href="#" className="contact-link">
                  LinkedIn Profile
                </a>
              </p>
              <p>
                <a href="#" className="contact-link">
                  Download Resume
                </a>
              </p>
            </div>
          </div>

          <div className="copyright">
            <p>© MMXXIV · Your Name</p>
          </div>
        </div>

        {/* Page number */}
        <div className="page-number">
          V
        </div>
      </section>
    </div>
  );
};

export default PortfolioV7;
