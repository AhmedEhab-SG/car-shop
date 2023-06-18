import SectionContainer from "../SectionContainer/SectionContainer.component";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={classes.bannerSection}>
      <SectionContainer>
        <div className={classes.bannerContent}>
          <div className={classes.bannerContentText}>
            <h2>Save big with our cheap car shop!</h2>
            <p>
              Top Gears. Secure Insurance. <span>24/7</span> Customer Support.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Banner;
