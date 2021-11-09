import styles from "../components/homePage.module.css";
import { Contact } from "../components/contact";
import { Divider } from "../components/divider";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import { Projects } from "../components/projects";
import { projectData } from "../components/data/projectData";

const Index = () => {
  return (
    <>
      <NavBar />
      <section className={styles.sectionIntro}>
        <p className={styles.intro}>Hi, my name is </p>
        <span className={styles.name}>Sushmeet.</span>
        <h2 className={styles.job}>I develop apps</h2>
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
      <Divider />
      <Footer />
    </>
  );
};

export default Index;
