import { useFacebookSDK } from "./hooks/useFacebookSDK";
import { useInView } from "./hooks/useInView";

type FacebookPost = {
  id: number;
  href: string;
  type: "post" | "video";
};

const VideoList: React.FC = () => {
  useFacebookSDK();

  const { ref: titleRef, isVisible: isTitleVisible } = useInView(0.1, "0px", true);
  const { ref: textRef, isVisible: isTextVisible } = useInView(0.1, "0px", true);

  const posts: FacebookPost[] = [
    {
      id: 1,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/1246976250422040"
    },
    {
      id: 2,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/10069791539746027"
    },
    {
      id: 3,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/1214634553636396"
    },
    {
      id: 4,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/1243001323440628"
    },
    {
      id: 5,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/572494098812638"
    },
    {
      id: 6,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/1598753970735121"
    }
  ];

  return (
    <section id="video">
    <div className="gallery-container2">
      <div className="fbtitle2">
        <h1
          ref={titleRef}
          className={`scroll-fade ${isTitleVisible ? "visible" : ""}`}
        >
          Where Raw Footage Becomes Cinematic Magic
        </h1>
        <p
          ref={textRef}
          className={`scroll-fade ${isTextVisible ? "visible" : ""}`}
        >
          Bring your vision to life with professional video editing that captivates, engages, and inspires. Whether it’s for social media, business, events, or personal projects, we transform raw footage into polished, story-driven content that resonates. From seamless cuts to cinematic transitions, every frame is crafted with precision and creativity. Let your videos do more than just play—let them speak.
        </p>
      </div>
      <div className="fbcontent2">
        <div className="gallery-grid2">
          {posts.map((post) => (
            <div key={post.id} className="gallery-item">
              <div
                className="fb-video"
                data-href={post.href}
                data-width="500"
                data-show-text="false"
                data-allowfullscreen="true"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default VideoList;
