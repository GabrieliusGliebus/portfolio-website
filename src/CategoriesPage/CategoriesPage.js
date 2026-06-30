import React from "react";
import { Link, useParams } from "react-router-dom";
import ProjectCard from "../Reusables/ProjectCard/ProjectCard";
import { AllProjects } from "../Texts/Projects";
import styles from "./CategoriesPage.module.css";

const categoryNames = {
  "unity": "Unity",
  "unreal-engine": "Unreal Engine",
  "godot": "Godot",
  "mobile-development": "Mobile development",
  "other-projects": "Other projects",
};

function CategoriesPage() {
  const { category } = useParams();
  const categoryName = categoryNames[category] || "Unknown category";
  const projects = AllProjects.filter((project) => project.category === category);
  const projectLabel = projects.length === 1 ? "project" : "projects";

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.backLink} to="/">
            <span aria-hidden="true">←</span>
            Back
          </Link>
        </div>
      </header>

      <main className={styles.categoriesPage}>
        <p className={styles.eyebrow}>Selected category</p>
        <h1>{categoryName}</h1>
        <p className={styles.projectCount}>
          {projects.length} {projectLabel}
        </p>

        <div className={styles.projectList}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </main>
    </>
  );
}

export default CategoriesPage;
