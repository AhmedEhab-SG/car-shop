import Footer from "../components/Footer/Footer.component";
import HeroPages from "../components/HeroPages/HeroPages.component";
import carModel from "../data/carModel";
import { Link } from "react-router-dom";
import classes from "../styles/CarModels.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faStar } from "@fortawesome/free-solid-svg-icons";
import BuyBanner from "../components/BuyBanner/BuyBanner.component";
import SectionContainer from "../components/SectionContainer/SectionContainer.component";

const modelBox = carModel.map((modelItems) => {
  return (
    <div key={modelItems.model} className={classes.modelsDivBox}>
      <div className={classes.modelsDivBoxImg}>
        <img src={modelItems.modelImg} alt="car_img" />
        <div className={classes.modelsDivBoxDescr}>
          <div className={classes.modelsDivBoxDescrNamePrice}>
            <div className={classes.modelsDivBoxDescrNamePriceName}>
              <p>{modelItems.model}</p>
              <span>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
            <div className={classes.modelsDivBoxDescrNamePricePrice}>
              <h4>{modelItems.price}</h4>
              <p>{modelItems.discount}</p>
            </div>
          </div>
          <div className={classes.modelsDivBoxDescrNamePriceDetails}>
            <span>
              <FontAwesomeIcon icon={faCarSide} /> &nbsp; {modelItems.modelName}
            </span>
            <span style={{ textAlign: "right" }}>
              {modelItems.modelLooks} &nbsp; <FontAwesomeIcon icon={faCarSide} />
            </span>
            <span>
              <FontAwesomeIcon icon={faCarSide} /> &nbsp; {modelItems.modelType}
            </span>
            <span style={{ textAlign: "right" }}>
              {modelItems.doors} &nbsp;{" "}
              <FontAwesomeIcon icon={faCarSide} />
            </span>
          </div>
          <Link
            className={classes.modelsDivBoxDescrNamePriceBtnA}
            onClick={() => window.scrollTo(0, 0)}
            to="/car-shop"
          >
            <div className={classes.modelsDivBoxDescrNamePriceBtn}>Buy Now</div>
          </Link>
        </div>
      </div>
    </div>
  );
});

const CarModels = () => {
  return (
    <section className="models-section">
      <HeroPages name="Vehicle Models" />
      <SectionContainer>
        <div className={classes.modelsDiv}>{modelBox}</div>
      </SectionContainer>
      <BuyBanner />
      <Footer />
    </section>
  );
};

export default CarModels;
