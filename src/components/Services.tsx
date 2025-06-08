import { useInView } from "./hooks/useInView";

function Services() {
  const { ref: headerRef, isVisible: isHeaderVisible } = useInView(0, "0px 0px -20% 0px", true);
  const { ref: box1Ref, isVisible: isBox1Visible } = useInView(0, "0px 0px -20% 0px", true);
  const { ref: box2Ref, isVisible: isBox2Visible } = useInView(0, "0px 0px -20% 0px", true);
  const { ref: box3Ref, isVisible: isBox3Visible } = useInView(0, "0px 0px -20% 0px", true);
  const { ref: box4Ref, isVisible: isBox4Visible } = useInView(0, "0px 0px -20% 0px", true);
  const { ref: box5Ref, isVisible: isBox5Visible } = useInView(0, "0px 0px -20% 0px", true);
  const { ref: box6Ref, isVisible: isBox6Visible } = useInView(0, "0px 0px -20% 0px", true);

  return (
    <div className="servicescontainerbox">
      <section className="services section-bg" id="services">
        <div className="servicescontainer">
          <header className="section-header">
            <div className={`services7 ${isHeaderVisible ? "visible" : ""}`} ref={headerRef}>
              <h3>Our Services</h3>
            </div>
            <div className={`services8 ${isHeaderVisible ? "visible" : ""}`} ref={headerRef}>
              <p>We provide professional video and photo coverage services, specializing in capturing your events with creativity and precision. Whether it’s a corporate gathering, wedding, or private party, our dedicated team ensures your moments are preserved beautifully.</p>
            </div>
          </header>

          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className={`box ${isBox1Visible ? "visible" : ""}`} ref={box1Ref}>
                <h4 className="title"><a>Event Coverage</a></h4>
                <p className="description">Document business events, private parties, and corporate gatherings with a professional touch, capturing the atmosphere and key moments in high-quality photos and videos.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className={`box ${isBox2Visible ? "visible" : ""}`} ref={box2Ref}>
                <h4 className="title"><a>Video Editing</a></h4>
                <p className="description">Edit and enhance video content with expert storytelling techniques, ensuring a polished, engaging final product that highlights the essence of your event or project.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className={`box ${isBox3Visible ? "visible" : ""}`} ref={box3Ref}>
                <h4 className="title"><a>Photo Editing</a></h4>
                <p className="description">Refine images with expert retouching and color correction, enhancing your photos to create stunning visuals that perfectly represent your brand or event.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className={`box ${isBox4Visible ? "visible" : ""}`} ref={box4Ref}>
                <h4 className="title"><a>E Website Invitation</a></h4>
                <p className="description">Your Dream Day Starts with a Stunning Invite — Create personalized digital invitations to share your special event online with elegance and style, crafted to impress your guests.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className={`box ${isBox5Visible ? "visible" : ""}`} ref={box5Ref}>
                <h4 className="title"><a>Same Day Edit</a></h4>
                <p className="description">Showcase the success of your event on the same day with quick, professional edits that capture the highlights and emotions while the celebration is still fresh.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className={`box ${isBox6Visible ? "visible" : ""}`} ref={box6Ref}>
                <h4 className="title"><a>Corporate Events</a></h4>
                <p className="description">We capture the key moments of corporate meetings, seminars, and product launches, helping you document your brand’s milestones with professionalism and style.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
