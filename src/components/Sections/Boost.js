import Button from "../UI/Button";
import classes from "./Boost.module.css";

const Boost = () => {
  return (
    <section className={classes.boost}>
      <div className="container center">
        <h2 className={classes.boost__title}>Boost your links today</h2>
        <Button className={classes.boost__btn} >Get Started</Button>
      </div>
    </section>
  );
};

export default Boost;
