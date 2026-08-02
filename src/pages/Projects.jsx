function Projects() {
   console.log("Projects loaded");

  const projectList = [
    "Student Portfolio",
    "Weather App",
    "Library Management"
  ];

  return (
    <div>

      <h2>Projects</h2>

      <ul>
        {projectList.map(project => (
          <li key={project}>{project}</li>
        ))}
      </ul>

    </div>
  );
}

export default Projects;