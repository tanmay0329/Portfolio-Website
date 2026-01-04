import React from 'react';

const projectsData = [
  {
    title: 'IOT Based Custom Object Sorting System',
    description: (
      <>
        Developed an <b>automated conveyor belt system</b> with <b>integrated camera</b> for detection of objects to sort and a <b>flap-based sorting mechanism</b>. Enabled <b>precise separation</b> of desired objects from the rest for efficient processing and faster sorting workflows.
      </>
    ),
    icon: 'fas fa-smile',
    link: null, // No link for this one
  },
  {
    title: 'Early Warning System for Glacial Lake Outburst Floods',
    description: (
      <>
        Developed a <b>custom model for lake detection</b> using <b>PyTorch</b> with <b>~60% accuracy</b>, enabling <b>preemptive water lowering</b>. Created a portal for <b>real-time communication</b> and integrated sensors for <b>environmental monitoring</b>, all managed via a secure web app.
      </>
    ),
    icon: 'fas fa-rocket',
    link: 'https://github.com/tanmay0329/Cloud-Computing-Computer-Network-CP',
  },
  {
    title: 'Connecting Doctors and Patients',
    description: (
      <>
        <b>Automated hospital-patient communication platform</b> with <b>Hindi subtitles</b>, <b>online/offline appointments</b>, <b>doctor reviews</b>, <b>medicine comparison</b>, and <b>gesture understanding</b> for accessibility. Includes an <b>autonomous table</b> for rapid medical emergencies.
      </>
    ),
    icon: 'fas fa-star',
    link: 'https://github.com/tanmay0329/MEDILINEA-Connecting-Dcotors-Patients',
  },
  {
    title: 'Forest Fire Forecasting (Mitigating Environmental Hazards)',
    description: (
      <>
        Predicted <b>forest fire risk</b> using <b>temperature, moisture, and humidity sensors</b>. Trained a model and deployed sensors for <b>real-time fire risk assessment</b> and <b>early warning</b> for safety purposes.
      </>
    ),
    icon: 'fas fa-tree',
    link: 'https://github.com/tanmay0329/Forest-Fire-Detection-ML',
  },
  {
    title: 'Drone-based Intelligent AET & Water Sensing Irrigation System',
    description: (
      <>
        Used <b>drone-mounted sensors</b> to collect <b>real-time soil/environmental data</b> for irrigation. <b>Machine learning</b> predicts optimal crops; <b>deep learning</b> detects anomalies. <b>Full-stack web app</b> for monitoring. Potential impact: 40M+ farmers worldwide.
      </>
    ),
    icon: 'fas fa-helicopter',
    link: null,
  },
  {
    title: 'Text Extraction & Data Parsing on Invoices and Tenders',
    description: (
      <>
        Secure web tool using <b>Tesseract OCR & Regex</b> to extract financial data from scanned invoices. <b>JWT authentication</b>, <b>role-based access</b>, <b>Pandas for parsing</b>, <b>SQL for storage</b>. Reduced manual entry by 8 hours/week, sped up processing by 60% overall.
      </>
    ),
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
            <div className="project-anim-wrapper" key={index}>
              <div className="block">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
