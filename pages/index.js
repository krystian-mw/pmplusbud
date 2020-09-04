import { FaExchangeAlt, FaFileContract, FaTruck, FaUser } from "react-icons/fa";

import "../styles/pages/Home.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const ImageRoot = process.env.NEXT_PUBLIC_IMAGE_ROOT;

export default function Home() {
  return (
    <div id="Home">
      <div className="entry">
        <div className="wrapper">
          <img
            src={`${ImageRoot}/h_1500,w_4000/v1598739151/home-page/tape-measure-1726546_ibv9y7.jpg`}
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
            "Wznoszenia Bydunków",
            "Prace wykończeniowe",
            "Remonty",
            "Ogrodzenia",
          ].map((item) => (
            <div key={item} className="header" data-aos="fade-right">
              <h3>{item}</h3>
            </div>
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
