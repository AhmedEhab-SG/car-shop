import Footer from "../components/Footer/Footer.component";
import HeroPages from "../components/HeroPages/HeroPages.component";
import CarImg1 from "../assets/images/cars-big/audi-box.png";
import CarImg2 from "../assets/images/cars-big/golf6-box.png";
import CarImg3 from "../assets/images/cars-big/toyota-box.png";
import CarImg4 from "../assets/images/cars-big/bmw-box.png";
import CarImg5 from "../assets/images/cars-big/benz-box.png";
import CarImg6 from "../assets/images/cars-big/passat-box.png";
import { Link } from "react-router-dom";
import classes from "../styles/CarModels.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faStar } from "@fortawesome/free-solid-svg-icons";
import BuyBanner from "../components/BuyBanner/BuyBanner.component";
import SectionContainer from "../components/SectionContainer/SectionContainer.component";

const CarModels = () => {
  return (
    <section className="models-section">
      <HeroPages name="Vehicle Models" />
      <SectionContainer>
        <div className={classes.modelsDiv}>
          <div className={classes.modelsDivBox}>
            <div className={classes.modelsDivBoxImg}>
              <img src={CarImg1} alt="car_img" />
              <div className={classes.modelsDivBoxDescr}>
                <div className={classes.modelsDivBoxDescrNamePrice}>
                  <div className={classes.modelsDivBoxDescrNamePriceName}>
                    <p>Audi A1</p>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                  <div className={classes.modelsDivBoxDescrNamePricePrice}>
                    <h4>$23,410</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className={classes.modelsDivBoxDescrNamePriceDetails}>
                  <span>
                    <FontAwesomeIcon icon={faCarSide} /> &nbsp; Audi
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <FontAwesomeIcon icon={faCarSide} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCarSide} /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <FontAwesomeIcon icon={faCarSide} />
                  </span>
                </div>
                <Link
                  className={classes.modelsDivBoxDescrNamePriceBtnA}
                  onClick={() => window.scrollTo(0, 0)}
                  to="/car-shop"
                >
                  <div className={classes.modelsDivBoxDescrNamePriceBtn}>
                    Buy Now
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={classes.modelsDivBox}>
            <div className={classes.modelsDivBoxImg}>
              <img src={CarImg2} alt="car_img" />
              <div className={classes.modelsDivBoxDescr}>
                <div className={classes.modelsDivBoxDescrNamePrice}>
                  <div className={classes.modelsDivBoxDescrNamePriceName}>
                    <p>Golf 6</p>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                  <div className={classes.modelsDivBoxDescrNamePricePrice}>
                    <h4>$13,918</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className={classes.modelsDivBoxDescrNamePriceDetails}>
                  <span>
                    <FontAwesomeIcon icon={faCarSide} /> &nbsp; VW
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <FontAwesomeIcon icon={faCarSide} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCarSide} /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <FontAwesomeIcon icon={faCarSide} />
                  </span>
                </div>
                <Link
                  className={classes.modelsDivBoxDescrNamePriceBtnA}
                  onClick={() => window.scrollTo(0, 0)}
                  to="/car-shop"
                >
                  <div className={classes.modelsDivBoxDescrNamePriceBtn}>
                    Buy Now
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={classes.modelsDivBox}>
            <div className={classes.modelsDivBoxImg}>
              <img src={CarImg3} alt="car_img" />
              <div className={classes.modelsDivBoxDescr}>
                <div className={classes.modelsDivBoxDescrNamePrice}>
                  <div className={classes.modelsDivBoxDescrNamePriceName}>
                    <p>Toyota</p>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                  <div className={classes.modelsDivBoxDescrNamePricePrice}>
                    <h4>$21,550 </h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className={classes.modelsDivBoxDescrNamePriceDetails}>
                  <span>
                    <FontAwesomeIcon icon={faCarSide} /> &nbsp; Camry
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <FontAwesomeIcon icon={faCarSide} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCarSide} /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <FontAwesomeIcon icon={faCarSide} />
                  </span>
                </div>
                <Link
                  className={classes.modelsDivBoxDescrNamePriceBtnA}
                  onClick={() => window.scrollTo(0, 0)}
                  to="/car-shop"
                >
                  <div className={classes.modelsDivBoxDescrNamePriceBtn}>
                    Buy Now
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={classes.modelsDivBox}>
            <div className={classes.modelsDivBoxImg}>
              <img src={CarImg4} alt="car_img" />
              <div className={classes.modelsDivBoxDescr}>
                <div className={classes.modelsDivBoxDescrNamePrice}>
                  <div className={classes.modelsDivBoxDescrNamePriceName}>
                    <p>BMW 320</p>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                  <div className={classes.modelsDivBoxDescrNamePricePrice}>
                    <h4>$29,984</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className={classes.modelsDivBoxDescrNamePriceDetails}>
                  <span>
                    <FontAwesomeIcon icon={faCarSide} /> &nbsp; ModernLine
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <FontAwesomeIcon icon={faCarSide} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCarSide} /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <FontAwesomeIcon icon={faCarSide} />
                  </span>
                </div>
                <Link
                  className={classes.modelsDivBoxDescrNamePriceBtnA}
                  onClick={() => window.scrollTo(0, 0)}
                  to="/car-shop"
                >
                  <div className={classes.modelsDivBoxDescrNamePriceBtn}>
                    Buy Now
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={classes.modelsDivBox}>
            <div className={classes.modelsDivBoxImg}>
              <img src={CarImg5} alt="car_img" />
              <div className={classes.modelsDivBoxDescr}>
                <div className={classes.modelsDivBoxDescrNamePrice}>
                  <div className={classes.modelsDivBoxDescrNamePriceName}>
                    <p>Mercedes</p>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                  <div className={classes.modelsDivBoxDescrNamePricePrice}>
                    <h4>$37,500</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className={classes.modelsDivBoxDescrNamePriceDetails}>
                  <span>
                    <FontAwesomeIcon icon={faCarSide} /> &nbsp; Benz GLK
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <FontAwesomeIcon icon={faCarSide} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCarSide} /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <FontAwesomeIcon icon={faCarSide} />
                  </span>
                </div>
                <Link
                  className={classes.modelsDivBoxDescrNamePriceBtnA}
                  onClick={() => window.scrollTo(0, 0)}
                  to="/car-shop"
                >
                  <div className={classes.modelsDivBoxDescrNamePriceBtn}>
                    Buy Now
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={classes.modelsDivBox}>
            <div className={classes.modelsDivBoxImg}>
              <img src={CarImg6} alt="car_img" />
              <div className={classes.modelsDivBoxDescr}>
                <div className={classes.modelsDivBoxDescrNamePrice}>
                  <div className={classes.modelsDivBoxDescrNamePriceName}>
                    <p>VW Passat</p>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                  <div className={classes.modelsDivBoxDescrNamePricePrice}>
                    <h4>$29,980</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className={classes.modelsDivBoxDescrNamePriceDetails}>
                  <span>
                    <FontAwesomeIcon icon={faCarSide} /> &nbsp; CC
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <FontAwesomeIcon icon={faCarSide} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCarSide} /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <FontAwesomeIcon icon={faCarSide} />
                  </span>
                </div>
                <Link
                  className={classes.modelsDivBoxDescrNamePriceBtnA}
                  onClick={() => window.scrollTo(0, 0)}
                  to="/car-shop"
                >
                  <div className={classes.modelsDivBoxDescrNamePriceBtn}>
                    Buy Now
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <BuyBanner />
      <Footer />
    </section>
  );
};

export default CarModels;
