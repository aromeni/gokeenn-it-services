import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "GoKeenn Ltd delivers tailored IT solutions for corporate offices, education, healthcare, retail, hospitality, and property management sectors across Ghana.",
};

const industries = [
  {
    label: "Corporate Offices",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    challenge:
      "Modern offices require reliable connectivity, secure infrastructure, and unified communications to keep teams productive — without complex IT management falling on non-technical staff.",
    solutions: [
      "Full office network design and deployment",
      "Workstation and server procurement",
      "Business software deployment",
      "CCTV and access control systems",
      "Managed IT support packages",
    ],
    outcome:
      "A complete, well-documented IT environment that your team can use confidently from day one — with a support partner available when issues arise.",
  },
  {
    label: "Education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    challenge:
      "Schools and universities need reliable infrastructure across classrooms, admin areas, and common spaces — often with tight budgets and non-technical staff managing day-to-day IT.",
    solutions: [
      "Campus-wide networking and Wi-Fi deployment",
      "Computer lab setup and management",
      "Interactive display and projector installation",
      "School administration software deployment",
      "Surveillance for campus security",
    ],
    outcome:
      "A connected, secure campus where students and staff have consistent access to the technology they need — without the complexity.",
  },
  {
    label: "Healthcare",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
    challenge:
      "Healthcare environments demand high uptime, data security, and carefully managed access to sensitive systems — with zero tolerance for infrastructure failures.",
    solutions: [
      "Secure network infrastructure for clinical environments",
      "Patient management system deployment",
      "Access control for restricted areas",
      "CCTV for patient and staff safety",
      "Redundant connectivity design",
    ],
    outcome:
      "IT infrastructure that meets the operational and security requirements of healthcare delivery — reliable, auditable, and secure.",
  },
  {
    label: "Retail & Hospitality",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    challenge:
      "Retail and hospitality businesses need point-of-sale systems, guest Wi-Fi, surveillance, and reliable back-office connectivity — often across multiple locations.",
    solutions: [
      "POS system deployment and networking",
      "Guest and staff Wi-Fi segmentation",
      "Multi-location CCTV installation",
      "Inventory and back-office software setup",
      "Managed connectivity and support",
    ],
    outcome:
      "Connected retail and hospitality environments where transactions run smoothly, guests stay connected, and operations are visible in real time.",
  },
  {
    label: "Property Management",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    challenge:
      "Property managers need to secure assets, monitor access, and provide connectivity infrastructure to tenants — without constant hands-on management.",
    solutions: [
      "Building-wide CCTV and surveillance systems",
      "Intercom and access control installation",
      "Tenant networking infrastructure",
      "Remote monitoring setup",
      "Maintenance and support contracts",
    ],
    outcome:
      "Secure, well-monitored properties with infrastructure that gives tenants confidence and managers visibility — without requiring constant intervention.",
  },
  {
    label: "SMEs & Growing Businesses",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    challenge:
      "Growing businesses need enterprise-quality IT without enterprise budgets — and often lack in-house IT staff to manage complex deployments.",
    solutions: [
      "Right-sized infrastructure design",
      "Flexible rental and purchase options",
      "Cloud-ready networking setup",
      "Business software deployment",
      "Ongoing managed support",
    ],
    outcome:
      "Scalable IT infrastructure that grows with your business — professionally deployed, properly documented, and supported by a team that knows your setup.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industry Solutions"
        title="Solutions Built for Your Sector"
        subtitle="Every industry has distinct technology requirements. We bring specialised experience to each environment we work in."
        image="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80"
      />

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Consultative Approach"
            title="We Start With Your Industry, Then Design Your Solution"
            subtitle="Generic IT deployments often miss the mark. We bring sector-specific knowledge to every engagement — understanding your operational context before recommending technology."
            center
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <a
                key={ind.label}
                href={`#${ind.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
                className="bg-slate-50 hover:bg-sky-50 border border-slate-100 hover:border-sky-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:text-sky-700 transition-all duration-200 text-center"
              >
                {ind.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY DETAIL SECTIONS */}
      {industries.map((ind, i) => (
        <section
          key={ind.label}
          id={ind.label.toLowerCase().replace(/[^a-z]/g, "-")}
          className={`py-20 ${i % 2 === 0 ? "bg-slate-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
              {/* Image */}
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={ind.image}
                    alt={ind.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {ind.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4 accent-line">
                  {ind.label}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  <span className="font-semibold text-slate-700">The Challenge:</span>{" "}
                  {ind.challenge}
                </p>

                <div className="mb-6">
                  <h4 className="text-slate-900 font-semibold text-sm uppercase tracking-wider mb-3">
                    Our Approach
                  </h4>
                  <ul className="space-y-2">
                    {ind.solutions.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-slate-600 text-sm">
                        <svg className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl pl-4 pr-5 py-4 mb-6">
                  <p className="text-sky-800 text-sm leading-relaxed">
                    <span className="font-semibold">The Outcome:</span> {ind.outcome}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-500 font-semibold text-sm transition-colors"
                >
                  Discuss your {ind.label.toLowerCase()} requirements
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABanner
        title="Your sector, your requirements — our expertise"
        subtitle="Every deployment is different. Let us understand your environment and design the right solution."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
