export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "REST APIs", "Authentication & authorization patterns"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Responsive UI", "Component-driven UIs"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Schema design", "Queries & migrations"],
  },
  {
    label: "Tooling & delivery",
    items: ["Git", "GitHub", "Postman", "CI/CD pipelines", "Code review"],
  },
  {
    label: "AI-assisted development",
    items: ["Cursor", "Claude Code", "Antigravity", "Faster iteration with safe review"],
  },
];
