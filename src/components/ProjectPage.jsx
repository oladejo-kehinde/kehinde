import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Badge } from './SectionHeader';
import { projects } from '../Data/projects.js';

const backLinkClass =
    "inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-xs font-bold text-base-text transition-all hover:bg-primary hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

// Fades a block up the first time it scrolls into view.
function FadeIn({ children, className = "" }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            } ${className}`}
        >
            {children}
        </div>
    );
}

function Paragraphs({ text }) {
    return (
        <div className="max-w-[70ch] space-y-4">
            {text.split(/\n\s*\n/).map((para, i) => (
                <p key={i} className="break-words text-base leading-8 text-muted-text md:text-[17px]">
                    {para}
                </p>
            ))}
        </div>
    );
}

// A card for "The problem" and "What I built".
function StoryCard({ icon, title, text, accent = false }) {
    return (
        <div
            className={`rounded-2xl border p-5 sm:p-8 ${
                accent
                    ? 'border-primary/40 bg-linear-to-br from-primary/10 to-transparent'
                    : 'border-gray-medium/20 bg-card'
            }`}
        >
            <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-tint ring-1 ring-primary/20 dark:bg-primary-deep-shade/40">
                    {icon}
                </span>
                <h2 className="text-xl font-bold text-base-text md:text-2xl">{title}</h2>
            </div>
            <div className="mt-5">
                <Paragraphs text={text} />
            </div>
        </div>
    );
}

const problemIcon = (
    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
);

const solutionIcon = (
    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export default function ProjectPage() {
    // Reads the slug from the web address and finds the matching project
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    // If someone types a wrong address, show a friendly message instead of a blank page
    if (!project) {
        return (
            <section className="min-h-svh bg-body px-4 pb-20 pt-36 text-center text-base-text sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold">Project not found</h1>
                <p className="mt-3 text-muted-text">That project doesn't exist or has moved.</p>
                <Link to="/#projects" className={`mt-8 ${backLinkClass}`}>
                    <span aria-hidden="true">←</span> Back to projects
                </Link>
            </section>
        );
    }

    return (
        <section className="min-h-svh bg-body px-4 pb-24 pt-32 text-base-text transition-colors duration-300 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <Link to="/#projects" className={backLinkClass}>
                    <span aria-hidden="true">←</span> Back to projects
                </Link>

                {/* Title */}
                <FadeIn className="mt-10 flex max-w-4xl flex-col items-start gap-4">
                    <Badge>{project.category}</Badge>
                    <h1 className="break-words text-[28px] font-bold uppercase leading-tight text-base-text sm:text-[40px] md:text-[52px]">
                        {project.title}
                    </h1>
                </FadeIn>

                <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">

                    <aside className="order-first min-w-0 lg:order-last lg:col-span-4">
                        <div className="rounded-2xl border border-primary/20 bg-card p-6 shadow-md lg:sticky lg:top-28">
                            {project.tools?.length > 0 && (
                                <>
                                    <p className="font-mono text-xs uppercase tracking-[0.2rem] text-muted-text">
                                        Tools used
                                    </p>
                                    <ul className="mt-3 flex flex-wrap gap-2">
                                        {project.tools.map((tool) => (
                                            <li
                                                key={tool}
                                                className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-base-text"
                                            >
                                                {tool}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {project.liveLink && (
                                <div className="mt-8">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-primary/20 transition-all hover:bg-primary-shade focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        Open project <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </aside>

                    <div className="min-w-0 space-y-8 lg:col-span-8">

                        {project.image && (
                            <FadeIn>
                                <div className="overflow-hidden rounded-2xl border border-gray-medium/20 bg-card shadow-xl">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        decoding="async"
                                        className="aspect-video max-h-[380px] w-full object-cover"
                                    />
                                </div>
                            </FadeIn>
                        )}

                        {project.overview && (
                            <FadeIn>
                                <h2 className="mb-5 text-xl font-bold text-base-text md:text-2xl">Overview</h2>
                                <div className="border-l-2 border-primary pl-4 sm:pl-6">
                                    <Paragraphs text={project.overview} />
                                </div>
                            </FadeIn>
                        )}

                        {project.problem && (
                            <FadeIn>
                                <StoryCard icon={problemIcon} title="The problem" text={project.problem} />
                            </FadeIn>
                        )}

                        {project.solution && (
                            <FadeIn>
                                <StoryCard icon={solutionIcon} title="What I built" text={project.solution} accent />
                            </FadeIn>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
}