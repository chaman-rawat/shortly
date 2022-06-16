import Button from "../UI/Button";
import classes from "./Shorten.module.css";

const Shorten = () => {
  return (
    <section>
      <div className="container center">
        <form action="" className={classes.shorten}>
          <input id="search" type="text" />
          <Button>Shorten It!</Button>
        </form>
      </div>
    </section>
  );
};

export default Shorten;
