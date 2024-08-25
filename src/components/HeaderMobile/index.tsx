import { FC, useState } from "react";
import styles from "./HeaderMobile.module.scss";
import Image from "next/image";
import Logo from "../../images/logo-circle.png";

const HeaderMobile: FC = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <header className={styles.container}>
      <div className={styles.header} />

      <div
        className={
          opened ? `${styles.burger} ${styles.burgerOpened}` : styles.burger
        }
        onClick={() => setOpened(!opened)}
      >
        <div className={styles.first} />
        <div className={styles.second} />
        <div className={styles.third} />
      </div>

      <a href="#intro" className={styles.logo} onClick={() => setOpened(false)}>
        <Image src={Logo} alt="logo" />
        <p className="text__t2-semibold">Giaverini Global</p>
      </a>
      <div
        className={
          opened
            ? `${styles.navigation} ${styles.navigationOpened}`
            : styles.navigation
        }
      >
        <a
          className="text__t1"
          href="#services"
          onClick={() => setOpened(false)}
        >
          Services
        </a>
        <a
          className="text__t1"
          href="#process"
          onClick={() => setOpened(false)}
        >
          Process
        </a>
        <a
          className="text__t1"
          href="#founders"
          onClick={() => setOpened(false)}
        >
          About us
        </a>
        <a
          className="text__t1"
          href="#contacts"
          onClick={() => setOpened(false)}
        >
          Contacts
        </a>
      </div>
    </header>
  );
};

export default HeaderMobile;
