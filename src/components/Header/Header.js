import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Shortly" />
      <nav>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <ul>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
