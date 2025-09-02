import React, { useState, useEffect } from 'react';
import '../assets/styles/Footer1.css';

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showTerms, setShowTerms] = useState(false); // <-- Added state for Terms modal

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-column">
            <h3>The Jc Studios</h3>
            <p>Full-service photo and video studio specializing in events, corporate shoots, and creative content. We’re dedicated to capturing your most important moments with clarity, style, and emotion..</p>
            <div className="social-links">
              <a href="https://www.facebook.com/thejcstudios" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/thejcstudios/?hl=en" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://ph.linkedin.com/in/the-jcstudios" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-link" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li><a href="/#">Home</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/images">Image Gallery</a></li>
              <li><a href="/videos">Video Gallery</a></li>
              <li><a href="/invitation">Website Invitations</a></li>
              <li><a href="/#services">Services</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3>Website Developer</h3>
            <ul className="footer-links">
              <li><a href="https://ronnelsantos.vercel.app" target="_blank" rel="noopener noreferrer">Webworks</a></li>
              <li><a href="mailto:ronnel.santos8@gmail.com">Email</a></li>
              <li><a href="https://www.facebook.com/ronnel.santos08" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://ronnelsantos.vercel.app" target="_blank" rel="noopener noreferrer">Website</a></li>
              <li><a href="https://m.me/ronnel.santos08" target="_blank" rel="noopener noreferrer">Messenger</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h3>Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Silang Cavite<br />4118 Philippines</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <span>
                  <a href="tel:+639950371821">+63 995 037 1821</a><br />
                  Mobile Number
                </span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>
                  <a href="mailto:info@thejcstudios.com">info@thejcstudios.com</a><br />
                  Email
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} The JC Studios. All rights reserved. |{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>Privacy Policy</a> |{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setShowFAQ(true); }}>FAQ</a> |{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Terms of Service</a>
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <div
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        id="backToTop"
        aria-label="back"
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="popup-overlay" onClick={() => setShowPrivacy(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowPrivacy(false)}>×</button>
            <h3>Privacy Policy</h3>
              <p>
                We respect your privacy and are committed to protecting it. Any personal data submitted through our site will never be shared without your permission. Your information is used solely for communication and service delivery purposes.
              </p>
              <p>
                <strong>Information Collection:</strong> We collect only necessary information you provide such as your name, email, and any messages or content you submit.
              </p>
              <p>
                <strong>Cookies:</strong> Our website may use cookies to enhance your browsing experience. Cookies are small data files stored on your device. You can control cookie preferences through your browser settings.
              </p>
              <p>
                <strong>Data Security:</strong> We implement appropriate security measures to protect your data from unauthorized access or disclosure.
              </p>
              <p>
                <strong>Third Parties:</strong> We do not sell or rent your personal information. However, we may share data with trusted service providers to help operate our website and services, all under strict confidentiality agreements.
              </p>
              <p>
                <strong>Your Rights:</strong> You have the right to access, update, or delete your personal information by contacting us directly.
              </p>
          </div>
        </div>
      )}

      {/* FAQ Modal */}
      {showFAQ && (
        <div className="popup-overlay" onClick={() => setShowFAQ(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowFAQ(false)}>×</button>
            <h3>Frequently Asked Questions</h3>
              <p>
                <strong>Q:</strong> How do I book a session?<br />
                <strong>A:</strong> Contact us through Facebook, Messenger, or email. We'll confirm your preferred date and send booking instructions.
              </p>
              <p>
                <strong>Q:</strong> What services do you offer?<br />
                <strong>A:</strong> We offer event photography, video production, corporate shoots, and creative content creation.
              </p>
              <p>
                <strong>Q:</strong> Where is your studio located?<br />
                <strong>A:</strong> Silang, Cavite, Philippines. We also offer on-location coverage.
              </p>
              <p>
                <strong>Q:</strong> What is your cancellation policy?<br />
                <strong>A:</strong> Please notify us at least 48 hours before your session to reschedule or cancel without penalty.
              </p>
              <p>
                <strong>Q:</strong> How long does it take to receive my photos/videos?<br />
                <strong>A:</strong> Typically, we deliver the final edited content within 2-3 weeks after the session.
              </p>
              <p>
                <strong>Q:</strong> Can I request specific shots or styles?<br />
                <strong>A:</strong> Absolutely! We encourage you to share your vision so we can tailor the session to your preferences.
              </p>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className="popup-overlay" onClick={() => setShowTerms(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowTerms(false)}>×</button>
            <h3>Terms of Service</h3>
            <p>Welcome to thejcstudios.com. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>

            <p><strong>Use of the Website</strong><br />
            You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment of the site.</p>

            <p><strong>Intellectual Property</strong><br />
            All content on this website, including text, images, logos, and videos, is the property of The JC Studios or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use any content without prior written permission.</p>

            <p><strong>User Content</strong><br />
            If you submit any content (such as comments, photos, or messages) to the site, you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, and display that content on the website and related marketing materials.</p>

            <p><strong>Limitation of Liability</strong><br />
            The JC Studios is not responsible for any damages arising from your use of the website or any content therein. The website is provided "as is" without warranties of any kind.</p>

            <p><strong>Changes to Terms</strong><br />
            We may update these Terms of Service at any time without prior notice. Your continued use of the site after changes implies your acceptance of the new terms.</p>

            <p><strong>Governing Law</strong><br />
            These terms are governed by the laws of the Philippines. Any disputes will be resolved under the jurisdiction of the courts in the Philippines.</p>

          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
