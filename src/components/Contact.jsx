export default function Contact() {
  const contacts = [
    { label: "GitHub", link: "https://github.com/dhanadharsini" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/dhana-dharsini-s-528184291/" },
    { label: "GFG", link: "https://www.geeksforgeeks.org/profile/dhanadhavzqj?tab=activity" },
    { label: "LeetCode", link: "https://leetcode.com/u/Dhanadharsini/" },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="blue">Contact</h2>
        <p>Let’s connect and build something great.</p>
        <div className="contact-buttons">
          {contacts.map((item, index) => (
            <button
              key={index}
              className="contact-btn"
              onClick={() => window.open(item.link, "_blank")}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
