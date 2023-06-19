import { Link } from "react-router-dom";
import classes from "./HeroPages.module.css";
import SectionContainer from "../SectionContainer/SectionContainer.component";
function HeroPages(props) {
  return (
    <section className={classes.heroPages}>
      <div className={classes.heroPagesOverlay}></div>
      <SectionContainer>
        <div className={classes.heroPagesText}>
          <h3>{props.name}</h3>
          <p>
            <Link to="/car-shop">Home</Link> / {props.name}
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}

export default HeroPages;
