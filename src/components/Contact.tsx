import { FormEvent, useState } from "react";
import { DEFAULT_CONTACT_FORM_URL } from "../constants";
import { profile } from "../content/profile";

export function Contact() {
  const formUrl =
    import.meta.env.VITE_CONTACT_FORM_URL ?? DEFAULT_CONTACT_FORM_URL;
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("idle");
    void fetch(formUrl, { method: "POST", body: new FormData(form) })
      .then(() => {
        setStatus("ok");
        form.reset();
        window.setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => setStatus("err"));
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">
          Contact
        </h2>
        <p className="section-lead">
          Prefer email or LinkedIn — or use the form below.
        </p>
        <div className="contact__grid">
          <div>
            <div className="contact__links">
              <p>
                <a href={`mailto:${profile.social.email}`} id="contact-email">
                  {profile.social.email}
                </a>
              </p>
              <p>
                <a href={profile.social.phoneHref} id="contact-phone">
                  {profile.social.phone}
                </a>
              </p>
            </div>
            <a
              className="btn btn--primary"
              style={{ marginTop: "1rem", display: "inline-flex" }}
              href={profile.resume.publicPath}
              download={profile.resume.fileName}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download resume
            </a>
            <div className="contact__social" aria-label="Social profiles">
              <a
                id="contact-github"
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ padding: "10px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                id="contact-linkedin"
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ padding: "10px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <form
              className="contact-form"
              name="submit-to-google-sheet"
              onSubmit={onSubmit}
            >
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="Name"
                placeholder="Your name"
                required
                autoComplete="name"
              />
              <label htmlFor="contact-email-input">Email</label>
              <input
                id="contact-email-input"
                type="email"
                name="Email"
                placeholder="Your email"
                required
                autoComplete="email"
              />
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="Message"
                rows={6}
                placeholder="Your message"
              />
              <button type="submit" className="btn btn--primary">
                Send message
              </button>
              <span id="msg" className="form-status" role="status">
                {status === "ok" ? "Message sent successfully." : ""}
              </span>
              {status === "err" && (
                <span className="form-status form-status--error" role="alert">
                  Something went wrong. Try email or LinkedIn instead.
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
