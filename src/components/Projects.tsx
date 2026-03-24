import { useState } from "react";
import { featuredProjects, type Project } from "../content/projects";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? featuredProjects : featuredProjects.slice(0, 6);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" className="section-title">
          Featured work
        </h2>
        <p className="section-lead">
          A small set of shipped projects — each repo is on my GitHub unless noted.
        </p>
        <div className="projects__grid">
          {displayedProjects.map((project) => (
            <article key={project.title} className="card project-card">
              <div className="project-card__media">
                <img
                  src={project.image}
                  alt=""
                  width={800}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="project-card__body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-card__role">{project.role}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack project-card__tech" aria-label="Technologies">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.caseStudy && (
                    <button
                      className="btn btn--primary"
                      style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', marginRight: '0.5rem' }}
                      onClick={() => setSelectedProject(project)}
                    >
                      Case Study
                    </button>
                  )}
                  <a
                    className="project-deployed-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ alignSelf: 'center' }}
                  >
                    Live demo
                  </a>
                  {project.repoUrl && (
                    <a
                      className="project-github-link"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ alignSelf: 'center' }}
                    >
                      Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {featuredProjects.length > 6 && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              className="btn btn--primary"
              onClick={() => setShowAll(!showAll)}
              style={{ padding: "0.6rem 1.2rem", fontSize: "0.9rem" }}
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
