import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';
import { gsap } from 'gsap';
import './PortfolioV7.css';

const PortfolioV7 = () => {
  const [currentWisdom, setCurrentWisdom] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const hexagonContainerRef = useRef<SVGSVGElement>(null);
  const hexagonsRef = useRef<(SVGPolygonElement | null)[]>([]);

  const wisdoms = [
    "Building systems that think",
    "Where operations meet intelligence", 
    "The art of digital transformation",
    "Simplicity in complexity"
  ];
  // Hexagon city animation
  useEffect(() => {
    if (!hexagonContainerRef.current) return;

    const hexagons = hexagonsRef.current;
    
    // Animation timeline
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
    // Initially hide all hexagons
    gsap.set(hexagons, { scale: 0, opacity: 0 });
    
    // Animate hexagons appearing one by one
    hexagons.forEach((hex, index) => {
      if (hex) {
        tl.to(hex, {
          scale: 1,
          opacity: 0.7,
          duration: 0.3,
          ease: "back.out(1.7)",
          delay: index * 0.1
        }, index * 0.15);
      }
    });
    
    // Hold the city for a moment
    tl.to({}, { duration: 2 });
    
    // Make some hexagons pulse randomly
    hexagons.forEach((hex, index) => {
      if (hex && index % 3 === 0) {
        tl.to(hex, {
          scale: 1.2,
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 1
        }, "-=1.5");
      }
    });
    
    return () => {
      tl.kill();
    };
  }, []);

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
          </p>          {/* Geometric Symbol - Hexagonal City */}
          <div className="symbol-container">
            <svg 
              ref={hexagonContainerRef}
              width="200" 
              height="160"
              viewBox="0 0 200 160" 
              className="hexagon-city-svg"
            >
              {/* Hexagon city pattern */}
              {/* Row 1 */}
              <polygon 
                ref={el => { hexagonsRef.current[0] = el; }}
                points="50,20 70,10 90,20 90,40 70,50 50,40" 
                fill="currentColor" 
                className="hexagon"
              />
              <polygon 
                ref={el => { hexagonsRef.current[1] = el; }}
                points="110,20 130,10 150,20 150,40 130,50 110,40" 
                fill="currentColor" 
                className="hexagon"
              />
              
              {/* Row 2 */}
              <polygon 
                ref={el => { hexagonsRef.current[2] = el; }}
                points="20,50 40,40 60,50 60,70 40,80 20,70" 
                fill="currentColor" 
                className="hexagon"
              />
              <polygon 
                ref={el => { hexagonsRef.current[3] = el; }}
                points="80,50 100,40 120,50 120,70 100,80 80,70" 
                fill="currentColor" 
                className="hexagon"
              />
              <polygon 
                ref={el => { hexagonsRef.current[4] = el; }}
                points="140,50 160,40 180,50 180,70 160,80 140,70" 
                fill="currentColor" 
                className="hexagon"
              />
              
              {/* Row 3 */}
              <polygon 
                ref={el => { hexagonsRef.current[5] = el; }}
                points="50,80 70,70 90,80 90,100 70,110 50,100" 
                fill="currentColor" 
                className="hexagon"
              />
              <polygon 
                ref={el => { hexagonsRef.current[6] = el; }}
                points="110,80 130,70 150,80 150,100 130,110 110,100" 
                fill="currentColor" 
                className="hexagon"
              />
              
              {/* Row 4 */}
              <polygon 
                ref={el => { hexagonsRef.current[7] = el; }}
                points="20,110 40,100 60,110 60,130 40,140 20,130" 
                fill="currentColor" 
                className="hexagon"
              />
              <polygon 
                ref={el => { hexagonsRef.current[8] = el; }}
                points="80,110 100,100 120,110 120,130 100,140 80,130" 
                fill="currentColor" 
                className="hexagon"
              />
              <polygon 
                ref={el => { hexagonsRef.current[9] = el; }}
                points="140,110 160,100 180,110 180,130 160,140 140,130" 
                fill="currentColor" 
                className="hexagon"
              />
              
              {/* Additional scattered hexagons */}
              <polygon 
                ref={el => { hexagonsRef.current[10] = el; }}
                points="170,20 190,10 210,20 210,40 190,50 170,40" 
                fill="currentColor" 
                className="hexagon"
              />
              <polygon 
                ref={el => { hexagonsRef.current[11] = el; }}
                points="10,80 30,70 50,80 50,100 30,110 10,100" 
                fill="currentColor" 
                className="hexagon"
              />
            </svg>
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
            </p>            <div className="connection-symbol">
              <div className="circle-container">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <Circle className="circle-icon" />
                </motion.div>
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
