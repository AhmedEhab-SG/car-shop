import { Fragment } from "react";
import Footer from "../components/Footer/Footer.component";
import HeroPages from "../components/HeroPages/HeroPages.component";
import SaveTime from "../components/SaveTime/SaveTime.componet";
import AboutMain from "../assets/images/about/about-main.jpg";
import Box1 from "../assets/images/about/icon1.png";
import Box2 from "../assets/images/about/icon2.png";
import Box3 from "../assets/images/about/icon3.png";
import classes from "../styles/About.module.css";
import BuyBanner from "../components/BuyBanner/BuyBanner.component";
import SectionContainer from "../components/SectionContainer/SectionContainer.component";

const About = () => {
  return (
    <Fragment>
      <section className="about-page">
        <HeroPages name="About" />
        <SectionContainer>
          <div className={classes.aboutMain}>
            <img
              className={classes.aboutMainImg}
              src={AboutMain}
              alt="car-renting"
            />
            <div className={classes.aboutMainText}>
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Our Company is Built on customer needs whether you need a
                maintenance or buying new car we got u covered with our cutting
                edge you will be save and able to attend to your daily
                activities as fast as it could be, You will find your Dream Car
                here.
              </p>
              <div className={classes.aboutMainTextIcons}>
                <div className={classes.aboutMainTextIconsBox}>
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className={classes.aboutMainTextIconsBox}>
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>85</h4>
                    <p>Shop Stores</p>
                  </span>
                </div>
                <div className={classes.aboutMainTextIconsBox}>
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SaveTime />
        </SectionContainer>
      </section>
      <BuyBanner />
      <Footer />
    </Fragment>
  );
};

export default About;
