
export const PhotoGalleryContent: React.FC = () => { // Changed to named export
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl min-h-full">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Photo Gallery</h1>
      <p className="text-lg text-gray-300 mb-8">
        Explore your visual assets here. When you're ready, I can help you implement
        features like image uploads, categorization, and display options.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
            <img
              src={`https://placehold.co/300x200/2D3748/E2E8F0?text=Photo+${i+1}`}
              alt={`Placeholder Photo ${i+1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-300 text-sm">Image Title {i + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
