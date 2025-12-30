export default function Education() {
  const education = [
    {
      level: "College",
      degree: "B.Tech (Information Technology)",
      institute: "Government College of Technology",
      year: "2023-2027",
      cgpa: "9.07/10",
    }
  ];

  return (
    <section id="education">
      <div className="container">
        <h2 className="blue">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3>{edu.degree}</h3>
              <p>
                <strong>Institute:</strong> {edu.institute}
              </p>
              <p>
                <strong>Year:</strong> {edu.year}
              </p>
              {edu.cgpa && (
                <p>
                  <strong>CGPA:</strong> {edu.cgpa}
                </p>
              )}
              {edu.grade && (
                <p>
                  <strong>Grade:</strong> {edu.grade}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
