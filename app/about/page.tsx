import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GoKeenn Ltd — a Ghana-based IT solutions company delivering infrastructure, networking, security, and managed technology services.",
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Reliability",
    desc: "We deliver on our commitments. Our clients trust us because we show up, follow through, and stand behind our work.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Technical Excellence",
    desc: "We bring enterprise-grade competence to every project — regardless of scale. Standards are not negotiable.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Client-Centred",
    desc: "Your operational reality shapes our approach. We listen first, then design solutions that genuinely fit your environment.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Adaptability",
    desc: "Technology moves fast. We keep our skills and solutions current so your systems are never behind the curve.",
  },
];

const expertise = [
  { area: "Network Infrastructure", pct: 95 },
  { area: "Security & Surveillance Systems", pct: 92 },
  { area: "IT Infrastructure Deployment", pct: 90 },
  { area: "Software Rollout & Support", pct: 88 },
  { area: "IT Equipment Sales & Rental", pct: 96 },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About GoKeenn Ltd"
        title="Technology Partners You Can Rely On"
        subtitle="We are an IT solutions company built on technical depth, honest delivery, and a genuine commitment to our clients' success."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
      />

      {/* WHO WE ARE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="Ghana-Based IT Solutions with Enterprise Reach"
                subtitle="GoKeenn Ltd is a professional IT solutions company serving businesses, institutions, and organisations across Ghana."
              />
              <div className="mt-8 space-y-5 text-slate-600 text-base leading-relaxed">
                <p>
                  We specialise in delivering practical, scalable technology infrastructure — from
                  the network backbone that keeps operations running to the surveillance systems
                  that keep assets secure.
                </p>
                <p>
                  Our approach is straightforward: understand your requirements, recommend the
                  right solutions, deploy them properly, and support them reliably. We work with
                  organisations of all sizes — from growing SMEs setting up their first proper
                  IT environment to established institutions expanding or upgrading their technology
                  estate.
                </p>
                <p>
                  GoKeenn Ltd offers both outright sales and rental options, giving clients the
                  flexibility to access enterprise-grade IT without the full upfront capital
                  commitment.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                  alt="Professional IT team at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-5 -left-5 bg-sky-500 text-white rounded-2xl p-5 shadow-xl shadow-sky-500/30">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sky-100 text-sm mt-0.5">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/6 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/8 rounded-2xl p-10">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To empower businesses and institutions across Ghana with reliable, modern
                IT infrastructure and technology solutions that enable them to operate
                efficiently, securely, and competitively.
              </p>
            </div>
            <div className="bg-white/5 border border-white/8 rounded-2xl p-10">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To be the most trusted IT solutions partner in Ghana — recognised for
                technical competence, honest delivery, and genuine long-term relationships
                with the organisations we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="These principles guide how we work — with clients, on projects, and in everything we build."
            center
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-7 hover:border-sky-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-500 flex items-center justify-center mb-5 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-slate-900 font-semibold text-base mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Expertise"
                title="Deep Competence Across Every Service Area"
                subtitle="Our team brings hands-on experience across the full spectrum of IT infrastructure and technology services."
              />
              <div className="mt-10 space-y-5">
                {expertise.map((e) => (
                  <div key={e.area}>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span className="text-slate-700">{e.area}</span>
                      <span className="text-sky-500">{e.pct}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-500 to-sky-400 rounded-full"
                        style={{ width: `${e.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 lg:h-auto">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80"
                  alt="IT technology expertise"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Why GoKeenn"
            title="Why Clients Choose Us"
            center
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                num: "01",
                title: "We are deployment specialists",
                desc: "We do not just sell — we plan, install, configure, test, and handover complete systems.",
              },
              {
                num: "02",
                title: "Flexible acquisition models",
                desc: "Sales or rental, one-off projects or ongoing managed services — we meet your business where it is.",
              },
              {
                num: "03",
                title: "Long-term relationships",
                desc: "We measure success by how well your systems run months after we leave — not just on handover day.",
              },
            ].map((r) => (
              <div key={r.num} className="bg-slate-50 border border-slate-100 rounded-2xl p-7">
                <div className="text-sky-400 font-bold text-3xl mb-4 font-mono">{r.num}</div>
                <h3 className="text-slate-900 font-semibold text-base mb-2">{r.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to work with a team that delivers?"
        subtitle="Tell us about your project and we will put together a tailored proposal for your organisation."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
