import App from "next/app";
import Head from "next/head";
import { useAmp } from "next/amp";

import ReactGA from "react-ga";

// import AOS from "aos";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from "../components/Cookies";

import "../styles/_app.scss";
import "aos/dist/aos.css";

const AmpConditionalViewport = () =>
  useAmp() ? null : (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
    </Head>
  );

class MyApp extends App {
  componentDidMount() {
    ReactGA.initialize("UA-176319237-1", {
      debug: process.env.NODE_ENV === "development",
    });
    ReactGA.pageview(window.location.pathname + window.location.search);

    AOS.init({
      duration: 750,
    });
  }

  componentDidUpdate() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <AmpConditionalViewport />
        <Header />
        <Component {...pageProps} />
        <Cookies />
        <Footer />
      </>
    );
  }
}

export default MyApp;
