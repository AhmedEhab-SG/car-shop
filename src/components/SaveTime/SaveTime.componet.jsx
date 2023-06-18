import SelectCar from "../../assets/images/saveTime/icon1.png";
import Contact from "../../assets/images/saveTime/icon2.png";
import Drive from "../../assets/images/saveTime/icon3.png";
import classes from "./SaveTime.module.css"
const SaveTime = () => {
  return (
    <section className={classes.saveTimeSection}>
      <div className="container">
        <div className={classes.saveTimeContainer}>
          <div className={classes.saveTimeContainerTitle}>
            <h3>save time with your new Car</h3>
            <h2>Quick & Easy Car Shop</h2>
          </div>

          <div className={classes.saveTimeContainerBoxes}>
            <div className={classes.saveTimeContainerBoxesBox}>
              <img src={SelectCar} alt="icon_img" />
              <h3>Select Car</h3>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>

            <div className={classes.saveTimeContainerBoxesBox}>
              <img src={Contact} alt="icon_img" />
              <h3>Customer services</h3>
              <p>
                Our knowledgeable and friendly customer services are always ready 24/7 to
                help with any questions or concerns
              </p>
            </div>

            <div className={classes.saveTimeContainerBoxesBox}>
              <img src={Drive} alt="icon_img" />
              <h3>Let's Drive</h3>
              <p>
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveTime;
