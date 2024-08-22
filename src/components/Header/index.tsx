import { FC, useEffect } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "../../images/logo-circle.png";

const Header: FC = () => {  
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > window.innerHeight - 1) {
        document
          .getElementsByTagName("header")[0]
          .classList.add(styles.headerActive);
      } else {
        document
          .getElementsByTagName("header")[0]
          .classList.remove(styles.headerActive);
      }
    };
    document.addEventListener("scroll", scrollListener);
  }, []);

  return (
    <header className={styles.header}>
      <a href="#intro">
        <Image src={Logo} alt="logo" />
      </a>
      <div className={styles.links}>
        <a className="text__t2" href="#services">
          Services
        </a>
        <a className="text__t2" href="#process">
          Process
        </a>
        <a className="text__t2" href="#founders">
          About us
        </a>
        <a className="text__t2" href="#contacts">
          Contacts
        </a>
      </div>

      <a href="mailto:contact@giaveriniglobal.com" className={styles.button}>
        <p className="text__t2">Email us</p>
      </a>
    </header>
  );
};

export default Header;
