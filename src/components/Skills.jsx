export default function Skills() {
  const skills = [
    "MERN",
    "React",
    "Java",
    "Python",
    "Node.js",
    "MongoDB",
    "MySQL",
    "JDBC",
    "PHP",
    "DSA",
    "HTML",
    "CSS",
    "JavaScript",
    "Express.js",
    "PostMan",
    "GitHub",
    "Git"
  ];

  return (
    <section id="skills">
      <div className="container skills">
        <h2 className="blue">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
