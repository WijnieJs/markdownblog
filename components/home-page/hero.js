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
      <h1> Hello I am Wijnand. Nice to meet you!</h1>
      <p>I want too introduce my work to you. Have a Look!</p>
    </section>
  );
}

export default Hero;
