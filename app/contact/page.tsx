"use client";

import { useState } from "react";
import PageHeader from "../components/PageHeader";

const services = [
  "Sales & Rental of IT Solutions",
  "IT Infrastructure Deployment",
  "Security & Surveillance",
  "Software Deployment",
  "Networking & Management",
  "General Enquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send message.");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's Talk About Your Requirements"
        subtitle="Reach out by phone, email, or the form below. We respond promptly to all enquiries."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2 accent-line">
                  Get in Touch
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mt-5">
                  Whether you have a fully scoped project or just an initial question — we
                  are happy to help. Our team responds to all enquiries promptly.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5">
                  <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-500 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm mb-1">Phone</p>
                    <a href="tel:+233551555155" className="text-slate-600 text-sm hover:text-sky-500 transition-colors block">
                      +233 551 555 155
                    </a>
                    <a href="tel:+233551777177" className="text-slate-600 text-sm hover:text-sky-500 transition-colors block mt-0.5">
                      +233 551 777 177
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5">
                  <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-500 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm mb-1">Email</p>
                    <a
                      href="mailto:lilian.cartey@gokeenngh.com"
                      className="text-slate-600 text-sm hover:text-sky-500 transition-colors break-all"
                    >
                      lilian.cartey@gokeenngh.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5">
                  <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-500 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm mb-1">Location</p>
                    <p className="text-slate-600 text-sm">Accra, Ghana</p>
                    <p className="text-slate-400 text-xs mt-0.5">Serving organisations nationwide</p>
                  </div>
                </div>
              </div>

              {/* Services quick list */}
              <div className="bg-slate-900 rounded-2xl p-7">
                <h3 className="text-white font-semibold text-sm mb-4">What can we help with?</h3>
                <ul className="space-y-2.5">
                  {services.slice(0, 5).map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-sky-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex items-center justify-center text-center p-12 bg-sky-50 border border-sky-100 rounded-2xl">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-sky-500 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-slate-900 font-bold text-xl mb-2">Message Received</h3>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. A member of our team will be in contact with you shortly.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", organisation: "", service: "", message: "" }); }}
                      className="mt-6 text-sky-500 text-sm font-medium hover:text-sky-400 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-8 space-y-6"
                >
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">Send Us a Message</h2>
                    <p className="text-slate-500 text-sm">We will get back to you within one business day.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-700 text-sm font-medium mb-1.5" htmlFor="name">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 text-sm font-medium mb-1.5" htmlFor="email">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 text-sm font-medium mb-1.5" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+233 ..."
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 text-sm font-medium mb-1.5" htmlFor="organisation">
                        Organisation
                      </label>
                      <input
                        id="organisation"
                        name="organisation"
                        type="text"
                        value={form.organisation}
                        onChange={handleChange}
                        placeholder="Company or institution name"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-1.5" htmlFor="service">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-colors appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-1.5" htmlFor="message">
                      Your Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your requirements, project, or question..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-sky-500 hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    {loading ? "Sending…" : "Send Message"}
                    {!loading && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    )}
                  </button>

                  <p className="text-slate-400 text-xs text-center">
                    By submitting this form you agree to GoKeenn Ltd contacting you regarding your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-slate-100 h-72 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/30">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-slate-500 text-sm font-medium">GoKeenn Ltd · Accra, Ghana</p>
          <p className="text-slate-400 text-xs">Map available on request</p>
        </div>
      </section>
    </>
  );
}
