import React, { useEffect, useState } from 'react';
import '../assets/styles/VideoList.css'

// Define the type for Google Drive videos
type GoogleDriveVideo = {
  id: string;
  googleDriveId: string;
  title: string;
  category: 'Wedding' | 'Prenup' | 'Event' | 'Corporate' | 'Ads' | 'Other'; // Assuming categories can be inferred or default
};

// Replace with your Google Drive Video Folder ID and API Key
const VIDEO_FOLDER_ID = '1HyHaraR3pwPjhOWhA6CsmyBR_f9xJJk3'; // Your provided folder ID
const API_KEY = 'AIzaSyALuh8edqL11s_ed3kauCVNFNdE65DLEmU';     // Your provided API Key

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<GoogleDriveVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);
      try {
        // Construct the Google Drive API URL to list video files in the specified folder
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

          // Simple logic to infer category from file name (you can customize this)
          if (lowerCaseName.includes('wedding')) {
            category = 'Wedding';
          } else if (lowerCaseName.includes('prenup') || lowerCaseName.includes('engagement')) {
            category = 'Prenup';
          } else if (lowerCaseName.includes('event') || lowerCaseName.includes('party')) {
            category = 'Event';
          } else if (lowerCaseName.includes('corporate') || lowerCaseName.includes('business')) {
            category = 'Corporate';
          } else if (lowerCaseName.includes('ad') || lowerCaseName.includes('commercial')) {
            category = 'Ads';
          }

          return {
            id: file.id, // Use Google Drive file ID as the unique ID
            googleDriveId: file.id, // Store the Google Drive ID for iframe src
            title: file.name.replace(/\.(mp4|mov|avi|webm|mkv)$/i, ''), // Clean up file extension for title display
            category: category,
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

  // Display only the first 6 videos for the landing page section
  const videosToDisplay = videos.slice(0, 6);

  return (
    <>
    

      <section id="video">
        <div className="gallery-container2">
          <div className="fbtitle2">
            <h1>Where Raw Footage Becomes Cinematic Magic</h1>
            <p>
              Bring your vision to life with professional video editing that captivates, engages, and inspires. Whether it’s for social media, business, events, or personal projects, we transform raw footage into polished, story-driven content that resonates. From seamless cuts to cinematic transitions, every frame is crafted with precision and creativity. Let your videos do more than just play—let them speak.
            </p>
          </div>
          <div className="fbcontent2">
            {loading ? (
              <p className="status-message">Loading videos...</p>
            ) : error ? (
              <p className="status-message error-message">{error}</p>
            ) : videosToDisplay.length === 0 ? (
              <p className="status-message">No videos found. Please ensure Google Drive folder is accessible and contains videos.</p>
            ) : (
              <div className="gallery-grid2">
                {videosToDisplay.map((video) => (
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
                  </div>
                ))}
              </div>
            )}
          </div>
          <a href="/videos" className="my-app-button">
            Explore More Videos
          </a>
        </div>
      </section>
    </>
  );
};

export default VideoList;
