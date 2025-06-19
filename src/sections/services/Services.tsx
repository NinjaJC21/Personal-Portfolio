import '../../sections/services/services.css';

export default function Services() {
  const services = [
    {
      title: 'Web Design',
      desc: 'This is the final product that is produced after working with me, the main goal so to speak that will have you feeling fulfilled and happy.',
      defined: 'A person who specializes in creating the visual aspects of websites, focusing on the layout, user interface, and overall aesthetic appeal.',
      color: 'purple'
    },
    {
      title: 'Logo Design',
      desc: 'If you don’t have a logo that is OK! I am more than welcome to help you create one that satisfies yourself to add into our creation.',
      defined: 'A person who specializes in creating visually appealing logos that represent a brand, business, or organization.',
      color: 'gold'
    },
    {
      title: 'Information',
      desc: 'This is within the first steps of us working together, where you tell me the exacts of what you’re looking for (i.e. the colors, links, fonts, etc..)',
      defined: 'All the information, in whatever format, that is used to create, communicate, and begin a project from its idea point.',
      color: 'purple'
    },
    {
      title: 'Responsiveness',
      desc: 'I will always test websites as I’m creating to make sure it runs smoothly along all possibly mobile devices so your customers are satisfied.',
      defined: 'To provide an optimal viewing experience that facilitates reading and navigation regardless of the device used, including computers, tablets, and smartphones.',
      color: 'gold'
    }
  ];

  return (
    <section className="section-services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Services</h2>
          <p className="services-subtitle">What I Provide</p>
          <p className="services-description">
            As mentioned, I am a web designer and that ranges quite far. My other expertises lie within Microsoft (Excel, Word, PowerPoint) as well as Logo designing. Whatever you need – from minor fixes to big well-done jobs I am that person for the company.
          </p>
          <p className="services-description">
            I take my job and my clients seriously and am imperative to make sure everything is to your liking. I will be as open as can be and will run ideas and thoughts that I have that will make your company strive by yourself with the okay to do so.
          </p>
          <blockquote className="services-quote">
            “To listen closely and reply well, is the highest perfection we are able to attain through art of conversation”<br />
            <span className="services-quote-author">~ Francois VI, duc de la Rochefoucauld</span>
          </blockquote>
        </div>

        <div className="services-grid">
          {services.map((item, index) => (
            <div key={index} className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                </div>
                <div className="card-back">
                  <h4 className="card-defined-title">Defined</h4>
                  <p className="card-defined-text">{item.defined}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
