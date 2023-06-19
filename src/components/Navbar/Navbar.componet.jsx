import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.png";
import { useState } from "react";
import classes from "./Navbar.module.css";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <nav>
      {/* mobile */}
      <div className={`${classes.mobileNavbar} ${nav && classes.openNav}`}>
        <div onClick={openNav} className={classes.mobileNavbarClose}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <ul className={classes.mobileNavbarLinks}>
          <li>
            <Link onClick={openNav} to="/car-shop">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/car-shop/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/car-shop/models">
              Models
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/car-shop/testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/car-shop/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* desktop */}

      <div className={classes.navbar}>
        <div className={classes.navbarImg}>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="logo-img" />
          </Link>
        </div>
        <ul className={classes.navbarLinks}>
          <li>
            <Link className="homeLink" to="/car-shop">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link className="aboutLink" to="/car-shop/about">
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link className="modelsLink" to="/car-shop/models">
              Vehicle Models
            </Link>
          </li>
          <li>
            {" "}
            <Link className="testiLink" to="/car-shop/testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            {" "}
            <Link className="contactLink" to="/car-shop/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className={classes.navbarButtons}>
          <Link className={classes.navbarButtonsSignIn} to="/">
            Sign In
          </Link>
          <Link className={classes.navbarButtonsRegister} to="/">
            Register
          </Link>
        </div>

        {/* mobile */}
        <div className={classes.mobileHamb} onClick={openNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
