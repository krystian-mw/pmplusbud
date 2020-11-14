import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

import styles from "../styles/components/QuickContact.module.scss";

const QcList = [
  {
    text: "kontakt@pmplusbud.pl",
    link: "mailto:kontakt@pmplusbud.pl",
    icon: <HiOutlineMail />,
    className: styles.email,
  },
  {
    text: "507 570 255",
    link: "tel:507570255",
    icon: <HiOutlinePhone />,
    className: styles.phone,
  },
  {
    text: "Messenger",
    link: "/messenger",
    icon: <FaFacebookMessenger />,
    className: styles.messenger,
  },
  {
    text: "WhatsApp",
    link: "/whatsapp",
    icon: <FaWhatsapp />,
    className: styles.whatsapp,
  },
];

export default function QC() {
  return (
    <div id={styles.QuickContact} className={styles.contact}>
      {QcList.map((qc, index) => (
        <a
          key={qc.text}
          href={qc.link}
          className={qc.className}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          {qc.icon}
          <span>{qc.text}</span>
        </a>
      ))}
    </div>
  );
}
