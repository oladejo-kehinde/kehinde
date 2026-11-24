import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const submissionData = new FormData();
    submissionData.append("access_key", "442895cb-baa1-4adc-8905-32fb76551603");
    submissionData.append("subject", `Portfolio Contact: ${formData.subject || "New Message"} from ${formData.name}`);
    submissionData.append("from_name", formData.name);

    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setStatusMessage("");
        }, 3000);
      } else {
        setStatusMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatusMessage("Failed to send message. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-body px-6 py-20 text-base-text transition-colors duration-300 md:px-16">
      <div className="mx-auto max-w-6xl">
        
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* LEFT COLUMN: Personal Info & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="mb-4 inline-block rounded-sm bg-primary/20 px-2.5 py-1">
                <span className="font-mono text-xs uppercase tracking-wider text-base-text">
                  Direct Contact
                </span>
              </div>

              {/* Personal Title */}
              <h2 className="text-3xl font-bold uppercase tracking-tight md:text-5xl text-base-text">
                Let's <span className="text-accent">Connect</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-text">
                Have a project in mind, an automation idea to discuss, or an open role? Drop me a message and I'll get back to you shortly.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="mt-8 space-y-6">
              
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-text">Email</p>
                  <a href="mailto:kehindeoladejo43@gmail.com" className="text-sm font-semibold text-base-text hover:text-accent transition-colors">
                    kehindeoladejo43@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-text">Phone / WhatsApp</p>
                  <a href="https://wa.me/2349130893909" target="_blank" rel="noreferrer" className="text-sm font-semibold text-base-text hover:text-accent transition-colors">
                    +234 913 089 3909
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-text">Availability</p>
                  <p className="text-sm font-semibold text-base-text">Open for Remote Roles & Projects</p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-wider text-muted-text">
                Social Profiles
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/oladejo-kehinde"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-medium/20 bg-card text-base-text transition-all hover:bg-primary hover:text-slate-900"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/2349130893909"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-medium/20 bg-card text-base-text transition-all hover:bg-primary hover:text-slate-900"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.187 8.187 0 0 1-5.82 2.42c-1.48 0-2.92-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.183 8.183 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.24-8.24m-3.53 4.31c-.13 0-.34.05-.52.24-.18.2-.68.67-.68 1.63 0 .96.7 1.89.8 2.02.1.13 1.37 2.09 3.32 2.93 1.63.7 1.96.56 2.31.53.35-.03 1.13-.46 1.29-.9.16-.45.16-.84.11-.92-.05-.08-.18-.13-.37-.23-.19-.09-1.13-.56-1.3-.62-.18-.07-.31-.1-.44.1-.13.19-.5.62-.62.75-.11.13-.23.15-.42.05-.19-.09-.82-.3-1.56-.96-.58-.51-.97-1.15-1.08-1.35-.11-.19-.01-.3.08-.39.08-.08.19-.23.28-.34.1-.11.13-.19.19-.32.07-.13.03-.24-.02-.34-.05-.09-.44-1.06-.6-1.45-.16-.39-.33-.33-.45-.34" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Simple Personal Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-gray-medium/20 bg-card p-6 shadow-xl md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-text mb-1.5">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-medium/20 bg-surface px-4 py-3 text-sm text-base-text placeholder-muted-text/50 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-text mb-1.5">
                      Your Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-medium/20 bg-surface px-4 py-3 text-sm text-base-text placeholder-muted-text/50 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-text mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Workflow Automation Inquiry / Role Discussion"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-medium/20 bg-surface px-4 py-3 text-sm text-base-text placeholder-muted-text/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Message Description */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-text mb-1.5">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Hi Kenny, I'd like to discuss an automation process or role..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-medium/20 bg-surface p-4 text-sm text-base-text placeholder-muted-text/50 focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Status Feedback Message */}
                {statusMessage && (
                  <p className={`text-sm font-medium ${statusMessage.includes("Thank you") ? "text-emerald-400" : "text-rose-400"}`}>
                    {statusMessage}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 rounded-full bg-primary py-3.5 px-8 font-semibold uppercase tracking-wider text-slate-900 transition-all hover:bg-secondary hover:text-white shadow-md disabled:opacity-50"
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  {!loading && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-gray-medium/10 text-center text-xs text-muted-text">
          <p>© {new Date().getFullYear()} Oladejo Kehinde. All Rights Reserved.</p>
        </div>

      </div>
    </section>
  );
}