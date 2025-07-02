import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Only keep icons you still use (Menu/X)
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo and Name */}
          <div className="navbar-logo-group">
            <img
              src="/logo1.webp"
              alt="Company Logo"
              className="navbar-logo"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://placehold.co/40x40/cccccc/000000?text=ERR";
              }}
            />
            <span className="navbar-name">
              JC STUDIOS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-desktop-menu">
            <NavLink text="Home" href="/#" />
            <NavLink text="About Us" href="/#about" />
            <NavLink text="Image Gallery" href="/images" />
            <NavLink text="Video Gallery" href="/videos" />
            <NavLink text="Website Invitation" href="/invitation" />
            <NavLink text="Message Us" href="/#message" />
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
        <div className={`navbar-mobile-menu ${isOpen ? 'is-open' : ''}`}>
          <div className="navbar-mobile-menu-items">
            <MobileNavLink text="Home" href="/#" onClick={toggleMenu} />
            <MobileNavLink text="About Us" href="/#about" onClick={toggleMenu} />
            <MobileNavLink text="Image Gallery" href="/images" onClick={toggleMenu} />
            <MobileNavLink text="Video Gallery" href="/videos" onClick={toggleMenu} />
            <MobileNavLink text="Website Invitation" href="/invitation" onClick={toggleMenu} />
            <MobileNavLink text="Message Us" href="/#message" onClick={toggleMenu} />
          </div>
        </div>
      </nav>
    </>
  );
};

// Desktop Nav Link
interface NavLinkProps {
  text: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, href }) => (
  <a href={href} className="nav-link">
    <span>{text}</span>
  </a>
);

// Mobile Nav Link
interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ text, href, onClick }) => (
  <a href={href} onClick={onClick} className="mobile-nav-link">
    <span>{text}</span>
  </a>
);

export default Navbar;
