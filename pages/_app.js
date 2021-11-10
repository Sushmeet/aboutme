import { NavBar } from "../components/navBar";
import { Divider } from "../components/divider";
import { Footer } from "../components/footer";
import "../components/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Divider />
      <Footer />
    </>
  );
}
