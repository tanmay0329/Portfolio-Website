import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Technical Lead Intern</h4>
                <h5>January 2026 – Present</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading AI-focused technical initiatives, working on automation systems and AI workflows, collaborating on digital product development, and managing technical execution.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder — Webloq AI</h4>
                <h5>Startup Initiative</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Founded an AI-focused startup initiative, managing product planning and execution, building automation systems and digital products, and leading startup vision.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Startup Pitch & Innovation Events</h4>
                <h5>Presenter & Participant</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Participated in startup and innovation events, presented product ideas and AI concepts, and improved communication and founder pitching skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Student Ambassador</h4>
                <h5>Community Initiative</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Participated in technology and community initiatives, engaged in leadership and networking activities, and contributed to student-focused tech environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

