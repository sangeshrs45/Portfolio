import "./Aboskill.css"
import html from "./assets/html.png"
import css from "./assets/css.png"
import react from "./assets/react.png"

function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <span className="number">1</span>
          <div><img src={html} alt="HTML" /></div>
          <button>HTML</button>
        </div>
        <div className="skill-card">
          <span className="number">2</span>
          <div><img src={css} alt="CSS" /></div>
          <button>CSS</button>
        </div>
        <div className="skill-card">
          <span className="number">3</span>
          <div><img src={react} alt="JavaScript" /></div>
          <button>JavaScript</button>
        </div>
        <div className="skill-card">
          <span className="number">4</span>
          <div><img src={react} alt="React JS" /></div>
          <button>React JS</button>
        </div>
        <div className="skill-card">
          <span className="number">5</span>
          <div><img src={html} alt="Node JS" /></div>
          <button>Node JS</button>
        </div>
        <div className="skill-card">
          <span className="number">6</span>
          <div><img src={css} alt="Java" /></div>
          <button>Java</button>
        </div>
      </div>
    </section>
  );
}

export default Skills;
