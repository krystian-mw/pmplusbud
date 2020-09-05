import { createElement } from "react";

import Link from "next/link";
import { useAmp } from "next/amp";

import { NextSeo } from "next-seo";

import { FaExchangeAlt, FaFileContract, FaTruck, FaUser } from "react-icons/fa";

import "../styles/pages/Home.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const ImageRoot = process.env.NEXT_PUBLIC_IMAGE_ROOT;

const Seo = () => {
  const description =
    `Profesjonalna firma fachowców zajmująca się usługami ogólno-budowlanymi ` +
    `i remontowymi na terenie powiatu Nowosądeckiego i województwa Małopolskiego`;
  const title = "PM Plus Bud";
  return (
    <NextSeo
      title={title}
      description={description}
      canonical="https://pmplusbud.pl"
      openGraph={{
        type: "website",
        description,
        site_name: title,
        locale: "pl_PL",
        images: [
          {
            url: `${ImageRoot}/c_fit,w_1200,h_630/new-logo/LOGO_NAME_SLOGAN_MARGINS_itepw4.jpg`,
            alt: `Twoi Fachowcy Logotype Logo`,
            width: 1200,
            height: 630,
          },
        ],
        defaultImageHeight: 630,
        defaultImageWidth: 1200,
        url: `https://pmplusbud.pl/`,
        title,
      }}
    />
  );
};

const Img = ({ amp = false, alt = "", src, width, height, layout }, ...props) =>
  createElement(amp ? "amp-img" : "img", {
    alt,
    src,
    width: amp ? width : null,
    height: amp ? height : null,
    layout: (() => {
      if (!layout && !amp) return null;
      if (!layout && amp) return "responsive";
      if (layout && !amp) return null;
      if (layout && amp) return layout;
    })(),
    ...props,
  });

export default function Home() {
  const isAmp = useAmp() ? true : false;
  return (
    <div id="Home">
      <Seo />
      <div className="entry">
        <div className="wrapper">
          <Img
            amp={isAmp === true}
            src={`${ImageRoot}/h_1500,w_4000/v1598739151/home-page/tape-measure-1726546_ibv9y7.jpg`}
            alt="PM Plus Bud - Strona Główna - zdjęcie miarki"
            width="2.67"
            height="1"
          />
        </div>
        <div className="title">
          <h1>PM+BUD - Firma Remontowo-Budowlana</h1>
          <h2>Usługi budowlane, remontowe i wykończeniowe</h2>
        </div>
      </div>
      <div className={ContainerClass}>
        <div className="big">
          <h2>Usługi - Nowy Sącz i Małopolska</h2>
        </div>
        <div className="oferty">
          {[
            {
              text: "Wznoszenia Bydunków",
              href: "/oferta/wznoszenia-budynkow",
            },
            {
              text: "Prace wykończeniowe",
              href: "/oferta/prace-wykonczeniowe",
            },
            { text: "Remonty", href: "/oferta/remonty" },
            { text: "Ogrodzenia", href: "/oferta/ogrodzenia" },
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              <a
                className="header"
                data-aos="fade-right"
                data-aos-delay={index * 250}
              >
                <h3>{item.text}</h3>
              </a>
            </Link>
          ))}
        </div>
        <div className="big">
          <h2>O nas</h2>
        </div>
        <div className="about">
          {[
            {
              icon: <FaUser />,
              text:
                "Jesteśmy zespołem rzetelnych fachowców posiadajacych niezbędne kwalifikacje zawodowe.",
            },
            {
              icon: <FaExchangeAlt />,
              text:
                "Korzystamy z materiałów wysokiej jakości, współpracujemy z wieloma producentami artykułów budowlanych.",
            },
            {
              icon: <FaTruck />,
              text:
                "Zapewniamy zakup i transport materiałów budowlanych, korzystamy z upustów na niektóre produkty.",
            },
            {
              icon: <FaFileContract />,
              text:
                "Przed przystąpieniem od prac sporządzana jest umowa która określa termin rozpoczęcia i zakończenia prac, zakres oraz gwarancję.",
            },
          ].map((item, index) => (
            <div key={index} className="content" data-aos="fade-up">
              <div className="icon">{item.icon}</div>
              <div className="text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const config = {
  amp: "hybrid",
};
