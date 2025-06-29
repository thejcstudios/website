import { useFacebookSDK } from "./hooks/useFacebookSDK";
import { useInView } from "./hooks/useInView"; // Make sure this exists and is properly set up

type FacebookPost = {
  id: number;
  href: string;
  type: "post" | "video";
};

const Feedback: React.FC = () => {
  useFacebookSDK();

  const { ref: titleRef, isVisible: isTitleVisible } = useInView(0.1, "0px", true);
  const { ref: textRef, isVisible: isTextVisible } = useInView(0.1, "0px", true);

  const posts: FacebookPost[] = [
    {
      id: 1,
      type: "post",
      href: "https://www.facebook.com/thejcstudios/posts/pfbid02JeKiEENV7Ct1Py8J8LQr1REhKn2Kc5jPvfYJPiZE2tyPJh6NGAxxvGYXGZaPZFh4l"
    },
    {
      id: 2,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/603929162627156/"
    },
    {
      id: 4,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/1347114696517539/"
    },
    {
      id: 5,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/1887870024879986"
    },
    {
      id: 6,
      type: "post",
      href: "https://www.facebook.com/thejcstudios/posts/pfbid0B7cJPvPjteP2s2wbZXacyjEk6V2jKwZ7sTGtYttch4PY8KU2fFBWkPo7ErQsfbEel"
    }
  ];

  return (
    <section id="feedback">
    <div className="gallery-container">
      <div className="fbtitle">
        <h1
          ref={titleRef}
          className={`fade-left ${isTitleVisible ? "visible" : ""}`}
        >
          Client Feedback & Highlights
        </h1>
        <p
          ref={textRef}
          className={`fade-right ${isTextVisible ? "visible" : ""}`}
        >
          Every post tells a story, and every story reflects the trust,
          happiness, and memories we've built with our amazing clients.
        </p>
      </div>
      <div className="fbcontent">
        <div className="gallery-grid">
          {posts.map((post) => (
            <div key={post.id} className="gallery-item">
              {post.type === "post" ? (
                <div
                  className="fb-post"
                  data-href={post.href}
                  data-width="500"
                ></div>
              ) : (
                <div
                  className="fb-video"
                  data-href={post.href}
                  data-width="500"
                  data-show-text="true"
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Feedback;
