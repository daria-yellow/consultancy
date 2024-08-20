import { FC } from "react";
import styles from "./Services.module.scss";
import { useInView } from "react-intersection-observer";
import { animated, easings, useSpring } from "react-spring";

const ServicesBlock: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const springProps = useSpring({
    transform: inView ? "translateY(0)" : "translateY(-30%)",
    opacity: inView ? 1 : 0,
    config: { duration: 1300, easing: easings.easeOutBack },
  });

  return (
    <section className={styles.container} id="services">
      <div className={styles.containerText}>
        <animated.p style={springProps} className="subtitle">
          EVERYTHING YOU NEED
        </animated.p>
        <animated.h2 style={springProps}>
          Visa, Residence and investments all around the UAE
        </animated.h2>
        <animated.p style={springProps} className="text__t1">
          Tell us exactly what what you are looking for and we will give you the
          best options
        </animated.p>
        <div ref={ref} />
      </div>

      <AnimatedCard
        title="Corporate tax"
        description="The corporate tax rate is set at 9% and applies to businesses with a taxable income exceeding AED 375,000 (approximately USD 102,000). This move aligns Dubai with international tax practices while maintaining a competitive rate to attract foreign investment."
      />
      <AnimatedCard
        title="Exemptions"
        description="Certain entities, such as businesses operating in free zones and those involved in the extraction of natural resources, continue to enjoy tax exemptions, provided they do not conduct business with mainland UAE."
        side="right"
      />
      <AnimatedCard
        title="Registration Requirements"
        description="Companies subject to corporate tax need to register with the Federal Tax Authority (FTA) and comply with filing requirements, including maintaining proper accounting records and submitting annual tax returns."
      />
      <AnimatedCard
        title="Importation and exportation"
        description="Giaverini Global is your trusted partner in import and export services. Based in Dubai, we specialize in connecting businesses across the globe through efficient, reliable logistics. Whether you're expanding into new markets or optimizing your supply chain, Giaverini Global offers comprehensive services tailored to your needs, ensuring your goods reach their destinations on time and in perfect condition."
        side="right"
      />
    </section>
  );
};

export const AnimatedCard = ({ title, description, side = "left" }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const springProps = useSpring({
    transform: inView
      ? "translateX(0)"
      : side === "left"
      ? "translateX(-30%)"
      : "translateX(30%)",
    opacity: inView ? 1 : 0,
    config: { duration: 1800, easing: easings.easeOutExpo },
    delay: 500,
  });

  return (
    <animated.div
      style={springProps}
      className={side === "left" ? styles.cardLeft : styles.cardRight}
    >
      {side === "left" && (
        <div
          className={side === "left" ? styles.blockLeft : styles.blockRight}
        />
      )}
      <div className={styles.cardText}>
        <h3>{title}</h3>
        <p className="text__t2" ref={ref}>
          {description}
        </p>
      </div>
      {side === "right" && (
        <div
          className={side === "left" ? styles.blockLeft : styles.blockRight}
        />
      )}
    </animated.div>
  );
};

export default ServicesBlock;
