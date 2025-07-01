import React, { useState } from 'react';
import '../assets/styles/MessageUs.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/MessageUs.css';

function MessageUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(' Your message has been sent. We’ll get back to you shortly.');
        setFormData({ name: '', email: '', phoneNumber: '', subject: '', message: '' });
      } else {
        toast.error(` Failed to send message: ${result.error || 'Please try again later.'}`);
      }
    } catch (error) {
      toast.error(' Network error. Please check your connection and try again.');
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

            <button type="submit" className="my-app-form-button">Send Message</button>
          </form>
        </div>
      </div>

      {/* Toast container for notifications */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} closeOnClick />
    </section>
  );
}

export default MessageUs;

