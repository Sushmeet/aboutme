import styles from "../components/homePage.module.css";
import { Contact } from "../components/contact";
import { Intro } from "../components/intro";
import { Divider } from "../components/divider";
import { Projects } from "../components/projects";
import { projectData } from "../components/data/projectData";

const Index = () => {
  return (
    <>
      <Intro />
      <Divider />
      <div className={styles.projectsSectionColor}>
        <section id="projects" className={styles.projects}>
          <h2 className={styles.projectsMainHeader}>Projects I'm proud of</h2>
          {projectData.map((article) => {
            return (
              <Projects
                key={article.projectTitle}
                projectTitle={article.projectTitle}
                projectName={article.projectName}
                projectparagraph={article.projectparagraph}
                image={article.image}
              />
            );
          })}
        </section>
      </div>
      <Divider />
      <Contact />
    </>
  );
};

export default Index;
