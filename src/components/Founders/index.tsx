import { FC } from "react";
import styles from "./Founders.module.scss";
import Image from 'next/image'
import Man1 from "../../images/man1.png";
import Man2 from "../../images/man2.png";


const FoundersBlock: FC = () => {

  return (
    <section className={styles.container} id="founders">
      <h2>CEO & Founders</h2>
      <p className="text__t2">As a family-owned consultancy firm, we combine deep industry knowledge with a personalized approach to deliver actionable insights that drive sustainable growth.</p>

      <div className={styles.founders}>
        <div className={styles.box}>
            <Image alt="man1" src={Man1} />
            <div className={styles.name}>
                <p className="text__t1-semibold">MIGUEL GIAVERINI</p>
            </div>
        </div>

        <div className={styles.box}>
            <Image alt="man2" src={Man2} />
            <div className={styles.name}>
                <p className="text__t1-semibold">FRANCESCO GIAVERINI</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersBlock;
