import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GitHubSection } from "./components/GitHubSection";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
