// src/components/VideoCollect.tsx
type FacebookPost = {
  id: number;
  href: string;
  type: "post" | "video";
};

const VideoCollect: React.FC = () => {
  const posts: FacebookPost[] = [
    {
      id: 1,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/1416637559329495",
    },
    {
      id: 2,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/1416637559329495",
    },
    {
      id: 3,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/675721725095265/",
    },
    {
      id: 4,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/9236668983076844/",
    },
    {
      id: 5,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/605873415463344/",
    },
    {
      id: 6,
      type: "video",
      href: "https://www.facebook.com/thejcstudios/videos/981274710512912/",
    },
  ];

  return (
    <div className="gallery-container2">
      <div className="fbtitle2">
        <h1>Where Raw Footage Becomes Cinematic Magic</h1>
        <p>
          Bring your vision to life with professional video editing that
          captivates, engages, and inspires. Whether it’s for social media,
          business, events, or personal projects, we transform raw footage into
          polished, story-driven content that resonates.
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
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCollect;
