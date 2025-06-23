
// Define the type for the active content state and the setter function
type ActiveSection = 'home' | 'photo-gallery' | 'video-gallery' | 'settings' | 'logout';

interface SidebarProps {
  activeSection: ActiveSection;
  setActiveSection: (section: ActiveSection) => void;
  isSidebarOpen: boolean; // For mobile responsiveness
  toggleSidebar: () => void; // For closing sidebar on mobile
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, isSidebarOpen, toggleSidebar }) => { // Changed to named export

  const handleNavLinkClick = (section: ActiveSection) => {
    setActiveSection(section);
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) { // Check if it's a mobile view
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-gray-100 flex flex-col
                  shadow-lg transform md:translate-x-0 transition-transform duration-300 ease-in-out
                  z-50 rounded-r-lg
                  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {/* Sidebar Header/Logo */}
      <div className="p-6 text-center border-b border-gray-700 flex items-center justify-center space-x-2">
        {/* Placeholder for a logo/icon */}
        <span className="text-blue-400 text-3xl font-bold">W</span>
        <h2 className="text-2xl font-bold tracking-wide">WebWorks</h2>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {/* Home */}
        <a
          href="#"
          onClick={() => handleNavLinkClick('home')}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200
                      ${activeSection === 'home' ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-700 text-gray-300'}`}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7m7-7v10a1 1 0 00-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          Home
        </a>

        {/* Photo Gallery */}
        <a
          href="#"
          onClick={() => handleNavLinkClick('photo-gallery')}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200
                      ${activeSection === 'photo-gallery' ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-700 text-gray-300'}`}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          Photo Gallery
        </a>

        {/* Video Gallery */}
        <a
          href="#"
          onClick={() => handleNavLinkClick('video-gallery')}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200
                      ${activeSection === 'video-gallery' ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-700 text-gray-300'}`}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.877-2.813A1 1 0 0121 8.82V15.18a1 1 0 01-1.123.813L15 14m-1 5a2 2 0 100-4 2 2 0 000 4zM4 20a2 2 0 100-4 2 2 0 000 4zM14 10a2 2 0 100-4 2 2 0 000 4zM4 10a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          Video Gallery
        </a>

        {/* Settings */}
        <a
          href="#"
          onClick={() => handleNavLinkClick('settings')}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200
                      ${activeSection === 'settings' ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-700 text-gray-300'}`}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.307 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          Settings
        </a>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700 mt-auto">
        <a
          href="#"
          onClick={() => handleNavLinkClick('logout')}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200
                      ${activeSection === 'logout' ? 'bg-red-600 text-white shadow-md' : 'hover:bg-gray-700 text-gray-300'}`}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          Logout
        </a>
      </div>
    </aside>
  );
};