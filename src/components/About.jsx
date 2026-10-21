import profileImg from '../assets/oladejo-kehinde.jpg'; 
import SectionHeader from './SectionHeader';

export default function About({ id = "about" }) {
    return (
        <section
            id={id}
            className="relative overflow-hidden bg-body px-6 py-20 text-base-text transition-colors duration-300 md:px-16"
        >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

                {/* LEFT: Image with ambient glow */}
                <div className="relative mx-auto w-full max-w-sm">
                    <div
                        aria-hidden="true"
                        className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-primary/30 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-secondary/20 blur-3xl"
                    />

                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-gray-medium/20 bg-card shadow-2xl">
                        <img
                            src={profileImg}
                            alt="Oladejo Kehinde"
                            className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
                        />
                    </div>
                </div>

                {/* RIGHT: Text */}
                <div className="flex w-full flex-col items-start justify-center gap-4">
                    <SectionHeader label="ABOUT ME">
                        CREATING SOLUTIONS, <span className="text-accent">NOT JUST</span> AUTOMATIONS.
                    </SectionHeader>

                    <div className="space-y-4 break-words text-[15px] leading-7 text-muted-text sm:space-y-5 sm:text-base sm:leading-8 md:text-[17px]">
                        <p>
                            My work focuses on assisting individuals, businesses, and teams by simplifying daily operations through workflow automation, data management, and practical digital solutions.
                        </p>
                        <p>
                            From client onboarding and inquiry management to organizing information and streamlining email communication, I create systems that reduce repetitive tasks and make work more efficient.
                        </p>
                        <p>
                            Beyond my technical work, I'm actively involved in tech communities, contributing to program planning, member growth, and community engagement.
                        </p>
                        <p>
                            Working collaboratively with these teams has strengthened my communication, teamwork, and problem-solving skills, enabling me to contribute effectively toward shared goals.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}