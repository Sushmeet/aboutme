import styles from "./projects.module.css";

export const Projects = ({
  projectTitle,
  projectName,
  projectparagraph,
  image,
  technologies = ["Html", "CSS", "SVG"],
}) => {
  return (
    <article className={styles.article}>
      <div className={styles.text}>
        <h4>{projectTitle}</h4>
        <h3 className={styles.projectName}>{projectName}</h3>
        <p className={styles.projectParagraph}>{projectparagraph}</p>
        <h4 className={styles.projectTechnologiesUsedHeading}>
          Technologies used include:
        </h4>
        <ul className={styles.techList}>
          <li>HTML</li>
          <li>CSS</li>
          <li>SVG</li>
        </ul>
      </div>
      {image && (
        <img className={styles.projectImage} src={image.src} alt={image.alt} />
      )}
    </article>
  );
};
