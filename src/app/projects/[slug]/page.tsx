import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import styles from "./page.module.css";
import Logo from "@/components/Logo";

type ProjectPageProps = {
params: Promise<{
    slug: string;
}>;
};

export default async function ProjectPage({
params,
}: ProjectPageProps) {
const { slug } = await params;

const project = projects.find((project) => project.slug === slug);

if (!project) {
    notFound();
}

return (
    <main className={styles.page}>
        <Logo />

        <Link href="/" className={styles.backLink}>
            ← Back to portfolio
        </Link>

        <header className={styles.header}>
            <p className={styles.period}>{project.period}</p>

            <h1>{project.title}</h1>

            <p className={styles.role}>{project.role}</p>

            <div className={styles.technologies}>
            {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
            ))}
            </div>
        </header>

        <section className={styles.section}>
            <p className={styles.label}>01 — OVERVIEW</p>

            <h2>About the project</h2>

            <p className={styles.description}>{project.description}</p>
        </section>

        <section className={styles.section}>
            <p className={styles.label}>02 — FEATURES</p>

            <h2>Key features</h2>

            <div className={styles.features}>
            {project.features.map((feature, index) => (
                <div className={styles.feature} key={feature}>
                <span className={styles.featureNumber}>
                    {String(index + 1).padStart(2, "0")}
                </span>

                <p>{feature}</p>
                </div>
            ))}
            </div>
        </section>

        <section className={styles.section}>
            <p className={styles.label}>03 — ROLE</p>

            <h2>My contribution</h2>

            <p className={styles.description}>{project.role}</p>
        </section>

        <section className={styles.section}>
            <p className={styles.label}>04 — TECHNOLOGY</p>

            <h2>Technology stack</h2>

            <div className={styles.technologies}>
            {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
            ))}
            </div>
        </section>

        {project.github && (
            <section className={styles.githubSection}>
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.github}
            >
                View source on GitHub ↗
            </a>
            </section>
        )}
    </main>
);
}