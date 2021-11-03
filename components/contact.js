import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.sectionColor}>
      <section id="contact" className={styles.contact}>
        <h2>Contact me</h2>
        <p className={styles.contactDesc}>
          I am always interested in solving new problems in tech and design. Hit
          me up for getting more info on how to get your projects off the
          ground.
        </p>
        <p>
          <a href="#" className={styles.email}>
            Email Me
          </a>
        </p>
      </section>
    </div>
  );
};
