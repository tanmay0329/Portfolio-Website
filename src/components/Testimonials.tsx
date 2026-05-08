import "./styles/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "“Campus eSphere reflects innovative thinking and a strong understanding of how technology can improve educational systems. Harshal demonstrated leadership, initiative, and a problem-solving mindset while working on the platform.”",
      author: "Dr. Vrishali S. Randhir",
      role: "Principal, Ness Wadia College of Commerce",
    },
    {
      text: "“The Campus eSphere platform showcases a modern approach toward campus management and digital transformation. The project demonstrates creativity, execution capability, and strong technical vision.”",
      author: "Faculty Review",
      role: "Campus eSphere Project",
    },
    {
      text: "“Harshal shows exceptional initiative in AI and product execution. His ability to combine technical understanding with leadership stands out.”",
      author: "Anmol Pandita",
      role: "Canadian Founder",
    },
    {
      text: "“Working with Harshal was a great experience. His project management and execution mindset make him different from most students.”",
      author: "Tanmay Bora",
      role: "VIT IT Student",
    },
  ];

  return (
    <div className="testimonials-section section-container" id="testimonials">
      <div className="testimonials-container">
        <h3 className="title">Testimonials</h3>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <h4>{t.author}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
