interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

const TeamMember = ({ name, role, imageUrl, bio }: TeamMemberProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex-shrink-0">
        <div className="w-48 h-48 overflow-hidden rounded-xl">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
          <p className="text-lg text-orange-500 font-medium mt-1">{role}</p>
        </div>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember; 