import Link from "next/link";
import Logo from "@/components/Logo";
import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <main className={styles.page}>
        <Logo />

        <div className={styles.content}>
            <p className={styles.code}>404 — NOT FOUND</p>

            <h1 className={styles.title}>Page not found.</h1>

            <p className={styles.description}>
            The page you're looking for doesn't exist or may have been moved.
            </p>

            <Link href="/" className={styles.back}>
            ← Back to portfolio
            </Link>
        </div>
        </main>
    );
}