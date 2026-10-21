import { useState } from 'react';
// The label badge. Used by every section, and by Hero for the name.
export function Badge({ children }) {
    return (
        <span className="inline-block rounded-[4px] bg-primary/20 px-[12px] py-[4px] font-mono text-xs uppercase tracking-[0.3rem] text-base-text sm:text-sm">
            {children}
        </span>
    );
}

export default function SectionHeader({ label, subtitle, children, className = "" }) {
    return (
        <div className={`flex flex-col items-start gap-4 ${className}`}>
            <Badge>{label}</Badge>
            <h2 className="text-[28px] font-bold uppercase leading-tight text-base-text sm:text-[32px] md:text-[40px]">
                {children}
            </h2>
            {subtitle && (
                <p className="max-w-xl text-base leading-relaxed text-muted-text">
                    {subtitle}
                </p>
            )}
        </div>
    );
}