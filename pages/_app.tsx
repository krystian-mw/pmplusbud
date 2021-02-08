import React from "react";

import Head from "next/head";
import Router from "next/router";
import { useAmp } from "next/amp";

import ReactGA from "react-ga";

import AOS from "aos";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from "../components/Cookies";

import "../styles/_app.scss";

import "aos/dist/aos.css";
import Welcome from "../components/Welcome";

const AmpConditionalViewport = () =>
  useAmp() ? null : (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
    </Head>
  );

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: React.FunctionComponent;
  pageProps: object;
}) {
  React.useEffect(() => {
    ReactGA.initialize("UA-176319237-1", {
      debug: process.env.NODE_ENV === "development",
    });

    Router.events.on("routeChangeComplete", (url) => {
      AOS.refresh();
      ReactGA.pageview(url);
    });

    ReactGA.pageview(window.location.pathname + window.location.search);

    AOS.init({
      duration: 750,
    });
  });

  return (
    <>
      <AmpConditionalViewport />
      <Header />
      <Welcome />
      <Component {...pageProps} />
      <Cookies />
      <Footer />
    </>
  );
}
