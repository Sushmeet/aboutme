import styles from "./navbar.module.css";

export const NavBar = () => {
  return (
    <>
      <h1 className={styles.myName}>
        <a href="#" className={styles.anchor}>
          <span className={styles.myNameIcon}>
            <i aria-hidden="true" className="fas fa-road name-icon"></i>
          </span>
          Sushmeet Sunger
        </a>
      </h1>
      <ul className={styles.list}>
        <li>
          <a className={styles.anchor} href="#">
            Projects
          </a>
        </li>
        <li>
          <a className={styles.anchor} href="#">
            About
          </a>
        </li>
        <li>
          <a className={styles.anchor} href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a className={styles.anchor} href="#">
            <span className="sr-only">LinkedIn</span>
            <span className={styles.icon}>
              <i aria-hidden="true" className="fab fa-linkedin"></i>
            </span>
          </a>
        </li>
        <li>
          <a className={styles.anchor} href="#">
            <span className="sr-only">Github</span>
            <span className={styles.icon}>
              <i aria-hidden="true" class="fab fa-github-square"></i>
            </span>
          </a>
        </li>
        <li>
          <a className={styles.anchor} href="#">
            Resume
          </a>
        </li>
      </ul>
    </>
  );
};

// fas fa-road name-icon
