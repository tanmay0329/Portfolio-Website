import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [leetcodeLoaded, setLeetcodeLoaded] = useState(false);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-top-row">
          <div className="hero-content">
            <span className="greeting">Hello, I am</span>
            <h1 className="name">Tanmay <span>Bora</span></h1>
            <p className="description">
              I am a final-year Computer Science and Engineering student specializing in AI at VIT, Pune. 
              Passionate about technology, sustainability, and leadership, I have published research papers, 
              contributed to open-source projects, and led award-winning robotics teams at Robocon (AIR 3 in 2025). 
              My journey involves innovative problem-solving, team management, and a continuous drive to learn and grow.
            </p>
            <div className="btn-group">
              <a
                href="https://drive.google.com/file/d/12UQWmJn_3Z2h4CrvsNmReOfW7JisyUT3/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                Get Resume
              </a>
              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <img
              src="/Portfolio-Website/Tanmay Bora.jpeg"
              alt="Tanmay Bora"
              className="hero-img"
            />
          </div>
        </div>
        
        <div className="stats-container">
          <div className="stats-top-row">
            {/* LeetCode */}
            <div className="stat-block">
              <h4 className="stat-title">LeetCode</h4>
              <a href="https://leetcode.com/tan_may29" target="_blank" rel="noreferrer" style={{ position: 'relative', display: 'block', minHeight: '150px' }}>
                {!leetcodeLoaded && (
                  <div className="loading-spinner-container">
                    <div className="spinner"></div>
                  </div>
                )}
                <img 
                  src="https://leetcard.jacoblin.cool/tan_may29?theme=light&ext=heatmap" 
                  alt="LeetCode Stats" 
                  className={`stat-card ${!leetcodeLoaded ? 'hidden-image' : ''}`}
                  onLoad={() => setLeetcodeLoaded(true)}
                />
              </a>
            </div>

            {/* LinkedIn */}
            <div className="stat-block">
              <h4 className="stat-title">LinkedIn</h4>
              <a href="https://www.linkedin.com/in/tanmay-bora" target="_blank" rel="noreferrer">
                <img 
                  src="/Portfolio-Website/Linkedin.jpeg" 
                  alt="LinkedIn Profile" 
                  className="stat-card"
                />
              </a>
            </div>
          </div>

          <div className="stats-bottom-row">
            {/* GitHub */}
            <div className="stat-block" style={{ width: '100%', maxWidth: '800px' }}>
              <h4 className="stat-title">GitHub</h4>
              <a href="https://github.com/tanmay0329" target="_blank" rel="noreferrer">
                <img 
                  src="https://ghchart.rshah.org/2794B3/tanmay0329" 
                  alt="GitHub Contribution Graph" 
                  className="github-heatmap stat-card"
                  style={{ width: '100%' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
