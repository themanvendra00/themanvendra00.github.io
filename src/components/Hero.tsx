import { profile } from "../content/profile";

export function Hero() {
  const { resume } = profile;

  return (
    <section id="home" className="hero" aria-labelledby="user-detail-name">
      <div className="container">
        <div className="hero__grid">
          <div>
            <p className="hero__eyebrow">{profile.title}</p>
            <h1 id="user-detail-name">
              Hi, I&apos;m {profile.name.split(" ")[0]}
              <br />
              <span style={{ color: "var(--text-muted)" }}>{profile.location}</span>
            </h1>
            <p className="hero__lead">{profile.tagline}</p>
            <div className="hero__actions">
              <span id="resume-button-2">
                <a
                  id="resume-link-2"
                  className="btn btn--primary"
                  href={resume.publicPath}
                  download={resume.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download resume
                </a>
              </span>
              <a className="btn btn--ghost" href="#projects">
                View work
              </a>
              <a className="btn btn--ghost" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <div className="hero__art" aria-hidden>
            <img
              src="/images/hero-illustration.svg"
              alt=""
              width={433}
              height={341}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
