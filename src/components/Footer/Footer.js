import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import pinterest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container row">
        <h2 className={classes.footer__title}>Shortly</h2>
        <div className={`row ${classes.footer__lists}`}>
          <div>
            <h3>Features</h3>
            <ul className={classes.footer__list}>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul className={classes.footer__list}>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul className={classes.footer__list}>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className={`row ${classes.footer__icons}`}>
          {/* <a href=""> */}
          <img src={facebook} alt="Facebook" />
          {/* </a> */}
          {/* <a href=""> */}
          <img src={twitter} alt="Twitter" />
          {/* </a> */}
          {/* <a href=""> */}
          <img src={pinterest} alt="Pinterest" />
          {/* </a> */}
          {/* <a href=""> */}
          <img src={instagram} alt="Instagram" />
          {/* </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
