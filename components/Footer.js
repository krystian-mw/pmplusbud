import { route } from "next/dist/next-server/server/router";
import Link from "next/link";

import { useRouter } from "next/router";

import Form from "../components/Form";
import QuickContact from "../components/QuickContact";

import "../styles/components/Footer.scss";

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
  const ColClass = `col-12 col-${Breakpoint}-4 footer-col`;
  const router = useRouter()
  return (
    <>
      {router.pathname === '/kontakt' ? null : <div className={ContainerClass}>
        <Form />
        <QuickContact />
      </div>}
      <div id="Footer">
        <div className={ContainerClass}>
          <div className="row">
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
