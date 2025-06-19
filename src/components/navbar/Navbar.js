import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-scroll';
import './navbar.css';
const navItems = [
    'Home',
    'About',
    'Services',
    'Portfolio',
    'Tools',
    'Skills',
    'Contact'
];
export default function Navbar() {
    return (_jsx("nav", { className: "navbar", children: _jsxs("div", { className: "navbar-content", children: [_jsx("img", { src: "/src/assets/photos/JC_Logo.png", alt: "Jayden C Logo", className: "home-logo" }), _jsx("ul", { className: "nav-links", children: navItems.map((item) => (_jsx("li", { children: _jsx(Link, { to: item.toLowerCase(), spy: true, smooth: true, offset: -70, duration: 500, children: item }) }, item))) })] }) }));
}
