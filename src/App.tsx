// src/App.tsx
import './App.css';
import Contact from './sections/contact/Contact';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Home from './sections/home/Home';
import Skills from './sections/skills/Skills';
import Services from './sections/services/Services';

export default function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}
