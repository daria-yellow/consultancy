import { FC } from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Tiktok from "../../images/tiktok.svg";
import Insta from "../../images/instagram.svg";

const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <p className="text__t4">Copyright © 2024 Giaverini Global Management.</p>
      <div className={styles.socials}>
        {/* <Image src={Tiktok} alt="tiktok" /> */}
        <a href="https://www.instagram.com/giaverini.global.dxb?igsh=MTdmdWtvczM3NGk1aw%3D%3D&utm_source=qr" target="_blank">
          <Image src={Insta} alt="instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
