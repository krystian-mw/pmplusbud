import Link from "next/link";
import { useAmp } from "next/amp";
import { useRouter } from "next/router";

import Form from "../components/Form";
import QuickContact from "../components/QuickContact";

import styles from  "../styles/components/Footer.module.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

const Sitemap = [
  { url: "/", text: "Strona Główna" },
  //   { text: "Strefa Klienta", url: "/strefa-klienta" },
  { url: "/polityka-prywatnosci", text: "Polityka Prywatności" },
  { url: "/kontakt", text: "Kontakt" },
];

const Oferta = [
  { url: "/oferta/wznoszenia-budynkow", text: "Wznoszenia Budynków" },
  { url: "/oferta/wykonczenia", text: "Wykończenia" },
  { url: "/oferta/remonty", text: "Remonty" },
  { url: "/oferta/ogrodzenia", text: "Ogrodzenia" },
];

export default function Footer() {
  const ColClass = `col-12 col-${Breakpoint}-4 ${styles.footer_col}`;
  const router = useRouter();
  const isAmp = useAmp();
  return (
    <>
      {router.pathname === "/kontakt" ? null : (
        <div className={ContainerClass}>
          {!isAmp && <Form />}
          <QuickContact />
        </div>
      )}
      <div id={styles.Footer}>
        <div className={ContainerClass}>
          <div className="row m-3">
            <div className={ColClass}>
              <h4>Mapa Witryny</h4>
              {Sitemap.map((page) => (
                <Link key={page.url} href={page.url}>
                  <a>{page.text}</a>
                </Link>
              ))}
            </div>
            <div className={ColClass}>
              <Link href="/oferta">
                <h4>Oferta</h4>
              </Link>
              {Oferta.map((page) => (
                <Link key={page.url} href={page.url}>
                  <a>{page.text}</a>
                </Link>
              ))}
            </div>
            <div className={ColClass}>
              <h4>Firma</h4>
              <a href="mailto:kontakt@pmplusbud.pl">kontakt@pmplusbud.pl</a>
              <a href="tel:123133412">123 213 23</a>
              <p>&copy; PM+BUD 2020</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}