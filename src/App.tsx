// src/App.tsx
import './App.css';
import Contact from './sections/contact/Contact';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';

export default function App() {
  return (
    <>
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
