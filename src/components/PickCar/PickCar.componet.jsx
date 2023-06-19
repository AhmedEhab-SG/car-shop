import { useState } from "react";
import CarBox from "./CarBox/CarBox.componet";
import { CAR_DATA } from "../../data/carData";
import classes from "./PickCar.module.css";
import SectionContainer from "../SectionContainer/SectionContainer.component";

const PickCar = () => {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id && classes.coloredButton;
  };

  return (
    <section className={classes.pickSection}>
      <SectionContainer>
        <div className={classes.pickContainer}>
          <div className={classes.pickContainerTitle}>
            <h3>Vehicle Models</h3>
            <h2>Our Car Show</h2>
            <p>Choose from a variety of our amazing vehicles to buy.</p>
          </div>
          <div className={classes.pickContainerCarContent}>
            {/* pick car */}
            <div className={classes.pickBox}>
              <button
                className={`${coloringButton("btn1")}`}
                onClick={() => {
                  setActive("SecondCar");
                  btnID("btn1");
                }}
              >
                Audi A1 S-Line
              </button>
              <button
                className={`${coloringButton("btn2")}`}
                id="btn2"
                onClick={() => {
                  setActive("FirstCar");
                  btnID("btn2");
                }}
              >
                VW Golf 6
              </button>
              <button
                className={`${coloringButton("btn3")}`}
                id="btn3"
                onClick={() => {
                  setActive("ThirdCar");
                  btnID("btn3");
                }}
              >
                Toyota Camry
              </button>
              <button
                className={`${coloringButton("btn4")}`}
                id="btn4"
                onClick={() => {
                  setActive("FourthCar");
                  btnID("btn4");
                }}
              >
                BMW 320 ModernLine
              </button>
              <button
                className={`${coloringButton("btn5")}`}
                id="btn5"
                onClick={() => {
                  setActive("FifthCar");
                  btnID("btn5");
                }}
              >
                Mercedes-Benz GLK
              </button>
              <button
                className={`${coloringButton("btn6")}`}
                id="btn6"
                onClick={() => {
                  setActive("SixthCar");
                  btnID("btn6");
                }}
              >
                VW Passat CC
              </button>
            </div>

            {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
            {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
            {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
            {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
            {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
            {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default PickCar;
