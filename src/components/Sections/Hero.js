import Button from "../UI/Button";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className="container row">
        <div className={classes.hero__img} />

        <div>
          <h1 className={classes.hero__title}>More than just shorter links</h1>
          <p className={classes.hero__desc}>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button className={classes.hero__btn}>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
