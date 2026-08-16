import Link from "next/link";
import styles from "./ProjectCard.module.css";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className={styles.card}>
        <div className={styles.header}>
            <div>
            <p className={styles.period}>{project.period}</p>
            <h3>{project.title}</h3>
            </div>

            <span className={styles.role}>{project.role}</span>
        </div>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.technologies}>
            {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
            ))}
        </div>

        <div className={styles.actions}>
            <Link
                className={styles.details}
                href={`/projects/${project.slug}`}
            >
                View project →
            </Link>

            {project.github && (
                <a
                className={styles.github}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                >
                GitHub ↗
                </a>
            )}
        </div>
        </article>
    );
}