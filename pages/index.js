import styles from "../components/homePage.module.css";
import { Contact } from "../components/contact";
import { Divider } from "../components/divider";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";

const Index = () => {
  return (
    <>
      <NavBar />
      <section className={styles.sectionIntro}>
        <p className={styles.intro}>Hi, my name is </p>
        <span className={styles.name}>Sushmeet.</span>
        <h2 className="styles.job">I develop apps</h2>
        <p className={styles.description}>
          I am a full stack developer specializing in Html, CSS Javascript,
          Nodejs and React
        </p>
        <p className={styles.description}>
          Currently I 'm working at{" "}
          <a href="#" target="_blank">
            Shutterstock
          </a>
        </p>
      </section>
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </>
  );
};

export default Index;
