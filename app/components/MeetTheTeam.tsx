import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: 'Jeff Grossman',
    role: 'CEO & Founder',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    bio: 'Jeff is the CEO and founder of our company. With over 35 years of industry experience, he leads our company\'s vision and strategy. He has a proven track record of building successful teams and delivering innovative solutions. His passion for technology and user-centered design has been the driving force behind our company\'s growth. Prior to founding our company, he held leadership positions at several Fortune 500 companies.',
  },
  {
    name: 'Amy Grossman',
    role: 'CTO',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Amy is a seasoned project manager with a knack for streamlining processes and ensuring projects run smoothly. She brings a wealth of experience in project management and client relations to our team. Her attention to detail and commitment to customer satisfaction make her an invaluable asset to our company.',
  },
  {
    name: 'Jared Grossman',
    role: 'Project Manager',
    imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Jared is the lead designer and project manager at our company. He brings a unique blend of creativity and technical expertise to our team. His design skills and project management skills make him an invaluable asset to our company.',
  },
  // Add more team members as needed
];

const MeetTheTeam = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The People Behind Our Success
          </h2>
          <p className="text-xl text-gray-600">
            Meet our talented team of professionals who work tirelessly to bring innovation
            and excellence to everything we do.
          </p>
        </div>
        <div className="space-y-8" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam; 