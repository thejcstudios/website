import React, { useState } from 'react';
import '../assets/styles/MessageUs.css'


// Main App component
function MessageUs() {
  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '', // Added phone number field
    subject: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recipientEmail = "ronnel.santos08@gmail.com"; // <--- IMPORTANT: Replace with your actual email address!
    const { name, email, phoneNumber, subject, message } = formData; // Destructure new field

    // Encode subject and body for URL to handle special characters
    const encodedSubject = encodeURIComponent(`Message from ${name}: ${subject}`);
    const encodedBody = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone Number: ${phoneNumber}\n\n` + // Added phone number to body
      `Message:\n${message}`
    );

    // Construct the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Optionally, clear the form after redirection
    setFormData({ name: '', email: '', phoneNumber: '', subject: '', message: '' }); // Clear new field

    alert('Your email app should now open with the message pre-filled. Please click "Send" from there.');
  };



  return (
    <>
     
<section id="message">
      <div className="my-app-container">
        {/* The "Message Us" Section remains */}
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
                autoComplete="off" // no reliable autocomplete value for custom fields like subject
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
          <p style={{marginTop: '1rem', fontSize: '0.9rem', color: '#aaaaaa'}}>
            Note: Clicking "Send Message" will now attempt to open your default email application.
          </p>
        </div>
      </div>
      </section>
    </>
  );
}

export default MessageUs;
