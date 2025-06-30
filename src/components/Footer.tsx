function Footer() {
    return (
      <div className="site-footer-container">
        <footer className="site-footer" role="contentinfo">
          <div className="site-footer-social" role="navigation" aria-labelledby="social-heading">
            <h3 id="social-heading" className="sr-only">Follow us on social media</h3>
            <a href="https://www.facebook.com/thejcstudios" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" aria-label="Mastodon"><i className="fa-brands fa-mastodon"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          </div>
  
          <ul className="site-footer-links" role="navigation" aria-labelledby="footer-links-heading">
            <li><a href="/#">Home</a></li>
            <li><a href="/videos">Video Gallery</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/images">Photo Gallery</a></li>
            <li><a href="/#services">Services</a></li>
          </ul>
          <div className="site-footer-contact">
  <p>
    <i className="fa-solid fa-phone" style={{ marginRight: "8px" }}></i>
    <a href="tel:+639649812664">+63 964 981 2664</a>
  </p>
  <p>
    <i className="fa-solid fa-envelope" style={{ marginRight: "8px" }}></i>
    <a href="mailto:thejcstudios@gmail.com">info@thejcstudios.com</a>
  </p>
</div>
        
  
          {/* 👇 Dev Credit with Facebook & Messenger icons */}
          <div className="site-footer-dev">
  Site developed by: Ronnel Santos
  <a
    href="https://www.facebook.com/ronnel.santos08"
    aria-label="Facebook"
    className="dev-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-facebook"></i>
  </a>
  <a
    href="https://m.me/ronnel.santos08"
    aria-label="Messenger"
    className="dev-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-facebook-messenger"></i>
  </a>
  <a
    href="https://ronnelsantos.onrender.com"
    aria-label="Website"
    className="dev-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-solid fa-globe"></i>
  </a>
</div>

  
          <p className="site-footer-copyright">
            © {new Date().getFullYear()} <a>JC STUDIOS</a>. All rights reserved.
          </p>
        </footer>
      </div>
    );
  }
  
  export default Footer;
  