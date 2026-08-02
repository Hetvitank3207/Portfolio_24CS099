import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px"
      }}
    >

      <Header name="Hetvi Taank" />

      <button
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle Theme
      </button>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />

    </div>

  );
}

export default App;