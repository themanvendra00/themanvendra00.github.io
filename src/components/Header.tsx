import { useEffect, useState } from "react";
import { profile } from "../content/profile";

const { resume } = profile;

const navLinks = [
  { href: "#home", label: "Home", linkClass: "nav-link home" },
  { href: "#about", label: "About", linkClass: "nav-link about" },
  { href: "#skills", label: "Skills", linkClass: "nav-link skills" },
  { href: "#projects", label: "Projects", linkClass: "nav-link projects" },
  { href: "#contact", label: "Contact", linkClass: "nav-link contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header id="nav-menu" className="site-header">
      <div className="container site-header__inner">
        <a className="logo" href="#home">
          <span>m</span>anvendra
        </a>
        <nav className="nav" aria-label="Primary">
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-menu-list"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
          <ul
            id="nav-menu-list"
            className={`nav__list${open ? " is-open" : ""}`}
          >
            {navLinks.map(({ href, label, linkClass }) => (
              <li key={href}>
                <a href={href} className={linkClass} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <span id="resume-button-1">
                <a
                  id="resume-link-1"
                  className="nav-link resume"
                  href={resume.publicPath}
                  download={resume.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Resume
                </a>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
