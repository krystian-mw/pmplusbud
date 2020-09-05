import { NextSeo } from "next-seo";

import Form from "../components/Form";
import Map from "../components/Map";
import QuickContact from "../components/QuickContact";

import "../styles/pages/Kontakt.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const ImageRoot = process.env.NEXT_PUBLIC_IMAGE_ROOT;

const Seo = () => {
  const description =
    `Skontaktuj się z firmą budowlaną PM Plus Bud na naszej stronie internetowej.` +
    `PM Plus Bud to profesjonalna firma budowlano remontowa działająca ` +
    `na terenie powiatu Nowosądeckiego i województwa Małopolskiego`;
  const title = "PM Plus Bud - Kontakt";
  const url = "https://pmplusbud.pl/kontakt";

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
        images: [
          {
            url: `${ImageRoot}/c_fit,w_1200,h_630/misc/maurer-1019810_fcp0pm.jpg`,
            alt: `Zdziwiony murarz`,
            width: 1200,
            height: 630,
          },
        ],
        defaultImageHeight: 630,
        defaultImageWidth: 1200,
        url,
        title,
      }}
    />
  );
};

export default function Contact() {
  return (
    <div id="Kontakt" className={ContainerClass}>
      <Seo />
      <div className="row">
        <div className="col">
          <Form />
        </div>
      </div>
      <div className="row">
        <div className="col map">
          <QuickContact />
        </div>
      </div>
      <div className="row">
        <div className="col map">
          <h1>Działamy na całym Województwie Małopolskim!</h1>
          {typeof window !== undefined ? <Map /> : null}
        </div>
      </div>
    </div>
  );
}