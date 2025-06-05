import { useInView } from "./hooks/useInView";

type VimeoVideo = {
  id: number;
  vimeoId: string; // Only the Vimeo ID
};

const AboutUs: React.FC = () => {
  const { ref: ref1, isVisible: vis1 } = useInView(0.1, "0px", true);
  const { ref: ref2, isVisible: vis2 } = useInView(0.1, "0px", true);

  const videos: VimeoVideo[] = [
    {
      id: 1,
      vimeoId: "1090708957" // Replace this with your actual Vimeo video ID
    }
  ];

  return (
    <div className="AboutUscontainer">
      <div
        className={`AboutPhotoWrapper scroll-reveal2 ${vis1 ? "visible" : ""}`}
        ref={ref1}
      >
        <div className="frame-corner bottom-left" />
        <img
          src="https://i.imgur.com/mD8MiYy.jpeg"
          alt="About JC Studio"
          loading="lazy"
          className="AboutPhoto"
        />
      </div>

      <div
        className={`AboutUs scroll-reveal ${vis2 ? "visible" : ""}`}
        ref={ref2}
      >
        <h1>Professional photo and video services for business</h1>

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
                    allowFullScreen={true}
                    allow="autoplay; fullscreen; picture-in-picture"
                    title={`Vimeo video ${video.id}`}
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p>
          Our team provides expert editing and event coverage to help your
          business stand out. We offer reliable solutions tailored to your
          project, ensuring high-quality results every time.
        </p>

        <div className="AboutPhoto2Wrapper">
          <div className="frame-corner top-right" />
          <img
            src="https://i.imgur.com/BP0s6Mj.jpeg"
            alt="Event Coverage"
            loading="lazy"
            className="AboutPhoto2"
          />
        </div>

        <h2>"Innovate. Collaborate. Elevate."</h2>
        <p>
          At JC STUDIO, we specialize in capturing the essence of every
          occasion—whether it's a corporate event, wedding, or private
          celebration. With a keen eye for detail and a passion for
          storytelling, we turn fleeting moments into timeless memories.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
