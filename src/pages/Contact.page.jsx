import {
  faEnvelope,
  faEnvelopeOpenText,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer/Footer.component";
import HeroPages from "../components/HeroPages/HeroPages.component";
import classes from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionContainer from "../components/SectionContainer/SectionContainer.component";
import BuyBanner from "../components/BuyBanner/BuyBanner.component";

const Contact = () => {
  return (
    <section className="contact-page">
      <HeroPages name="Contact" />
      <SectionContainer>
        <div className={classes.contactDiv}>
          <div className={classes.contactDivText}>
            <h2>Need additional information?</h2>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <a href="/car-shop">
              <FontAwesomeIcon icon={faPhone} />
              &nbsp; (+20) 01234567891
            </a>
            <a href="/car-shop">
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp; carshop@gmail.com
            </a>
            <a href="/car-shop">
              <FontAwesomeIcon icon={faLocationDot} /> &nbsp; Cairo, Egypt
            </a>
          </div>
          <div className={classes.contactDivForm}>
            <form>
              <label>
                Full Name <b>*</b>
              </label>
              <input type="text" placeholder='"Frist Name" "Last Name"'></input>

              <label>
                Email <b>*</b>
              </label>
              <input type="email" placeholder="youremail@example.com"></input>

              <label>
                Tell us about it <b>*</b>
              </label>
              <textarea placeholder="Write Here.."></textarea>

              <button >
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                &nbsp; Send Message
              </button>
            </form>
          </div>
        </div>
      </SectionContainer>
      <BuyBanner />
      <Footer />
    </section>
  );
};

export default Contact;
