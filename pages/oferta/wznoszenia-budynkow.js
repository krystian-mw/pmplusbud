import "../../styles/pages/PodOferta.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

const ImageRoot = process.env.NEXT_PUBLIC_IMAGE_ROOT;
const ColClass = `col-12 col-${Breakpoint}-6 center`;

export default function PodOferta() {
  return (
    <div id="PodOferta">
      <div className="entry">
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
              src={`${ImageRoot}/q_70/carousel/murarz-muruje-pustakami-ceramicznymi.jpg`}
            />
          </div>
          <div className={ColClass}>
            <h6>Gwarantujemy:</h6>
            <ul>
              <li>Wysoką jakość wykonania</li>
              <li>Wysoką jakość materiałów</li>
              <li>Ubezpieczenie</li>
              <li>Gwarancję</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
