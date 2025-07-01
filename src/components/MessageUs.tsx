import React, { useState } from 'react';
import '../assets/styles/MessageUs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MessageUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
    company: '' // Honeypot field
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check
    if (formData.company.trim() !== '') {
      toast.warn('Suspicious submission detected. Please try again later.');
      return;
    }

    const { company, ...cleanData } = formData;

    setLoading(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Thank you for your message. We’ll get back to you shortly.');
        setFormData({ name: '', email: '', phoneNumber: '', subject: '', message: '', company: '' });
      } else {
        toast.error(`Failed to send message: ${result.error || 'Please try again later.'}`);
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="message">
      <div className="my-app-container">
        <div className="my-app-contact-section">
          <h2>Message Us</h2>

          <form onSubmit={handleSubmit} className="my-app-contact-form">
            <div className="my-app-form-group">
              <label htmlFor="name" className="my-app-form-label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="my-app-form-input"
                autoComplete="name"
                required
              />
            </div>

            <div className="my-app-form-group">
              <label htmlFor="email" className="my-app-form-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="my-app-form-input"
                autoComplete="email"
                required
              />
            </div>

            <div className="my-app-form-group">
              <label htmlFor="phoneNumber" className="my-app-form-label">Phone Number (Optional):</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="my-app-form-input"
                autoComplete="tel"
              />
            </div>

            <div className="my-app-form-group">
              <label htmlFor="subject" className="my-app-form-label">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="my-app-form-input"
                autoComplete="off"
                required
              />
            </div>

            <div className="my-app-form-group">
              <label htmlFor="message" className="my-app-form-label">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="my-app-form-textarea"
                autoComplete="off"
                required
              ></textarea>
            </div>

            {/* Honeypot field (hidden) */}
            <div style={{ display: 'none' }}>
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            <button type="submit" className="my-app-form-button" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} closeOnClick />
    </section>
  );
}

export default MessageUs;
