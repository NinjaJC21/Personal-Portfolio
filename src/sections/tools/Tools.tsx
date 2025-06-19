import '../../sections/tools/tools.css';

const tools = [
  {
    image: "/src/assets/photos/google_logo.webp",
    name: "Google",
    description:
      "Main source for contacting and emailing and getting the project prompts together",
  },
  {
    image: "/src/assets/photos/vscode_logo.png",
    name: "VS Code",
    description:
      "Where the coding is done for the projects i.e. my HTML, CSS, JS, and more",
  },
  {
    image: "/src/assets/photos/zoom_logo.webp",
    name: "Zoom",
    description:
      "Where we can take one on one calls and discuss via video interface",
  },
  {
    image: "/src/assets/photos/wp_logo.webp",
    name: "WordPress",
    description:
      "Where websites are completed and sent to you for you to have for yourself/ your company",
  },
  {
    image: "/src/assets/photos/logo_logo.webp",
    name: "Logo",
    description:
      "Where if you cannot supply me with your own logo no worries! I can happily make your logo for you, send in a couple options and you choose!",
  },
];

export default function Tools() {
  return (
    <section className="section-tools" id="tools">
      <div className="tools-container">
        <div className="tools-header">
          <h2 className="heading-teal">Tools</h2>
          <p className="text-light">
            Technologies and platforms I use to deliver quality work.
          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <img
                src={tool.image}
                alt={`${tool.name} logo`}
                className="tool-image"
              />
              <h3 className="tool-name">{tool.name}</h3>
              <p className="tool-description">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

