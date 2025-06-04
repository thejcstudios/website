import { useInView } from "./hooks/useInView"; // adjust path

import weddingsImg from "../assets/rec1.jpg";
import prenupImg from "../assets/rec2.jpg";
import eventsImg from "../assets/rec3.jpg";
import corporateImg from "../assets/rec4.jpg";
import adsImg from "../assets/rec5.jpg";

function PhotoGallery() {
  const { ref: aboutRef, isVisible: isAboutVisible } = useInView(0.1, "0px", true);

  return (
    <>
      <div className="boxcontainer">
        <div className={`offer1 ${isAboutVisible ? "visible" : ""}`} ref={aboutRef}>
          <h1>What we offer</h1>
        </div>
        <div className={`offer2 ${isAboutVisible ? "visible" : ""}`} ref={aboutRef}>
          <p>Professional editing and event coverage to help your business stand out. Get high-quality visuals tailored to your needs.</p>
        </div>
        <div className={`scroll-reveal7 ${isAboutVisible ? "visible" : ""}`} ref={aboutRef}>
          <div className="photocontainer">
            <div className="card">
              <img src={weddingsImg} alt="Weddings" />
              <div className="card__head">Weddings</div>
            </div>
            <div className="card">
              <img src={prenupImg} alt="Prenup" />
              <div className="card__head">Prenup</div>
            </div>
            <div className="card">
              <img src={eventsImg} alt="Events" />
              <div className="card__head">Events</div>
            </div>
            <div className="card">
              <img src={corporateImg} alt="Corporate" />
              <div className="card__head">Corporate</div>
            </div>
            <div className="card">
              <img src={adsImg} alt="Ads" />
              <div className="card__head">Ads</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoGallery;
