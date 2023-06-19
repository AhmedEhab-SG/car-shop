import Home from "./pages/Home.page";
import Navbar from "./components/Navbar/Navbar.componet";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import About from "./pages/About.page";
import CarModels from "./pages/CarModels.page";
import TestimonialsPage from "./pages/Testimonials.page";
import Contact from "./pages/Contact.page";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route index path="/car-shop" element={<Home />} />
        <Route path="/car-shop/about" element={<About />} />
        <Route path="/car-shop/models" element={<CarModels />} />
        <Route path="/car-shop/testimonials" element={<TestimonialsPage />} />
        <Route path="/car-shop/contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
};

export default App;
