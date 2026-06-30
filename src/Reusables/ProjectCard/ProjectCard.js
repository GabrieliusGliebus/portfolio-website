import React from "react";
import styles from "./ProjectCard.module.css";

function getYouTubeEmbedUrl(link) {
  if (!link) {
    return "";
  }

  const videoId = link.includes("youtu.be/")
    ? link.split("youtu.be/")[1]?.split("?")[0]
    : link.split("v=")[1]?.split("&")[0];

  return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
}

function ProjectCard({ project }) {
  const tags = project.tags || [];
  const embedUrl = getYouTubeEmbedUrl(project.link);

  return (
    <article className={styles.project}>
      <header>
        <h3>{project.title}</h3>
      </header>

      <div className={styles.videoEmbed}>
        {embedUrl && (
          <iframe
            src={embedUrl}
            title={`${project.title} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className={styles.projectMeta}>
        <p>{project.description}</p>

        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span className={index === 0 ? styles.primaryTag : undefined} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
