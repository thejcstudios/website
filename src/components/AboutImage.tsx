import { useState } from 'react';
import '../assets/styles/AboutImage.css';


interface Member {
  id: string;
  name: string;
  title: string;
  bio: string;
  hotspot: {
    left: string;
    top: string;
    width: string;
    height: string;
  };
}

const members: Member[] = [
  {
    id: '1',
    name: 'Ramon Nado',
    title: 'Creative Director',
    bio: 'Creating something that creator do',
    hotspot: { left: '6%', top: '30%', width: '10%', height: '60%' }
  },
  {
    id: '2',
    name: 'Michael Tan',
    title: 'Lead Laptop Boy',
    bio: 'Laptop lang sapat na',
    hotspot: { left: '17%', top: '30%', width: '10%', height: '60%' }
  },
  {
    id: '3',
    name: 'Jc Cordero',
    title: 'The Jc Studios Founder',
    bio: 'Pinuno',
    hotspot: { left: '31%', top: '30%', width: '10%', height: '60%' }
  },
  {
    id: '4',
    name: 'Darren Yu',
    title: 'Film Director',
    bio: 'Napasama lng no choice na eh',
    hotspot: { left: '40%', top: '30%', width: '8%', height: '60%' }
  },
  {
    id: '5',
    name: 'Jan Yuwari',
    title: 'Client Manager',
    bio: 'Maiba lng.',
    hotspot: { left: '46%', top: '30%', width: '10%', height: '60%' }
  },
  {
    id: '6',
    name: 'Raymart Santiago',
    title: 'Lighting Specialist',
    bio: 'The kagat Labi',
    hotspot: { left: '54%', top: '30%', width: '8%', height: '60%' }
  },
  {
    id: '7',
    name: 'Lito Lapid',
    title: 'Production Assistant',
    bio: 'The Talker',
    hotspot: { left: '62%', top: '30%', width: '10%', height: '60%' }
  },
  {
    id: '8',
    name: 'Isaac Lee',
    title: 'Editor',
    bio: 'The Annoyed',
    hotspot: { left: '72%', top: '30%', width: '10%', height: '60%' }
  },
  {
    id: '9',
    name: 'Vhong Navarro',
    title: 'Visual Stylist',
    bio: 'Hunter',
    hotspot: { left: '83%', top: '30%', width: '10%', height: '60%' }
  }
];

const TeamOverlay: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="team-overlay-section">
      <div className="overlay-heading">
        <h1>Meet Our Creative Team</h1>
        <p>Every face behind JC Studios is part of the magic. Hover over to learn more.</p>
      </div>
      <div className="team-overlay-container">
        <img
          src="https://i.imgur.com/UV9K9o7.jpeg"
          alt="JC Studios Team"
          className="team-overlay-image"
        />
        {members.map(member => (
          <div
            key={member.id}
            className="hotspot"
            style={member.hotspot}
            onMouseEnter={() => setHoveredId(member.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {hoveredId === member.id && (
              <div className="popup lower">
                <h2>{member.name}</h2>
                <h4>{member.title}</h4>
                <p>{member.bio}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamOverlay;

  