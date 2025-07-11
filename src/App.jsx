import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import {Skills} from "./components/Skills/Skills";
import { Education } from "./components/Education/Education";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
