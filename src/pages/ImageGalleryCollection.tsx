import React, { useEffect, useState } from 'react';
import '../assets/styles/ImageGalleryCollection.css';

// Define the type for images fetched from Google Drive with added category and title
type DriveGalleryImage = {
  id: string;
  imageUrl: string;
  title: string;
  category: 'Wedding' | 'Prenup' | 'Events' | 'Corporate' | 'Ads' | 'Other';
};

const FOLDER_ID = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API;

const DriveImageGallery: React.FC = () => {
  const [images, setImages] = useState<DriveGalleryImage[]>([]);
  const [activeCategory, setActiveCategory] = useState<'All' | DriveGalleryImage['category']>('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Fetch all images from Google Drive with pagination
  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    let allFiles: any[] = [];
    let nextPageToken = '';

    try {
      do {
        const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=nextPageToken,files(id,name,mimeType)&pageToken=${nextPageToken}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}. Check your API key and CORS settings.`);
        }

        const data = await response.json();
        if (!data.files) {
          throw new Error("No files found or invalid response from Google Drive API.");
        }

        allFiles = allFiles.concat(data.files);
        nextPageToken = data.nextPageToken || '';
      } while (nextPageToken);

      const fetchedImages: DriveGalleryImage[] = allFiles.map((file: { id: string; name: string; mimeType: string }) => {
        let category: DriveGalleryImage['category'] = 'Other';
        const lowerCaseName = file.name.toLowerCase();

        if (/wedding\d*/.test(lowerCaseName)) {
          category = 'Wedding';
        } else if (/prenup\d*/.test(lowerCaseName)) {
          category = 'Prenup';
        } else if (/event\d*/.test(lowerCaseName)) {
          category = 'Events';
        } else if (/corporate\d*/.test(lowerCaseName) || /business/.test(lowerCaseName)) {
          category = 'Corporate';
        } else if (/ad[s]?\d*/.test(lowerCaseName)) {
          category = 'Ads';
        }

        return {
          id: file.id,
          imageUrl: `https://lh3.googleusercontent.com/d/${file.id}`,
          title: file.name,
          category,
        };
      });

      setImages(fetchedImages);
    } catch (err: any) {
      setError(`Failed to fetch images: ${err.message}. Please ensure the Google Drive folder and its contents are publicly accessible and your API key is correct.`);
      console.error("Google Drive API fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Define categories
  const categories = ['All', 'Wedding', 'Prenup', 'Events', 'Corporate', 'Ads'];

  // Filter images by category
  const filteredImages = images.filter(image =>
    activeCategory === 'All' || image.category === activeCategory
  );

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="drive-gallery-container">
        <h1 className="drive-gallery-title">Our Image Gallery</h1>

        {/* Category Buttons */}
        <div className="category-filter-container">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category as 'All' | DriveGalleryImage['category'])}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        {loading ? (
          <p className="status-message">Loading images...</p>
        ) : error ? (
          <p className="status-message error-message">{error}</p>
        ) : filteredImages.length === 0 ? (
          <p className="status-message">No images found for this category.</p>
        ) : (
          <div className="image-grid">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="image-item"
                onClick={() => openLightbox(image.imageUrl)}
              >
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onLoad={(e) => (e.currentTarget.classList.add('loaded'))}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className={`lightbox-overlay visible`} onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close-button" onClick={closeLightbox}>&times;</button>
            <img src={lightboxImage} alt="Enlarged view" referrerPolicy="no-referrer" />
          </div>
        </div>
      )}
    </>
  );
};

export default DriveImageGallery;
