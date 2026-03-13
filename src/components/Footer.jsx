import React from "react";
import { Linkedin, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h3>Nimsara Aluthgedara</h3>
          <p>Aspiring Developer seeking software development internship opportunities.</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <a href="tel:+94706321038">
            <Phone size={16} />
            <span>+94 70 632 1038</span>
          </a>
          <a href="mailto:nimsararavindu123@gmail.com">
            <Mail size={16} />
            <span>nimsararavindu123@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/nimsara-aluthgedara-996138327" target="_blank" rel="noreferrer" className="footer-linkedin">
            <Linkedin size={16} />
            <span>linkedin.com/in/nimsara-aluthgedara</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Designed to present education, project work, and leadership highlights in one place.</p>
      </div>
    </footer>
  );
}

export default Footer;