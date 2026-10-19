// ServicesSection.jsx
import React from "react";

const services = [
  {
    id: 1,
    title: "Workflow Automation",
    description: "Automating repetitive business tasks and connecting tools to improve efficiency.",
    bulletPoints: [
      "Custom workflow scenario design",
      "Multi-step task automation",
      "Process optimization & auditing",
      "Error handling & logging",
    ],
    icon: (
      <svg className="h-6 w-6 text-[var(--primary-base)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Lead Capture & Management",
    description: "Collecting enquiries, organizing lead data, and routing leads to the right people.",
    bulletPoints: [
      "Instant enquiry notifications",
      "Lead routing to Slack/Email",
      "Airtable & CRM data mapping",
      "Automated auto-responder triggers",
    ],
    icon: (
      <svg className="h-6 w-6 text-[var(--primary-base)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Client Onboarding Automation",
    description: "Automating client information collection, welcome emails, and document preparation.",
    bulletPoints: [
      "Automated intake forms",
      "Welcome email sequencing",
      "Folder structure generation",
      "Client status tracking",
    ],
    icon: (
      <svg className="h-6 w-6 text-[var(--primary-base)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Email & Follow-up Automation",
    description: "Setting up automatic replies, notifications, and follow-up workflows.",
    bulletPoints: [
      "Drip email campaigns",
      "Automated follow-up reminders",
      "Transactional email setups",
      "Custom triggers & scheduling",
    ],
    icon: (
      <svg className="h-6 w-6 text-[var(--primary-base)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Data Management & CRM Setup",
    description: "Organizing customer records, databases, and business information using Airtable and Google Sheets.",
    bulletPoints: [
      "Relational database design",
      "Airtable & Google Sheets architecture",
      "Automated data syncing",
      "Dashboard & view customization",
    ],
    icon: (
      <svg className="h-6 w-6 text-[var(--primary-base)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Form, Webhook & App Integration",
    description: "Connecting forms and business applications to automatically transfer data and trigger actions.",
    bulletPoints: [
      "Make & n8n webhook setup",
      "Tally & Google Forms integrations",
      "API data transformation",
      "Slack / Discord bot alerts",
    ],
    icon: (
      <svg className="h-6 w-6 text-[var(--primary-base)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[var(--bg-body)] px-6 py-20 text-[var(--text-base)]">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Block */}
        <div className="mb-14 text-center md:text-left">
          
          <h2 className="mt-2 text-3xl font-bold uppercase leading-tight md:text-4xl">
            SERVICES I <span className="text-[var(--primary-base)]">OFFER</span>
          </h2> 
        </div>

        {/* 6-Card Grid */}
<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
  {services.map((service) => (
    <div
      key={service.id}
      className="group relative flex flex-col rounded-2xl border border-gray-medium/20 bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
    >
      {/* Icon Box */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-tint dark:bg-primary-deep-shade/40">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-base-text">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed text-muted-text">
        {service.description}
      </p>

      {/* Bullet Points */}
      <ul className="mt-4 space-y-1.5">
        {service.bulletPoints.map((point, index) => (
          <li key={index} className="flex items-center gap-2.5 text-xs text-muted-text">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}