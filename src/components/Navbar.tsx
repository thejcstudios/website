import React, { useState } from 'react';
import { Menu, X, Home, Info, Image, Video, Mail, Gift } from 'lucide-react'; // Importing icons from lucide-react
import '../assets/styles/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Pure CSS styles embedded for this component */}
     

      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo and Name */}
          <div className="navbar-logo-group">
            <img
              src="/logo1.webp" // Placeholder logo
              alt="Company Logo"
              className="navbar-logo"
              // Fallback for image loading errors
              onError={(e) => {
                e.currentTarget.onerror = null; // Prevents infinite loop if fallback also fails
                e.currentTarget.src = "https://placehold.co/40x40/cccccc/000000?text=ERR"; // Fallback placeholder
              }}
            />
            <span className="navbar-name">
              JC STUDIOS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-desktop-menu">
              <NavLink icon={<Home className="icon" />} text="Home" href="/#" />
              <NavLink icon={<Info className="icon" />} text="About Us" href="/#about" />
              <NavLink icon={<Image className="icon" />} text="Image Gallery" href="/images" />
              <NavLink icon={<Video className="icon" />} text="Video Gallery" href="/videos" />
              <NavLink icon={<Gift className="icon" />} text="Website Invitation" href="/invitation" />
              <NavLink icon={<Mail className="icon" />} text="Message Us" href="/#message" />
            </div>

          {/* Mobile Hamburger Button */}
          <div className="navbar-mobile-button-container">
            <button
              onClick={toggleMenu}
              className="navbar-mobile-button"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`navbar-mobile-menu ${isOpen ? 'is-open' : ''}`}
        >
          <div className="navbar-mobile-menu-items">
            <MobileNavLink icon={<Home size={20} />} text="Home" href="/#" onClick={toggleMenu} />
            <MobileNavLink icon={<Info size={20} />} text="About Us" href="/#about" onClick={toggleMenu} />
            <MobileNavLink icon={<Image size={20} />} text="Image Gallery" href="/images" onClick={toggleMenu} />
            <MobileNavLink icon={<Video size={20} />} text="Video Gallery" href="/videos" onClick={toggleMenu} />
            <MobileNavLink icon={<Gift size={20} />} text="Website Invitation" href="/invitation" onClick={toggleMenu} />
            <MobileNavLink icon={<Mail size={20} />} text="Message Us" href="/#message" onClick={toggleMenu} />
          </div>
        </div>
      </nav>
    </>
  );
};

// Helper component for Desktop Navigation Links
interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, text, href }) => (
  <a
    href={href}
    className="nav-link"
  >
    {icon}
    <span>{text}</span>
  </a>
);

// Helper component for Mobile Navigation Links
interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ icon, text, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="mobile-nav-link"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default Navbar; // Exporting Navbar directly
