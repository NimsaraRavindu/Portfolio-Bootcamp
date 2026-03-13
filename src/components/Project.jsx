import React, { useEffect, useState } from "react";
import { Award, BriefcaseBusiness, ExternalLink, Github, Loader2, RefreshCw, Sparkles, Trophy } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const GITHUB_USER = "NimsaraRavindu";
const FEATURED_REPO_NAMES = new Set(
  ["Simple-Java-Shop-Application", "Telegram-Bot", "Web-Scrapper"].map((name) =>
    name.toLowerCase()
  )
);

const pinnedProjects = [
  {
    id: "linkara",
    title: "Linkara",
    headline: "AI-Powered Event Management Ecosystem",
    description:
      "Designed and deployed an event management ecosystem using React, Node.js, and PostgreSQL, with agentic AI and collaborative filtering concepts integrated into the product thinking.",
    technologies: ["React", "Node.js", "PostgreSQL", "Agentic AI", "Collaborative Filtering"],
    link: "https://sdgp-marketing-page.vercel.app/",
    linkLabel: "View marketing page",
  },
  {
    id: "java-tshirt",
    title: "Simple Java Shop Application",
    description:
      "Java command-line shop app for handling t-shirt orders, customers, and sales reports with in-memory data structures.",
    technologies: ["Java", "CLI", "Data Structures", "Reporting"],
    link: "https://github.com/NimsaraRavindu/Simple-Java-Shop-Application",
    linkLabel: "View on GitHub",
  },
  {
    id: "telegram-bot",
    title: "Telegram Bot — LangChain & Groq",
    description:
      "Python Telegram bot using python-telegram-bot, LangChain, and Groq LLM for an AI-assisted conversational experience.",
    technologies: ["Python", "LangChain", "Groq LLM", "Telegram API"],
    link: "https://github.com/NimsaraRavindu/Telegram-Bot",
    linkLabel: "View on GitHub",
  },
  {
    id: "github-scraper",
    title: "Go RSS Aggregator Backend",
    description:
      "Go-based RSS aggregation backend with a REST API, PostgreSQL storage, feed following, and a background scraper that keeps posts up to date.",
    technologies: ["Go", "REST API", "PostgreSQL", "RSS Scraper"],
    link: "https://github.com/NimsaraRavindu/Web-Scrapper",
    linkLabel: "View on GitHub",
  },
];

const achievements = [
  "Computer Society of Zahira College — 1st place in Quiz Competition (2023)",
  "Musaeus College — 3rd place, Senior Category, Inter-School IT Quiz Competition (2023)",
  "Cambridge Learner Awards — Outstanding Learner Award (2022)",
];

// Language → colour mapping for the dot badge
const LANG_COLORS = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3572a5",
  Java: "#b07219",
  "C#": "#178600",
  "C++": "#f34b7d",
  C: "#555",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Ruby: "#701516",
  Go: "#00add8",
  Rust: "#dea584",
  Kotlin: "#7f52ff",
  Swift: "#f05138",
  Dart: "#00b4ab",
};

function LanguageDot({ lang }) {
  if (!lang) return null;
  const color = LANG_COLORS[lang] ?? "#94a3b8";
  return (
    <span className="lang-badge">
      <span className="lang-dot" style={{ background: color }} />
      {lang}
    </span>
  );
}

