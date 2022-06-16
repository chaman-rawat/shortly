import Button from "../UI/Button";
import classes from "./Shorten.module.css";

const Shorten = () => {
  return (
    <section className={classes.shorten}>
      <div className="container center">
        <form action="" className={`row ${classes.shorten__form}`}>
          <input className={classes.shorten__search} placeholder="Shorten a link here..." type="text" />
          <Button className={classes.shorten__btn}>Shorten It!</Button>
        </form>
      </div>
    </section>
  );
};

export default Shorten;
