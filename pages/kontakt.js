import Form from "../components/Form";
import Map from "../components/Map";
import QuickContact from "../components/QuickContact";

import "../styles/pages/Kontakt.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

/**
 * Contact Page Component
 * @type {function}
 * @returns {Component}
 */
export default function Contact() {
  return (
    <div id="Kontakt" className={ContainerClass}>
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
