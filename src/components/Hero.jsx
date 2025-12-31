import img from "../assets/dd.jpeg";
import resume from "../assets/resume.pdf";
import "../styles/hero.css"


export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="small">ASPIRING SOFTWARE ENGINEER</p>
          <h1>
            Dhana <span className="blue">Dharsini S</span>
          </h1>
          <p className="role">MERN Stack Developer • DSA Enthusiast</p>
          <p className="desc">
            A passionate and dedicated software developer with strong foundation in algorithms and
problem-solving. Continuously exploring emerging technologies to expand my technical
expertise.Driven by a growth mindset and a desire to build efficient, scalable solutions.

          </p>
          <div className="hero-buttons">
  <a href={resume} target="_blank" rel="noopener noreferrer">
    <button className="primary">Resume</button>
  </a>
</div>

        </div>

        <img src={img} alt="Profile" />
      </div>
    </section>
  );
}
