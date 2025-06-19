import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../../sections/contact/contact.css';
export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        budget: '',
    });
    const [status, setStatus] = useState('idle');
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('idle');
        try {
            const res = await fetch('/api/email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                setStatus('success');
                alert(data.message || 'Message sent!');
                setFormData({ name: '', email: '', message: '', budget: '' });
            }
            else {
                setStatus('error');
                alert(data.message || 'Something went wrong.');
            }
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '', budget: '' });
            }
            else {
                setStatus('error');
            }
        }
        catch (err) {
            console.error(err);
            setStatus('error');
        }
    };
    return (_jsx("section", { className: "section-contact", id: "contact", children: _jsxs("div", { className: "contact-wrapper", children: [_jsxs("div", { className: "contact-info", children: [_jsx("h2", { className: "contact-header", children: "Contact Me" }), _jsx("h3", { className: "contact-title", children: "Let's Work Together, Just Tell Me More!" }), _jsx("hr", { className: "contact-divider" }), _jsx("p", { className: "contact-desc", children: "I will be back into contact with you in less than 24 hours." }), _jsx("p", { className: "contact-note", children: "You can give a brief description of what you're looking for..." }), _jsxs("div", { className: "contact-method", children: [_jsx("div", { className: "contact-icon phone-icon", children: "\uD83D\uDCDE" }), _jsxs("div", { children: [_jsx("h4", { className: "contact-method-title", children: "01- Contact Via Phone" }), _jsx("p", { children: "Main Phone: +1 (810)-291-0764" })] })] }), _jsxs("div", { className: "contact-method", children: [_jsx("div", { className: "contact-icon email-icon", children: "\uD83D\uDCE7" }), _jsxs("div", { children: [_jsx("h4", { className: "contact-method-title", children: "02- Contact Via Gmail" }), _jsx("p", { children: "Work Email: Jaysprojects2025@gmail.com" }), _jsx("p", { children: "Main Email: Jaysprojects021@gmail.com" })] })] })] }), _jsxs("form", { onSubmit: handleSubmit, className: "contact-form", children: [_jsx("label", { htmlFor: "name", children: "Name and Surname" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true }), _jsx("label", { htmlFor: "email", children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true }), _jsx("label", { htmlFor: "budget", children: "Project Budget" }), _jsxs("select", { id: "budget", name: "budget", value: formData.budget, onChange: handleChange, required: true, children: [_jsx("option", { value: "", disabled: true, children: "Select a budget" }), _jsx("option", { value: "hourly", children: "Hourly Rate ($26)" }), _jsx("option", { value: "70-250", children: "$70\u2013250" }), _jsx("option", { value: "100-1k", children: "$100\u20131k" }), _jsx("option", { value: "2-5k", children: "$2k\u20135k" }), _jsx("option", { value: "10k-15k", children: "$10k\u201315k" })] }), _jsx("label", { htmlFor: "message", children: "About Your Job Request" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, placeholder: "I would like a web page that contains...", rows: 6, required: true }), _jsx("button", { type: "submit", className: "submit-button", children: "Start Now!" }), status === 'success' && _jsx("p", { className: "success-message", children: "Message sent successfully!" }), status === 'error' && _jsx("p", { className: "error-message", children: "Something went wrong. Please try again." })] })] }) }));
}
