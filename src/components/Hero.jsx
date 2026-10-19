import { useState, useEffect } from "react";
import Reveal from "./Reveal";
const EMAIL = "kehin.dejo@gmail.com";

const SOCIALS = [
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/oladejokehinde",
        external: true,
        icon: (
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
        ),
    },
    {
        label: "Email",
        href: `mailto:${EMAIL}`,
        icon: (
            <svg
                className="h-4 w-4 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
    {
        label: "WhatsApp",
        // TODO: replace with your real number (international format, no + or spaces)
        href: "https://wa.me/2340000000000",
        external: true,
        icon: (
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 16.5c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.24-8.22 8.24z" />
            </svg>
        ),
    },
    {
        label: "Discord",
        // TODO: replace with your real profile or server invite link
        href: "https://discord.com",
        external: true,
        icon: <span className="text-[11px] font-bold">DEV</span>,
    },
];

const iconLink =
    "flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-card text-primary transition-all hover:bg-primary hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

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
                <div className="mb-2 inline-block rounded-sm bg-primary/20 px-2 py-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-base-text sm:text-sm">
                        Oladejo Kehinde
                    </span>
                </div>

                {/* One h1 per page; the role is part of it so search engines and screen readers read both together */}
                <h1 className="space-y-3 font-bold uppercase leading-tight tracking-tight">
                    <span className="block text-2xl text-base-text sm:text-3xl lg:text-4xl">
                        Hi, I&apos;m Kenny
                    </span>
                    <span className="block text-2xl text-primary sm:text-3xl lg:text-4xl">
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