import { useState } from "react";

import logo from "../../images/logo.svg";
import Button from "../UI/Button";
import classes from "./Header.module.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const hamburgerHandler = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <header className={classes.header}>
      <div className="container row">
        <div className={`row ${classes.header__icons}`}>
          <img src={logo} alt="Shortly" className={classes.header__logo} />
          <div
            className={classes.header__hamburger}
            onClick={hamburgerHandler}
          ></div>
        </div>

        <nav className={`row ${classes.nav} ${!isVisible && classes.hidden}`}>
          <ul className={`row ${classes["nav__list"]}`}>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <div className={classes.nav__line} />
          <ul className={`row ${classes["nav__list"]}`}>
            <li>Login</li>
            <li>
              <Button className={classes.btn}>Sign Up</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
