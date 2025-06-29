import { useInView } from "./hooks/useInView"; // adjust path

function PhotoGallery() {
  const { ref: aboutRef, isVisible: isAboutVisible } = useInView(0.1, "0px", true);

  return (
    <div className="boxcontainer">
      <div className={`offer1 ${isAboutVisible ? "visible" : ""}`} ref={aboutRef}>
        <h1>What we offer</h1>
      </div>

      <div className={`offer2 ${isAboutVisible ? "visible" : ""}`} ref={aboutRef}>
        <p>
          Professional editing and event coverage to help your business stand out.
          Get high-quality visuals tailored to your needs.
        </p>
      </div>

      <div className={`scroll-reveal7 ${isAboutVisible ? "visible" : ""}`} ref={aboutRef}>
        <div className="photocontainer">
          <div className="card">
            <img
              src="https://i.imgur.com/0d4YHhN.jpeg"
              alt="Weddings"
              loading="lazy"
            />
            <div className="card__head">Weddings</div>
          </div>

          <div className="card">
            <img
              src="https://i.imgur.com/bF4TvXx.jpeg"
              alt="Prenup"
              loading="lazy"
            />
            <div className="card__head">Prenup</div>
          </div>

          <div className="card">
            <img
              src="https://i.imgur.com/7AtQC6L.jpeg"
              alt="Events"
              loading="lazy"
            />
            <div className="card__head">Events</div>
          </div>

          <div className="card">
            <img
              src="https://i.imgur.com/GCXCohl.jpeg"
              alt="Corporate"
              loading="lazy"
            />
            <div className="card__head">Corporate</div>
          </div>

          <div className="card">
            <img
              src="https://i.imgur.com/d7FRN53.jpeg"
              alt="Ads"
              loading="lazy"
            />
            <div className="card__head">Ads</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
