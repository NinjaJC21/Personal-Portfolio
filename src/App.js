import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx
import './App.css';
import Contact from './sections/contact/Contact';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
export default function App() {
    return (_jsxs(_Fragment, { children: [_jsx(About, {}), _jsx(Portfolio, {}), _jsx(Contact, {})] }));
}
