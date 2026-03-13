import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, BriefcaseBusiness, Download, Linkedin, Mail, Phone } from "lucide-react";
import profilePic from "../assets/prof pic.jpg";
import cvFile from "../assets/canva cv.pdf";
import { useReveal } from "../hooks/useReveal";

const TITLES = [
  "Full-Stack Developer",
  "AI Enthusiast",
  "Internship Ready",
  "Problem Solver",
];

function TypedSubtitle() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const full = TITLES[titleIdx];
    if (!deleting && displayed.length < full.length) {
      timeout.current = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === full.length) {
      timeout.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, titleIdx]);

  return (
    <span className="typed-subtitle">
      {displayed}
      <span className="typed-cursor" aria-hidden="true">|</span>
    </span>
  );
}

function AnimatedCount({ to }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(to / 30);
    const id = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(id); }
      else setCount(start);
    }, 35);
    return () => clearInterval(id);
  }, [visible, to]);
  return <strong ref={ref}>{count}</strong>;
}

const strengths = [
  {
    title: "Internship Ready",
    text: "Production-minded thinking, clean problem solving, and team-first delivery.",
  },
  {
    title: "AI + Full-Stack",
    text: "React, Node.js, PostgreSQL, LangChain, Groq LLM, Java, Python — in real builds.",
  },
  {
    title: "Leadership",
    text: "Prefect, society founder, competition medalist — discipline built outside the IDE.",
  },
];

const quickFacts = [
  { label: "Phone", value: "+94 70 632 1038", href: "tel:+94706321038", icon: Phone },
  {
    label: "Email",
    value: "nimsararavindu123@gmail.com",
    href: "mailto:nimsararavindu123@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "nimsara-aluthgedara",
    href: "https://www.linkedin.com/in/nimsara-aluthgedara-996138327",
    icon: Linkedin,
    external: true,
  },
];

function About() {
  const [heroRef, heroVisible] = useReveal();
  const [cardRef, cardVisible] = useReveal();
  const [featureRef, featureVisible] = useReveal();

  return (
    <section className="hero-section section-shell" id="about">
      <div
        ref={heroRef}
        className={`hero-grid reveal-block${heroVisible ? " revealed" : ""}`}
      >
        <div className="hero-copy">
          <h1>
            <span className="gradient-name">Nimsara Aluthgedara</span>
            <TypedSubtitle />
          </h1>
          <p className="hero-text">
            CS undergraduate at IIT seeking an internship to ship real software alongside experienced engineers.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              className="secondary-button"
              href={cvFile}
              download="Nimsara_Aluthgedara_CV.pdf"
            >
              <Download size={18} />
              Download CV
            </a>
            <a className="secondary-button" href="mailto:nimsararavindu123@gmail.com">
              Email Me
            </a>
          </div>

          <div className="contact-strip">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;

              return (
                <a key={fact.label} className="contact-chip" href={fact.href} target={fact.external ? "_blank" : undefined} rel={fact.external ? "noreferrer" : undefined}>
                  <Icon size={18} />
                  <span>
                    <strong>{fact.label}</strong>
                    <small>{fact.value}</small>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <aside className="hero-panel">
          <div className="profile-photo-card">
            <div className="profile-avatar-wrap">
              <img
                src={profilePic}
                alt="Nimsara Aluthgedara"
                className="profile-avatar"
                width="96"
                height="96"
              />
              <span className="profile-verified" title="Verified">
                ✓
              </span>
            </div>
            <div className="profile-photo-info">
              <strong>Nimsara Aluthgedara</strong>
              <span>Full Stack &amp; AI Developer</span>
            </div>
          </div>

          <div className="status-card">
            <p>Currently seeking</p>
            <h2>Software engineering internship — full-stack or AI focus</h2>
          </div>

          <div className="metric-grid">
            <div>
              <AnimatedCount to={2028} />
              <span>BSc graduation</span>
            </div>
            <div>
              <AnimatedCount to={4} />
              <span>Key projects</span>
            </div>
            <div>
              <AnimatedCount to={3} />
              <span>Certifications</span>
            </div>
            <div>
              <AnimatedCount to={2} />
              <span>Spoken languages</span>
            </div>
          </div>

          <div className="profile-note">
            <BriefcaseBusiness size={18} />
            <p>Open to roles where I can contribute fast, learn faster, and ship things that matter.</p>
          </div>
        </aside>
      </div>

      <div
        ref={cardRef}
        className={`section-card profile-card reveal-block reveal-up${cardVisible ? " revealed" : ""}`}
      >
        <div>
          <p className="eyebrow">About Me</p>
          <h2>The story so far</h2>
        </div>
        <p>
          IIT student, AI tinkerer, former Senior Prefect. I build full-stack products, experiment with LLMs, and lead when it counts. Looking for a team where I can close the gap between student and engineer.
        </p>
      </div>

      <div
        ref={featureRef}
        className={`feature-grid reveal-block reveal-up${featureVisible ? " revealed" : ""}`}
      >
        {strengths.map((item, i) => (
          <article
            key={item.title}
            className="feature-card stagger-child"
            style={{ "--stagger": i }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export default About;
