import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";

import styles from "../../styles/pages/PodOferta.module.scss";

const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

const ImageRoot = process.env.NEXT_PUBLIC_IMAGE_ROOT;
const ColClass = `col-12 col-${Breakpoint}-6 ${styles.center}`;

export default function PodOferta() {
  return (
    <div id={styles.PodOferta}>
      <div className={styles.entry} data-aos="fade-down">
        <div className={styles.wrapper}>
          <img
            src={`${ImageRoot}/c_fill,g_north,w_2000,h_750/oferta/pexels-rene-asmussen-3990359_c6jqrb.jpeg`}
          />
        </div>
        <div className={styles.title}>
          <h1>Firma Budowlana PM+BUD</h1>
          <h2>
            Zajmujemy się kompleksowymi remontami, z każdym projekt dostosowanym
            do twoich potrzeb
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className={ColClass}>
            <div data-aos="fade-down" className={styles.center}>
              <h2>Zapewniamy kompleksowe usługi, a w tym:</h2>
              <ul className={styles.points}>
                {[
                  "Malowanie",
                  "Tapetowanie",
                  "Gruntowanie ścian",
                  "Gruntowanie podłóg",
                  "Gładzi gipsowej",
                  "Wykończenia, remonty podłóg",
                  "Suche tynki",
                  "Szpachlowanie",
                  "Tynkowanie",
                  "Stolarka okienna",
                  "Stolarka drzwiowa",
                  "Wykończenia wnętrz",
                  "Zabudowy",
                ].map((text, index) => (
                  <li
                    key={text}
                    data-aos="fade-up"
                    data-aos-delay={(index + 1) * 25}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={ColClass}>
            <div className={styles.pad_images}>
              <img
                src={`${ImageRoot}/q_70/oferta/lichtraum-1560788_hafsea.jpeg`}
              />
              <img src={`${ImageRoot}/q_70/oferta/malarz-wykonczenia.jpeg`} />
            </div>
          </div>
        </div>

        <Link href="/oferta/ogrodzenia">
          <a className={`row ${styles.end}`}>
            <div className={styles.text}>
              <span>Masz już wyremontowany dom?</span>
              <span>Zobacz naszą ofertę ogrodzeń!</span>
            </div>
            <div className={styles.icon}>
              <FaChevronRight />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
