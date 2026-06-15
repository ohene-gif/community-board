import "./App.css";
import Card from "./Card";

function App() {
  const resources = [
    {
      title: "CodePath",
      description: "Technical courses and interview preparation.",
      link: "https://www.codepath.org",
    },
    {
      title: "LeetCode",
      description: "Practice coding interview problems.",
      link: "https://leetcode.com",
    },
    {
      title: "NeetCode",
      description: "Structured roadmap for DSA preparation.",
      link: "https://neetcode.io",
    },
    {
      title: "GitHub",
      description: "Host and manage software projects.",
      link: "https://github.com",
    },
    {
      title: "MDN Web Docs",
      description: "Comprehensive web development documentation.",
      link: "https://developer.mozilla.org",
    },
    {
      title: "freeCodeCamp",
      description: "Free coding curriculum and certifications.",
      link: "https://www.freecodecamp.org",
    },
    {
      title: "CS50",
      description: "Harvard's introduction to computer science.",
      link: "https://cs50.harvard.edu",
    },
    {
      title: "GeeksforGeeks",
      description: "Programming tutorials and interview prep.",
      link: "https://www.geeksforgeeks.org",
    },
    {
      title: "HackerRank",
      description: "Coding challenges and assessments.",
      link: "https://www.hackerrank.com",
    },
    {
      title: "Roadmap.sh",
      description: "Developer roadmaps and learning paths.",
      link: "https://roadmap.sh",
    },
  ];

  return (
    <div className="app">
      <h1>Software Engineering Learning Hub</h1>
      <p>Resources for aspiring software engineers.</p>

      <div className="card-grid">
        {resources.map((resource, index) => (
          <Card
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;