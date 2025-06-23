
export const VideoGalleryContent: React.FC = () => { // Changed to named export
    return (
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl min-h-full">
        <h1 className="text-4xl font-bold text-blue-400 mb-6">Video Gallery</h1>
        <p className="text-lg text-gray-300 mb-8">
          Organize and view your video content. We can add features for video uploads,
          embedding, and streaming in the future.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
              <div className="relative w-full aspect-video bg-black flex items-center justify-center text-white">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span className="absolute bottom-2 right-2 bg-gray-900 bg-opacity-75 text-xs px-2 py-1 rounded">
                  0:45
                </span>
              </div>
              <div className="p-4">
                <p className="text-gray-300 text-sm">Video Title {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };