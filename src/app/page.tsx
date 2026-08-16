import styles from "./page.module.css";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <span className={styles.logo}>PVP.</span>

        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>BACKEND-FOCUSED FULLSTACK DEVELOPER</p>

        <h1>
          I build systems
          <br />
          that <span>work.</span>
        </h1>

        <p className={styles.description}>
          I build scalable server-side architectures and optimized database
          systems while connecting them with seamless frontend experiences.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href="#projects">
            View Projects
          </a>

          <a
            className={styles.secondaryButton}
            href="https://github.com/PerryPhuoc"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <p className={styles.sectionLabel}>01 — ABOUT</p>

        <h2>Building from the backend up.</h2>

        <p>
          My foundation is built around backend development, databases, and
          software engineering, with fullstack experience across React,
          .NET, Spring Boot, Node.js, and multiple database systems.
        </p>
      </section>

      <section id="projects" className={styles.section}>
        <p className={styles.sectionLabel}>02 — PROJECTS</p>

        <h2>Selected work.</h2>

        <div className={styles.projects}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <p className={styles.sectionLabel}>03 — CONTACT</p>

        <h2>Let's build something.</h2>

        <a href="mailto:phuocpham5104@gmail.com">
          phuocpham5104@gmail.com
        </a>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 Pham Viet Phuoc</span>
        <span>Backend-focused Fullstack Developer</span>
      </footer>
    </main>
  );
}