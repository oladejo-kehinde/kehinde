import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { projects } from '../Data/projects';

export default function Projects({ id = "projects" }) {
    return (
        <section
            id={id}
            className="relative overflow-hidden bg-surface px-4 py-20 text-base-text transition-colors duration-300 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <SectionHeader label="PROJECTS" className="mb-14">
                    FEATURED <span className="text-accent">PROJECTS</span>
                </SectionHeader>

                {/* Card grid: 1 column on phones, 2 on tablets, 3 on desktops */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
                        >
                            {/* Image area  */}
                            <div className="aspect-video w-full overflow-hidden bg-linear-to-br from-primary/30 to-secondary/20">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                    />
                                )}
                            </div>

                            {/* Text area */}
                            <div className="flex flex-1 flex-col p-6">
                                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                                    {project.category}
                                </p>
                                <h3 className="mt-2 text-lg font-bold text-base-text">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-text">
                                    {project.description}
                                </p>

                                <div className="mt-auto pt-6">
                                    <Link
                                        to={`/projects/${project.slug}`}
                                        className="inline-flex w-fit items-center rounded-full border border-primary/40 px-5 py-2 text-xs font-bold text-base-text transition-all hover:bg-primary hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View all */}
                {/* <div className="mt-12 flex justify-center">
                    <a
                        href="#"
                        className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-primary/20 transition-all hover:bg-primary-shade focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-sm"
                    >
                        View All Projects
                    </a>
                </div> */}

            </div>
        </section>
    );
}