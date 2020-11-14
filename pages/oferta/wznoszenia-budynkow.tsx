import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";
import OfertyNav from "../../components/OfertyNav";

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
            src={`${ImageRoot}/c_fill,g_north,w_2000,h_750/oferta/budowa-domu.jpg`}
          />
        </div>
        <div className={styles.title}>
          <h1>Firma Budowlana PM+BUD</h1>
          <h2>zajmujemy się wznoszesziem różnych rodzajów budynków</h2>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <p data-aos="fade-down">
              PM Plus Bud specjalizuje się w budowie szerokim zakresie domów i
              obiektów budowlanych. Domy wykonujemy na podstawie projektów
              dostarczonych przez klienta.
            </p>
          </div>
        </div>

        <div className={`row ${styles["invert-mobile"]}`}>
          <div data-aos="fade-down" className={`${ColClass} ${styles.points}`}>
            <h2>Zapewniamy kompleksowe usługi, a w tym:</h2>
            <ul>
              {[
                "Przygotowanie terenu lub działki pod budowę",
                "Wzniesienie budynku",
                "Wykonywanie wszelkich wymaganych instalacji budownlanych",
              ].map((text, index) => (
                <li
                  key={text}
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 250}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className={ColClass}>
            <img
              data-aos="fade-down"
              src={`${ImageRoot}/q_70/home-page/building-house-project.jpeg`}
            />
          </div>
        </div>

        <div className="row">
          <div className={ColClass}>
            <img
              data-aos="fade-down"
              src={`${ImageRoot}/q_70/carousel/murarz-muruje-pustakami-ceramicznymi.jpg`}
            />
          </div>
          <div data-aos="fade-down" className={`${ColClass} ${styles.points}`}>
            <h2>Gwarantujemy:</h2>
            <ul>
              {[
                "Wysoką jakość wykonania",
                "Wysoką jakość materiałów",
                "Ubezpieczenie",
                "Gwarancję",
              ].map((text, index) => (
                <li
                  key={text}
                  data-aos="fade-up"
                  data-aos-delay={250 * (index + 1)}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <OfertyNav />
      </div>
    </div>
  );
}
