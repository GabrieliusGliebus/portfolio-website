import React from "react";
import styles from "./LandingPage.module.css";
import ProjectCard from "../Reusables/ProjectCard/ProjectCard";
import { Intro, mostRecentProject } from "../Texts/LandingPageIntro";

function LandingPage() {
  return (
    <main className={styles.landingPage}>
      <section className={styles.about}>
        <div>
          <p className={styles.eyebrow}>About me</p>
          <h1>Gabrielius Gliebus</h1>
          <p className={styles.intro}>{Intro.title}</p>
        </div>

        <aside className={styles.cvCard}>
          <a href={`${process.env.PUBLIC_URL}/GabrieliusGliebusCV.pdf`} download>
            Download my CV
          </a>
        </aside>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2>Index</h2>
          <span>project categories</span>
        </div>

        <nav className={styles.index} aria-label="Project categories">
          <a href="#unity">
            <strong>Unity</strong>
          </a>
          <a href="#unreal">
            <strong>Unreal Engine</strong>
          </a>
          <a href="#godot">
            <strong>Godot</strong>
          </a>
          <a href="#mobile">
            <strong>Mobile development</strong>
          </a>
          <a href="#other">
            <strong>Other projects</strong>
          </a>
        </nav>
      </section>

      <section className={styles.section}>
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
