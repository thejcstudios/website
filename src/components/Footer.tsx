

function Footer (){
    
    return(
        <>
        <div className="footercontainer">
        <footer className="footer" role="contentinfo">
            <div className="footersocial" role="navigation" aria-labelledby="social-heading">
                <h3 id="social-heading" className="sr-only">Follow us on social media</h3>
                <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" aria-label="Mastodon"><i className="fa-brands fa-mastodon"></i></a>
                <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            </div>
      
            <ul className="footer-sociallinks" role="navigation" aria-labelledby="footer-links-heading">
               
                <li><a href="#">Home</a></li>
                <li><a href="#">Video Gallery</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Photo Gallery</a></li>
                <li><a href="#">Services</a></li>
            </ul>
      
            <p className="copyright">© {(new Date().getFullYear())}<a>JC STUDIO. </a>All rights reserved.</p>
            
        </footer>
        </div>
        </>
    )
}

export default Footer;