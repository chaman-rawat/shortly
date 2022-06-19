import brandRecognition from "../../images/icon-brand-recognition.svg";
import detailedRecords from "../../images/icon-detailed-records.svg";
import fullyCustomizable from "../../images/icon-fully-customizable.svg";
import classes from "./Statistics.module.css";

const Statistics = () => {
  return (
    <section className={classes.stats}>
      <div className="container">
        <h2 className="center">Advanced Statistics</h2>
        <p className={`center ${classes.stat__desc}`}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className={`row ${classes.stats__boxes}`}>
          <hr className={classes.stats__box__line} />
          <article className={classes.stats__box}>
            <div className={classes.stats__box__logo}>
              <img
                src={brandRecognition}
                alt="Brand recognition"
                aria-hidden="true"
              />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </article>
          <article className={classes.stats__box}>
            <div className={classes.stats__box__logo}>
              <img
                src={detailedRecords}
                alt="Detailed records"
                aria-hidden="true"
              />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>
          <article className={classes.stats__box}>
            <div className={classes.stats__box__logo}>
              <img
                src={fullyCustomizable}
                alt="Fully customizable"
                aria-hidden="true"
              />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
