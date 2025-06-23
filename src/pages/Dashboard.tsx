
// components/Dashboard.tsx
import { useState } from 'react';
import { Sidebar } from '../pages/components/Sidebar';
import { HomeContent } from '../pages/components/HomeContent';
import { PhotoGalleryContent } from '../pages/components/PhotogalleryContent';
import { VideoGalleryContent } from '../pages/components/VideoGalleryContent';
import { SettingsContent } from '../pages/components/SettingsContent';
// Define the type for the active content state
type ActiveSection = 'home' | 'photo-gallery' | 'video-gallery' | 'settings' | 'logout';

export const Dashboard: React.FC = () => { // Changed to named export
  // State to manage which content component is currently active
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile responsiveness

  // Function to render the correct content component based on activeSection state
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeContent />;
      case 'photo-gallery':
        return <PhotoGalleryContent />;
      case 'video-gallery':
        return <VideoGalleryContent />;
      case 'settings':
        return <SettingsContent />;
      case 'logout':
        // For logout, we'll just show a message for now or redirect
        return (
          <div className="p-8 text-center text-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Logging Out...</h2>
            <p>You have been logged out. Thank you for using the dashboard.</p>
            {/* In a real app, you would handle actual logout logic here, e.g., clear tokens, redirect */}
          </div>
        );
      default:
        return <HomeContent />;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-gray-100 font-inter">
      {/* Mobile menu toggle button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-br-lg"
        aria-label="Toggle sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Sidebar Component */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar">
        {renderContent()}
      </main>
    </div>
  );
};
