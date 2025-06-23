import React, { useState } from 'react';
import '../assets/styles/Login.css'

// Main App component to demonstrate the Login component
export default function Login1() {
  return (
    // The main container for the application, centering the login form
    <div className="app-container">
      <Login />
    </div>
  );
}

// Login component
const Login: React.FC = () => {
  // State variables for email and password inputs
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // State for displaying a message (e.g., success or error)
  const [message, setMessage] = useState<string>('');
  // State to toggle between login mode and forgot password mode
  const [isForgotPasswordMode, setIsForgotPasswordMode] = useState<boolean>(false);
  // State for loading indicator
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Define your backend API base URL
  // IMPORTANT: Replace with the actual URL where your Node.js server is running
  const API_BASE_URL = 'http://localhost:5001'; // Make sure this matches your Node.js server port

  /**
   * Handles the form submission for both login and password reset.
   * Sends data to the backend API.
   * @param event The form submission event.
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    setMessage(''); // Clear previous messages
    setIsLoading(true); // Show loading indicator

    try {
      let endpoint = '';
      let bodyData: { email: string; password?: string } = { email }; // Common email field

      if (isForgotPasswordMode) {
        endpoint = `${API_BASE_URL}/api/auth/forgot-password`; // Backend password reset endpoint
        // Only email is needed for password reset
      } else {
        endpoint = `${API_BASE_URL}/api/auth/login`; // Backend login endpoint
        bodyData.password = password; // Add password for login
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json(); // Parse the JSON response from the server

      if (response.ok) { // Check if the response status is 2xx (success)
        setMessage(data.message || (isForgotPasswordMode ? 'Password reset request sent successfully!' : 'Login successful!'));
        // In a real app:
        if (!isForgotPasswordMode && data.token) {
          localStorage.setItem('authToken', data.token); // Store token for future authenticated requests
          console.log('Auth Token saved:', data.token);
          // Redirect user to dashboard or home page
          // window.location.href = '/dashboard'; // Example redirection
        } else if (isForgotPasswordMode) {
          setEmail(''); // Clear email field after successful reset request
        }
      } else {
        // Handle server errors (e.g., validation errors, invalid credentials)
        setMessage(data.message || 'An unexpected error occurred. Please try again.');
        console.error('API Error:', data);
      }
    } catch (error) {
      // Handle network errors (e.g., server not reachable, CORS issues)
      setMessage('Network error. Could not connect to the server. Please ensure the backend is running.');
      console.error('Fetch error:', error);
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  /**
   * Toggles the form mode to "Forgot Password".
   * Resets message and password fields.
   */
  const handleForgotPasswordClick = () => {
    setIsForgotPasswordMode(true);
    setMessage(''); // Clear any previous messages
    setPassword(''); // Clear password field
  };

  /**
   * Toggles the form mode back to "Login".
   * Resets message field.
   */
  const handleBackToLoginClick = () => {
    setIsForgotPasswordMode(false);
    setMessage(''); // Clear any previous messages
  };

  return (
    <>
     

      <div className="login-container">
        {/* Placeholder Logo */}
        <div className="logo">
          <img
            src="/logo1.webp" /* Updated logo background for dark theme */
            alt="Company Logo"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/80x80/4a69bd/ffffff?text=Logo"; }}
          />
        </div>

        <h2>{isForgotPasswordMode ? 'Reset Your Password' : 'Welcome'}</h2>
        {/* The key prop forces React to re-mount the form, triggering the animation */}
        <form key={isForgotPasswordMode ? 'forgot-password-form' : 'login-form'} onSubmit={handleSubmit} className="login-form">
          {/* Email Input Field (always visible) */}
          <div>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input Field (only visible in login mode) */}
          {!isForgotPasswordMode && (
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}

          {/* Optional message display */}
          {message && (
            <p className={`message ${message.includes('successful') || message.includes('sent') ? 'success' : 'error'}`}>
              {message}
            </p>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="login-button"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? <div className="spinner"></div> : (isForgotPasswordMode ? 'Reset Password' : 'Sign In')}
            </button>
          </div>

          {/* Form switch link (Forgot Password or Back to Login) */}
          <div className="form-switch-link">
            {isForgotPasswordMode ? (
              <a href="#" onClick={handleBackToLoginClick}>
                Back to Login
              </a>
            ) : (
              <a href="#" onClick={handleForgotPasswordClick}>
                Forgot your password?
              </a>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
