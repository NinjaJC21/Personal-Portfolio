import '../../sections/about/about.css';
import WorkPhoto from '../../assets/photos/Work_photo.jpg';

export default function About() {
  return (
    <section className="section-about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Who You're Working With</h2>
          <p className="about-subtitle">Make Your Website the Most Outstanding</p>
          <blockquote className="about-quote">
            “Websites promote you 24/7 : I’m here to make that happen.”<br />
            <span className="about-quote-author">~ Jayden C</span>
          </blockquote>
        </div>

        <div className="about-description">
          <p>
            I am a website developer who has decided to take a stronger interest within helping more people out with creating good generated websites to help their company strive. I have experience in HTML, CSS, JavaScript, Logo Creation, and more.
          </p>
          <p>
            I very much so enjoy helping out people especially in something I enjoy doing. Your happiness is my motivation. I am a hard-worker, a problem-solver, a good communicator, very reliable, and worth having around for your company.
          </p>
        </div>

        <div className="about-profile">
          <div className="profile-left"> 
            <div className="profile-image">
            <img src={WorkPhoto} alt="Developer profile" className="profile-img" />
              <div className="profile-caption">
                <p className="caption-title">Website Designer</p>
                <p className="caption-subtext">Having expertise in HTML, CSS, SCSS, JS, and more</p>
              </div>
            </div>
          </div>

          <div className="profile-right">
            <div className="profile-block">
              <h3 className="heading-teal">Past - Present</h3>
              <ul className="text-light">
                <li>I like to be creative with my time, I have drawing skills and computer skills.</li>
                <li>I tend to find my purpose to be to help out and give back to others as it brings me happiness.</li>
                <li>As the technology industry is beginning to get more used, I believe that taking the interest that I have within website creating is the best move for myself and for my young one that I can make.</li>
              </ul>
            </div>

            <div className="profile-block">
              <h3 className="heading-purple">2019 - Present</h3>
              <ul className="text-light">
                <li>In 2018, I had created my own company and my own company website done by myself.</li>
                <li>In 2021, I had created a clothing website that I check up on from time to time for a family business.</li>
                <li>In 2024, I started to take up an interest in learning more about websites and the creation that goes into them.</li>
                <li>Currently in 2025, I have taken more of a deeper journey into creating and helping out others with improving or starting their company website off.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
