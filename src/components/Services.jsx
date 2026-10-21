import { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';

const services = [
  {
    id: 1,
    title: "Workflow Automation & Integration",
    description: "",
    icon: (
      <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Lead & Client Management",
    description: "",
    icon: (
      <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Data Management & Business Systems",
    description: "",
    icon: (
      <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

export default function Services({ id = "services" }) {
  const rowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Plays the fade-up once, the first time the row scrolls into view.
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-body px-4 py-20 text-base-text transition-colors duration-300 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <SectionHeader label="WHAT I DO" className="mb-14">
          SERVICES I <span className="text-accent">OFFER</span>
        </SectionHeader>

        {/* Three items: stacked on phones, side by side from tablets up */}
        <div ref={rowRef} className="grid gap-4 md:grid-cols-3 md:gap-6">
          {services.map((service, index) => (
            
            <div
              key={service.id}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              <div className="group h-full rounded-2xl px-6 py-10 text-center transition-colors duration-300 hover:bg-card md:py-12">

                {/* Icon  */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-tint ring-1 ring-primary/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-primary/30 dark:bg-primary-deep-shade/40">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-bold leading-snug text-base-text">
                  {service.title}
                </h3>

                {service.description && (
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-text">
                    {service.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}