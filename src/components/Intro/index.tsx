import { FC } from "react";
import styles from "./Intro.module.scss";

const IntroBlock: FC = () => {
  return (
    <section className={styles.container} id="intro">
      <p className="subtitle">WE ARE YOUR PERFECT CHOICE</p>
      <h1>
        SET UP A BUSINESS <br /> IN DUBAI
      </h1>
      <div className={styles.line} />
    </section>
  );
};

export default IntroBlock;
