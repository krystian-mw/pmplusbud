import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import "../styles/components/Header.scss";

const ImageRoot = process.env.NEXT_PUBLIC_IMAGE_ROOT;
const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;

const Menu = [
  { text: "Strona Główna", url: "/" },
  { text: "Oferta", url: "/oferta" },
  { text: "Blog", url: "/blog" },
  { text: "Kontakt", url: "/kontakt" },
];

export default function Header() {
  const [shrink, setShrink] = useState(0);
  const [didMount, setDidMount] = useState(false);
  const router = useRouter();

  const functionDidMount = () => {
    document.addEventListener("scroll", () => {
      setShrink(window.scrollY);
    });
  };

  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
      functionDidMount();
    }
  }, []);

  return (
    <header
      id="Header"
      className={`ContainerClass ${shrink > 0 ? "shrink" : null}`}
    >
      <Link href="/">
        <a id="logo" className={shrink > 0 ? "shrink" : null}>
          <img
            src={`${ImageRoot}/image/upload/v1598651987/new-logo/LOGO_NAME_wwuoed.svg`}
          />
        </a>
      </Link>
      <nav id="menu">
        {Menu.map((item) => (
          <Link key={item.text} href={item.url}>
            <a className={router.pathname === item.url ? "active" : ""}>
              {item.text}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
