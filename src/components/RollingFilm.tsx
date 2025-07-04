import { useEffect, useState } from 'react';
import '../assets/styles/RollingFilm.css';

type DriveGalleryImage = {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
};

const FOLDER_ID = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API;

function RollingFilm() {
  const [images, setImages] = useState<DriveGalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      let allFiles: any[] = [];
      let nextPageToken = '';

      try {
        do {
          const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=nextPageToken,files(id,name,mimeType)&pageToken=${nextPageToken}`;
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

          const data = await response.json();
          allFiles = allFiles.concat(data.files);
          nextPageToken = data.nextPageToken || '';
        } while (nextPageToken);

        // Shuffle and limit to 5
        const shuffled = allFiles.sort(() => Math.random() - 0.5).slice(0, 5);

        const selectedImages: DriveGalleryImage[] = shuffled.map((file: any) => ({
          id: file.id,
          imageUrl: `https://lh3.googleusercontent.com/d/${file.id}`,
          title: file.name,
          category: 'Other',
        }));

        setImages([...selectedImages, ...selectedImages]); // duplicate for seamless loop
      } catch (err) {
        console.error('Failed to fetch Drive images:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="rolling-film-section">
      <h2 className="rolling-film-title">Our Featured Moments</h2>

      {loading ? (
        <p className="status-message">"📷 Just a sec... our lens is focusing!"</p>
      ) : (
        <div className="rolling-film-container">
          {images.map((image, index) => (
            <div key={index} className="rolling-film-item">
              <div className="rolling-film-item-inner">
                <img
                  src={image.imageUrl}
                  alt={image.title || `Image ${index + 1}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.src = 'https://placehold.co/200x120/555555/FFFFFF?text=Error';
                    img.classList.add('loaded');
                  }}
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default RollingFilm;
