import { Badge } from './SectionHeader';

const EMAIL = "oladejokehinde43@gmail.com";

export const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/oladejokehinde",
    external: true,
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `${EMAIL}`,
    external: false,
    icon: (
      <svg
        className="h-5 w-5 fill-none stroke-current stroke-2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp", 
    href: "https://wa.me/+2349130893909",
    external: true,
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.187 8.187 0 0 1-5.82 2.42c-1.48 0-2.92-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.183 8.183 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.24-8.24m-3.53 4.31c-.13 0-.34.05-.52.24-.18.2-.68.67-.68 1.63 0 .96.7 1.89.8 2.02.1.13 1.37 2.09 3.32 2.93 1.63.7 1.96.56 2.31.53.35-.03 1.13-.46 1.29-.9.16-.45.16-.84.11-.92-.05-.08-.18-.13-.37-.23-.19-.09-1.13-.56-1.3-.62-.18-.07-.31-.1-.44.1-.13.19-.5.62-.62.75-.11.13-.23.15-.42.05-.19-.09-.82-.3-1.56-.96-.58-.51-.97-1.15-1.08-1.35-.11-.19-.01-.3.08-.39.08-.08.19-.23.28-.34.1-.11.13-.19.19-.32.07-.13.03-.24-.02-.34-.05-.09-.44-1.06-.6-1.45-.16-.39-.33-.33-.45-.34" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.com",
    external: true,
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
];

const iconLink =
    "flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-card text-accent transition-all hover:bg-primary hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-svh w-full items-center justify-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-8"
        >
            {/* Soft glow on the right, standing in for where the photo would sit */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[8%] top-1/2 hidden h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl lg:block"
            />

            <div className="relative w-full max-w-7xl text-center lg:text-left">
                {/* Name badge */}
                {/* Name badge */}
<div className="mb-2">
    <Badge>Oladejo Kehinde</Badge>
</div>

                {/* One h1 per page; the role is part of it so search engines and screen readers read both together */}
                <h1 className="space-y-3 font-bold uppercase leading-tight tracking-tight">
                    <span className="block text-2xl text-base-text sm:text-3xl lg:text-4xl">
                        Hi, I&apos;m Kenny
                    </span>
                    <span className="block text-2xl text-accent sm:text-3xl lg:text-4xl">
                        Automation Specialist
                    </span>
                </h1>

                {/* Normal sentence case so the longer line stays easy to read */}
                <p className="mx-auto mt-8 max-w-xl lg:mx-0 text-base font-medium leading-relaxed text-base-text md:text-lg">
                    Building smarter workflows and making everyday work simpler through
                    automation and digital tools.
                </p>

                {/* Actions */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                    <a
                        href={`mailto:${EMAIL}`}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-sm"
                    >
                        Get in touch <span aria-hidden="true">→</span>
                    </a>

                    <ul className="flex items-center gap-3">
                        {SOCIALS.map(({ label, href, icon, external }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    aria-label={label}
                                    className={iconLink}
                                    {...(external && { target: "_blank", rel: "noreferrer" })}
                                >
                                    {icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}