import { FC } from "react";
import styles from "./Founders.module.scss";
import Image from "next/image";
import Man1 from "../../images/Man1.jpeg";
import Man2 from "../../images/Man2.jpeg";

const FoundersBlock: FC = () => {
  return (
    <section className={styles.container} id="founders">
      <h2>CEO & Founders</h2>
      <p className="text__t2">
        As a family-owned consultancy firm, we combine deep industry knowledge
        with a personalized approach to deliver actionable insights that drive
        sustainable growth.
      </p>

      <div className={styles.founders}>
        <div className={styles.box}>
          <Image alt="man1" src={Man1} />
          <div className={styles.name}>
            <p className="text__t1-semibold">MIGUEL GIAVERINI</p>
            <p className="text__t2">Communications Director</p>
          </div>
        </div>

        <div className={styles.box}>
          <Image alt="man2" src={Man2} />
          <div className={styles.name}>
            <p className="text__t1-semibold">FRANCESCO GIAVERINI</p>
            <p className="text__t2">Head of Finance and Accounting</p>
          </div>
        </div>
      </div>

      <div className={styles.blockquote}>
        <p className="text__t1">
          Together, we build a legacy, that lasts for generations.
        </p>
      </div>
    </section>
  );
};

export default FoundersBlock;
