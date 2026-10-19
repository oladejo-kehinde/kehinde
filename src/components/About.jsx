// About.jsx
import React from 'react';
import profileImg from '../assets/oladejo-kehinde.jpg'; // Adjust path as needed

export default function About({ id = "about" }) {
    return (
        <section
            id={id}
            className="relative overflow-hidden bg-[var(--bg-body)] px-6 py-20 text-[var(--text-base)] transition-colors duration-300 md:px-16"
        >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

                {/* LEFT: Image with ambient glow */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    className="relative mx-auto w-full max-w-sm"
                >
                    {/* Ambient Glow Effects */}
                    <div

                        aria-hidden="true"
                        className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-[var(--primary-base)]/30 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[var(--secondary-base)]/20 blur-3xl"
                    />

                    {/* Portrait frame */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-[var(--gray-medium)]/20 bg-[var(--card-bg)] shadow-2xl">
                        <img
                            src={profileImg}
                            alt="Oladejo Kehinde"
                            className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
                        />
                    </div>
                </div>

                {/* RIGHT: Text, vertically centered against the image */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                    className="flex w-full flex-col justify-center"
                >
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex flex-col items-start gap-4">

                            {/* Label Badge */}
                            <span className="inline-block rounded-[4px] bg-primary/20 px-[12px] py-[4px] font-mono text-xs uppercase tracking-[0.3rem] text-base-text sm:text-sm">
                                ABOUT ME
                            </span>
                        </div>


                        {/* Headline */}
                        <h2 className="text-[32px] font-bold uppercase leading-tight text-[var(--text-base)] md:text-[40px]">
                            CREATING SOLUTIONS, <span className="text-[var(--primary-base)]">NOT JUST</span> AUTOMATIONS.
                        </h2>

                        {/* Paragraphs */}
                        <div className="space-y-4 text-[16px] leading-relaxed text-[var(--muted-text)]">
                            <p>
                                My work focuses on assisting individuals, businesses, and teams by simplifying daily operations through workflow automation, data management, and practical digital solutions. From client onboarding and inquiry management to organizing information and streamlining email communication, I create systems that reduce repetitive tasks and make work more efficient.
                            </p>
                            <p>
                                Beyond my technical work, I'm actively involved in tech communities, contributing to program planning, member growth, and community engagement. Working collaboratively with these teams has strengthened my communication, teamwork, and problem-solving skills, enabling me to contribute effectively toward shared goals.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}