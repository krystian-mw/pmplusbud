import Link from "next/link";

import { NextSeo } from "next-seo";

import { FaChevronCircleRight } from "react-icons/fa";

import styles from "../../styles/pages/Oferta.module.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;
const ImageRoot = process.env.NEXT_PUBLIC_IMAGE_ROOT;

const offers = [
  {
    title: `Wznoszenia Bydunków`,
    description: `Wzeniesemy domy hale itd`,
    image: `/oferta/budowa-domu`,
    alt: `stolarz mierzy deske na budowie`,
    link: `/oferta/wznoszenia-budynkow`,
  },
  {
    title: `Prace Wykończeniowe`,
    description: ``,
    image: `/oferta/pexels-pixabay-159045_vllx30`,
    alt: `zarys domu w 3d do zbudowania przez firme budowlana`,
    link: `/oferta/wykonczenia`,
  },
  {
    title: `Remonty`,
    description: ``,
    image: `/oferta/pexels-rene-asmussen-3990359_c6jqrb`,
    alt: `zarys domu w 3d do zbudowania przez firme budowlana`,
    link: `/oferta/remonty`,
  },
  {
    title: `Ogrodzenia`,
    description: ``,
    image: `/prod/pracownik_zaklada_metalowe_ogrodzenie.png`,
    alt: `zarys domu w 3d do zbudowania przez firme budowlana`,
    link: `/oferta/ogrodzenia`,
  },
];

const Card = ({ title, description, image, alt, link, className }) => (
  <Link href={link}>
    <div data-aos="zoom-in" className={className}>
      <div className={styles["card-content"]}>
        <h2>{title}</h2>
        <img
          src={`${ImageRoot}/ar_1.618,c_fill,g_auto,f_auto,q_70,w_500${image}.jpeg`}
          alt={alt}
        />
        <div className={styles.next}>
          <a>Dowiedz się więcej</a>
          <FaChevronCircleRight />
        </div>
      </div>
    </div>
  </Link>
);

const Seo = () => {
  const description =
    `PM Plus Bud - Twoi Fachowcy to profesjonalna firma budowlano-remontowa ` +
    `świadzcząca usługi na terenie powiatu Nowosądeckiego i województwa Małopolskiego`;
  const title = "PM Plus Bud - Oferta";
  const url = "https://pmplusbud.pl/oferta";

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        type: "website",
        description,
        site_name: title,
        locale: "pl_PL",
        images: offers.map((offer) => ({
          url: `${ImageRoot}/c_fit,g_auto,f_auto,q_70,w_1200,h_630${offer.image}.jpg`,
          alt: offer.alt,
          width: 1200,
          height: 630,
        })),
        defaultImageWidth: 1200,
        defaultImageHeight: 630,
        url,
        title,
      }}
    />
  );
};

export default function Oferta() {
  const ColClass = `col-12 col-${Breakpoint}-6`;
  return (
    <div
      id={styles.Oferta}
      className={`${ContainerClass} container-${Breakpoint}`}
    >
      <Seo />
      <h1>Oferta</h1>
      <div className={styles.description}>
        <p>Oferujemy usługi na całym Województwie Małopolskim.</p>
      </div>
      <div className={`row ${styles.offers}`}>
        {offers.map((offer) => (
          <Card
            className={`${styles.card} ${ColClass}`}
            key={offer.title}
            title={offer.title}
            description={offer.description}
            image={offer.image}
            alt={offer.alt}
            link={offer.link}
          />
        ))}
      </div>
    </div>
  );
}
