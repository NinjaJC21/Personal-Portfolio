import { TypeAnimation } from 'react-type-animation';
import '../../sections/home/home.css';
import bgUpper from '../../assets/photos/bg_upper.png';

export default function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h1 className="home-title">Hi, I'm Jayden C</h1>
        <TypeAnimation
          sequence={[
            'Developer', 2000,
            'Hard Worker', 2000,
            'Web Designer', 2000
          ]}
          wrapper="span"
          speed={50}
          className="home-typed"
          repeat={Infinity}
        />
        <blockquote className="home-quote">
          “There are three responses to a piece of a design – Yes, No, and Wow!<br />
          Wow is the one I aim for.”<br />
          <span className="home-quote-author">~ Milton Glaser</span>
        </blockquote>
      </div>
      <div className="bgUpper-wrapper">
        <img src={bgUpper} alt="Jayden C slogan" className="bgUpper" />
      </div>
    </section>
  );
}
