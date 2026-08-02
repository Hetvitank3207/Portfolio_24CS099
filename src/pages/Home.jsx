function Home() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git"
  ];

  return (
    <div>

      <h2>About Me</h2>

      <p>
        I am a Computer Science student interested in React
        and Full Stack Development.
      </p>

      <h2>Skills</h2>

      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

    </div>
  );
}

export default Home;