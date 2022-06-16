import Hero from "./Hero";
import Shorten from "./Shorten";
import Statistics from "./Statistics";
import Boost from "./Boost";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <Shorten />
      <Statistics />
      <Boost />
    </main>
  );
};

export default Main;
