import React, { useEffect, useState } from 'react';
import '../assets/styles/ImageGalleryCollection.css'

// Define the type for images fetched from Google Drive with added category and title for display
type DriveGalleryImage = {
  id: string;
  imageUrl: string; // Direct link to the image
  title: string;    // Derived from file name or default
  category: 'Wedding' | 'Prenup' | 'Event' | 'Corporate' | 'Ads' | 'Other';
};

const FOLDER_ID = '1HerVKggSQ4-D2XdiPFvSNRswhyfyr0MF'; // Replace with your Drive folder ID
const API_KEY = 'AIzaSyALuh8edqL11s_ed3kauCVNFNdE65DLEmU';     // Replace with your Google API key

const DriveImageGallery: React.FC = () => {
  const [images, setImages] = useState<DriveGalleryImage[]>([]);
  const [activeCategory, setActiveCategory] = useState<'All' | DriveGalleryImage['category']>('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        // Only fetch image files and their IDs, names, and mimeTypes
        const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name,mimeType)`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}. Check your API key and CORS settings.`);
        }

        const data = await response.json();
        if (!data.files) {
          throw new Error("No files found or invalid response from Google Drive API.");
        }

        const fetchedImages: DriveGalleryImage[] = data.files.map((file: { id: string; name: string; mimeType: string }) => {
          let category: DriveGalleryImage['category'] = 'Other';
          const lowerCaseName = file.name.toLowerCase();

          if (lowerCaseName.includes('wedding')) {
            category = 'Wedding';
          } else if (lowerCaseName.includes('prenup') || lowerCaseName.includes('engagement')) {
            category = 'Prenup';
          } else if (lowerCaseName.includes('event') || lowerCaseName.includes('party')) {
            category = 'Event';
          } else if (lowerCaseName.includes('corporate') || lowerCaseName.includes('company') || lowerCaseName.includes('business')) {
            category = 'Corporate';
          } else if (lowerCaseName.includes('ad') || lowerCaseName.includes('commercial')) {
            category = 'Ads';
          }

          return {
            id: file.id,
            // CHANGED URL FORMAT: Using lh3.googleusercontent.com for direct public serving
            imageUrl: `https://lh3.googleusercontent.com/d/${file.id}`,
            title: file.name, // Use file name as title
            category: category,
          };
        });

        setImages(fetchedImages);
      } catch (err: any) {
        setError(`Failed to fetch images: ${err.message}. Please ensure the Google Drive folder and its contents are publicly accessible ('Anyone with the link can view') and your API key is correct.`);
        console.error("Google Drive API fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Define available categories for buttons
  const categories = ['All', 'Wedding', 'Prenup', 'Event', 'Corporate', 'Ads'];

  // Filter images based on the active category
  const filteredImages = images.filter(image =>
    activeCategory === 'All' || image.category === activeCategory
  );

  // Function to open the lightbox
  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <>
      

      <div className="drive-gallery-container">
        {/* Header Buttons */}
        <div className="header-buttons">
          <a href="/" className="return-home-button">
            Return Home
          </a>
        </div>

        <h1 className="drive-gallery-title">Google Drive Image Gallery</h1>

        {/* Category Filter Buttons */}
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

        {loading ? (
          <p className="status-message">Loading images from Google Drive...</p>
        ) : error ? (
          <p className="status-message error-message">{error}</p>
        ) : filteredImages.length === 0 ? (
          <p className="status-message">No images found for this category or in the specified Google Drive folder.</p>
        ) : (
          <div className="image-grid">
            {filteredImages.map((image) => (
              <div key={image.id} className="image-item" onClick={() => openLightbox(image.imageUrl)}>
                <img src={image.imageUrl} alt={image.title} loading="lazy" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox/Modal Component */}
      {lightboxImage && (
        <div className={`lightbox-overlay ${lightboxImage ? 'visible' : ''}`} onClick={closeLightbox}>
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
