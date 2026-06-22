import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import BlogPySpark from "./components/BlogPySpark.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Certifications from "./components/Certifications.jsx";
import Education from "./components/Education.jsx";
import Achievements from "./components/Achievements.jsx";
import GitHubStats from "./components/GitHubStats.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import MedallionArchitecture from "./components/MedallionArchitecture";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog/pyspark-tips" element={<BlogPySpark />} />
        <Route path="/" element={<>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <MedallionArchitecture />
        <Certifications />
        <Education />
        <Achievements />
        <GitHubStats />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>} />
      </Routes>
    </BrowserRouter>
  );
}
