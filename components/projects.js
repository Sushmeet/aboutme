import styles from "./projects.module.css";

export const Projects = ({
  projectTitle = "Latest Project",
  projectName = "Wall of Wonder",
  technologies = ["Html", "CSS", "SVG"],
}) => {
  return (
    <div className={styles.projectsSectionColor}>
      <section id="projects" className={styles.projects}>
        <h2 className={styles.projectsMainHeader}>Projects I'm proud of</h2>
        <article className={styles.article}>
          <div className={styles.text}>
            <h4>{projectTitle}</h4>
            <h3 className={styles.projectName}>{projectName}</h3>
            <p className={styles.projectParagraph}>
              Description of the project. This should be fairly concise while
              also describing the key components that you developed or worked
              on. It can be as long as you need it to be but should at least be
              a few sentences long. Be sure to include specific links anywhere
              in the description. A link looks like{" "}
              <a href="https://frontendmasters.github.io/grid-flexbox-v2/">
                this
              </a>
              , and multiple links look <a href="#">like this</a> and{" "}
              <a href="#">like this</a>.
            </p>
            <h4 className={styles.projectTechnologiesUsedHeading}>
              Technologies used include:
            </h4>
            <ul className={styles.techList}>
              <li>HTML</li>
              <li>CSS</li>
              <li>SVG</li>
            </ul>
          </div>
          <img
            className={styles.projectImage}
            src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
            alt="lates wall of wonder"
          />
        </article>
      </section>
    </div>
  );
};
