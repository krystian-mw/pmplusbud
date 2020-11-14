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
            src={`${ImageRoot}/c_fill,g_north,w_2000,h_750/carousel/pracownik-zaklada-metalowe-ogrodzenie.jpeg`}
          />
        </div>
        <div className={styles.title}>
          <h1>Firma Budowlana PM+BUD</h1>
          <h2>
            Oferujemy różnego rodzaju asortyment, oraz wyłącznie materiał
            wysokiej jakości.
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className={ColClass}>
            <h1>Wykonujemy ogrodzenia</h1>
          </div>
        </div>
        <div className="row">
          <div className={ColClass}>
            <div data-aos="fade-down" className={styles.center}>
              <h2>Rodzaje ogrodzeń</h2>
              <ul className={styles.points}>
                {[
                  "Ogrodzenie Panelowe",
                  "Ogrodzenie Siatkowe",
                  "Ogrodzenie Łupane",
                  "Bramy",
                  "Automatyka",
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
        </div>
        <OfertyNav />
      </div>
    </div>
  );
}
