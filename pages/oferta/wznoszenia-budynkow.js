import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";

import "../../styles/pages/PodOferta.scss";

// const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

const ImageRoot = process.env.NEXT_PUBLIC_IMAGE_ROOT;
const ColClass = `col-12 col-${Breakpoint}-6 center`;

export default function PodOferta() {
  return (
    <div id="PodOferta">
      <div className="entry" data-aos="fade-down">
        <div className="wrapper">
          <img
            src={`${ImageRoot}/c_fill,g_north,w_2000,h_750/oferta/budowa-domu.jpg`}
          />
        </div>
        <div className="title">
          <h1>Firma Budowlana PM+BUD</h1>
          <h2>zajmujemy się wznoszesziem różnych rodzajów budynków</h2>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              PM Plus Bud specjalizuje się w budowie szerokim zakresie domów i
              obiektów budowlanych. Domy wykonujemy na podstawie projektów
              dostarczonych przez klienta.
            </p>
          </div>
        </div>

        <div className="row invert-mobile">
          <div data-aos="fade-down" className={`${ColClass} points`}>
            <h2>Zapewniamy kompleksowe usługi, a w tym:</h2>
            <ul>
              {[
                "Przygotowanie terenu lub działki pod budowę",
                "Wzniesienie budynku",
                "Wykonywanie wszelkich wymaganych instalacji budownlanych",
              ].map((text, index) => (
                <li data-aos="fade-up" data-aos-delay={(index + 1) * 250}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className={ColClass}>
            <img
              data-aos="fade-down"
              src={`${ImageRoot}/q_70/home-page/building-house-project.jpg`}
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
          <div data-aos="fade-down" className={`${ColClass} points`}>
            <h2>Gwarantujemy:</h2>
            <ul>
              <li data-aos="fade-up" data-aos-delay="250">
                Wysoką jakość wykonania
              </li>
              <li data-aos="fade-up" data-aos-delay="500">
                Wysoką jakość materiałów
              </li>
              <li data-aos="fade-up" data-aos-delay="750">
                Ubezpieczenie
              </li>
              <li data-aos="fade-up" data-aos-delay="1000">
                Gwarancję
              </li>
            </ul>
          </div>
        </div>
        <Link href="/oferta/wykonczenia">
          <a className="row end">
            <div className="text">
              <span>Gotowy na następny etap?</span>
              <span>Przejdź do wykończeń</span>
            </div>
            <div className="icon">
              <FaChevronRight />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
