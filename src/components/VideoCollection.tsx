type VideoCollectionProps = {
    urls: string[];
  };
  
  function getYoutubeEmbedUrl(url: string): string {
    try {
      const parsed = new URL(url);
      const videoId = parsed.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    } catch (error) {
      console.warn("Invalid URL:", url);
      return "";
    }
  }
  
  
  function VideoCollection({ urls }: VideoCollectionProps) {
    return (
      <div className="iframecontainer">
        <h1>Where Raw Footage Becomes Cinematic Magic</h1>
        <p>Bring your vision to life with professional video editing that captivates, engages, and inspires. Whether it’s for social media, business, events, or personal projects, we transform raw footage into polished, story-driven content that resonates. From seamless cuts to cinematic transitions, every frame is crafted with precision and creativity. Let your videos do more than just play—let them speak.</p>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            padding: "5%",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {urls.map((url, index) => {
            const embedUrl = getYoutubeEmbedUrl(url);
            if (!embedUrl) return null;
            return (
              <iframe
                className="iframe"
                key={index}
                src={embedUrl}
                width="100%"
                height="300"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title={`YouTube Video ${index + 1}`}
              />
            );
          })}
        </div>
      
      </div>
    );
  }
  
  export default VideoCollection;