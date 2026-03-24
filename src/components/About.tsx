import { profile } from "../content/profile";

export function About() {
  const [intro, ...rest] = profile.about;

  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="section-title">
          About
        </h2>
        <p className="section-lead">
          {profile.yearsExperience} years shipping web products — focused on maintainable full-stack work.
        </p>
        <div className="about__grid">
          <div>
            <img
              className="home-img"
              src="/images/profile.png"
              alt={profile.name}
              width={280}
              height={280}
              loading="lazy"
            />
          </div>
          <div className="about__text">
            <p id="user-detail-intro">{intro}</p>
            {rest.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            {profile.experience.map((job) => (
              <div key={job.organization} className="experience">
                <h3>{job.role}</h3>
                <p className="experience__meta">
                  {job.organization} · {job.period}
                </p>
                <ul>
                  {job.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="education">
              <h3>Education</h3>
              {profile.education.map((edu) => (
                <div key={edu.title} className="education__item">
                  <strong>{edu.title}</strong>
                  <span>
                    {edu.place} · {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
