import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import ProjectCard from "../Reusables/ProjectCard/ProjectCard";
import { Intro, mostRecentProject } from "../Texts/LandingPageIntro";

function LandingPage() {
  return (
    <main className={styles.landingPage}>
      <section className={styles.about}>
        <div>
          <h1>Gabrielius Gliebus portfolio</h1>
          <p className={styles.intro}>{Intro.title}</p>
        </div>

        <aside className={styles.cvCard}>
          <a href={`${process.env.PUBLIC_URL}/GabrieliusGliebusCV.pdf`} download>
            Download my CV
          </a>
        </aside>
      </section>

      <section className={`${styles.section} ${styles.indexSection}`}>
        <div className={styles.sectionTitle}>
          <h2>Index</h2>
          <span>project categories</span>
        </div>

        <nav className={styles.index} aria-label="Project categories">
          <Link to="/categories/unity">
            <strong>Unity</strong>
          </Link>
          <Link to="/categories/unreal-engine">
            <strong>Unreal Engine</strong>
          </Link>
          <Link to="/categories/godot">
            <strong>Godot</strong>
          </Link>
          <Link to="/categories/mobile-development">
            <strong>Mobile development</strong>
          </Link>
          <Link to="/categories/other-projects">
            <strong>Other projects</strong>
          </Link>
        </nav>
      </section>

      <section className={`${styles.section} ${styles.recentSection}`}>
        <div className={styles.sectionTitle}>
          <h2>Most recent</h2>
          <span>latest project</span>
        </div>

        <ProjectCard project={mostRecentProject} />
      </section>
    </main>
  );
}

export default LandingPage;
