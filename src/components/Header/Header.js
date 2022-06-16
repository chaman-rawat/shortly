import logo from "../../images/logo.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <img src={logo} alt="Shortly" className={classes.header__logo} />
        <div className={classes.header__hamburger}></div>
        <nav className={`${classes.header__nav}`}>
          <ul className="row">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <ul className="row">
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
