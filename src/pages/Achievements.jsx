import React from 'react';

const achievementsData = [
  {
    title: 'Department Representative',
    link: 'https://www.linkedin.com/posts/tanmay-bora_vishwakarandak24-vitpune-csai-activity-7179893062800707584-OULR?utm_source=share&utm_medium=member_desktop',
    icon: 'fas fa-paint-brush',
    description: (
      <>
        <b>Department Representative (CSAI)</b> at <b>VishwaKarandak</b>,{' '}
        <b>E-Cell, VIT Pune</b>. Represented my Department in{' '}
        <b>VishwaKarandak</b>, VIT’s flagship event, showcasing diverse talents
        and skills. <b>Led a team</b> of students, fostering collaboration and
        creativity. Played a key role in <b>promoting the event</b> within the
        department, resulting in <b>high participation</b> and moment. Managed
        the <b>official Instagram page</b> for the event in collaboration with
        the interested students.
      </>
    ),
  },
  {
    title: 'Campus Ambassador at IMUN',
    link: 'https://www.linkedin.com/posts/tanmay-bora_internationalmun-mun-imun-activity-7260615325589651457-ukvP?utm_source=share&utm_medium=member_desktop',
    icon: 'fa-solid fa-code',
    description: (
      <>
        As a <b>Campus Ambassador for IMUN</b>, I represent the organization on
        my campus through social media. My role includes{' '}
        <b>driving student engagement</b>, <b>increasing participation</b> in
        IMUN events, and <b>managing outreach</b> to raise awareness about{' '}
        <b>Model United Nations</b>. I assist with <b>event coordination</b>,
        communication with delegates, and sharing registration and event
        details. By doing so, I helped to <b>enhance IMUN's visibility</b> and
        impact locally.
      </>
    ),
  },
  {
    title: 'Class Representative',
    link: 'https://www.linkedin.com/posts/tanmay-bora_innovation-technology-recognition-activity-7244020241498857472-N1oM?utm_source=share&utm_medium=member_desktop',
    icon: 'fas fa-chart-line',
    description: (
      <>
        <b>Represented the class</b> in discussions with faculty and
        administration, acting as a <b>bridge</b> to communicate concerns,
        feedback, and suggestions. <b>Organized class meetings</b>, facilitated
        discussions on academic and extracurricular topics, and{' '}
        <b>resolved conflicts</b> making a <b>+ve learning environment</b>.{' '}
        <b>Coordinated with peers</b> to address academic challenges and{' '}
        <b>enhance overall class performance</b>. <b>Collaborated</b> with event
        committees to ensure active participation in college-wide initiatives.
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
        <br/>
        
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
  {
    title: 'Featured in MathWorks Student Lounge 2025',
    link: 'https://blogs.mathworks.com/student-lounge/2025/12/15/dd-robocon-india-2025-mathworks-modeling-award-from-simulation-to-the-real-world-with-bracts-vit-pune/',
    icon: 'fas fa-newspaper',
    description: (
      <>
        I was featured in the <b>MathWorks Student Lounge (Dec 15, 2025)</b> for
        my work with <b>Team BRACT at DD ROBOCON India 2025</b>, where we won
        the <b>MathWorks Modeling Award</b>. I led the{' '}
        <b>perception and simulation-to-hardware pipeline</b> using{' '}
        <b>Simulink/Simscape</b>,{' '}
        <b>Computer Vision and Deep Learning Toolboxes</b>, and <b>ROS</b>,
        enabling a reliable transfer from simulation to the competition floor
        and demonstrating the practical impact of combining{' '}
        <b>model-based engineering with modern ML workflows</b>.
      </>
    ),
  },

  {
    title: (
      <>
        Patent Filed <br /> RT-IRAS
      </>
    ),
    link: '#',
    icon: 'fas fa-lightbulb',
    description: (
      <>
        I am a co-inventor of{' '}
        <b>
          “Real-Time Intelligent Teaching Reference Augmentation System
          (RT-IRAS)”
        </b>
        , an <b>AI-based system</b> that autonomously augments live classroom
        lectures by transcribing speech, extracting{' '}
        <b>domain-specific keywords</b>, and generating{' '}
        <b>context-aware explanations and visuals
          <br/>
          </b> in real time. The system
        combines <b>accent-aware speech recognition</b>, <b>NLP</b>, a{' '}
        <b>self-learning database</b>, and <b>generative AI</b> to enhance
        teaching efficiency without interrupting lecture flow.
      </>
    ),
  },
  {
    title: 'Internal Smart India Hackathon Winner 2024',
    link: 'https://github.com/tanmay0329/Cloud-Computing-Computer-Network-CP',
    icon: 'fas fa-trophy',
    description: (
      <>
        We won the <b>Internal Smart India Hackathon (ISIH 2024)</b> with our{' '}
        <b>
          Cloud-Based Early Warning System for Glacial Lake Outburst Floods
          (GLOFs)
        </b>
        , an <b>AI-driven disaster management solution</b> integrating{' '}
        <b>IoT sensors</b>, <b>satellite imagery</b>,{' '}
        <b>deep-learning models</b>, and <b>cloud infrastructure</b>. The system
        enables <b>real-time monitoring</b> and <b>predictive analytics</b> for{' '}
        <b>early flood warnings</b>, demonstrating the practical application of{' '}
        <b>AI</b>, <b>cloud computing</b>, and <b>robotics</b> for large-scale
        environmental risk mitigation.
      </>
    ),
  },
  {
    title: 'AIbotics Hackathon Winner 2024',
    link: 'https://www.linkedin.com/posts/vishwakarma-institute-of-technology-pune_proudvitian-hackathon2024-innovationinaction-activity-7295027403213447168-_1JY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECDjlsBxf_JmnpEHr1A1oV9rWdR_Nps5UA',
    icon: 'fas fa-trophy',
    description: (
      <>
        We won the <b>AIbotics Hackathon</b> for building a{' '}
        <b>drone-assisted smart irrigation and crop intelligence system</b>{' '}
        using <b>Raspberry Pi–based sensor nodes</b> to collect{' '}
        <b>real-time soil and environmental data</b>. <b>Machine learning models</b>{' '}
        trained on historical agricultural data recommended <b>optimal crops</b>{' '}
        for specific conditions, while <b>deep learning</b> detected{' '}
        <b>irrigation and environmental anomalies</b> for early intervention. A{' '}
        <b>full-stack web dashboard</b> enabled{' '}
        <b>real-time monitoring and analytics</b>, demonstrating a{' '}
        <b>scalable precision-agriculture solution</b> 
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
