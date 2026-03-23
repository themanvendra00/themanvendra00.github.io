import { GitHubCalendar } from "react-github-calendar";
import "react-github-calendar/tooltips.css";
import { profile } from "../content/profile";

const GITHUB_USER = profile.social.githubUser;
const GITHUB_PROFILE = profile.social.github;

function streakStatsUrl(user: string) {
  const p = new URLSearchParams({
    user,
    theme: "dark",
    hide_border: "true",
    layout: "compact",
  });
  /* No slash before ? — matches Cypress include check for herokuapp.com?user= */
  return `https://github-readme-streak-stats.herokuapp.com?${p.toString()}`;
}

function readmeStatsUrl(user: string) {
  const p = new URLSearchParams({
    username: user,
    show_icons: "true",
    hide_border: "true",
    theme: "dark",
    title_color: "58a6ff",
    text_color: "c9d1d9",
    icon_color: "3fb950",
    line_height: "22",
  });
  return `https://github-readme-stats.vercel.app/api?${p.toString()}`;
}

function topLangsUrl(user: string) {
  const p = new URLSearchParams({
    username: user,
    layout: "compact",
    theme: "dark",
    hide_border: "true",
    langs_count: "6",
    title_color: "58a6ff",
    text_color: "c9d1d9",
  });
  return `https://github-readme-stats.vercel.app/api/top-langs/?${p.toString()}`;
}

export function GitHubSection() {
  return (
    <section id="github" className="section github-section" aria-labelledby="github-title">
      <div className="container">
        <h2 id="github-title" className="section-title">
          GitHub activity
        </h2>
        <p className="section-lead">
          Public contributions and profile stats — tap a card to open GitHub.
        </p>

        <div className="github-panel">
          <div className="github-grid">
            <article className="github-card github-card--calendar">
              <h3 className="github-card__label">Contribution calendar</h3>
              <div className="github-calendar-wrap">
                <GitHubCalendar
                  username={GITHUB_USER}
                  colorScheme="dark"
                  fontSize={12}
                  className="calendar"
                  blockSize={11}
                  blockMargin={3}
                  showWeekdayLabels={["mon", "wed", "fri"]}
                  errorMessage="Could not load contributions. Try again later or view GitHub directly."
                />
              </div>
            </article>

            <a
              className="github-card github-card--stat"
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="github-card__label">Streak</h3>
              <div className="github-card__media">
                <img
                  id="github-streak-stats"
                  src={streakStatsUrl(GITHUB_USER)}
                  alt={`${GITHUB_USER} contribution streak on GitHub`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </a>

            <a
              className="github-card github-card--stat"
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="github-card__label">Overview</h3>
              <div className="github-card__media">
                <img
                  id="github-stats-card"
                  src={readmeStatsUrl(GITHUB_USER)}
                  alt={`${GITHUB_USER} GitHub statistics`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </a>

            <a
              className="github-card github-card--stat"
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="github-card__label">Top languages</h3>
              <div className="github-card__media">
                <img
                  id="github-top-langs"
                  src={topLangsUrl(GITHUB_USER)}
                  alt={`${GITHUB_USER} most used languages on GitHub`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </a>
          </div>

          <p className="github-stats-note">
            <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">
              github.com/{GITHUB_USER}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
