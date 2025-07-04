import { useEffect, useState } from 'react';
import '../assets/styles/VideoGalleryCollection.css'

type GoogleDriveVideo = {
  id: string;
  googleDriveId: string;
  title: string;
  category: 'Desktop' | 'Mobile' | 'Other';
  siteUrl?: string;
};

const VIDEO_FOLDER_ID = import.meta.env.VITE_INVITATION_VIDEO_FOLDER_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API;

function Invitation() {
  const [videos, setVideos] = useState<GoogleDriveVideo[]>([]);
  const [activeCategory, setActiveCategory] = useState<'All' | GoogleDriveVideo['category']>('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = `https://www.googleapis.com/drive/v3/files?q='${VIDEO_FOLDER_ID}'+in+parents+and+mimeType+contains+'video/'&key=${API_KEY}&fields=files(id,name,mimeType)`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}.`);
        }

        const data = await response.json();
        if (!data.files) {
          throw new Error("No video files found or invalid response from Google Drive API.");
        }

        const fetchedVideos: GoogleDriveVideo[] = data.files.map((file: { id: string; name: string; mimeType: string }) => {
          let category: GoogleDriveVideo['category'] = 'Other';
          const lowerCaseName = file.name.toLowerCase();

          if (lowerCaseName.includes('desktop')) {
            category = 'Desktop';
          } else if (lowerCaseName.includes('mobile') || lowerCaseName.includes('phone')) {
            category = 'Mobile';
          }

          // Extract slug from filename after the last underscore, before extension
          let slug = '';
          const match = lowerCaseName.match(/([a-z0-9\-]+)\.(mp4|webm|mov)$/);
          if (match) {
            slug = match[1];
          }

          const siteUrl = slug ? `https://${slug}.thejcstudios.com` : undefined;

          return {
            id: file.id,
            googleDriveId: file.id,
            title: file.name.replace(/\.(mp4|mov|avi|webm|mkv)$/i, ''),
            category: category,
            siteUrl,
          };
        });

        setVideos(fetchedVideos);
      } catch (err: any) {
        setError(`Failed to load videos: ${err.message}. Please ensure the Google Drive folder and its video contents are publicly accessible ('Anyone with the link can view') and your API key is correct.`);
        console.error("Google Drive API fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const categories = ['All', 'Desktop', 'Mobile'];
  const filtered = videos.filter(video => activeCategory === 'All' || video.category === activeCategory);

  return (
    <>
      <div className="video-gallery-container">
        <h1 className="video-gallery-title">Our Website Invitations</h1>

        <div className="category-filter-container">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category as 'All' | GoogleDriveVideo['category'])}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="status-message">Loading videos...</p>
        ) : error ? (
          <p className="status-message error-message">{error}</p>
        ) : filtered.length === 0 ? (
          <p className="status-message">No videos found for this category.</p>
        ) : (
          <div className="video-grid">
            {filtered.map(video => (
              <div key={video.id} className="video-item">
                <div className="video-iframe-wrapper">
                  <iframe
                    src={`https://drive.google.com/file/d/${video.googleDriveId}/preview`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
                <p className="video-item-title">{video.title}</p>
                {video.siteUrl && (
                  <a
                    href={video.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-item-link"
                  >
                    View Website
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Invitation;