export default function Project() {
  const [featuredProject, ...supportingProjects] = pinnedProjects;
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");
  const [headingRef, headingVisible] = useReveal();
  const [pinnedRef, pinnedVisible] = useReveal();
  const [journeyRef, journeyVisible] = useReveal();

  const fetchRepos = () => {
    setStatus("loading");
    fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=30`,
      { headers: { Accept: "application/vnd.github+json" } }
    )
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub API ${r.status}`);
        return r.json();
      })
      .then((data) => {
        const filtered = data
          .filter(
            (r) =>
              !r.fork &&
              r.name !== GITHUB_USER &&
              !FEATURED_REPO_NAMES.has((r.name ?? "").toLowerCase())
          )
          .slice(0, 9);
        setRepos(filtered);
        setStatus("done");
      })
      .catch(() => setStatus("error"));
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <section className="section-shell section-shell-alt" id="projects">
      <div
        ref={headingRef}
        className={`section-heading reveal-block reveal-up${headingVisible ? " revealed" : ""}`}
      >
        <p className="eyebrow">Selected Work</p>
        <h2>Projects, applied experience, and achievements</h2>
        <p>
          Live repos pulled straight from GitHub — plus the experimentation, teamwork, and
          competition-driven discipline behind the work.
        </p>
      </div>

      {/* Featured project */}
      <div className="experience-banner">
        <div>
          <p className="eyebrow">Featured Project</p>
          <h3>{featuredProject.headline ?? featuredProject.title}</h3>
          <p>{featuredProject.description}</p>
          <a
            href={featuredProject.link}
            target="_blank"
            rel="noreferrer"
            className="project-link experience-link"
          >
            {featuredProject.linkLabel ?? "View project"}
            <ExternalLink size={15} />
          </a>
        </div>
        <div className="experience-tags">
          <BriefcaseBusiness size={20} />
          {featuredProject.technologies.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      {/* ── Highlighted projects ── */}
      <div className="pinned-section-header">
        <p className="eyebrow">More Projects</p>
        <h3>3 featured builds</h3>
      </div>

      <div
        ref={pinnedRef}
        className={`project-grid reveal-block reveal-up${pinnedVisible ? " revealed" : ""}`}
      >
        {supportingProjects.map((project, i) => (
          <article
            key={project.id}
            className="project-card project-card-pinned stagger-child"
            style={{ "--stagger": i }}
          >
            <div className="project-card-top">
              <div className="project-icon">
                <Sparkles size={16} />
              </div>
              <span className="pinned-badge">Featured</span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="pill-list">
              {project.technologies.map((tech) => (
                <span key={tech} className="skill-pill skill-pill-soft">
                  {tech}
                </span>
              ))}
            </div>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                {project.linkLabel ?? "View on GitHub"}
                <ExternalLink size={15} />
              </a>
            ) : (
              <span className="project-link project-link-muted">GitHub link coming soon</span>
            )}
          </article>
        ))}
      </div>

      {/* ── All GitHub repos ── */}
      {/* GitHub repos heading row */}
      <div className="gh-section-header">
        <div className="gh-section-title">
          <Github size={18} />
          <span>GitHub Repositories</span>
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noreferrer"
            className="gh-profile-link"
          >
            @{GITHUB_USER}
            <ExternalLink size={13} />
          </a>
        </div>
        {status !== "loading" && (
          <button type="button" className="gh-refresh-btn" onClick={fetchRepos} aria-label="Refresh repos">
            <RefreshCw size={15} />
          </button>
        )}
      </div>

      {/* Loading state */}
      {status === "loading" && (
        <div className="gh-state">
          <Loader2 size={28} className="gh-spin" />
          <p>Fetching repositories…</p>
        </div>
      )}

      {/* Error state */}
      {status === "error" && (
        <div className="gh-state gh-state-error">
          <p>Could not reach the GitHub API. Check your connection or try again.</p>
          <button type="button" className="secondary-button" onClick={fetchRepos}>
            <RefreshCw size={15} /> Retry
          </button>
        </div>
      )}

      {/* Repo grid */}
      {status === "done" && repos.length === 0 && (
        <div className="gh-state">
          <p>No public repositories found.</p>
        </div>
      )}

      {status === "done" && repos.length > 0 && (
        <div className="github-grid gh-loaded">
          {repos.map((repo, i) => (
            <article
              key={repo.id}
              className="project-card"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="project-card-top">
                <div className="project-icon">
                  <Sparkles size={16} />
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link project-link-icon"
                  aria-label={`View ${repo.name} on GitHub`}
                >
                  <Github size={16} />
                </a>
              </div>

              <h3>{repo.name.replace(/-/g, " ")}</h3>

              <p className="project-desc">
                {repo.description
                  ? repo.description
                  : `A ${repo.language ?? "code"} project — see the repository for full details.`}
              </p>

              <div className="project-card-footer">
                <LanguageDot lang={repo.language} />
                {repo.stargazers_count > 0 && (
                  <span className="repo-stars">★ {repo.stargazers_count}</span>
                )}
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub
                <ExternalLink size={15} />
              </a>
            </article>
          ))}
        </div>
      )}

      {/* Achievements + contributions */}
      <div
        ref={journeyRef}
        className={`journey-grid reveal-block reveal-up${journeyVisible ? " revealed" : ""}`}
        id="journey"
      >
        <article className="timeline-card">
          <div className="timeline-heading">
            <Award size={18} />
            <h3>Achievements</h3>
          </div>
          <ul className="timeline-list">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="timeline-card">
          <div className="timeline-heading">
            <Trophy size={18} />
            <h3>What I want to contribute</h3>
          </div>
          <ul className="timeline-list">
            <li>Reliable front-end implementation with attention to UI clarity and responsive behavior.</li>
            <li>Back-end and database support for practical features built with maintainability in mind.</li>
            <li>Curiosity for AI-enhanced workflows where they improve product value instead of adding noise.</li>
            <li>Strong ownership in student-team settings, with room to grow under experienced engineers.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
