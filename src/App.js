import Home from "./pages/Home.page";
import Navbar from "./components/Navbar/Navbar.componet";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import About from "./pages/About.page";
import CarModels from "./pages/CarModels.page";
import TestimonialsPage from "./pages/Testimonials.page";
import Contact from "./pages/Contact.page";
import { useRoutes } from "react-router-dom";

const App = () => {
  const element = <Home />;
  const HomePath = () =>
    useRoutes(["/", "car-shop/"].map((path) => ({ path, element })));
  return (
    <Fragment>
      <Navbar />
      <HomePath />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="models" element={<CarModels />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
};

export default App;
