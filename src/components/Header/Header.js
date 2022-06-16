import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container row">
        <img src={logo} alt="Shortly" />
        <nav className="row">
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
