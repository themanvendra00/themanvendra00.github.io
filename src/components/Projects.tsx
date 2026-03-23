import { featuredProjects } from "../content/projects";

export function Projects() {
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
          {featuredProjects.map((project) => (
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
                  <a
                    className="project-deployed-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </a>
                  <a
                    className="project-github-link"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
