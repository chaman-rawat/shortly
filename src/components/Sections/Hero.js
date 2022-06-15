import Button from "../UI/Button";
import HeroImage from "../../images/illustration-working.svg";
const Hero = () => {
  return (
    <section>
      <div>
        <h1>More than just shorter links</h1>

        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <Button>Get Started</Button>
      </div>
      <div>
        <img src={HeroImage} alt="Illustration Working" />
      </div>
    </section>
  );
};

export default Hero;
