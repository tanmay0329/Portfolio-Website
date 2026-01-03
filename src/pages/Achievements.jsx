import React from 'react';

const achievementsData = [
  {
    title: 'Department Representative',
    link: 'https://www.linkedin.com/posts/tanmay-bora_vishwakarandak24-vitpune-csai-activity-7179893062800707584-OULR?utm_source=share&utm_medium=member_desktop',
    icon: 'fas fa-paint-brush',
    description: (
      <>
        Department Representative (CSAI) at VishwaKarandak, E-Cell, VIT Pune.
        Represented my Department in VishwaKarandak, VIT’s flagship event,
        showcasing diverse talents and skills. Led a team of students,
        fostering collaboration and creativity. Played a key role in promoting
        the event within the department, resulting in high participation and
        engagement. Managed the official Instagram page for the event in
        collibration with the interested students.
      </>
    ),
  },
  {
    title: 'Campus Ambassador at IMUN',
    link: 'https://www.linkedin.com/posts/tanmay-bora_internationalmun-mun-imun-activity-7260615325589651457-ukvP?utm_source=share&utm_medium=member_desktop',
    icon: 'fa-solid fa-code',
    description: (
      <>
        As a Campus Ambassador for IMUN, I represent the organization on my
        campus through social media. My role includes driving student
        engagement, increasing participation in IMUN events, and managing
        outreach to raise awareness about Model United Nations. I assist with
        event coordination, communication with delegates, and sharing
        registration and event details. By doing so, I helped to enhance IMUN's
        visibility and impact locally.
      </>
    ),
  },
  {
    title: 'Class Representative',
    link: 'https://www.linkedin.com/posts/tanmay-bora_innovation-technology-recognition-activity-7244020241498857472-N1oM?utm_source=share&utm_medium=member_desktop',
    icon: 'fas fa-chart-line',
    description: (
      <>
        Represented the class in discussions with faculty and administration,
        acting as a bridge to communicate concerns, feedback, and suggestions.
        Organized class meetings, facilitated discussions on academic and
        extracurricular topics, and resolved conflicts making a +ve learning
        environment. Coordinated with peers to address academic challenges and
        enhance overall class performance. Collaborated with event committees
        to ensure active participation in college-wide initiatives.
      </>
    ),
  },
  {
    title: 'DD - ROBOCON 2024',
    link: 'https://github.com/tanmay0329/Robocon24-Balls-Detection-Pytorch-',
    icon: 'fas fa-quote-left',
    description: (
      <>
        Worked on fully autonomous robot consisting of <b>two cameras</b> and a{' '}
        <b>2D lidar</b> connected through <b>ROS nodes</b> on{' '}
        <b>jetson xavier</b>. In computer Vision I made a model from scratch
        using <b>pyTorch</b> deployed through <b>yolov5</b> on jetson which was
        game changing in image processing for <b>Balls Detection</b>. Lidar
        integration was strategically used to save the{' '}
        <b>coordinates of the baskets</b>. Through camera it would come to know
        which basket to choose for the <b>best condition</b> and put the ball
        accurately in the basket through <b>lidar</b>.
      </>
    ),
  },
  {
    title: 'PUBLICATIONS - Farm Automation',
    link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781032644752-102/farm-automation-using-nodemcu-vikas-nandeshwar-ishawar-borade-atharva-borade-atharva-bonde-tanmay-bora-om-bobade-vishal-bokare',
    icon: 'fab fa-wordpress-simple',
    displayTitle: 'PUBLICATIONS',
    description: (
      <>
        Our paper, <b>"Farm Automation Using Node MCU,"</b> presented at{' '}
        <b>ICABEC 2023</b> and published in the{' '}
        <b>
          Advances in AI for Biomedical Instrumentation, Electronics, and
          Computing book
        </b>, explores the use of Node MCU to automate farm irrigation. This{' '}
        <b>low-cost technology</b> aims to improve water efficiency, enhance
        crop yields, and reduce labor costs. The proposed system has the
        potential to{' '}
        <b>
          revolutionize modern farm management, promoting efficient and
          sustainable agricultural practices
        </b>.
      </>
    ),
  },
  {
    title: 'PUBLICATIONS - Forest Fire',
    link: 'https://ieeexplore.ieee.org/document/10675176',
    icon: 'fas fa-video',
    displayTitle: 'PUBLICATIONS',
    description: (
      <>
        Our research paper,{' '}
        <b>
          "Machine Learning-Based Forest Fire Forecasting: Mitigating
          Environmental Hazards,"
        </b>{' '}
        was published in <b>IEEE Xplore</b> and presented at{' '}
        <b>ICSPCRE-2024</b>. The study uses machine learning to forecast forest
        fires based on FWI factors like{' '}
        <b>wind speed, rain, humidity, moisture, and temperature</b>. This
        system helps provide{' '}
        <b>
          early warnings, enabling timely and effective preventive measures to
          save lives, reduce property damage, and preserve vital biodiversity
        </b>
        <br />
        
      </>
    ),
  },
  {
    title: 'DD - ROBOCON 2025',
    link: 'https://www.linkedin.com/posts/tanmay-bora_robocon-2025-activity-7352959023094161409-n39-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECDjlsBxf_JmnpEHr1A1oV9rWdR_Nps5UA',
    icon: 'fas fa-robot',
    description: (
      <>
        Secured <b>AIR 3</b> among <b>100 teams</b> in India after year of
        rigorous design, development, and testing. The robot’s exceptional
        performance earned us the <b>2nd Runner-up Trophy</b>, along with the
        prestigious <b>MATLAB Matworks Modelling Award</b> for our innovative
        simulation and modelling techniques. We were also honored with the{' '}
        <b>IHFC Robotics and AI Award</b> for integrating{' '}
        <b>Augmented Reality (AR)</b> on the robot to accurately measure{' '}
        <b>distances for RPM and angles for alignment</b> in real time,
        improving precision and efficiency.
      </>
    ),
  },
  {
    title: 'PUBLICATIONS - Object Sorting',
    link: 'https://www.linkedin.com/posts/tanmay-bora_the-group-and-memories-activity-7312415656052764672-Z9To?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECDjlsBxf_JmnpEHr1A1oV9rWdR_Nps5UA',
    icon: 'fas fa-book',
    displayTitle: 'PUBLICATIONS',
    description: (
      <>
        Our research paper,{' '}
        <b>“IoT Based Intelligent Object Sorting System using YOLO”</b>, is now
        published and was presented at the{' '}
        <b>
          2nd International Conference on Computational Research and Data
          Analytics (ICCRDA-2025)
        </b>, organized by <b>Duy Tan University, Vietnam</b>, on January
        17-18, 2025 (Online). The study shows our model enables{' '}
        <b>accurate real‑time</b> classification with <b>minimal latency</b>,
        demonstrating robust performance across varying{' '}
        <b>lighting and backgrounds</b> in industrial automation and smart
        logistics settings.
      </>
    ),
  },
];

const Achievements = () => {
  return (
    <section className="services" id="achievements">
      <div className="services-heading" style={{ marginTop: '20px' }}>
        <h1 className="my-heading achievements-heading text-center">
          My ACHIEVEMENTS
        </h1>
      </div>
      <div className="services-content">
        <div className="my-row">
          {achievementsData.map((item, index) => (
            <div className="my-col" key={index}>
              <div className="my-card">
                <div className="icon">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                  >
                    <i className={item.icon}></i>
                  </a>
                </div>
                <h3 className="greet-heading blue-text">
                  {item.displayTitle || item.title}
                </h3>
                <div className="white-box">
                  <p className="small-para">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
