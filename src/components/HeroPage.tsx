import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/logo1.webp";
import { useInView } from "./hooks/useInView";

export default function HeroPage() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("day");
  const { ref: aboutRef, isVisible: isAboutVisible } = useInView(0.1, "0px", true);

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // Offset for fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setOffcanvasOpen(false); // close menu if open
    }
  };

  useEffect(() => {
    document.body.style.overflow = offcanvasOpen ? "hidden" : "auto";
  }, [offcanvasOpen]);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="HeroContainer">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img src={logo} alt="JC Studio Logo" height="30" />
            JC STUDIOS
          </a>
          <div className="menu-icon d-lg-none" onClick={toggleOffcanvas}>
            <span className={offcanvasOpen ? "active" : ""}></span>
            <span className={offcanvasOpen ? "active" : ""}></span>
            <span className={offcanvasOpen ? "active" : ""}></span>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" onClick={() => scrollToSection("home")}>Home</a></li>
            <li className="nav-item"><a className="nav-link" onClick={() => scrollToSection("about")}>About Us</a></li>
            <li className="nav-item"><a className="nav-link" onClick={() => scrollToSection("photo")}>Photo Gallery</a></li>
            <li className="nav-item"><a className="nav-link" onClick={() => scrollToSection("video")}>Video Gallery</a></li>
            <li className="nav-item"><a className="nav-link" onClick={() => scrollToSection("feedback")}>Feedback</a></li>
            <li className="nav-item">
              <a className="btn btn-see-more ms-3" href="https://m.me/thejcstudios">Message Us</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Offcanvas Menu */}
      {offcanvasOpen && (
        <div className="offcanvas offcanvas-end show" style={{ visibility: "visible" }}>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">JC STUDIOS</h5>
            <div className="menu-icon active" onClick={toggleOffcanvas}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" onClick={() => scrollToSection("home")}><i className="bi bi-house-door-fill"></i> Home</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => scrollToSection("about")}><i className="bi bi-info-circle-fill"></i> About Us</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => scrollToSection("photo")}><i className="bi bi-images"></i> Photo Gallery</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => scrollToSection("video")}><i className="bi bi-camera-reels-fill"></i> Video Gallery</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => scrollToSection("feedback")}><i className="bi bi-chat-left-text-fill"></i> Feedback</a></li>
            </ul>
            <a className="btn btn-see-more mt-3 w-100" href="https://m.me/thejcstudios">Message Us</a>
          </div>
          <div className="offcanvas-footer">
            <div className="social-icons d-flex justify-content-center gap-3">
              <a href="https://www.facebook.com/thejcstudios"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero-section position-relative d-flex align-items-center" style={{ height: "100vh" }}>
        <div className="hero-overlay position-absolute w-100 h-100" style={{
          background: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))"
        }}></div>

        <div className="position-relative text-white">
          <div className={`scroll-reveal3 ${isAboutVisible ? "visible" : ""}`} ref={aboutRef}>
            <h1 className="hero-title display-3 fw-bold mb-3">Capture Life, <br />Craft Stories</h1>
          </div>
          <div className={`scroll-reveal4 ${isAboutVisible ? "visible" : ""}`} ref={aboutRef}>
            <p className="hero-subtitle lead mb-4" style={{ maxWidth: 600 }}>
              Expert video and photo editing, cinematic event coverage — from every angle, for every moment.
            </p>
          </div>
          <a href="#" className="btn btn-solar btn-lg mb-4">More about JC Studio</a>

          <div className="need-it-section">
            <div className={`scroll-reveal5 ${isAboutVisible ? "visible" : ""}`} ref={aboutRef}>
              <h5 className="need-it-title">Want your events captured with creativity and passion?</h5>
            </div>
            <div className={`scroll-reveal6 ${isAboutVisible ? "visible" : ""}`} ref={aboutRef}>
              <div className="tab-group d-flex gap-3">
                {['Capture', 'Enhance', 'Deliver'].map(tab => (
                  <a
                    key={tab}
                    href="#"
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={e => { e.preventDefault(); handleTabClick(tab); }}
                  >
                    {tab}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections should use corresponding IDs like:
          <section id="about">...</section>
          <section id="photo">...</section>
          etc.
      */}
    </div>
  );
}
