import React, { useEffect, useRef, useState } from "react";
import { Bot, ExternalLink, GraduationCap, Mail, Phone, Send, Users, X } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const PROFILE_CONTEXT = `
Name: Nimsara Aluthgedara
Role: Computer Science undergraduate (IIT), internship seeker in software engineering
Strongest Language: Java (most proficient)
Education:
- Informatics Institute of Technology (BSc Hons Computer Science, expected 2028)
- Lyceum International School (A/L IT A, Physics B, Mathematics B)
Key Projects:
- Linkara: AI-powered event management ecosystem (React, Node.js, PostgreSQL, collaborative filtering)
- Simple Java Shop Application
- Telegram Bot using LangChain and Groq
- Go RSS Aggregator Backend (REST API + PostgreSQL + background scraper)
Certifications:
- Microsoft Azure AI Fundamentals (2025)
- IT Certified Master Course (2025)
- Builder X AI Workshop (2025)
Leadership:
- Senior Prefect (2023-2024)
- Founder/Vice President, Astronomy Society
Contact:
- Phone: +94 70 632 1038
- Email: nimsararavindu123@gmail.com
- LinkedIn: linkedin.com/in/nimsara-aluthgedara-996138327
`;

const starterPrompts = [
  "What projects are featured here?",
  "Give a quick internship profile summary.",
  "Which technologies are used most?",
];

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
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I can help you explore this portfolio. Ask about projects, skills, education, or internship focus.",
    },
  ]);
  const [query, setQuery] = useState("");
  const [sending, setSending] = useState(false);
  const logRef = useRef(null);

  useEffect(() => {
    if (!logRef.current) return;
    logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, sending]);

  const askGemini = async (question) => {
    const prompt = `You are a public-facing portfolio assistant. Answer briefly and accurately using the provided context. Do not assume the visitor knows the owner personally. If data is missing, say it clearly.\n\nContext:\n${PROFILE_CONTEXT}\n\nQuestion: ${question}`;

    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      let errorMessage = `Assistant API ${response.status}`;
      try {
        const errorData = await response.json();
        const apiMessage = errorData?.error;
        if (apiMessage) errorMessage = `${errorMessage}: ${apiMessage}`;
      } catch {
        // keep default message when error body is not JSON
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data?.text || "I could not generate a response right now. Please try again.";
  };

  const handleSend = async (raw) => {
    const question = raw.trim();
    if (!question || sending) return;

    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setQuery("");
    setSending(true);

    try {
      const answer = await askGemini(question);
      setMessages((prev) => [...prev, { role: "assistant", text: answer }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `Gemini request failed. ${error?.message ?? "Please try again."}`,
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSend(query);
  };

  return (
    <>
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

    <div className="assistant-fab-wrap">
      {!assistantOpen && <div className="assistant-cloud">Know more?</div>}
      <button
        type="button"
        className="assistant-fab"
        aria-label="Open portfolio assistant"
        aria-expanded={assistantOpen}
        onClick={() => setAssistantOpen((prev) => !prev)}
      >
        <Bot size={18} />
      </button>
    </div>

    {assistantOpen && (
      <div className="chatbot-popup" role="dialog" aria-label="Portfolio assistant chat">
        <div className="chatbot-head">
          <div className="chatbot-title">
            <Bot size={18} />
            <h4>Portfolio Assistant</h4>
          </div>
          <button
            type="button"
            className="chatbot-close"
            aria-label="Close assistant"
            onClick={() => setAssistantOpen(false)}
          >
            <X size={16} />
          </button>
        </div>

        <div className="chatbot-prompts">
          {starterPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              className="chatbot-prompt"
              onClick={() => handleSend(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>

        <div ref={logRef} className="chatbot-log" role="log" aria-live="polite">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`chatbot-msg chatbot-msg-${message.role}`}>
              {message.text}
            </div>
          ))}
          {sending && (
            <div className="chatbot-msg chatbot-msg-assistant chatbot-msg-typing" aria-label="Assistant is typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        <form className="chatbot-form" onSubmit={onSubmit}>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ask about projects, skills, education..."
            disabled={sending}
          />
          <button type="submit" disabled={sending || !query.trim()}>
            <Send size={15} />
          </button>
        </form>
      </div>
    )}
    </>
  );
}
