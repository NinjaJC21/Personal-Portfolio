import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const [activeTab, setActiveTab] = useState('brief');
    const barRefs = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fill');
                }
            });
        }, { threshold: 0.4 });
        barRefs.current.forEach((bar) => {
            if (bar)
                observer.observe(bar);
        });
        return () => observer.disconnect();
    }, []);
    return (_jsx("section", { className: "section-skills", id: "skills", children: _jsxs("div", { className: "skills-container", children: [_jsxs("div", { className: "skills-left", children: [_jsx("h2", { className: "skills-title", children: "Skills" }), _jsx("p", { className: "skills-subhead", children: "My Skills When Working Alongside Yourself" }), _jsxs("div", { className: "skills-tabs", children: [_jsx("button", { className: `skills-tab ${activeTab === 'brief' ? 'active' : ''}`, onClick: () => setActiveTab('brief'), children: "Understanding Brief" }), _jsx("button", { className: `skills-tab ${activeTab === 'research' ? 'active' : ''}`, onClick: () => setActiveTab('research'), children: "Research" }), _jsx("button", { className: `skills-tab ${activeTab === 'design' ? 'active' : ''}`, onClick: () => setActiveTab('design'), children: "Design Process" })] }), _jsx("p", { className: "skills-tab-desc", children: tabContent[activeTab] })] }), _jsxs("div", { className: "skills-right", children: [_jsx("div", { className: "thermo-column", children: ideaSteps.map((step, index) => (_jsxs("div", { className: "skill-step", children: [_jsx("img", { src: step.icon, alt: step.title, className: "thermo-icon" }), _jsxs("div", { children: [_jsx("h3", { className: "thermo-title", children: step.title }), _jsx("p", { className: "thermo-desc", children: step.desc })] })] }, index))) }), _jsx("div", { className: "skills-bars", children: [
                                { name: 'Logo Design', value: 80 },
                                { name: 'Development Skills', value: 95 },
                                { name: 'Management', value: 95 },
                                { name: 'Responsiveness', value: 83 },
                            ].map((bar, idx) => (_jsxs("div", { className: "bar-wrapper", children: [_jsxs("div", { className: "bar-labels", children: [_jsx("p", { className: "bar-name", children: bar.name }), _jsxs("p", { className: "bar-value", children: [bar.value, "%"] })] }), _jsx("div", { className: "bar-bg", children: _jsx("div", { className: "bar-fill", ref: (el) => {
                                                if (el)
                                                    barRefs.current[idx] = el;
                                            }, style: { ['--bar-width']: `${bar.value}%` } }) })] }, idx))) })] })] }) }));
}
