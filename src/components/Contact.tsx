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
              >
                GH
              </a>
              <a
                id="contact-linkedin"
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
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
