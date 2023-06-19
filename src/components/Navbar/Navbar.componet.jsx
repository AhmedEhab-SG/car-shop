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

  const navArr = [
    {
      id: "Home",
      link: "/car-shop",
    },
    {
      id: "About",
      link: "/car-shop/about",
    },
    {
      id: "Models",
      link: "/car-shop/models",
    },
    {
      id: "Testimonials",
      link: "/car-shop/testimonials",
    },
    {
      id: "Contact",
      link: "/car-shop/contact",
    },
  ];
  const navElementMobile = navArr.map((navItems) => {
    return (
      <li key={navItems.id}>
        <Link onClick={openNav} to={navItems.link}>
          {navItems.id}
        </Link>
      </li>
    );
  });
  const navElement = navArr.map((navItems) => {
    return (
      <li key={navItems.id}>
        {" "}
        <Link to={navItems.link}>{navItems.id}</Link>
      </li>
    );
  });
  return (
    <nav>
      {/* mobile */}
      <div className={`${classes.mobileNavbar} ${nav && classes.openNav}`}>
        <div onClick={openNav} className={classes.mobileNavbarClose}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <ul className={classes.mobileNavbarLinks}>{navElementMobile}</ul>
      </div>

      {/* desktop */}

      <div className={classes.navbar}>
        <div className={classes.navbarImg}>
          <Link to="/car-shop" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="logo-img" />
          </Link>
        </div>
        <ul className={classes.navbarLinks}>{navElement}</ul>
        <div className={classes.navbarButtons}>
          <Link className={classes.navbarButtonsSignIn} to="/car-shop">
            Sign In
          </Link>
          <Link className={classes.navbarButtonsRegister} to="/car-shop">
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
