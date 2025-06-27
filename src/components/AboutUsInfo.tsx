import React, { useState } from 'react';

// Define the type for a single team member
type TeamMember = {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
};

const TeamSection: React.FC = () => {
  // Sample data for five team members
  const teamMembers: TeamMember[] = [
    {
      id: 'member1',
      name: 'Alice Johnson',
      title: 'Lead Developer',
      imageUrl: 'https://placehold.co/150x150/A78BFA/ffffff?text=AJ', // Placeholder, replace with actual image URLs
      bio: 'Alice specializes in scalable web architectures and backend development with Node.js and Python. She is passionate about clean code and robust systems.'
    },
    {
      id: 'member2',
      name: 'Bob Williams',
      title: 'UI/UX Designer',
      imageUrl: 'https://placehold.co/150x150/6366F1/ffffff?text=BW', // Placeholder
      bio: 'Bob is a creative force, designing intuitive and engaging user interfaces. His expertise lies in user research, wireframing, and interactive prototypes.'
    },
    {
      id: 'member3',
      name: 'Charlie Brown',
      title: 'Frontend Engineer',
      imageUrl: 'https://placehold.co/150x150/4F46E5/ffffff?text=CB', // Placeholder
      bio: 'Charlie builds beautiful and responsive user interfaces using React and modern CSS. He has a keen eye for detail and performance optimization.'
    },
    {
      id: 'member4',
      name: 'Diana Miller',
      title: 'Marketing Specialist',
      imageUrl: 'https://placehold.co/150x150/8B5CF6/ffffff?text=DM', // Placeholder
      bio: 'Diana drives digital marketing strategies, focusing on SEO, content creation, and social media engagement to boost brand visibility.'
    },
    {
      id: 'member5',
      name: 'Eve Davis',
      title: 'Project Manager',
      imageUrl: 'https://placehold.co/150x150/C4B5FD/333333?text=ED', // Placeholder
      bio: 'Eve ensures projects are delivered on time and within budget, excelling in agile methodologies and cross-functional team coordination.'
    },
  ];

  // State to track which member's info is currently being hovered over
  // Stores the ID of the hovered member, or null if no one is hovered
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);

  return (
    <>
      <style>
        {`
        /* Import Google Font for consistency */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
          background-color: #f0f0f0; /* Light background for the theme */
          color: #333333; /* Dark text for readability */
        }

        .team-section {
          padding: 4rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #f0f0f0; /* Match body background */
        }

        .section-header {
            text-align: center;
            margin-bottom: 3rem;
            max-width: 800px;
        }

        .section-header h1 {
            font-size: 2.8rem;
            font-weight: 800;
            color: #333333; /* Dark color for main title */
            margin-bottom: 1rem;
            letter-spacing: -0.03em;
        }

        .section-header p {
            font-size: 1.1rem;
            color: #666666; /* Secondary text color */
            line-height: 1.6;
        }

        .team-members-container {
          display: flex;
          flex-wrap: wrap; /* Allow members to wrap to next line on smaller screens */
          justify-content: center; /* Center the members horizontally */
          gap: 2.5rem; /* Space between team members */
          max-width: 1200px; /* Max width for the container */
          width: 100%;
        }

        .team-member-item {
          position: relative; /* Needed for positioning the info popup */
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: transform 0.3s ease-out;
        }

        .team-member-item:hover {
          transform: translateY(-5px); /* Subtle lift on hover */
        }

        .member-image-wrapper {
          width: 150px;
          height: 150px;
          border-radius: 50%; /* Make image perfectly round */
          overflow: hidden;
          border: 4px solid #6366f1; /* Primary accent color border */
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Soft shadow */
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .team-member-item:hover .member-image-wrapper {
          border-color: #4f46e5; /* Darker primary on hover */
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
        }

        .member-image {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensure image covers the circular area */
          display: block;
        }

        .member-name {
          margin-top: 1rem;
          font-size: 1.3rem;
          font-weight: 700;
          color: #333333;
        }

        .member-title {
          font-size: 0.95rem;
          color: #666666;
          margin-bottom: 0.5rem;
        }

        /* Info Popup Styling */
        .member-info-popup {
          position: absolute;
          bottom: calc(100% + 15px); /* Position above the image with some space */
          left: 50%;
          transform: translateX(-50%); /* Center horizontally */
          background-color: #ffffff; /* White background for popup */
          border: 1px solid #e0e0e0; /* Light border */
          border-radius: 10px;
          padding: 1.2rem;
          width: 250px; /* Fixed width for the popup */
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          z-index: 10; /* Ensure it's above other elements */
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
          pointer-events: none; /* Allows clicks to pass through when not visible */
        }

        .team-member-item:hover .member-info-popup {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(-5px); /* Slight lift animation */
          pointer-events: auto; /* Enable clicks when visible */
        }

        /* Arrow / Pointer for the popup */
        .member-info-popup::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -10px; /* Position below the popup content */
          transform: translateX(-50%) rotate(45deg);
          width: 20px;
          height: 20px;
          background-color: #ffffff; /* Match popup background */
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          z-index: 9; /* Behind the main popup content */
        }

        .popup-name {
            font-size: 1.1rem;
            font-weight: 700;
            color: #333333;
            margin-bottom: 0.25rem;
        }

        .popup-title {
            font-size: 0.85rem;
            color: #6366f1; /* Primary accent color for title */
            margin-bottom: 0.75rem;
        }

        .popup-bio {
            font-size: 0.9rem;
            color: #666666;
            line-height: 1.5;
        }

        /* Responsive Adjustments */
        @media (max-width: 1024px) {
            .team-members-container {
                gap: 2rem;
            }
            .team-member-item {
                width: 180px; /* Allow more flexible width */
            }
            .member-image-wrapper {
                width: 120px;
                height: 120px;
            }
            .member-name {
                font-size: 1.2rem;
            }
            .member-title {
                font-size: 0.9rem;
            }
            .member-info-popup {
                width: 220px;
                padding: 1rem;
            }
            .popup-name {
                font-size: 1rem;
            }
            .popup-title {
                font-size: 0.8rem;
            }
            .popup-bio {
                font-size: 0.85rem;
            }
        }

        @media (max-width: 768px) {
            .team-section {
                padding: 3rem 1rem;
            }
            .section-header h1 {
                font-size: 2.2rem;
            }
            .section-header p {
                font-size: 1rem;
            }
            .team-members-container {
                flex-direction: column; /* Stack members vertically on small screens */
                align-items: center;
                gap: 1.5rem;
            }
            .team-member-item {
                width: 100%; /* Take full width when stacked */
            }
            .member-info-popup {
                position: relative; /* Position below the image when stacked */
                bottom: auto;
                left: 0;
                transform: translateX(0);
                margin-top: 1rem; /* Space below image */
                opacity: 1; /* Always visible when stacked, no hover needed */
                visibility: visible;
                pointer-events: auto;
                width: 90%; /* Take up more width */
                max-width: 300px;
            }
            .member-info-popup::after {
                display: none; /* Hide the arrow when stacked */
            }
        }

        @media (max-width: 480px) {
            .section-header h1 {
                font-size: 1.8rem;
            }
            .section-header p {
                font-size: 0.9rem;
            }
            .member-image-wrapper {
                width: 100px;
                height: 100px;
            }
            .member-name {
                font-size: 1.1rem;
            }
            .member-info-popup {
                padding: 0.8rem;
                width: 100%;
            }
            .popup-name {
                font-size: 0.95rem;
            }
            .popup-title {
                font-size: 0.75rem;
            }
            .popup-bio {
                font-size: 0.8rem;
            }
        }
        `}
      </style>

      <section className="team-section">
        <div className="section-header">
          <h1>Meet Our Exceptional Team</h1>
          <p>
            Behind every successful project is a dedicated team of passionate professionals. Get to know the talented individuals driving innovation and excellence.
          </p>
        </div>

        <div className="team-members-container">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-member-item"
              onMouseEnter={() => setHoveredMemberId(member.id)}
              onMouseLeave={() => setHoveredMemberId(null)}
            >
              <div className="member-image-wrapper">
                <img src={member.imageUrl} alt={member.name} className="member-image" />
              </div>
              <p className="member-name">{member.name}</p>
              <p className="member-title">{member.title}</p>

              {/* Info Popup - only visible on hover (or always visible on small screens) */}
              {hoveredMemberId === member.id && (
                <div className="member-info-popup">
                  <p className="popup-name">{member.name}</p>
                  <p className="popup-title">{member.title}</p>
                  <p className="popup-bio">{member.bio}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TeamSection;
