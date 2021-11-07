import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footerHeading}>
        Sushmeet Sunger &middot; Full Stack Developer
      </h2>
      <ul className={styles.footerList}>
        <li>
          <a href="#">
            <span className="sr-only">Linked In</span>
            <i aria-hidden="true" className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="sr-only">Github</span>
            <i aria-hidden="true" className="fab fa-github-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="sr-only">Email</span>
            <i aria-hidden="true" className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
      <p className={styles.footerParagraph}>
        <small>&copy; 2021 Sushmeet. All rights reserved.</small>
      </p>
    </footer>
  );
};
