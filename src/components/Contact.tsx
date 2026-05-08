import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Let's Build Something Meaningful</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:harshalsankala18@gmail.com" data-cursor="disable">
                harshalsankala18@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>Pune, Maharashtra, India</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/sarthakgangmad-alt"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/harshal-sankala/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/harshal__sankala/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              AI Product Builder & <br /> Founder <span>Harshal Sankala</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Harshal Sankala
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

