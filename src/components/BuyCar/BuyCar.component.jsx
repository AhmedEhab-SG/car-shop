import { Fragment, useEffect, useState } from "react";
import CarAudi from "../../assets/images/cars-big/audia1.jpg";
import CarGolf from "../../assets/images/cars-big/golf6.jpg";
import CarToyota from "../../assets/images/cars-big/toyotacamry.jpg";
import CarBmw from "../../assets/images/cars-big/bmw320.jpg";
import CarMercedes from "../../assets/images/cars-big/benz.jpg";
import CarPassat from "../../assets/images/cars-big/passatcc.jpg";
import CarRcz from "../../assets/images/cars-big/peugeot.png";
import classes from "./BuyCar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCar,
  faLocationDot,
  faCalendarDays,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import SectionContainer from "../SectionContainer/SectionContainer.component";

const BuyCar = () => {
  const [modal, setModal] = useState(false); //  class - active-modal

  // missing input
  const [isWrong, setisWrong] = useState(false);
  const [isBuy, setIsBuy] = useState(false);
  // buying car
  const [carType, setCarType] = useState("");
  const [locationPay, setLocationPay] = useState("");
  const [trafficUnit, setTrafficUnit] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    if (locationPay === "" || dropTime === "" || carType === "") {
      setisWrong(true);
    } else {
      setModal(!modal);
      setisWrong(false);
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal buying
  const confirmbuying = (e) => {
    e.preventDefault();
    setModal(!modal);
    setIsBuy(true);
  };

  // taking value of buying inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setLocationPay(e.target.value);
  };
  const trafficPick = (e) => {
    setTrafficUnit(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "Audi A1 S-Line":
      imgUrl = CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = CarGolf;
      break;
    case "Toyota Camry":
      imgUrl = CarToyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = CarBmw;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = CarMercedes;
      break;
    case "VW Passat CC":
      imgUrl = CarPassat;
      break;
    case "Peugeit RCZ":
      imgUrl = CarRcz;
      break;
    default:
      imgUrl = "";
  }

  // hide message
  const hideMessage = () => {
    setIsBuy(false);
  };

  return (
    <Fragment>
      <section id="buying-section" className={classes.buySection}>
        {/* overlay */}
        <div
          onClick={openModal}
          className={`${classes.modalOverlay} ${modal && classes.activeModal}`}
        ></div>

        <SectionContainer>
          <div className={classes.buyContent}>
            <div className={classes.buyContentBox}>
              <h2>Buy a Car</h2>

              <p
                className={classes.errorMessage}
                style={{ display: isWrong ? "flex" : "none" }}
              >
                All fields required! <FontAwesomeIcon icon={faXmark} />
              </p>

              <p
                className={classes.buyingDone}
                style={{ display: isBuy ? "flex" : "none" }}
              >
                Check your email to confirm an order.{" "}
                <FontAwesomeIcon onClick={hideMessage} icon={faXmark} />
              </p>

              <form className={classes.boxForm}>
                <div className={classes.boxFormCarType}>
                  <label>
                    <FontAwesomeIcon icon={faCar} /> &nbsp; Select Your Car Type{" "}
                    <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="Peugeit RCZ">Peugeit RCZ</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className={classes.boxFormCarType}>
                  <label>
                    <FontAwesomeIcon icon={faLocationDot} /> &nbsp; Location{" "}
                    <b>*</b>
                  </label>
                  <select value={locationPay} onChange={handlePick}>
                    <option>Select pick up location</option>
                    <option>Cairo</option>
                    <option>Giza</option>Giza
                    <option>Alexandria</option>
                    <option>Aswan</option>
                    <option>Luxor</option>
                  </select>
                </div>
                <div className={classes.boxFormCarType}>
                  <label>
                    <FontAwesomeIcon icon={faLocationDot} /> &nbsp; Traffic Unit{" "}
                    <b>*</b>
                  </label>
                  <select value={trafficUnit} onChange={trafficPick}>
                    <option>Select pick up location</option>
                    <option>Cairo</option>
                    <option>Giza</option>Giza
                    <option>Alexandria</option>
                    <option>Aswan</option>
                    <option>Luxor</option>
                  </select>
                </div>

                <div className={classes.boxFormCarTime}>
                  <label htmlFor="droptime">
                    <FontAwesomeIcon icon={faCalendarDays} /> &nbsp; Date{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button
                  className={classes.buyBtn}
                  onClick={openModal}
                  type="submit"
                >
                  Buy Now
                </button>
              </form>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`${classes.buyingModal} ${modal && classes.activeModal}`}>
        {/* title */}
        <div className={classes.buyingModalTitle}>
          <h2>Complete Payment</h2>
          <FontAwesomeIcon onClick={openModal} icon={faXmark} />
        </div>
        {/* message */}
        <div className={classes.buyingModalMessage}>
          <h4>
            <FontAwesomeIcon icon={faCircleInfo} /> Upon completing this payment
            enquiry, you will receive:
          </h4>
          <p>
            A 10% discount as your frist payment if you are paying in cash or 5%
            discount if pay in installments.
          </p>
        </div>
        {/* car info */}
        <div className={classes.buyingModalCarInfo}>
          <div className={classes.datesDiv}>
            <div className={classes.buyingModalCarInfoDates}>
              <span>
                <FontAwesomeIcon icon={faCalendarDays} />
                <div>
                  <h6>Specific Time</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className={classes.inputTime}></input>
                  </p>
                </div>
              </span>
            </div>

            <div className={classes.buyingModalCarInfoDates}>
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
                <div>
                  <h6>Your Location</h6>
                  <p>{locationPay}</p>
                </div>
              </span>
            </div>

            <div className={classes.buyingModalCarInfoDates}>
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
                <div>
                  <h6>Traffic Unit</h6>
                  <p>{trafficUnit}</p>
                </div>
              </span>
            </div>
          </div>
          <div className={classes.buyingModalCarInfoModel}>
            <h5>
              <span>Car -</span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>
        {/* personal info */}
        <div className={classes.buyingModalPersonInfo}>
          <h4>Personal Information</h4>
          <form className={classes.infoForm}>
            <div className={classes.infoForm2Col}>
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className={classes.errorModal}>This field is required.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className={classes.errorModal}>This field is required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className={classes.errorModal}>This field is required.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                ></input>
                <p className={classes.errorModal}>This field is required.</p>
              </span>
            </div>

            <div className={classes.infoForm1Col}>
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className={classes.errorModal}>This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className={classes.errorModal}>This field is required.</p>
              </span>
            </div>

            <div className={classes.infoForm2Col}>
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className={classes.errorModal}>This field is required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className={classes.errorModal}>This field is required.</p>
              </span>
            </div>

            <span className={classes.infoFormCheckbox}>
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className={classes.reserveButton}>
              <button onClick={confirmbuying}>Pay Now</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default BuyCar;
