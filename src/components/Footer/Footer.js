import logo from "../../images/logo.svg";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import pinterest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container row">
        <img src={logo} alt="Shortly" />
        <div className="row">
          <div>
            <h3>Features</h3>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="row">
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
