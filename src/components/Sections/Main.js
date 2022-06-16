import Hero from "./Hero";
import Shorten from "./Shorten";
import Statistics from "./Statistics";
import GetStarted from "./GetStarted";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <Shorten />
      <Statistics />
      <GetStarted />
    </main>
  );
};

export default Main;
