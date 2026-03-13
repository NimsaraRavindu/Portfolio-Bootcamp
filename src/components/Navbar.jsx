import { useState } from "react";
import { Menu, X } from "lucide-react";
import profilePic from "../assets/prof pic.jpg";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#journey", label: "Journey" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="nav-bar">
        <a className="brand-block" href="#about" aria-label="Go to top of portfolio">
          <span className="brand-mark">
            <img src={profilePic} alt="Nimsara" className="brand-mark-img" />
          </span>
          <span>
            <strong>Nimsara Aluthgedara</strong>
            <small>Aspiring Developer</small>
          </span>
        </a>

        <div className="nav-links nav-links-desktop">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact">
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="mobile-menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={handleLinkClick}>
            Let&apos;s Talk
          </a>
        </div>
      ) : null}
    </header>
  );
}