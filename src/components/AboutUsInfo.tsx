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
      title: 'Creative Director/Editor',
      imageUrl: 'https://i.imgur.com/YLJPbD9.jpeg',
      bio: 'I lead the vision and style of our photo and video projects, ensuring every frame tells a compelling story. My focus is on capturing emotion, detail, and cinematic quality in everything we produce.',
    },
    {
      id: 'member2',
      name: 'REYN',
      title: 'Senior Film Maker',
      imageUrl: 'https://i.imgur.com/BtPFJmS.jpeg',
      bio: 'Reyn handles the role of managing the team while spotting the important moment in a candid shooting style. Her multitasking expertise ensures the final output is extraordinary.',
    },
    {
      id: 'member3',
      name: 'MJ',
      title: 'Senior Cinematographer',
      imageUrl: 'https://i.imgur.com/8nF8zC4.jpeg',
      bio: 'We utilized MJ s expertise in power shots for our introductions. The film became more amazing and thrilling to watch because of his direction and ability to generate moments.',
    },
    {
      id: 'member4',
      name: 'KYLE',
      title: 'Senior Lensman',
      imageUrl: 'https://i.imgur.com/MxCMw1d.jpeg',
      bio: 'Kyle recognizes the value of preserving every second, every feeling, and every aspect of your special day through his lens. His talent was enhanced by his tenacity.',
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
