import SelectCar from "../../assets/images/saveTime/icon1.png";
import Contact from "../../assets/images/saveTime/icon2.png";
import Drive from "../../assets/images/saveTime/icon3.png";
import SectionContainer from "../SectionContainer/SectionContainer.component";
import classes from "./SaveTime.module.css";

const saveTimeArr = [
  {
    img: SelectCar,
    title: "Select Car",
    parg: "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs",
  },
  {
    img: Contact,
    title: "Customer services",
    parg: "Our knowledgeable and friendly customer services are always ready 24/7 to help with any questions or concerns",
  },
  {
    img: Drive,
    title: "Let's Drive",
    parg: "Whether you're hitting the open road, we've got you covered with our wide range of cars",
  },
];

const saveTimeElement = saveTimeArr.map((saveTimeItems) => {
  return (
    <div
      key={saveTimeItems.title}
      className={classes.saveTimeContainerBoxesBox}
    >
      <img src={saveTimeItems.img} alt="icon_img" />
      <h3>{saveTimeItems.title}</h3>
      <p>{saveTimeItems.parg}</p>
    </div>
  );
});

const SaveTime = () => {
  return (
    <section className={classes.saveTimeSection}>
      <SectionContainer>
        <div className={classes.saveTimeContainer}>
          <div className={classes.saveTimeContainerTitle}>
            <h3>save time with your new Car</h3>
            <h2>Quick & Easy Car Shop</h2>
          </div>

          <div className={classes.saveTimeContainerBoxes}>
            {saveTimeElement}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default SaveTime;
