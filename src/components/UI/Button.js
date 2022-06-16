import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${classes.button} ${props.className}`} type="button">
      {props.children}
    </button>
  );
};

export default Button;
