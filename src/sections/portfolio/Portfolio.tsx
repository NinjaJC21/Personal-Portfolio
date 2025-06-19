import { portfolioItems } from '../../data/portfolio';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../sections/portfolio/portfolio.css';

export default function Portfolio() { 
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Portfolio</h2>
          <p className="portfolio-subtitle">My continuously growing work</p>
          <p className="portfolio-description">
            These are previews that I am able to supply for you to showcase what I can do for you, from basic to complex.
          </p>
          <p className="portfolio-description">
            With your blessing, if you’re happy with the outcome, I will ask if I am allowed to showcase on my personal website here.
          </p>
        </div>

        <div className="portfolio-carousel-wrapper">
          <Carousel
            showThumbs={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            interval={5000}
            showStatus={false}
            className="portfolio-carousel"
          >
            {portfolioItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="carousel-item-link"
              >
                <div className="carousel-item-bg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="carousel-image"
                  />
                  <p className="legend">{item.title}</p>
                </div>
              </a>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}