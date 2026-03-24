import { useEffect } from "react";
import type { Project } from "../content/projects";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">Case Study: {project.title}</h2>
          <div className="project-tech-stack" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            {project.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-body">
          <section className="modal-section">
            <h3>🚀 Overview</h3>
            <p>{caseStudy.overview}</p>
          </section>

          <section className="modal-section">
            <h3>🧩 Key Features</h3>
            <ul>
              {caseStudy.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h3>🏗 Architecture</h3>
            <ul>
              {caseStudy.architecture.map((arch, i) => (
                <li key={i}>{arch}</li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h3>👨‍💻 My Role — {project.role}</h3>
            <p>{caseStudy.roleDescription}</p>
            <h4>Key Contributions:</h4>
            <ul>
              {caseStudy.keyContributions.map((contrib, i) => (
                <li key={i}>{contrib}</li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h3>⚡ Problem & Solution</h3>
            <h4>❗ Problem</h4>
            <p>{caseStudy.problem}</p>
            <h4>💡 Solution</h4>
            <ul>
              {caseStudy.solution.map((sol, i) => (
                <li key={i}>{sol}</li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h3>✅ Result</h3>
            <ul>
              {caseStudy.result.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h3>📈 Impact</h3>
            <ul>
              {caseStudy.impact.map((imp, i) => (
                <li key={i}>{imp}</li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h3>🧠 Key Learnings</h3>
            <ul>
              {caseStudy.learnings.map((learning, i) => (
                <li key={i}>{learning}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
