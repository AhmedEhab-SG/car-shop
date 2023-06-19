import MainImg from "../../assets/images/chooseUs/main.png";
import Box1 from "../../assets/images/chooseUs/icon1.png";
import Box2 from "../../assets/images/chooseUs/icon2.png";
import Box3 from "../../assets/images/chooseUs/icon3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./chooseUs.module.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SectionContainer from "../SectionContainer/SectionContainer.component";
const ChooseUs = () => {
  return (
    <section className={classes.chooseSection}>
      <SectionContainer>
        <div className={classes.chooseContainer}>
          <img
            className={classes.chooseContainerImg}
            src={MainImg}
            alt="car_img"
          />
          <div className={classes.textContainer}>
            <div className={classes.textContainerLeft}>
              <h4>Why Choose Us</h4>
              <h2>Best valued deals you will ever find</h2>
              <p>
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best place for
                your money, so you can enjoy top-quality cars and services. Our
                deals are designed to give you the ultimate price for finest
                Cars, so don't miss out on your chance to save big.
              </p>
              <a href="/car-shop#home">
                Find Details &nbsp;
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
            <div className={classes.textContainerRight}>
              <div className={classes.textContainerRightBox}>
                <img src={Box1} alt="car-img" />
                <div className={classes.textContainerRightBoxText}>
                  <h4>Travel Anywhere Anytime</h4>
                  <p>
                    Take your top quality car around the cities with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className={classes.textContainerRightBox}>
                {" "}
                <img src={Box2} alt="coin-img" />
                <div className={classes.textContainerRightBoxText}>
                  <h4>Pricing Is The Key</h4>
                  <p>
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className={classes.textContainerRightBox}>
                {" "}
                <img src={Box3} alt="coin-img" />
                <div className={classes.textContainerRightBoxText}>
                  <h4> Our Insurnce Service</h4>
                  <p>
                    with our Insrucnce service you are always safe, we got your
                    back whenever maintenance you need, no hidden charges
                    policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default ChooseUs;
