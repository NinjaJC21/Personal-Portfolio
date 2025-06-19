import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { className: "section-services", id: "services", children: _jsxs("div", { className: "services-container", children: [_jsxs("div", { className: "services-header", children: [_jsx("h2", { className: "services-title", children: "Services" }), _jsx("p", { className: "services-subtitle", children: "What I Provide" }), _jsx("p", { className: "services-description", children: "As mentioned, I am a web designer and that ranges quite far. My other expertises lie within Microsoft (Excel, Word, PowerPoint) as well as Logo designing. Whatever you need \u2013 from minor fixes to big well-done jobs I am that person for the company." }), _jsx("p", { className: "services-description", children: "I take my job and my clients seriously and am imperative to make sure everything is to your liking. I will be as open as can be and will run ideas and thoughts that I have that will make your company strive by yourself with the okay to do so." }), _jsxs("blockquote", { className: "services-quote", children: ["\u201CTo listen closely and reply well, is the highest perfection we are able to attain through art of conversation\u201D", _jsx("br", {}), _jsx("span", { className: "services-quote-author", children: "~ Francois VI, duc de la Rochefoucauld" })] })] }), _jsx("div", { className: "services-grid", children: services.map((item, index) => (_jsx("div", { className: "service-card", children: _jsxs("div", { className: "card-inner", children: [_jsxs("div", { className: "card-front", children: [_jsx("h3", { className: "card-title", children: item.title }), _jsx("p", { className: "card-desc", children: item.desc })] }), _jsxs("div", { className: "card-back", children: [_jsx("h4", { className: "card-defined-title", children: "Defined" }), _jsx("p", { className: "card-defined-text", children: item.defined })] })] }) }, index))) })] }) }));
}
