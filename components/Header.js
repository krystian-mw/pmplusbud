import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { useAmp } from "next/amp";

import "../styles/components/Header.scss";

const ImageRoot = process.env.NEXT_PUBLIC_IMAGE_ROOT;

const Menu = [
  { text: "Strona Główna", url: "/" },
  { text: "Oferta", url: "/oferta" },
  { text: "Blog", url: "/blog" },
  { text: "Kontakt", url: "/kontakt" },
];

export default function Header() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const isAmp = useAmp();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setShow(false);
      toggleOverflowHidden(true);
    });
  }, []);

  const toggleOverflowHidden = (show) => {
    // hackish but works rather than passing refs
    document.body.style.overflow = !show ? "hidden" : "unset";
  };

  const toggler = () => {
    toggleOverflowHidden(show);
    setShow(!show);
  };

  return (
    <header id="Header" className="container-fluid">
      <Link href="/">
        <a id="logo">
          <img
            src={`${ImageRoot}/h_50/new-logo/LOGO_NAME_SLOGAN_MARGINS_n6wm9l.svg`}
          />
        </a>
      </Link>
      <nav id="menu" className={show ? "show" : ""}>
        {Menu.map((item) => (
          <Link key={item.text} href={item.url}>
            <a className={router.pathname === item.url ? "active" : ""}>
              {item.text}
            </a>
          </Link>
        ))}
      </nav>
      <div id="toggler" onClick={toggler} className={show ? "toggled" : ""}>
        <div />
        <div />
      </div>
    </header>
  );
}
