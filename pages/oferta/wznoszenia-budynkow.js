import "../../styles/pages/PodOferta.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
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
          <div className={ColClass}>
            <img
              data-aos="fade-down"
              src={`${ImageRoot}/q_70/carousel/murarz-muruje-pustakami-ceramicznymi.jpg`}
            />
          </div>
          <div data-aos="fade-down" className={ColClass}>
            <h6>Gwarantujemy:</h6>
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
      </div>
    </div>
  );
}
