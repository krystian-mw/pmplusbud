import Link from "next/link";

import { Component } from "react";

import { FaChevronCircleRight, FaFileContract } from "react-icons/fa";

import "../../styles/pages/Oferta.scss";

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
    image: `/carousel/pracownik-zaklada-metalowe-ogrodzenie`,
    alt: `zarys domu w 3d do zbudowania przez firme budowlana`,
    link: `/oferta/ogrodzenia`,
  },
];

const Card = ({ title, description, image, alt, link, className }) => (
  <Link href={link}>
    <div data-aos="zoom-in" className={className}>
      <div className="card-content">
        <h2>{title}</h2>
        <img
          src={`${ImageRoot}/ar_1.618,c_fill,g_auto,f_auto,q_70,w_500${image}.jpeg`}
          alt={alt}
        />
        <div className="next">
          <a>Dowiedz się więcej</a>
          <FaChevronCircleRight />
        </div>
      </div>
    </div>
  </Link>
);

export default function Oferta() {
  const ColClass = `col-12 col-${Breakpoint}-6`;
  return (
    <>
      <div id="Oferta" className={`${ContainerClass} container-${Breakpoint}`}>
        <h1>Oferta</h1>
        <div className="description">
          <p>Oferujemy usługi na całym Województwie Małopolskim.</p>
        </div>
        <div className="offers row">
          {offers.map((offer) => (
            <Card
              className={`card ${ColClass}`}
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
    </>
  );
}
