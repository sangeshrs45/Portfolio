import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faXTwitter,
  faInstagram,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="icons">
        <div className="icon linkedin">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
        <div className="icon github">
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="icon x-twitter">
          <FontAwesomeIcon icon={faXTwitter} />
        </div>
        <div className="icon gmail">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="icon instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="icon facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
