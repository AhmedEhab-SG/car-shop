import appStore from "../../assets/svg/appstore.svg";
import playStore from "../../assets/svg/googleapp.svg";
import SectionContainer from "../SectionContainer/SectionContainer.component";
import classes from "./MobileStores.module.css";

const MobileStore = () => {
  return (
    <section className={classes.mobileStoreSection}>
      <SectionContainer>
        <div className={classes.mobileStoreText}>
          <h2>Download our app to get most out of our Store</h2>
          <p>
            Our App gives you the best experience for your needs have a direct
            contact to customer support, You can track the best deals and with
            one click you will able to keep track with your insurance policy,
            with our app u will always be up to date with every thing New.
          </p>
          <div className={classes.mobileStoreTextBtns}>
            <img alt="mobile-Store_img" src={playStore} />
            <img alt="mboile-Store_img" src={appStore} />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default MobileStore;
