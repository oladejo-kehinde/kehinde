// ToolsStackSection.jsx
import React from "react";

const tools = [
  {
    name: "Make.com",
    category: "Automation",
    iconBg: "bg-[#6d28d9]", 
    icon: (
      <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "n8n",
    category: "Workflow Integration",
    iconBg: "bg-[#ea4b71]", 
    icon: (
      <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Airtable",
    category: "Database & CRM",
    iconBg: "bg-[#18bfff]", // Airtable Blue
    icon: (
      <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s-8-1.79-8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    name: "Google Sheets",
    category: "Data Management",
    iconBg: "bg-[#0f9d58]", // Google Green
    icon: (
      <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "Tally",
    category: "Forms & Data Capture",
    iconBg: "bg-[#111827]", // Tally Dark
    icon: (
      <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    name: "APIs & Webhooks",
    category: "Custom Connectivity",
    iconBg: "bg-[#31ccbf]", // Primary Base (#31ccbf)
    icon: (
      <svg className="h-6 w-6 text-slate-900 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    name: "Gmail",
    category: "Email Operations",
    iconBg: "bg-[#ea4335]", 
    icon: (
      <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Slack",
    category: "Team Alerts & Comms",
    iconBg: "bg-[#4a154b]", 
    icon: (
      <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    name: "Notion",
    category: "Knowledge Base",
    iconBg: "bg-[#000000]", 
    icon: (
      <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    name: "Google Workspace",
    category: "Productivity Suite",
    iconBg: "bg-[#4285f4]", 
    icon: (
      <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function ToolsStackSection() {
  return (
    <section id="tools" className="relative overflow-hidden bg-body px-4 py-16 text-base-text transition-colors duration-300 sm:px-6 md:px-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Block */}
        <div className="mb-10 text-center md:mb-14 md:text-left">
          <div className="mb-2 inline-block rounded-sm bg-primary/20 px-2.5 py-1">
            <span className="font-mono text-xs uppercase tracking-wider text-base-text">
              My Tool Stack
            </span>
          </div>
          <h2 className="mt-2 text-2xl font-bold uppercase leading-tight sm:text-3xl md:text-4xl">
            Tools that power my digital workflows and automations
          </h2>
        </div>

        {/* Responsive Grid - Compact card aspect ratio on mobile */}
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-gray-medium/20 bg-card p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 sm:rounded-3xl sm:p-6 sm:shadow-xl"
            >
              {/* Responsive App Icon Box */}
              <div className={`mb-2.5 flex h-12 w-12 items-center justify-center rounded-xl ${tool.iconBg} shadow-md transition-transform duration-300 group-hover:scale-105 sm:mb-4 sm:h-16 sm:w-16 sm:rounded-2xl`}>
                {tool.icon}
              </div>

              {/* Tool Name */}
              <h3 className="text-xs font-bold leading-tight text-base-text sm:text-base">
                {tool.name}
              </h3>

              {/* Tool Category Subtitle */}
              <p className="mt-0.5 text-[10px] leading-tight text-muted-text sm:mt-1 sm:text-xs">
                {tool.category}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}