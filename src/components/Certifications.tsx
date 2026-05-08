import "./styles/Certifications.css";

const Certifications = () => {
  const certs = [
    { title: "IBM Prompt Engineering", category: "AI & Technology" },
    { title: "AI for Business Professionals (HP LIFE)", category: "AI & Technology" },
    { title: "HubSpot Digital Marketing", category: "Marketing & Business" },
    { title: "Salesforce CRM", category: "Marketing & Business" },
    { title: "Excel Basics for Data Analysis (IBM)", category: "Analytics & Productivity" },
    { title: "McKinsey Forward Program", category: "Professional Development" },
    { title: "Google Student Ambassador", category: "Professional Development" },
    { title: "Stakeholders in Marketing & Finance (Open University)", category: "Professional Development" },
  ];

  return (
    <div className="certifications-section section-container" id="certifications">
      <div className="certifications-container">
        <h3 className="title">Certifications</h3>
        <div className="certs-list">
          {certs.map((cert, index) => (
            <div className="cert-item" key={index}>
              <span className="cert-category">{cert.category}</span>
              <h4 className="cert-title">{cert.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
