import { FC } from "react";
import styles from "./Contacts.module.scss";
import Image from "next/image";
import Mail from "../../images/mail.svg";
import Phone1 from "../../images/phone1.svg";
import Phone2 from "../../images/phone2.svg";
import { animated, easings, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

const ContactsBlock: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const springProps = useSpring({
    transform: inView ? "srale(1)" : "scale(0.9)",
    opacity: inView ? 1 : 0,
    config: { duration: 1500, easing: easings.easeOutExpo },
    delay: 300
  });

  return (
    <section className={styles.container} id="contacts">
      <span className="subtitle">COMMUNICATION IS THE KEY</span>
      <p className="text__t2">
        Are you ready for one of the most competitive markets in the world?
      </p>

      <animated.div className={styles.content} style={springProps}>
        <div className={styles.image} />

        <div className={styles.text}>
          <div className={styles.contact}>
            <Image src={Mail} alt="mail" />
            <a href="mailto:contact@giaveriniglobal.com" className="text__t2">contact@giaveriniglobal.com</a>
          </div>

          <div className={styles.contact} ref={ref}>
            <Image src={Phone1} alt="whatsupp" />
            <p className="text__t2">+971585450876</p>
          </div>
          
          <div className={styles.contact}>
            <Image src={Phone2} alt="phone" />
            <p className="text__t2">+971547035893</p>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default ContactsBlock;
