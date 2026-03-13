import { useReveal } from "../hooks/useReveal";

const technicalSkills = [
  "React",
  "JavaScript",
  "Node.js",
  "Python",
  "Java",
  "SQL",
  "HTML",
  "CSS",
  "PostgreSQL",
  "LangChain",
];

const tools = [
  "VS Code",
  "IntelliJ IDEA",
  "Google Colab",
  "ClickUp",
  "MySQL Workbench",
  "Git",
  "Figma",
  "Google AI Studio",
];

const certifications = [
  "Microsoft Azure AI Fundamentals - Microsoft (2025)",
  "Completed 8-month Java Course - ICET (2025)",
  "Builder X AI Workshop - ICET and the Ministry of AI (2025)",
];

const languages = ["English - Fluent", "Sinhala - Native"];

const strengths = [
  "Problem solving",
  "Team collaboration",
  "Leadership",
  "Event coordination",
  "Continuous learning",
  "Adaptability",
];

function ListBlock({ title, items, accent }) {
  return (
    <article className="stack-card">
      <div className="stack-header">
        <p className="eyebrow">{accent}</p>
        <h3>{title}</h3>
      </div>
      <div className="pill-list">
        {items.map((item) => (
          <span key={item} className="skill-pill">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Skill() {
  const [headingRef, headingVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  return (
    <section className="section-shell" id="skills">
      <div
        ref={headingRef}
        className={`section-heading reveal-block reveal-up${headingVisible ? " revealed" : ""}`}
      >
        <p className="eyebrow">Capabilities</p>
        <h2>Skills, tools, certifications, and communication</h2>
        <p>
          A concise view of the technologies I use, the platforms I work with, and the strengths I
          bring into project environments.
        </p>
      </div>

      <div
        ref={gridRef}
        className={`stack-grid reveal-block reveal-up${gridVisible ? " revealed" : ""}`}
      >
        <ListBlock title="Technical Stack" items={technicalSkills} accent="Core Technologies" />
        <ListBlock title="Tools and Workflow" items={tools} accent="Delivery Toolkit" />
        <ListBlock title="Certifications" items={certifications} accent="Formal Learning" />
        <ListBlock title="Spoken Languages and Strengths" items={[...languages, ...strengths]} accent="Communication" />
      </div>
    </section>
  );
}