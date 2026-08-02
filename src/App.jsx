import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git"
  ];

  return (
    <div>

      <Header
        name="Hetvi Taank"
        color="lightblue"
      />

      <Navbar />

      <About />

      <Skills
        skillList={skills}
      />

      <Projects />

      <Footer
        email="hetvi@example.com"
      />

    </div>
  );
}

export default App;