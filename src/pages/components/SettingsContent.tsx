

export const SettingsContent: React.FC = () => { // Changed to named export
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl min-h-full">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Settings</h1>
      <p className="text-lg text-gray-300 mb-8">
        Manage your dashboard preferences and account information here.
      </p>
      <div className="space-y-6">
        <div className="bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-white mb-2">Account Preferences</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Change Username</li>
            <li>Update Password</li>
            <li>Email Notifications</li>
          </ul>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-white mb-2">Dashboard Customization</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Choose Theme (Dark/Light)</li>
            <li>Layout Options</li>
            <li>Notification Sound</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
