import Image from "next/image";

import styles from "./hero.module.css"; // Import css modules stylesheet as styles

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/laptop.jpg"
          alt="Profile pic"
          width={300}
          height={300}
        />
      </div>
      <h1> Hi i am Wijnand</h1>
      <p>I blog about travel</p>
    </section>
  );
}

export default Hero;
