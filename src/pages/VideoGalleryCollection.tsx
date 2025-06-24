import { useState, useEffect } from 'react';
import '../assets/styles/VideoGalleryCollection.css';

type GoogleDriveVideo = {
  id: string;
  googleDriveId: string;
  title: string;
  category: 'Wedding' | 'Prenup' | 'Event' | 'Corporate' | 'Ads' | 'Other';
};

function VideoGalleryCollection() {
  const [videos, setVideos] = useState<GoogleDriveVideo[]>([]);
  const [activeCategory, setActiveCategory] = useState<'All' | GoogleDriveVideo['category']>('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const csvUrl =
      'https://docs.google.com/spreadsheets/d/1atCbjLj8HYlpfSMu2kXIkKUTN7PVKihL8yMTiy8pVYU/export?format=csv';

    const fetchVideos = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(csvUrl);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const text = await res.text();
        const lines = text.trim().split('\n');
        if (lines.length <= 1) throw new Error('No data found in CSV.');

        const headers = lines[0].split(',').map(h => h.trim().toLowerCase());

        const parsed: GoogleDriveVideo[] = lines.slice(1).map((line, index) => {
          const values = line.split(',');
          if (values.length < headers.length) return null;

          const video: Partial<GoogleDriveVideo> = {};
          headers.forEach((header, i) => {
            const val = values[i]?.trim() || '';
            switch (header) {
              case 'id':
                video.id = val;
                break;
              case 'googledriveid':
                video.googleDriveId = val;
                break;
              case 'title':
                video.title = val;
                break;
              case 'category':
                const valid: GoogleDriveVideo['category'][] = ['Wedding', 'Prenup', 'Event', 'Corporate', 'Ads', 'Other'];
                video.category = valid.includes(val as GoogleDriveVideo['category']) ? (val as GoogleDriveVideo['category']) : 'Other';
                break;
            }
          });

          if (!video.id || !video.googleDriveId || !video.title || !video.category) return null;
          return video as GoogleDriveVideo;
        }).filter(Boolean) as GoogleDriveVideo[];

        setVideos(parsed);
      } catch (err) {
        console.error('Failed to load video data:', err);
        setError('Failed to load videos. Please check the data source.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const categories = ['All', 'Wedding', 'Prenup', 'Event', 'Corporate', 'Ads'];
  const filtered = videos.filter(video => activeCategory === 'All' || video.category === activeCategory);

  return (
    <div className="video-gallery-container">
      <a href="/" className="return-home-button">Return Home</a>
      <h1 className="video-gallery-title">Our Video Gallery</h1>

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
                  allow="fullscreen"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
              <p className="video-item-title">{video.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VideoGalleryCollection;
