import Navbar from "./components/Navbar.jsx";
import About from "./components/About";
import Skill from "./components/Skills.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}