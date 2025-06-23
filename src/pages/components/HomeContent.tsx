import React, { useState, useEffect } from 'react';

export const HomeContent: React.FC = () => {
  // State to hold the actual visitor data fetched from an API
  const [totalVisitors, setTotalVisitors] = useState<number | null>(null);
  const [visitorData, setVisitorData] = useState<
    { day: string; count: number }[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisitorData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // --- REAL-WORLD IMPLEMENTATION: This is where your app would call your backend API ---
        // To get actual Google Analytics data, you would build a backend service (e.g., Node.js, Python)
        // that uses the Google Analytics Data API to query your GA4 property.
        // Your backend would then expose an API endpoint for your React app to fetch data from.

        // Example of what your real API call might look like:
        // const response = await fetch('/api/analytics/dashboard-data');
        // if (!response.ok) {
        //   throw new Error(`Failed to fetch data: ${response.statusText}`);
        // }
        // const data = await response.json();
        // setTotalVisitors(data.totalUsers); // Assuming your backend returns 'totalUsers'
        // setVisitorData(data.dailyUsers);   // Assuming your backend returns 'dailyUsers'

        // --- SIMULATING API CALL FOR DEMONSTRATION ---
        // This simulates fetching data with a delay.
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

        // Mock data to demonstrate dynamic display
        const mockTotalVisitors = 31256;
        const mockVisitorData = [
          { day: 'Mon', count: 180 },
          { day: 'Tue', count: 210 },
          { day: 'Wed', count: 190 },
          { day: 'Thu', count: 250 },
          { day: 'Fri', count: 280 },
          { day: 'Sat', count: 320 },
          { day: 'Sun', count: 230 },
        ];
        setTotalVisitors(mockTotalVisitors);
        setVisitorData(mockVisitorData);
        // --- END SIMULATION ---

      } catch (err) {
        console.error("Failed to fetch visitor data:", err);
        setError("Failed to load visitor data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitorData();
  }, []); // Empty dependency array means this runs once on component mount

  // Determine the maximum count for scaling the graph bars dynamically
  const maxCount = visitorData.reduce((max, item) => Math.max(max, item.count), 0);
  const scaleFactor = maxCount > 0 ? 100 / maxCount : 0; // Ensures bars scale correctly based on max fetched value

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl min-h-full flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">Welcome, JC Cordero!</h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl mb-8">
        This is your central hub for managing all your WebWorks services.
        Use the navigation on the left to explore different sections.
      </p>

      {/* Visitor Count Card */}
      <div className="w-full max-w-4xl bg-gray-700 p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold text-white mb-2">Total Visitors</h3>
        {isLoading ? (
          <p className="text-xl text-gray-400">Loading total visitors...</p>
        ) : error ? (
          <p className="text-red-400 text-lg">{error}</p>
        ) : (
          <p className="text-5xl font-bold text-blue-400">{totalVisitors}</p>
        )}
        <p className="text-gray-400 mt-2">Overall visitors to your site/dashboard.</p>
      </div>

      {/* Daily Visitor Graph */}
      <div className="w-full max-w-4xl bg-gray-700 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-white mb-4">Visitors Per Day</h3>
        {isLoading ? (
          <p className="text-xl text-gray-400 text-center h-64 flex items-center justify-center">Loading daily visitor data...</p>
        ) : error ? (
          <p className="text-red-400 text-lg text-center h-64 flex items-center justify-center">{error}</p>
        ) : (
          <div className="flex justify-around items-end h-64 bg-gray-800 rounded-lg p-4">
            {visitorData.length > 0 ? (
              visitorData.map((data, index) => (
                <div key={index} className="flex flex-col items-center mx-2" style={{ height: '100%' }}>
                  <div
                    className="w-8 bg-blue-500 rounded-t-lg transition-all duration-300 ease-in-out"
                    // Scale height based on the dynamically found maxCount
                    style={{ height: `${data.count * scaleFactor}%` }}
                  ></div>
                  <span className="text-xs text-gray-300 mt-1">{data.day}</span>
                  <span className="text-xs text-gray-400">{data.count}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-sm text-center w-full">No daily visitor data available for the selected period.</p>
            )}
          </div>
        )}
        <p className="text-gray-400 text-sm mt-4 text-center">
          (This graph now fetches simulated data. For more advanced visualizations, consider a dedicated charting library.)
        </p>
      </div>

      {/* Quick Access, Recent Activity, Notifications - Retained from previous version */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mt-8">
        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-white mb-2">Quick Access</h3>
          <p className="text-gray-400">Jump directly to your most used features.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-white mb-2">Recent Activity</h3>
          <p className="text-gray-400">See the latest updates on your projects and tasks.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-white mb-2">Notifications</h3>
          <p className="text-gray-400">Stay informed with important alerts and messages.</p>
        </div>
      </div>

      {/* --- Google Analytics Data Integration Information --- */}
      <div className="w-full max-w-4xl bg-gray-700 p-6 rounded-lg shadow-md mt-8">
        <h3 className="text-2xl font-semibold text-white mb-4">Google Analytics Data Integration</h3>
        <p className="text-gray-300 mb-4">
          To display **real-time or historical data** from your Google Analytics 4 (GA4) property in this dashboard, your application needs to use the **Google Analytics Data API**.
        </p>
        <p className="text-gray-300 mb-2">
          This typically involves these steps:
        </p>

        <ol className="list-decimal list-inside text-gray-300 space-y-3">
          <li>
            **GA4 Property Setup:** Ensure you have a Google Analytics 4 property actively collecting data from your website (as per our previous discussions).
          </li>
          <li>
            **Google Cloud Project & API Access:**
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>Create or select a Google Cloud Project linked to your Google Account.</li>
              <li>Enable the **Google Analytics Data API** for that project.</li>
              <li>Set up API credentials (e.g., a Service Account key) to allow your application to securely access your GA4 data.</li>
            </ul>
          </li>
          <li>
            **Backend Service (Recommended):**
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>For security and manageability, it's best to create a simple backend API (e.g., using Node.js, Python, or a serverless function).</li>
              <li>This backend will use Google's client libraries to make requests to the Google Analytics Data API, retrieve your desired metrics (like `totalUsers`, `sessions`, `activeUsers`, `pageviews`), and dimensions (like `date`, `deviceCategory`, `country`).</li>
              <li>It will then expose simple, secure endpoints (e.g., `/api/total-visitors`, `/api/daily-visitors`) for your React frontend.</li>
            </ul>
          </li>
          <li>
            **Frontend Integration:**
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>Your React `HomeContent` component (as shown in this code) would then make `fetch` requests to your backend's API endpoints.</li>
              <li>The fetched data (`totalVisitors`, `visitorData`) will be stored in the component's state and displayed dynamically.</li>
              <li>For more sophisticated charts, you can integrate a charting library like **Recharts**, **Chart.js**, or **Nivo**.</li>
            </ul>
          </li>
        </ol>
        <p className="text-gray-300 mt-4">
          By following these steps, you can build a custom, secure dashboard that displays real-time and historical analytics directly from your GA4 property.
        </p>
      </div>
      {/* --- End Google Analytics Data Integration Information --- */}
    </div>
  );
};
