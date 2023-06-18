import { Fragment } from "react";
import Hero from "../components/Hero/Hero.component";
import BuyCar from "../components/BuyCar/BuyCar.component";
import SaveTime from "../components/SaveTime/SaveTime.componet";
import PickCar from "../components/PickCar/PickCar.componet";
import Banner from "../components/Banner/Banner.componets";
import ChooseUs from "../components/ChooseUs/chooseUs.componet";
import Testimonials from "../components/Testimonials/Testimonials.component";
import Faq from "../components/Faq/Faq.componets";
import MobileStore from "../components/MobileStores/MobileStores.component";
import Footer from "../components/Footer/Footer.component";
const Home = () => {
  return (
    <Fragment>
      <Hero />
      <BuyCar />
      <SaveTime />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <MobileStore />
      <Footer />
    </Fragment>
  );
};

export default Home;
