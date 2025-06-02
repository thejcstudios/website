import { useInView } from "./hooks/useInView"; // adjust path

function Services (){
  const { ref: aboutRef, isVisible: isAboutVisible } = useInView();
    return (
        <>
        <div className="servicescontainerbox">
        <section className="services section-bg" id="services">
  <div className="servicescontainer">
    <header className="section-header">
      <h3>Our Services</h3>

      <p>We provide professional video and photo coverage services that capture the essence of every moment — whether it's a corporate event, a special celebration, or a brand showcase, our team is committed to delivering high-quality visuals that tell your story with clarity, creativity, and impact.</p>
    </header>

    <div className="row">
    
      <div className="col-md-6 col-lg-4">
    
        <div className="box">
        

          <h4 className="title"><a>Event Coverage</a></h4>

          <p className="description">Document business events with edited highlights and key moments.</p>
        </div>
        
      </div>

      <div className="col-md-6 col-lg-4">
      <div
          className={`services2 ${isAboutVisible ? "visible" : ""}`}
          ref={aboutRef}
        >
        <div className="box">
        

          <h4 className="title"><a>Video Editing</a></h4>

          <p className="description">Edit and enhance video content for clear, engaging results.</p>
        </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
      <div
          className={`services3 ${isAboutVisible ? "visible" : ""}`}
          ref={aboutRef}
        >
        <div className="box">
        

          <h4 className="title"><a>Photo Editing</a></h4>

          <p className="description">Refine images with expert retouching, color correction, and adjustments.</p>
        </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
      <div
          className={`services4 ${isAboutVisible ? "visible" : ""}`}
          ref={aboutRef}
        >
        <div className="box">
        

          <h4 className="title"><a>Website Invitation</a></h4>

          <p className="description">Your Dream Day Starts with a Stunning Invite. Because First Impressions Last a Lifetime.</p>
        </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
      <div
          className={`services5 ${isAboutVisible ? "visible" : ""}`}
          ref={aboutRef}
        >
        <div className="box">
    

          <h4 className="title"><a>Same day edit</a></h4>

          <p className="description">Showcase the success of your event with a same-day edit that captures the energy, moments, and impact — ready to impress before the day ends.</p>
        </div>
      </div>
      </div>

      <div className="col-md-6 col-lg-4">
      <div
          className={`services6 ${isAboutVisible ? "visible" : ""}`}
          ref={aboutRef}
        >
        <div className="box">
        

          <h4 className="title"><a>Corporate Events</a></h4>

          <p className="description">We capture the key moments of your corporate event with professional coverage that highlights your brand, message, and impact.</p>
        </div>
      </div>
      </div>


    </div>
  </div>
</section>
</div>
        </>
    )
}

export default Services;