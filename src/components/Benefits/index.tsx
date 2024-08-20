import { FC } from "react";
import styles from "./Benefits.module.scss";
import { useInView } from "react-intersection-observer";
import { animated, easings, useSpring } from "react-spring";

const BenefitsBlock: FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    
      const springProps = useSpring({
        transform: inView ? "srale(1)" : "scale(0.9)",
        opacity: inView ? 1 : 0,
        config: { duration: 1500, easing: easings.easeOutExpo },
        delay: 300,
      });

  return (
    <div className={styles.container}>
      <animated.div className={styles.modal} style={springProps}>
        <p className="subtitle">
          WHAT ARE THE BENEFITS OF OPENING A BUSINESS IN DUBAI?
        </p>
        <ul>
          <li>Strategic Location</li>
          <li>Tax Advantages</li>
          <li>Robust Infrastructure</li>
          <li>Business-Friendly Regulations</li>
          <li>Growing Economy</li>
          <li>Luxury Living Standards</li>
          <li ref={ref}>Free Zones Benefits</li>
        </ul>
      </animated.div>
    </div>
  );
};

export default BenefitsBlock;
