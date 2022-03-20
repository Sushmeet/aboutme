import Link from "next/Link";
import styles from "./navbar.module.css";

const linkedInURL = "https://www.linkedin.com/in/sushmeetsunger/";
const githubURL = "https://github.com/Sushmeet";

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.list}>
        <li className={styles.myName}>
          <h1>
            <a href="#" className={styles.anchor}>
              <span className={styles.myNameIcon}>
                <i aria-hidden="true" className="fas fa-road name-icon"></i>
              </span>
              <span>Sushmeet</span>
            </a>
          </h1>
        </li>
        <li>
          <Link href="/">
            <a className={styles.anchor} href="#projects">
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={styles.anchor}>About Us</a>
          </Link>
        </li>
        <li>
          <a className={styles.anchor} href="/#contact">
            Contact
          </a>
        </li>
        <li>
          <a className={styles.anchor} href={linkedInURL} target="_blank">
            <span className="sr-only">LinkedIn</span>
            <span className={styles.icon}>
              <i aria-hidden="true" className="fab fa-linkedin"></i>
            </span>
          </a>
        </li>
        <li>
          <a className={styles.anchor} href={githubURL} target="_blank">
            <span className="sr-only">Github</span>
            <span className={styles.icon}>
              <i aria-hidden="true" class="fab fa-github-square"></i>
            </span>
          </a>
        </li>
        <li>
          <a className={styles.button} href="#">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
