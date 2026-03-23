export type Project = {
  title: string;
  description: string;
  role: string;
  tech: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
};

/** All repos listed below are under github.com/themanvendra00 (curated). */
export const featuredProjects: Project[] = [
  {
    title: "Note app",
    description:
      "A full-stack notes app to create and manage notes in one place — list views, persistence, and a clean UI.",
    role: "End-to-end development",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    image: "/images/projects/note-app.svg",
    liveUrl: "https://incomparable-empanada-179866.netlify.app/",
    repoUrl: "https://github.com/themanvendra00/notica",
  },
  {
    title: "Coffee shop landing",
    description:
      "A responsive, marketing-style landing page focused on layout, typography, and mobile-first styling.",
    role: "Design and front-end implementation",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/coffee.svg",
    liveUrl: "https://coffee-shop-home.netlify.app/",
    repoUrl: "https://github.com/themanvendra00/coffe-shop-7067",
  },
  {
    title: "Analog clock",
    description:
      "A browser clock with a polished UI and light/dark modes — good practice for DOM, CSS, and state in vanilla JS.",
    role: "Frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/clock.svg",
    liveUrl: "https://stalwart-sherbet-64a857.netlify.app/",
    repoUrl: "https://github.com/themanvendra00/Aesthetic_Clock",
  },
  {
    title: "Fitness tracker (Cronometer-style)",
    description:
      "A static UI clone of a calorie and health tracking experience — layout, components, and CSS depth.",
    role: "Front-end",
    tech: ["HTML", "CSS"],
    image: "/images/projects/fitness.svg",
    liveUrl: "https://earnest-vacherin-fa152b.netlify.app",
    repoUrl: "https://github.com/themanvendra00/amiable-suggestion-2246",
  },
];
