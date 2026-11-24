import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Badge } from './SectionHeader';
import { projects } from '../Data/projects.js';

const backLinkClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-xs font-bold text-base-text transition-all hover:bg-primary hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

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

function Callout({ icon, children, accent = false }) {
  return (
    <div
      className={`flex items-start gap-3.5 rounded-2xl border p-5 sm:p-6 ${
        accent
          ? 'border-primary/40 bg-primary/10'
          : 'border-gray-medium/20 bg-card'
      }`}
    >
      <span className="mt-0.5 text-xl leading-none select-none" aria-hidden="true">
        {icon}
      </span>
      <div className="min-w-0 flex-1 text-base leading-relaxed text-base-text">
        {children}
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

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
      <div className="mx-auto max-w-3xl">

        {/* Back button */}
        <Link to="/#projects" className={backLinkClass}>
          <span aria-hidden="true">←</span> Back to projects
        </Link>

        {/* Header */}
        <FadeIn className="mt-8 space-y-3">
          <Badge>{project.category}</Badge>
          <h1 className="break-words text-3xl font-bold leading-tight text-base-text sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
        </FadeIn>

        {/* Compact Video or Banner Preview */}
        {(project.video || project.image) && (
          <FadeIn className="mt-6">
            <div className="overflow-hidden rounded-2xl border border-gray-medium/20 bg-card shadow-lg">
              {project.video ? (
                <iframe
                  src={project.video}
                  title={`${project.title} walkthrough`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="aspect-video max-h-[320px] w-full border-0"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  decoding="async"
                  className="aspect-[21/9] max-h-[260px] w-full object-cover"
                />
              )}
            </div>
          </FadeIn>
        )}

        {/* Before & After */}
        <div className="mt-8 space-y-4">
          {project.before && (
            <FadeIn>
              <Callout icon="">
                <p className="font-bold text-base-text">Before</p>
                <p className="mt-1 text-muted-text">{project.before}</p>
              </Callout>
            </FadeIn>
          )}

          {project.after && (
            <FadeIn>
              <Callout icon="" accent>
                <p className="font-bold text-base-text">After</p>
                <p className="mt-1 text-base-text/90">{project.after}</p>
              </Callout>
            </FadeIn>
          )}
        </div>

        {/* What it does */}
        {project.whatItDoes?.length > 0 && (
          <FadeIn className="mt-10 space-y-3">
            <h2 className="text-2xl font-bold text-base-text">What it does</h2>
            <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-text">
              {project.whatItDoes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </FadeIn>
        )}

        {/* How it's built */}
        {(project.howItsBuilt || project.workflowImage) && (
          <FadeIn className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-base-text">How it&apos;s built</h2>
            {project.workflowImage && (
              <div className="overflow-hidden rounded-2xl border border-gray-medium/20 bg-card shadow-md">
                <img
                  src={project.workflowImage}
                  alt={`${project.title} workflow`}
                  loading="lazy"
                  className="max-h-[280px] w-full object-contain"
                />
              </div>
            )}
            {project.howItsBuilt && (
              <Callout icon="">
                <p className="text-base-text">{project.howItsBuilt}</p>
              </Callout>
            )}
          </FadeIn>
        )}

        {/* Optional Live Link Button */}
        {project.liveLink && (
          <FadeIn className="mt-8">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-primary/20 transition-all hover:bg-primary-shade"
            >
              Open project <span aria-hidden="true">→</span>
            </a>
          </FadeIn>
        )}

      </div>
    </section>
  );
}