import { useInView } from "./hooks/useInView";
import { useState } from 'react';
import '../assets/styles/About.css';

// Define the type for Vimeo videos
type VimeoVideo = {
  id: number;
  vimeoId: string; // Only the Vimeo ID
};

// Main App component
function AboutUs() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const { ref: ref1, isVisible: vis1 } = useInView(0.1, "0px", true);
  const { ref: ref2, isVisible: vis2 } = useInView(0.1, "0px", true);
  const { ref: ref3, isVisible: vis3 } = useInView(0.1, "0px", true);
  const { ref: ref4, isVisible: vis4 } = useInView(0.1, "0px", true);
  const { ref: ref5, isVisible: vis5 } = useInView(0.1, "0px", true);
  const { ref: ref6, isVisible: vis6 } = useInView(0.1, "0px", true);
  const { ref: ref7, isVisible: vis7 } = useInView(0.1, "0px", true);
  // Array of Vimeo video data
  const videos: VimeoVideo[] = [
    {
      id: 1,
      vimeoId: "1134309338" // Replace this with your actual Vimeo video ID
    }
  ];

  return (
    // We'll use a style tag for the CSS directly within the immersive for self-containment
    <>
    
<section id="about">
      <div className="my-app-container">
        <div className="my-app-card">
          {/* Left Column */}
          <div className="my-app-left-column">
            {/* Container for the first image with hover effect */}
            <div
              className={`my-app-image-wrapper scroll-reveal2 ${vis1 ? "visible" : ""}`} ref={ref1}
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              {/* Main image */}
              <div className="image-border-wrapper">
              <img
                src="AboutImg1.webp"
                alt="Description of main content 1"
                className="my-app-image-main"
              />
              </div>
              {/* Hover elements for the first image */}
             {/* Hover elements for the second image */}
             <div className={`my-app-hover-overlay ${isHovered1 ? 'is-hovered' : ''}`}>
                <img
                  src="https://i.imgur.com/mD8MiYy.jpeg"
                  alt="Hover image 2"
                  className="my-app-second-hover-image"
                />
                <p className="my-app-hover-description">
                <strong>JC Cordero</strong>  is the creative mind behind one of the most trusted photo and video service providers in the Philippines. With a deep passion for visual storytelling and years of hands-on experience in photography and cinematography.
                </p>
              </div>
            </div>

            <h1 className={`my-app-h1 scroll-reveal ${vis2 ? "visible" : ""}`} ref={ref2}>
            Innovate. Collaborate. Elevate.
            </h1>
            <p className={`my-app-p scroll-reveal2 ${vis4 ? "visible" : ""}`} ref={ref4}>
              Our team provides expert editing and coverage to help your event stand out. We offer reliable solutions tailored to your project, ensuring high-quality results every time.
            </p>

            {/* Container for the second image with hover effect */}
            <div
              className={`my-app-image-wrapper my-app-second-image-wrapper scroll-reveal ${vis5 ? "visible" : ""}`} ref={ref5}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              {/* Second main image */}
              <img
                src="https://i.imgur.com/B0mrM00.jpeg"
                alt="Description of secondary content 2"
                className="my-app-image-main"
              />
                {/* Hover elements for the first image */}
                <div className={`my-app-hover-overlay ${isHovered2 ? 'is-hovered' : ''}`}>
                
                <p className="my-app-hover-description">
                At JC Studios, we specialize in handling high-pressure, large-scale events with precision and artistry. Our team is composed of high caliber professionals, from lead directors and cinematographers to technical crew, who thrive in dynamic environments. Whether it’s a grand wedding, a corporate conference, or a multi-camera live production, we bring the experience, equipment, and creative edge needed to deliver flawless photo and video coverage. Trust JC Studios to capture the moments that matter—no matter how big the stage.
                </p>
              </div>
             
            </div>
          </div>

          {/* Right Column */}
          <div className="my-app-right-column">
            <h1 className={`my-app-h1-right scroll-reveal2 ${vis7 ? "visible" : ""}`} ref={ref7}>
              Professional photo and video services for business
            </h1>
            <p className={`my-app-p-right scroll-reveal ${vis3 ? "visible" : ""}`} ref={ref3}>
            At JC STUDIOS, we specialize in capturing the essence of every
              occasion—whether it's a corporate event, wedding, or private
              celebration. With a keen eye for detail and a passion for
              storytelling, we turn fleeting moments into timeless memories.
            </p>
            <p className={`my-app-p-right-alt scroll-reveal2 ${vis6 ? "visible" : ""}`} ref={ref6}>
              Dedicated to delivering visual storytelling at its finest — blending creativity, professionalism, and heartfelt attention to detail. From unforgettable personal milestones to impactful brand visuals, we capture every moment with purpose and precision. Whether it’s an intimate wedding, a high-end corporate event, or a creative commercial shoot, our team is committed to transforming your vision into timeless visual experiences that speak volumes.
            </p>

            {/* Video Element */}
            <div className="my-app-video-wrapper">
              {videos.map((video) => (
                <iframe
                  key={video.id} // Added key prop for list rendering
                  src={`https://player.vimeo.com/video/${video.vimeoId}`}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; fullscreen; picture-in-picture"
                  title={`Vimeo video ${video.id}`}
                ></iframe>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default AboutUs;




/*** import { useInView } from "./hooks/useInView";

type VimeoVideo = {
  id: number;
  vimeoId: string; // Only the Vimeo ID
};

const AboutUs: React.FC = () => {
  const { ref: ref1, isVisible: vis1 } = useInView(0.1, "0px", true);
  const { ref: ref2, isVisible: vis2 } = useInView(0.1, "0px", true);
  const { ref: ref3, isVisible: vis3 } = useInView(0.1, "0px", true);
  const { ref: ref4, isVisible: vis4 } = useInView(0.1, "0px", true);
  const { ref: ref5, isVisible: vis5 } = useInView(0.1, "0px", true);

  const videos: VimeoVideo[] = [
    {
      id: 1,
      vimeoId: "1090708957" // Replace this with your actual Vimeo video ID
    }
  ];

  return (
    <section id="about">
  <div className="AboutUscontainer">
  <h1>Professional photo and video services for business</h1>
    <div className="ContentWrapper row-direction">
      <div className={`AboutPhotoWrapper scroll-reveal2 ${vis1 ? "visible" : ""}`} ref={ref1}>
        <div className="frame-corner bottom-left" />
        <img
          src="https://i.imgur.com/mD8MiYy.jpeg"
          alt="About JC Studio"
          loading="lazy"
          className="AboutPhoto"
        />
      </div>

      <div className={`AboutUs scroll-reveal ${vis2 ? "visible" : ""}`} ref={ref2}>
        
        <div className="gallery-container2">
          <div className="fbcontent2">
            <div className="gallery-grid2">
              {videos.map((video) => (
                <div key={video.id} className="gallery-item">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.vimeoId}`}
                    width="100%"
                    height="281"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; fullscreen; picture-in-picture"
                    title={`Vimeo video ${video.id}`}
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="ContentWrapper center-text">
      <div className={`AboutUs scroll-reveal ${vis5 ? "visible" : ""}`} ref={ref5}>
        <p>
          Our team provides expert editing and event coverage to help your
          business stand out. We offer reliable solutions tailored to your
          project, ensuring high-quality results every time.
        </p>
      </div>
    </div>
    <div className="ContentWrapper row-direction reverse">
      <div className={`AboutUs scroll-reveal2 ${vis4 ? "visible" : ""}`} ref={ref4}>
        <h2>"Innovate. Collaborate. Elevate."</h2>
        <p>
          At JC STUDIO, we specialize in capturing the essence of every
          occasion—whether it's a corporate event, wedding, or private
          celebration. With a keen eye for detail and a passion for
          storytelling, we turn fleeting moments into timeless memories.
        </p>
      </div>

      <div className={`AboutPhoto2Wrapper scroll-reveal ${vis3 ? "visible" : ""}`} ref={ref3}>
        <div className="frame-corner top-right" />
        <img
          src="https://i.imgur.com/d8Geld0.jpeg"
          alt="Event Coverage"
          loading="lazy"
          className="AboutPhoto2"
        />
      </div>
    </div>

  </div>
</section>
  );
};

export default AboutUs;
*/