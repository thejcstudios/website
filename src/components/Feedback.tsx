import { useEffect } from "react";

type FacebookPost = {
  id: number;
  href: string;
  type: "post" | "video";
};

const Feedback: React.FC = () => {
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
      type: "post",
      href: "https://www.facebook.com/julianzach.buenafe/posts/1437576763920568"
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

  useEffect(() => {
    // Ensure fb-root exists
    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }

    const loadFacebookSDK = () => {
      if (document.getElementById("facebook-jssdk")) {
        // SDK already loaded
        if ((window as any).FB) {
          (window as any).FB.XFBML.parse();
        }
        return;
      }

      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";

      script.onload = () => {
        if ((window as any).FB) {
          (window as any).FB.XFBML.parse();
        }
      };

      document.body.appendChild(script);
    };

    loadFacebookSDK();
  }, []);

  return (
    <>
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
    </>
  );
};

export default Feedback;
