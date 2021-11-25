import Image from "next/image";

import classes from "./hero.module.css"; // Import css modules stylesheet as styles

function Hero(props) {
  const { flipping } = props;

  let statusClasses = "";
  let flipperClasses = "";
  if (flipping === true) {
    statusClasses = classes.coverz;
    flipperClasses = classes.isFlipping;
  }
  if (flipping === false) {
    statusClasses = classes.coverx;
    flipperClasses = classes.flipper;
  }
  const cssClasses = `${classes.cover} ${statusClasses}`;
  const flipCss = `${classes.flipper} ${flipperClasses}`;
  return (
    <div className={classes.wrapper}>
      <section className={cssClasses}>
        <div className={flipCss}>
          <div className={classes.back}>
            <Image
              src="/images/site/labtop.jpg"
              alt="Profile pic"
              width={220}
              height={290}
            />

            <div className={classes.heroSection}>
              <h1 className={classes.title}> Passionate about development!</h1>
              <p className={classes.text}>
                Hard work and devotion too be the best
              </p>
            </div>
            <div className={classes.shadowcustom}>
              <div className={classes.shadowinner}> </div>
            </div>
          </div>
        </div>

        <div className={flipCss}>
          <div className={classes.front}>
            <Image
              src="/images/site/wijnie.jpg"
              alt="Profile pic"
              width={220}
              height={290}
            />
            <div className={classes.heroSection}>
              <h1 className={classes.title}>
                {" "}
                Hello I am Wijnand. Nice to meet you!
              </h1>
              <p className={classes.text}>
                Sharing some blogs and latest projects..
              </p>
            </div>
            <div className={classes.shadowcustom}>
              <div className={classes.shadowinner}> </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
