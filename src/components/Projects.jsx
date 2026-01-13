export default function Projects() {
  const projects = [
    {
      name: "Digital PL",
      description: "A full-stack project that automates PL and outpass requests,enables multi-level approval from parents and wardens using QR-based PL cards for secure entry and exit tracking",
      github: "https://github.com/dhanadharsini/Digital_PL",
    },
    {
      name: "IDGenX",
      description: "A React-based application that automates ID card creation from Excel data, allowing bulk uploads and instant download of personalized ID cards in PDF/image format, streamlining distribution and reducing manual effort.",
      github: "https://github.com/dhanadharsini/IDCard_generator",
    },
    {
      name: "BANKIFY",
      description: "A full-stack banking web application with user management, fund transfers, deposits, withdrawals, and PDF statement downloads, providing a secure, responsive, and seamless digital banking experience.",
      github: "https://github.com/dhanadharsini/Bankify",
    }
  ];

  const miniProjects = [
    {
      name: "Portfolio Website",
      description: "A personal portfolio built using React to showcase projects and skills.",
      github: "https://github.com/dhanadharsini/Portfolio",
    },
    {
      name: "Quiz Project",
      description: "Simple Quiz management app built with React.",
      github: "https://github.com/dhanadharsini/Quiz_project",
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="blue">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Mini Projects Section */}
        <h2 className="blue" style={{ marginTop: "50px" }}>Mini Projects</h2>
        <div className="projects-grid">
          {miniProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
