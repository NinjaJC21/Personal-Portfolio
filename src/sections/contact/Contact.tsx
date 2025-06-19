import { useState } from 'react';
import '../../sections/contact/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      } else {
        setStatus('error');
        alert(data.message || 'Something went wrong.');
      }
  
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', budget: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };
    
  return (
    <section className="section-contact" id="contact">
      <div className="contact-wrapper">
        {/* Contact info (left side) */}
        <div className="contact-info">
          <h2 className="contact-header">Contact Me</h2>
          <h3 className="contact-title">Let's Work Together, Just Tell Me More!</h3>
          <hr className="contact-divider" />
          <p className="contact-desc">I will be back into contact with you in less than 24 hours.</p>
          <p className="contact-note">You can give a brief description of what you're looking for...</p>
          {/* Phone/Email */}
          <div className="contact-method">
            <div className="contact-icon phone-icon">📞</div>
            <div>
              <h4 className="contact-method-title">01- Contact Via Phone</h4>
              <p>Main Phone: +1 (810)-291-0764</p>
            </div>
          </div>
          <div className="contact-method">
            <div className="contact-icon email-icon">📧</div>
            <div>
              <h4 className="contact-method-title">02- Contact Via Gmail</h4>
              <p>Work Email: Jaysprojects2025@gmail.com</p>
              <p>Main Email: Jaysprojects021@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact form (right side) */}
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name and Surname</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="budget">Project Budget</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a budget</option>
            <option value="hourly">Hourly Rate ($26)</option>
            <option value="70-250">$70–250</option>
            <option value="100-1k">$100–1k</option>
            <option value="2-5k">$2k–5k</option>
            <option value="10k-15k">$10k–15k</option>
          </select>

          <label htmlFor="message">About Your Job Request</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="I would like a web page that contains..."
            rows={6}
            required
          />

          <button type="submit" className="submit-button">Start Now!</button>
          {status === 'success' && <p className="success-message">Message sent successfully!</p>}
          {status === 'error' && <p className="error-message">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}
