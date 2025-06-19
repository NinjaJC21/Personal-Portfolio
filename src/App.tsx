import { Element } from 'react-scroll';
import Navbar from "./components/navbar/Navbar";
import BackToTopButton from "./components/backtotopbutton/BackToTopButton";
import Home from './sections/home/Home';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Tools from './sections/tools/Tools';
import Skills from './sections/skills/Skills';
import Contact from './sections/contact/Contact';
import '../src/styles/mytheme.css';
// Adjust path as needed

function App() {
  return (
    <div>
      <div className="relative z-10">
        <Navbar />
        <Element name="home"><Home /></Element>
        <Element name="about"><About /></Element>
        <Element name="services"><Services /></Element>
        <Element name="portfolio">
          <div className="overflow-hidden group relative max-h-[400px]">
            <div className="group-hover:animate-scroll-portfolio transition-transform duration-500 max-h-[400px] overflow-y-scroll hover:scroll-auto scrollbar-thin scrollbar-thumb-purple-500">
              <Portfolio />
            </div>
          </div>
        </Element>
        <Element name="tools"><Tools /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="contact"><Contact /></Element>
        <BackToTopButton />
      </div>
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
    </div>
  );
}

export default App;