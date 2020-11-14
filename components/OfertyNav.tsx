import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";

import styles from "../styles/components/OfertyNav.module.scss";

export default function OfertyNav() {
  return (
    <div className={styles.oferty}>
      {[
        {
          text: "Wznoszenia Bydunków",
          href: "/oferta/wznoszenia-budynkow",
        },
        {
          text: "Prace wykończeniowe",
          href: "/oferta/wykonczenia",
        },
        { text: "Remonty", href: "/oferta/remonty" },
        { text: "Ogrodzenia", href: "/oferta/ogrodzenia" },
      ].map((item, index) => (
        <Link key={index} href={item.href}>
          <a
            className={styles.header}
            data-aos="fade-right"
            data-aos-delay={index * 250}
          >
            <h3>{item.text}</h3>
            <FaChevronRight />
          </a>
        </Link>
      ))}
    </div>
  );
}
