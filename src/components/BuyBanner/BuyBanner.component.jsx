import classes from "./BuyBanner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import SectionContainer from "../SectionContainer/SectionContainer.component";

const BuyBanner = () => {
  return (
    <div className={classes.buyBanner}>
      <div className={classes.buyBannerOverlay}></div>
      <SectionContainer>
        <div className={classes.textContent}>
          <h2>Buy your Dream Car Now Within Our WebSite</h2>
          <span>
            <FontAwesomeIcon icon={faPhone} />
            <h3>(+02) 01234567891</h3>
          </span>
        </div>
      </SectionContainer>
    </div>
  );
};

export default BuyBanner;
