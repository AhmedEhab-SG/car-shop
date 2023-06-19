import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionContainer from "../SectionContainer/SectionContainer.component";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <SectionContainer>
        <div className={classes.footerContent}>
          <ul className={classes.footerContent1}>
            <li>
              <span>CAR</span> Shop
            </li>
            <li>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li>
              <a href="tel:123456789">
                <FontAwesomeIcon icon={faPhone} /> &nbsp; (+02) 01234567891
              </a>
            </li>

            <li>
              <a
                href="mailto: 
                  carhop@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp; carshop@gmail.com
              </a>
            </li>
          </ul>

          <ul className={classes.footerContent2}>
            <li>Branches</li>
            <li>
              <a href="/car-shop">Cairo</a>
            </li>
            <li>
              <a href="/car-shop">Giza</a>
            </li>
            <li>
              <a href="/car-shop">Alexandria</a>
            </li>
            <li>
              <a href="/car-shop">Luxor</a>
            </li>
            <li>
              <a href="/car-shop">Sharm El-Sheikh</a>
            </li>
          </ul>

          <ul className={classes.footerContent2}>
            <li>Working Hours</li>
            <li>Mon - Fri: 9:00AM - 10:00PM</li>
            <li>Sat: 9:00AM - 5:00PM</li>
            <li>Sun: Closed</li>
          </ul>

          <ul className={classes.footerContent2}>
            <li>Subscription</li>
            <li>
              <p>Subscribe your Email address for latest news & updates.</p>
            </li>
            <li>
              <input type="email" placeholder="Enter Email Address"></input>
            </li>
            <li>
              <button className={classes.submitEmail}>Submit</button>
            </li>
          </ul>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
