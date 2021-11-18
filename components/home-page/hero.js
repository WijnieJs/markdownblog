import Image from "next/image";

import classes from "./hero.module.css"; // Import css modules stylesheet as styles

function Hero(props) {
  const { flipping } = props;
  console.log(flipping);

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
              src="/images/site/laptop.jpg"
              alt="Profile pic"
              width={800}
              height={800}
            />
            <div className={classes.shadowcustom}>
              <div className={classes.shadowinner}> </div>
            </div>
          </div>
          <h1 className={classes.title}>
            {" "}
            Hello I am Wijnand. Nice to meet you!
          </h1>
          <p className={classes.text}>
            I want too introduce my work to you. Have a Look!
          </p>
        </div>

        <div className={flipCss}>
          <div className={classes.front}>
            <Image
              src="/images/site/max.png"
              alt="Profile pic"
              width={210}
              height={210}
            />
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
