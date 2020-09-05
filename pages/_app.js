import App from "next/app";

import AOS from "aos";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from "../components/Cookies";

import "../styles/_app.scss";
import "aos/dist/aos.css";


class MyApp extends App {
  componentDidMount() {
    AOS.init({
      duration: 1250,
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Header />
        <Component {...pageProps} />
        <Cookies />
        <Footer />
      </>
    );
  }
}

export default MyApp;
