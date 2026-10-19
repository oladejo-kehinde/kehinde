import profileImg from '../assets/oladejo-kehinde.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-body">
      <div className="mx-auto max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Unique Tech Frame for Image */}
          <div className="lg:col-span-5 relative group">
            {/* Soft Ambient Teal Glow Behind Image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
            
            {/* Main Image Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-card border border-primary/20 p-2 shadow-2xl aspect-[4/5]">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img 
                  src={profileImg} 
                  alt="Oladejo Kehinde" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Subtle dark gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-body/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Right Side: Header + Biography Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Section Header */}
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-base-text">
                About <span className="text-primary">Me</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base font-semibold text-primary tracking-wide">
                Creating solutions, not just automations.
              </p>
            </div>

            {/* Paragraph Copy */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-text">
              <p>
                My work focuses on assisting individuals, businesses, and teams by simplifying daily operations through workflow automation, data management, and practical digital solutions. From client onboarding and inquiry management to organizing information and streamlining email communication, I create systems that reduce repetitive tasks and make work more efficient.
              </p>
              <p>
                Beyond my technical work, I’m actively involved in tech communities, contributing to program planning, member growth, and community engagement. Working collaboratively with these teams has strengthened my communication, teamwork, and problem-solving skills, enabling me to contribute effectively toward shared goals.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}