
import intro from "../assets/intro.mp4";
import logo from "../assets/logo1.webp";

function Navbar() {

   
    return (
    <>
    <div className="intro">
    <video className='videoTag' autoPlay  muted>
    <source src={intro} type='video/mp4' />
</video>
    <div className="flex-center">
  <div className="container flex-center">
  <div className="logo"> <img className="logo" src={logo}></img></div>
 
    <ul className="flex-center">    
      <li className="navhover">Home
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </li>
      <li>Photo Gallery
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </li>
      <li>Video Gallery
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </li>
      <li>About Us  
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </li>
    </ul>
  </div>
</div>
<div className="IntroText">
  <h1>Photo and video editing services for businesses, delivered efficiently and accurately.</h1>
  <p>Upgrade your business visuals with professional editing. We handle everything from corporate events, weddings to marketing materials.</p>
</div>
</div>
   </>);
}

export default Navbar;