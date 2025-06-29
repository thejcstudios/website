import React, { useState } from 'react';
import '../assets/styles/AboutUsInfo.css'

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
      name: 'JC ',
      title: 'Creative Director',
      imageUrl: 'https://i.imgur.com/YLJPbD9.jpeg',
      bio: 'I lead the vision and style of our photo and video projects, ensuring every frame tells a compelling story. My focus is on capturing emotion, detail, and cinematic quality in everything we produce.',
    },
    {
      id: 'member2',
      name: 'REYN',
      title: 'Film Maker',
      imageUrl: 'https://i.imgur.com/BtPFJmS.jpeg',
      bio: 'Alexa is behind the lens capturing life’s best moments. Her experience spans weddings, events, and corporate shoots, delivering stunning visuals with professional storytelling.',
    },
    {
      id: 'member3',
      name: 'MJ',
      title: 'Cinematographer',
      imageUrl: 'https://i.imgur.com/8nF8zC4.jpeg',
      bio: 'Miguel specializes in portraits, engagements, and creative editorial shoots. He brings a blend of technical skill and artistic vision to every photo session.',
    },
    {
      id: 'member4',
      name: 'KYLE',
      title: 'Lensman',
      imageUrl: 'https://i.imgur.com/MxCMw1d.jpeg',
      bio: 'Sarah brings footage to life with seamless editing, color grading, and sound design. Her post-production expertise ensures polished and engaging final cuts.',
    },
   
  ];

  // State to track which member's info is currently being hovered over
  // Stores the ID of the hovered member, or null if no one is hovered
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);

  return (
    <>
    

      <section className="team-section">
        <div className="section-header">
          <h1>Meet Our Exceptional Team</h1>
          <p>
          Behind every captivating shot and perfectly timed frame is a team of creative visionaries. At JC Studios, our passionate photographers, videographers, and editors work together to turn moments into timeless memories. Get to know the talent that brings your stories to life with style, precision, and heart.
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
