import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./components/SectionHeading";
import CTABanner from "./components/CTABanner";
import StatsStrip from "./components/StatsStrip";

export const metadata: Metadata = {
  title: "GoKeenn Ltd — IT Solutions for Modern Business",
};

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Sales & Rental of IT Solutions",
    desc: "Flexible acquisition of enterprise-grade IT hardware — purchase or rent based on your operational needs and budget.",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "IT Infrastructure Deployment",
    desc: "End-to-end planning, installation, and commissioning of scalable IT infrastructure for offices, institutions, and enterprises.",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Security & Surveillance",
    desc: "Professional CCTV installation, access control systems, and security monitoring solutions for commercial and residential properties.",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Software Deployment",
    desc: "Systematic software rollouts, configuration, and support — ensuring your team is productive from day one.",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: "Networking & Management",
    desc: "Robust LAN/WAN design, structured cabling, wireless deployment, and ongoing network management for uninterrupted connectivity.",
    href: "/services",
  },
];

const industries = [
  { label: "Corporate Offices", icon: "🏢", desc: "End-to-end IT setup for modern offices" },
  { label: "Education", icon: "🎓", desc: "Smart classrooms and campus networks" },
  { label: "Healthcare", icon: "🏥", desc: "Secure systems for clinical environments" },
  { label: "Retail & Hospitality", icon: "🏬", desc: "POS systems, CCTV, and connectivity" },
  { label: "Property Management", icon: "🔒", desc: "Surveillance and access control" },
  { label: "SMEs & Institutions", icon: "⚙️", desc: "Scalable solutions for growing businesses" },
];

const trustPoints = [
  {
    title: "End-to-End Delivery",
    desc: "From scoping and procurement to installation and ongoing support — we own the full project lifecycle.",
  },
  {
    title: "Enterprise-Grade Standards",
    desc: "We deploy the same rigour and quality controls for SMEs as we do for large institutions.",
  },
  {
    title: "Flexible Engagements",
    desc: "Outright purchase, rental, or managed service — we adapt to your business model and budget.",
  },
  {
    title: "Responsive Support",
    desc: "Our technical team is reachable when you need us. We do not disappear after installation.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
          alt="Data center infrastructure"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,165,233,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-sky-500/15 border border-sky-500/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-300 text-sm font-medium">
                Ghana&apos;s Trusted IT Solutions Partner
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Technology that drives<br />
              <span className="bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                your business forward.
              </span>
            </h1>

            <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-xl">
              GoKeenn Ltd delivers enterprise IT infrastructure, networking,
              security, and managed technology solutions — built for organisations
              that demand reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-sky-500/30 hover:shadow-sky-400/40 hover:-translate-y-0.5 text-base"
              >
                Explore Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
              >
                Request a Quote
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-6">
              {["IT Infrastructure", "Security Systems", "Networking", "Software Deployment"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 text-slate-400 text-sm">
                  <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" />
      </section>

      {/* STATS */}
      <StatsStrip />

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="What We Do"
              title="Complete IT Services for Modern Organisations"
              subtitle="From infrastructure build-out to day-to-day managed support, we cover every layer of your technology environment."
            />
            <Link
              href="/services"
              className="shrink-0 inline-flex items-center gap-2 text-sky-600 hover:text-sky-500 font-semibold text-sm transition-colors"
            >
              View all services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link
                key={i}
                href={svc.href}
                className="group relative bg-white border border-slate-100 rounded-2xl p-7 hover:border-sky-200 card-glow transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center mb-5 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  {svc.icon}
                </div>
                <h3 className="text-slate-900 font-semibold text-lg mb-2 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-sky-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-120 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=900&q=80"
                  alt="IT infrastructure deployment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-lg leading-none">500+</div>
                  <div className="text-slate-500 text-xs mt-0.5">Successful Deployments</div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="About GoKeenn"
                title="Built on Technical Expertise and Reliable Delivery"
                subtitle="GoKeenn Ltd is a Ghana-based IT solutions company with deep expertise in infrastructure deployment, networking, security systems, and managed technology services."
              />
              <ul className="mt-8 space-y-4">
                {trustPoints.map((pt) => (
                  <li key={pt.title} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold text-sm">{pt.title}</h4>
                      <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">{pt.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Tailored Solutions Across Every Sector"
            subtitle="We understand that different industries have different technology demands. Our solutions adapt to your environment."
            center
          />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <div
                key={ind.label}
                className="bg-slate-50 hover:bg-sky-50 border border-slate-100 hover:border-sky-200 rounded-2xl p-6 text-center transition-all duration-200 group"
              >
                <div className="text-4xl mb-3">{ind.icon}</div>
                <h3 className="text-slate-900 font-semibold text-sm mb-1">{ind.label}</h3>
                <p className="text-slate-500 text-xs">{ind.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-500 font-semibold text-sm"
            >
              View all industry solutions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* IMAGE BAND */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80"
          alt="Enterprise network infrastructure"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl sm:text-3xl font-bold text-center max-w-xl px-4">
            Dependable networks. Secure systems. Scalable infrastructure.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
