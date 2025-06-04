import { useFacebookSDK } from "./hooks/useFacebookSDK"; // adjust the path if needed

type FacebookPost = {
  id: number;
  href: string;
  type: "post" | "video";
};

const Feedback: React.FC = () => {
  useFacebookSDK(); // 🔄 Inject SDK logic here

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
      id: 3,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/10069791539746027"
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
    }
  ];

  return (
    <div className="gallery-container">
      <div className="fbtitle">
        <h1>Client Feedback & Highlights</h1>
        <p>
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
  );
};

export default Feedback;
