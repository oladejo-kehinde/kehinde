
import profileImg from '../assets/oladejo-kehinde.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-body">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-base-text">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-text">
            Creating solutions, not just automations.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none rounded-2xl overflow-hidden border border-primary/20 bg-card shadow-2xl aspect-[4/5]">
             
              <img 
                src={profileImg} 
                alt="Kenny" 
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-body/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Right Side: Narrative & Exact Details */}
          <div className="lg:col-span-7 bg-card border border-primary/10 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-text">
              <p>
                My work focuses on assisting individuals, businesses, and teams by simplifying daily operations through workflow automation, data management, and practical digital solutions. From client onboarding and inquiry management to organizing information and streamlining email communication, I create systems that reduce repetitive tasks and make work more efficient.
              </p>
              <p>
                Beyond my technical work, I’m actively involved in tech communities, contributing to program planning, member growth, and community engagement. Working collaboratively with these teams has strengthened my communication, teamwork, and problem-solving skills, enabling me to contribute effectively toward shared goals.
              </p>
            </div>

            {/* Core Competency Tags */}
            <div className="mt-8 pt-6 border-t border-gray-medium/10 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-primary">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">Workflow Automation</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">Data Management</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">Digital Solutions</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">Community Leadership</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}