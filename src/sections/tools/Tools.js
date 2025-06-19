import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../sections/tools/tools.css';
const tools = [
    {
        image: "/src/assets/photos/google_logo.webp",
        name: "Google",
        description: "Main source for contacting and emailing and getting the project prompts together",
    },
    {
        image: "/src/assets/photos/vscode_logo.png",
        name: "VS Code",
        description: "Where the coding is done for the projects i.e. my HTML, CSS, JS, and more",
    },
    {
        image: "/src/assets/photos/zoom_logo.webp",
        name: "Zoom",
        description: "Where we can take one on one calls and discuss via video interface",
    },
    {
        image: "/src/assets/photos/wp_logo.webp",
        name: "WordPress",
        description: "Where websites are completed and sent to you for you to have for yourself/ your company",
    },
    {
        image: "/src/assets/photos/logo_logo.webp",
        name: "Logo",
        description: "Where if you cannot supply me with your own logo no worries! I can happily make your logo for you, send in a couple options and you choose!",
    },
];
export default function Tools() {
    return (_jsx("section", { className: "section-tools", id: "tools", children: _jsxs("div", { className: "tools-container", children: [_jsxs("div", { className: "tools-header", children: [_jsx("h2", { className: "heading-teal", children: "Tools" }), _jsx("p", { className: "text-light", children: "Technologies and platforms I use to deliver quality work." })] }), _jsx("div", { className: "tools-grid", children: tools.map((tool, index) => (_jsxs("div", { className: "tool-card", children: [_jsx("img", { src: tool.image, alt: `${tool.name} logo`, className: "tool-image" }), _jsx("h3", { className: "tool-name", children: tool.name }), _jsx("p", { className: "tool-description", children: tool.description })] }, index))) })] }) }));
}
