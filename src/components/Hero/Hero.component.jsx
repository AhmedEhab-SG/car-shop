import classes from "./Hero.module.css";
import BgShape from "../../assets/images/hero/hero-bg.png";
import HeroCar from "../../assets/images/hero/main-mercedes-bg.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faAngleRight,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#buying-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <section id="home" className={classes.heroSection}>
      <div className={classes.container}>
        <img className={classes.bgShape} src={BgShape} alt="bg-shape" />
        <div className={classes.heroContent}>
          <div className={classes.heroContentText}>
            <h4>Find your dream car now</h4>
            <h1>
              Save <span>big</span> with our Car Shop
            </h1>
            <p>
              Buy a car of your dreams. Unbeatable prices, unlimited miles,
              flexible pay in installments options and much more.
            </p>
            <div className={classes.heroContentTextBtns}>
              <Link
                onClick={bookBtn}
                className={classes.heroContentTextBtnsBookRide}
                to="/car-shop"
              >
                Buy a Car &nbsp; <FontAwesomeIcon icon={faCircleCheck} />
              </Link>
              <Link className={classes.heroContentTextBtnsLearnMore} to="/">
                Learn More &nbsp; <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
          </div>

          {/* img */}
          <img
            src={HeroCar}
            alt="carImg"
            className={classes.heroContentCarImg}
          />
        </div>
      </div>

      {/* page up */}
      <div
        onClick={scrollToTop}
        className={`${classes.scrollUp} ${goUp && classes.showScroll}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </section>
  );
};

export default Hero;
