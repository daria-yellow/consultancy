import { FC, useCallback, useEffect, useMemo, useState } from "react";
import styles from "./Process.module.scss";
import Blob0 from "../../images/blob-0.svg";
import Blob1 from "../../images/blob-1.svg";
import Blob2 from "../../images/blob-2.svg";
import BankAccount from "../../images/bank-account.svg";
import License from "../../images/license.svg";
import Documentation from "../../images/documentation.svg";
import Image from "next/image";

const contents = [
  "If you’re an overseas entrepreneur starting up in a new country for the first time, the documentation process can be slow. We help you to make the right decisions for your Dubai company and handle all of the complex paperwork and situations that might appear during your process.",
  "We have to find the right licence and applying for it are essential to getting your business setup in Dubai. Setting up your business licence will help you to avoid problems we see people fall into. An expert will guide you through the way to start your business.",
  "Setting up a corporate bank account in the UAE can be a little complicated for international entrepreneurs. That’s why we will be with you to find the best alternatives for your business bank account.",
];
const icons = [Documentation, License, BankAccount];

const ProcessBlock: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userClick, setUserClick] = useState(false);

  const handleClickStep = useCallback((step: number) => {
    setUserClick(true);
    setActiveStep(step);
  }, []);

  useEffect(() => {
    if (!userClick) {
      setTimeout(() => {
        setActiveStep(activeStep === 2 ? 0 : activeStep + 1);
      }, 3000);
    }
  }, [activeStep, userClick]);

  useEffect(() => {
    if (userClick) {
      setTimeout(() => {
        setUserClick(false);
      }, 6000);
    }
  }, [userClick]);

  return (
    <section className={styles.container} id="process">
      <h2>Application process</h2>
      <div className={styles.steps}>
        <div className={styles.left}>
          <div
            className={activeStep === 0 ? styles.itemActive : styles.item}
            onClick={() => handleClickStep(0)}
          >
            <div className={styles.dot} />
            <div>
              <p className="subtitle">01</p>
              <h3>Documentation</h3>
            </div>
          </div>
          <div
            className={activeStep === 1 ? styles.itemActive : styles.item}
            onClick={() => handleClickStep(1)}
          >
            <div className={styles.dot} />
            <div>
              <p className="subtitle">02</p>
              <h3>Business License</h3>
            </div>
          </div>
          <div
            className={activeStep === 2 ? styles.itemActive : styles.item}
            onClick={() => handleClickStep(2)}
          >
            <div className={styles.dot} />
            <div>
              <p className="subtitle">03</p>
              <h3>Bank Account</h3>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stopColor="rgba(0, 21, 39, 0.6)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stopColor="rgba(0, 21, 39, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              style={{
                transition: ".7s",
                opacity: activeStep === 0 ? "1" : "0",
                transform: activeStep === 0 ? "1" : "0",
              }}
              stroke="url(#sw-gradient)"
              fill="url(#sw-gradient)"
              d="M17.7,-29.8C24.8,-26.5,33.9,-25.6,37.4,-21.1C40.9,-16.5,38.8,-8.3,38.1,-0.4C37.4,7.4,38,14.9,35,20.3C32,25.7,25.4,29.1,18.9,33C12.5,36.9,6.2,41.3,-0.6,42.4C-7.4,43.4,-14.8,40.9,-20.7,36.7C-26.5,32.4,-30.8,26.3,-33.5,19.9C-36.3,13.5,-37.4,6.8,-37.6,-0.1C-37.7,-6.9,-36.9,-13.9,-33.6,-19.2C-30.2,-24.6,-24.4,-28.3,-18.4,-32.3C-12.4,-36.3,-6.2,-40.6,-0.5,-39.8C5.2,-39,10.5,-33.1,17.7,-29.8Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
            />
            <path
              style={{
                transition: ".7s",
                opacity: activeStep === 1 ? "1" : "0",
              }}
              fill="url(#sw-gradient)"
              d="M17.3,-29.3C23,-26.6,28.8,-23.3,30.7,-18.3C32.6,-13.3,30.6,-6.6,31.8,0.7C33,8,37.4,16.1,34.8,19.9C32.2,23.7,22.7,23.3,15.8,26.5C8.8,29.6,4.4,36.3,-1.4,38.8C-7.2,41.2,-14.4,39.4,-20.6,35.7C-26.7,32.1,-31.7,26.6,-34.6,20.4C-37.6,14.1,-38.5,7.1,-36.7,1.1C-34.8,-4.9,-30.1,-9.8,-27.7,-16.9C-25.2,-24,-24.9,-33.4,-20.7,-36.9C-16.5,-40.4,-8.2,-38.1,-1.2,-36C5.8,-33.8,11.5,-31.9,17.3,-29.3Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              stroke="url(#sw-gradient)"
            ></path>
            <path
              style={{
                transition: ".7s",
                opacity: activeStep === 2 ? "1" : "0",
              }}
              fill="url(#sw-gradient)"
              d="M19.2,-33.7C25.5,-29.5,31.9,-25.8,34.4,-20.3C36.9,-14.7,35.6,-7.4,36.4,0.4C37.1,8.2,39.9,16.5,37.3,21.8C34.7,27.2,26.6,29.7,19.5,32.6C12.4,35.6,6.2,39,0,39.1C-6.3,39.2,-12.5,35.8,-17,31.4C-21.6,26.9,-24.4,21.3,-28.2,15.9C-31.9,10.5,-36.6,5.2,-36.6,0C-36.6,-5.2,-31.9,-10.5,-28.2,-15.9C-24.4,-21.3,-21.6,-26.9,-17.1,-32.3C-12.5,-37.6,-6.3,-42.6,0.1,-42.7C6.4,-42.8,12.8,-38,19.2,-33.7Z"
              width="100%"
              height="100%"
              transform="translate(48 50)"
              strokeWidth="0"
            />
          </svg>
          <div className={styles.contentText}>
            <Image alt="icon" src={icons[activeStep]} />

            <p className="text__t1">{contents[activeStep]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessBlock;
