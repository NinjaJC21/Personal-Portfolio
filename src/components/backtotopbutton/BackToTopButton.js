import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import './backtotopbutton.css';
export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (_jsx("div", { className: "scroll-to-top-container", children: _jsx("button", { onClick: scrollToTop, className: `scroll-to-top-button ${visible ? 'visible' : 'hidden'}`, "aria-label": "Back to top", children: _jsx(ArrowUp, { size: 20 }) }) }));
}
