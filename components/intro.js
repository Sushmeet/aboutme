import styles from "./homePage.module.css";

export const Intro = () => {
  return (
    <section className={styles.sectionIntro}>
      <p className={styles.intro}>Hi, my name is</p>
      <span className={styles.name}>Sushmeet.</span>
      <h2 className={styles.job}>I develop apps</h2>
      <p className={styles.description}>
        I am a full stack developer specializing in Html, CSS Javascript, Nodejs
        and React
      </p>
      <p className={styles.description}>
        Currently I 'm working at{" "}
        <a href="#" target="_blank">
          Shutterstock
        </a>
      </p>
    </section>
  );
};
