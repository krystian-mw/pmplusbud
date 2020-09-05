import { useState, useEffect, createElement } from "react";

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

const Img = (
  { amp = false, alt = "", src, width = "1.618", height = "1", layout },
  ...props
) =>
  createElement(amp ? "amp-img" : "img", {
    alt,
    src,
    width: amp ? width : null,
    height: amp ? height : null,
    layout: (() => {
      if (!layout && !amp) return null;
      if (!layout && amp) return "responsive";
      if (layout && !amp) return null;
      if (layout && amp) return layout;
    })(),
    ...props,
  });

const AmpConditionalLogo = () =>
  useAmp() ? (
    <Img
      id="logo"
      amp={true}
      src={`${ImageRoot}/h_50/new-logo/LOGO_NAME_SLOGAN_MARGINS_n6wm9l.svg`}
      alt="PM Plus Bud Logo"
      width="3"
      height="1"
    />
  ) : (
    <Link href="/">
      <a id="logo">
        <img
          src={`${ImageRoot}/h_50/new-logo/LOGO_NAME_SLOGAN_MARGINS_n6wm9l.svg`}
          alt="PM Plus Bud Logo"
        />
      </a>
    </Link>
  );

const AmpConditionalMenu = ({ show, toggler, router }) =>
  useAmp() ? null : (
    <>
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
    </>
  );


export default function Header() {
  const [show, setShow] = useState(false);
  const router = useRouter();

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
      <AmpConditionalLogo />
      <AmpConditionalMenu {...{ show, toggler, router }} />
    </header>
  );
}
