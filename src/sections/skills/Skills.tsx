import '../../sections/skills/skills.css';
import { useEffect, useRef, useState } from 'react';
import Thermometer from '../../assets/icons/thermometer.svg';
import ThermometerLow from '../../assets/icons/thermometer-low.svg';
import ThermometerHalf from '../../assets/icons/thermometer-half.svg';
import ThermometerThreeFours from '../../assets/icons/thermometer-threefours.svg';
import ThermometerHigh from '../../assets/icons/thermometer-high.svg';

const ideaSteps = [
  {
    icon: Thermometer,
    title: 'Idea List',
    desc: 'You let me know what type of project you’re looking to be done, from small details to colors to major details of animations wanted and details to be done.',
  },
  {
    icon: ThermometerLow,
    title: 'Communication',
    desc: 'We first chat via email to talk about projects and inquiries, I will take notes and we can get on a call via Zoom and go over contracts and get the projecting rolling.',
  },
  {
    icon: ThermometerHalf,
    title: 'Design',
    desc: 'From there, I will take the information that was given to me and with the dedicated timeframe in mind, I will begin the project process.',
  },
  {
    icon: ThermometerThreeFours,
    title: 'Development',
    desc: 'As I work through the project process, I will check in as often as needed and stay in open communication getting back into conversation with you ASAP.',
  },
  {
    icon: ThermometerHigh,
    title: 'Finalizations',
    desc: 'After all is said and done, we will meet back up via Zoom, and go over all necessaries, and if you are pleased with what was given then fantastic, if not then we can get you to a point where you are pleased.',
  },
];

const tabContent = {
  brief: 'I will understand what your project requires, and walk you through the timeline, costs, and deliverables of the work process.',
  research: 'I do personal research on your field and target audience, and offer suggestions to enhance the direction of your project.',
  design: 'Timelines vary depending on complexity—from 48 hours to 2–3 months. I’ll make sure we stay aligned along the way.',
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'brief' | 'research' | 'design'>('brief');
  const barRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fill');
          }
        });
      },
      { threshold: 0.4 }
    );

    barRefs.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-skills" id="skills">
      <div className="skills-container">
        {/* Left Column */}
        <div className="skills-left">
          <h2 className="skills-title">Skills</h2>
          <p className="skills-subhead">My Skills When Working Alongside Yourself</p>

          <div className="skills-tabs">
            <button
              className={`skills-tab ${activeTab === 'brief' ? 'active' : ''}`}
              onClick={() => setActiveTab('brief')}
            >
              Understanding Brief
            </button>
            <button
              className={`skills-tab ${activeTab === 'research' ? 'active' : ''}`}
              onClick={() => setActiveTab('research')}
            >
              Research
            </button>
            <button
              className={`skills-tab ${activeTab === 'design' ? 'active' : ''}`}
              onClick={() => setActiveTab('design')}
            >
              Design Process
            </button>
          </div>

          <p className="skills-tab-desc">{tabContent[activeTab]}</p>
        </div>

        {/* Right Column */}
        <div className="skills-right">
          <div className="thermo-column">
            {ideaSteps.map((step, index) => (
              <div className="skill-step" key={index}>
                <img src={step.icon} alt={step.title} className="thermo-icon" />
                <div>
                  <h3 className="thermo-title">{step.title}</h3>
                  <p className="thermo-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-bars">
            {[
              { name: 'Logo Design', value: 80 },
              { name: 'Development Skills', value: 95 },
              { name: 'Management', value: 95 },
              { name: 'Responsiveness', value: 83 },
            ].map((bar, idx) => (
              <div className="bar-wrapper" key={idx}>
                <div className="bar-labels">
                  <p className="bar-name">{bar.name}</p>
                  <p className="bar-value">{bar.value}%</p>
                </div>
                <div className="bar-bg">
                  <div
                    className="bar-fill"
                    ref={(el) => {
                      if (el) barRefs.current[idx] = el;
                    }}
                    style={{ ['--bar-width' as any]: `${bar.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
