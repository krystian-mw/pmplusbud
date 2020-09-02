import Header from "../components/Header";
import Footer from '../components/Footer'
import Cookies from '../components/Cookies'

import "../styles/_app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Cookies />
      <Footer />
    </>
  );
}

export default MyApp;
