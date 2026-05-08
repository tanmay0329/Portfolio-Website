import "./styles/Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      title: "Avishkar Competition Leadership",
      description: "Led a campus-scale project team during the Avishkar Competition while managing coordination, planning, and execution responsibilities.",
    },
    {
      title: "Startup Pitch Participation",
      description: "Participated in startup and innovation events where I presented product ideas, AI concepts, and scalable digital solutions.",
    },
    {
      title: "Leadership & Team Management",
      description: "Built and managed startup initiatives while collaborating on projects and digital systems.",
    },
    {
      title: "Product Development Journey",
      description: "Focused on building AI-powered platforms and scalable systems instead of only academic learning.",
    },
  ];

  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h3 className="title">Achievements</h3>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div className="achievement-card" key={index}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
