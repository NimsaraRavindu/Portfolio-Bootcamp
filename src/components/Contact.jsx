import React from "react";
import { ExternalLink, GraduationCap, Mail, Phone, Users } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const education = [
  {
    place: "Informatics Institute of Technology (IIT)",
    detail: "BSc (Hons) in Computer Science",
    meta: "2024 - Present | Expected Graduation: 2028",
  },
  {
    place: "Lyceum International School, Nugegoda",
    detail: "Pearson Edexcel GCE Advanced Level: Information Technology (A), Physics (B), Mathematics (B)",
    meta: "2024",
  },
  {
    place: "Lyceum International School, Nugegoda",
    detail: "Cambridge GCE Ordinary Level: 7 A* results",
    meta: "2022",
  },
];

const leadership = [
  { text: "Senior Prefect at Lyceum International School (2023 - 2024)" },
  { text: "Founder and Vice President of the Astronomy Society (2023 - 2024)" },
  {
    text: "Site visit to the NASA-led Wasgamuwa Multinational Research Facility — Astronomical Society of Lyceum Nugegoda",
    href: "https://edu.dailymirror.lk/articles/news/1248/ASTRONOMICAL-SOCIETY-OF-LYCEUM-NUGEGODA-SITE-VISIT-TO-THE-NASA-LED-WASGAMUWA-MULTINATIONAL-RESEARCH-FACILITY",
  },
  { text: "Member of the ICT Society and active participant in inter-school IT competitions" },
];

const contactItems = [
  { icon: Phone, label: "Phone", value: "+94 70 632 1038", href: "tel:+94706321038" },
  {
    icon: Mail,
    label: "Email",
    value: "nimsararavindu123@gmail.com",
    href: "mailto:nimsararavindu123@gmail.com",
  },
];

export default function Contact() {
  const [headingRef, headingVisible] = useReveal();
  const [layoutRef, layoutVisible] = useReveal();

  return (
    <section className="section-shell" id="contact">
      <div
        ref={headingRef}
        className={`section-heading reveal-block reveal-up${headingVisible ? " revealed" : ""}`}
      >
        <p className="eyebrow">Journey and Contact</p>
        <h2>Education, leadership, and how to reach me</h2>
        <p>
          I am looking for software development internship opportunities where I can contribute,
          learn quickly, and grow through real engineering work.
        </p>
      </div>

      <div
        ref={layoutRef}
        className={`contact-layout reveal-block reveal-up${layoutVisible ? " revealed" : ""}`}
      >
        <article className="timeline-card">
          <div className="timeline-heading">
            <GraduationCap size={18} />
            <h3>Education</h3>
          </div>

          <div className="education-list">
            {education.map((item) => (
              <div key={`${item.place}-${item.meta}`} className="education-item">
                <h4>{item.place}</h4>
                <p>{item.detail}</p>
                <span>{item.meta}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="timeline-card">
          <div className="timeline-heading">
            <Users size={18} />
            <h3>Leadership and Teamwork</h3>
          </div>
          <ul className="timeline-list">
            {leadership.map((item) =>
              item.href ? (
                <li key={item.text}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="leadership-link"
                  >
                    {item.text}
                    <ExternalLink size={13} />
                  </a>
                </li>
              ) : (
                <li key={item.text}>{item.text}</li>
              )
            )}
          </ul>

          <div className="reference-note">
            <p>References are available upon request.</p>
          </div>
        </article>

        <aside className="contact-panel">
          <p className="eyebrow">Direct Contact</p>
          <h3>Start a conversation</h3>
          <p>
            If you have an internship opening, a collaborative project, or a role where I can add
            value, I would be glad to connect.
          </p>

          <div className="contact-list">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  className="contact-card"
                  href={item.href}
                >
                  <Icon size={18} />
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.value}</small>
                  </span>
                </a>
              );
            })}
          </div>

          <a className="primary-button contact-button" href="mailto:nimsararavindu123@gmail.com?subject=Internship Opportunity">
            Contact for Opportunities
          </a>
        </aside>
      </div>
    </section>
  );
}
