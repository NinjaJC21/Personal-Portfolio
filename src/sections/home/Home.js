import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TypeAnimation } from 'react-type-animation';
import '../../sections/home/home.css';
import bgUpper from '../../assets/photos/bg_upper.png';
export default function Home() {
    return (_jsxs("section", { className: "home-section", id: "home", children: [_jsxs("div", { className: "home-content", children: [_jsx("h1", { className: "home-title", children: "Hi, I'm Jayden C" }), _jsx(TypeAnimation, { sequence: [
                            'Developer', 2000,
                            'Hard Worker', 2000,
                            'Web Designer', 2000
                        ], wrapper: "span", speed: 50, className: "home-typed", repeat: Infinity }), _jsxs("blockquote", { className: "home-quote", children: ["\u201CThere are three responses to a piece of a design \u2013 Yes, No, and Wow!", _jsx("br", {}), "Wow is the one I aim for.\u201D", _jsx("br", {}), _jsx("span", { className: "home-quote-author", children: "~ Milton Glaser" })] })] }), _jsx("div", { className: "bgUpper-wrapper", children: _jsx("img", { src: bgUpper, alt: "Jayden C slogan", className: "bgUpper" }) })] }));
}
