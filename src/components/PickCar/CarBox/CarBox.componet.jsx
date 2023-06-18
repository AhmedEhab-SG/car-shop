import { useState } from "react";
import classes from "../PickCar.module.css";

const CarBox = (props) => {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {props.data[props.carID].map((car, id) => (
        <div key={id} className={classes.boxCars}>
          {/* car */}
          <div className={classes.pickCar}>
            {carLoad && <span className={classes.loader}></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className={classes.pickDescription}>
            <div className={classes.pickDescriptionPrice}>
              <span>${car.price}</span>/ 10% Off
            </div>
            <div className={classes.pickDescriptionTable}>
              <div className={classes.pickDescriptionTableCol}>
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className={classes.pickDescriptionTableCol}>
                <span>Mark</span>
                <span>{car.mark}</span>
              </div>

              <div className={classes.pickDescriptionTableCol}>
                <span>Year</span>
                <span>{car.year}</span>
              </div>

              <div className={classes.pickDescriptionTableCol}>
                <span>Doors</span>
                <span>{car.doors}</span>
              </div>

              <div className={classes.pickDescriptionTableCol}>
                <span>AC</span>
                <span>{car.air}</span>
              </div>

              <div className={classes.pickDescriptionTableCol}>
                <span>Transmission</span>
                <span>{car.transmission}</span>
              </div>

              <div className={classes.pickDescriptionTableCol}>
                <span>Fuel</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className={classes.ctaBtn} href="#buying-section">
              Buy Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarBox;
