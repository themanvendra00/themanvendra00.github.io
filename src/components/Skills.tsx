import { skillGroups } from "../content/skills";
import { skillIconCards } from "../content/skillIcons";

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="section-title">
          Skills
        </h2>
        <p className="section-lead">
          Backend-first stack — logos wrap in rows; details below by area.
        </p>
        <div className="skills__icons" aria-label="Technologies">
          {skillIconCards.map((s) => (
            <div key={s.name} className="skills-card">
              <img className="skills-card-img center" src={s.img} alt="" width={48} height={48} />
              <h5 className="skills-card-name">{s.name}</h5>
            </div>
          ))}
        </div>
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
