import React from 'react';

const projectsData = [
  {
    title: 'IOT Based Custom Object Sorting System',
    description:
      'Developed an automated conveyor belt system with integrated camera for detection of objects to sort and a flap-based sorting mechanism. Enabled precise separation of desired objects from the rest for efficient processing.',
    icon: 'fas fa-smile',
    link: null, // No link for this one
  },
  {
    title: 'Early Warning System for Glacial Lake Outburst Floods',
    description:
      'Developed a custom model for lake detection using PyTorch with ~60% accuracy, enabling preemptive water lowering. Created a portal for real-time communication and integrated sensors for environmental monitoring, all managed via a secure web app.',
    icon: 'fas fa-rocket',
    link: 'https://github.com/tanmay0329/Cloud-Computing-Computer-Network-CP',
  },
  {
    title: 'Connecting Doctors and Patients',
    description:
      'Automated hospital-patient communication platform with Hindi subtitles, online/offline appointments, doctor reviews, medicine comparison, and gesture understanding for accessibility. Includes an autonomous table for emergencies.',
    icon: 'fas fa-star',
    link: 'https://github.com/tanmay0329/MEDILINEA-Connecting-Dcotors-Patients',
  },
  {
    title: 'Forest Fire Forecasting (Mitigating Environmental Hazards)',
    description:
      'Predicted forest fire risk using temperature, moisture, and humidity sensors. Trained a model and deployed sensors for real-time fire risk assessment and early warning.',
    icon: 'fas fa-tree',
    link: 'https://github.com/tanmay0329/Forest-Fire-Detection-ML',
  },
  {
    title: 'Drone-based Intelligent AET & Water Sensing Irrigation System',
    description:
      'Used drone-mounted sensors to collect real-time soil/environmental data for irrigation. Machine learning predicts optimal crops; deep learning detects anomalies. Full-stack web app for monitoring. Potential impact: 40M+ farmers worldwide.',
    icon: 'fas fa-helicopter',
    link: null,
  },
  {
    title: 'Text Extraction & Data Parsing on Invoices and Tenders',
    description:
      'Secure web tool using Tesseract OCR & Regex to extract financial data from scanned invoices. JWT authentication, role-based access, Pandas for parsing, SQL for storage. Reduced manual entry by 8 hours/week, sped up processing by 60%.',
    icon: 'fas fa-file-invoice-dollar',
    link: 'https://github.com/pranav8doshi/Tender_details_extraction',
  },
];

const Projects = () => {
  return (
    <section className="hero">
      <div className="projects-section curved-container">
        <h1 className="my-heading text-center" style={{ marginTop: '40px' }}>
          PROJECTS
        </h1>
        <div className="blocks-grid">
          {projectsData.map((project, index) => (
            <div className="block" key={index}>
              <div className="icon-title">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <div className="icon">
                      <i className={project.icon}></i>
                    </div>
                  </a>
                ) : (
                  <div className="icon">
                    <i className={project.icon}></i>
                  </div>
                )}
                <h3 className="greet-heading blue-text text-center">
                  {project.title}
                </h3>
              </div>
              <div className="block-divider"></div>
              <p className="small-para">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
