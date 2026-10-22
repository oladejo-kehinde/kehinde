import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
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
    submissionData.append("subject", `New Inquiry: ${formData.service || "General Inquiry"} from ${formData.name}`);
    submissionData.append("from_name", formData.name);

    // Append all form values
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
    phone: "",
    service: "",
    timeline: "",
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
    <section id="contact" className="relative overflow-hidden bg-body px-6 py-24 text-base-text transition-colors duration-300 md:px-16">
      <div className="mx-auto max-w-6xl">
        
        {/* Layout Grid: Left (Info & Socials) & Right (Interactive Form) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* LEFT COLUMN: Heading & Contact Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="mb-4 inline-block rounded-sm bg-primary/20 px-2.5 py-1">
                <span className="font-mono text-xs uppercase tracking-wider text-base-text">
                  Get In Touch
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold uppercase tracking-tight md:text-5xl text-base-text">
                Let's Create <span className="text-accent">Together</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-text">
                Ready to bring your vision to life? Let's discuss your project and create something amazing together.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="mt-10 space-y-6">
              
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-accent">
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
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-text">Phone</p>
                  <a href="tel:+2349130893909" className="text-sm font-semibold text-base-text hover:text-accent transition-colors">
                    +234 9130893909
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-text">Response Time</p>
                  <p className="text-sm font-semibold text-base-text">Within 24 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-text">Location</p>
                  <p className="text-sm font-semibold text-base-text">Available Worldwide (Remote)</p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="mb-4 text-xs uppercase tracking-wider text-muted-text">
                Connect With Me
              </p>
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/oladejo-kehinde"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-medium/20 bg-card text-base-text transition-all hover:bg-primary hover:text-slate-900"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:kehindeoladejo43@gmail.com"
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-medium/20 bg-card text-base-text transition-all hover:bg-primary hover:text-slate-900"
                >
                  <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/2349130893909"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-medium/20 bg-card text-base-text transition-all hover:bg-primary hover:text-slate-900"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.187 8.187 0 0 1-5.82 2.42c-1.48 0-2.92-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.183 8.183 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.24-8.24m-3.53 4.31c-.13 0-.34.05-.52.24-.18.2-.68.67-.68 1.63 0 .96.7 1.89.8 2.02.1.13 1.37 2.09 3.32 2.93 1.63.7 1.96.56 2.31.53.35-.03 1.13-.46 1.29-.9.16-.45.16-.84.11-.92-.05-.08-.18-.13-.37-.23-.19-.09-1.13-.56-1.3-.62-.18-.07-.31-.1-.44.1-.13.19-.5.62-.62.75-.11.13-.23.15-.42.05-.19-.09-.82-.3-1.56-.96-.58-.51-.97-1.15-1.08-1.35-.11-.19-.01-.3.08-.39.08-.08.19-.23.28-.34.1-.11.13-.19.19-.32.07-.13.03-.24-.02-.34-.05-.09-.44-1.06-.6-1.45-.16-.39-.33-.33-.45-.34" />
                  </svg>
                </a>

                {/* Discord */}
                <a
                  href="https://discord.gg/fuUykwJH"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-medium/20 bg-card text-base-text transition-all hover:bg-primary hover:text-slate-900"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Form Card (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-medium/20 bg-card p-8 shadow-2xl md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-text mb-2">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-medium/20 bg-surface px-4 py-3.5 text-sm text-base-text placeholder-muted-text/50 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-text mb-2">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="youremail@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-medium/20 bg-surface px-4 py-3.5 text-sm text-base-text placeholder-muted-text/50 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Service Needed Row */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-text mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+234 913 089 3909"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-medium/20 bg-surface px-4 py-3.5 text-sm text-base-text placeholder-muted-text/50 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-text mb-2">
                      Which Service Do You Need? <span className="text-accent">*</span>
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-medium/20 bg-surface px-4 py-3.5 text-sm text-base-text focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Workflow Automation">Workflow Automation</option>
                      <option value="Lead Capture & Management">Lead Capture & Management</option>
                      <option value="Client Onboarding Automation">Client Onboarding Automation</option>
                      <option value="Email & Follow-up Automation">Email & Follow-up Automation</option>
                      <option value="Data Management & CRM Setup">Data Management & CRM Setup</option>
                      <option value="Form, Webhook & App Integration">Form, Webhook & App Integration</option>
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-text mb-2">
                    What's Your Preferred Timeline?
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-medium/20 bg-surface px-4 py-3.5 text-sm text-base-text focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="" disabled>Select project timeline</option>
                    <option value="Immediate (1-2 Weeks)">Immediate (1-2 Weeks)</option>
                    <option value="1 Month">1 Month</option>
                    <option value="2-3 Months">2-3 Months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                {/* Message Description */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-text mb-2">
                    Briefly Describe Your Project <span className="text-accent">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me a bit about your goals and what you want to automate..."
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
                  className="w-full flex items-center justify-center gap-3 rounded-full bg-primary py-4 px-8 font-semibold uppercase tracking-wider text-slate-900 transition-all hover:bg-secondary hover:text-white shadow-lg disabled:opacity-50"
                >
                  <span>{loading ? "Sending..." : "Submit"}</span>
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
        <div className="mt-20 pt-8 border-t border-gray-medium/10 text-center text-xs text-muted-text">
          <p>© {new Date().getFullYear()} Oladejo Kehinde. All Rights Reserved.</p>
        </div>

      </div>
    </section>
  );
}