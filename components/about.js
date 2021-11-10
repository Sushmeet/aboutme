import { Projects } from "../components/projects";
import { Divider } from "./divider";
import styles from "./about.module.css";

const projectParagraph = `Description of the project. This should be fairly concise while also
describing the key components that you developed or worked on. It can be
as long as you need it to be but should at least be a few sentences
long. Be sure to include specific links anywhere in the description. A
link looks like
<a href="https://frontendmasters.github.io/grid-flexbox-v2/">this</a>,
and multiple links look <a href="#">like this</a> and
<a href="#">like this</a>.`;

const image = {
  src: "https://gettingstartedwith.css.education/portfolio/img/pexels-christina-morillo-1181267.jpg",
  alt: "Wall of Wonder",
};

export const About = () => {
  return (
    <>
      <Divider />
      <div className={styles.projectsSectionColor}>
        <section id="about" className={styles.projects}>
          <h2 className={styles.projectsMainHeader}>About Sushmeet Sunger</h2>
          <Projects
            projectName="Just the Highlights"
            projectparagraph={projectParagraph}
            image={image}
          />
        </section>
      </div>
    </>
  );
};
