import Link from "next/link";

import { useState, useEffect } from "react";

import { AiFillCloseCircle } from "react-icons/ai";

import "../styles/components/Cookies.scss";

import { version } from "../package.json";

const cookieName = `cookies_accepted_v${version}`;

export default function Cookies() {
  const [hide, setHide] = useState(true);

  const accept = () => {
    setHide(true);
    const cookie_expires = `expires=${new Date(
      new Date().getTime() + 30 * 24 * 60 * 60 * 1000
    ).toUTCString()}`;
    document.cookie = `${cookieName}=true;${cookie_expires};path=/`;
  };

  useEffect(() => {
    let cookies = {};
    document.cookie.split("; ").forEach((cookie) => {
      const parsedCookie = cookie.split("=");
      cookies[parsedCookie[0]] = parsedCookie[1];
    });
    if (!cookies[cookieName]) {
      setTimeout(() => setHide(false), 5000);
    }
  }, [hide]);

  return hide ? null : (
    <div id="Cookies">
      <p>Drogi użytkowniku,</p>
      <p>
        Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w celach
        statystycznych według naszej{" "}
        <Link href={"/polityka-prywatnosci"}>
          <a>polityki prywatności</a>
        </Link>{" "}
        zgodnie z przepisami ustawy 2012 R. Poz. 1445
      </p>
      <div className="icon close" onClick={accept}>
        <AiFillCloseCircle />
      </div>
    </div>
  );
}
