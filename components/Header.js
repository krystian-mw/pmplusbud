import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <header id="Header" className="container-fluid">
      <Link href="/">
        <a id="logo">
          <img
            src={`${ImageRoot}/h_50/new-logo/LOGO_NAME_SLOGAN_MARGINS_n6wm9l.svg`}
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
