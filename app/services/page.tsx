import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "GoKeenn Ltd offers IT infrastructure deployment, security & surveillance, networking, software deployment, and IT equipment sales & rental across Ghana.",
};

const services = [
  {
    id: "sales-rental",
    title: "Sales & Rental of IT Solutions",
    tagline: "Flexible access to enterprise technology",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900&q=80",
    description:
      "Whether you need to equip a new office, upgrade an existing setup, or access technology on a project basis, GoKeenn Ltd provides flexible sales and rental options for enterprise-grade IT equipment.",
    includes: [
      "Laptops, desktops, and workstations",
      "Servers and storage solutions",
      "Networking hardware (routers, switches, APs)",
      "Printers, projectors, and peripherals",
      "Short and long-term rental agreements",
      "Asset management and tracking",
    ],
    whoFor: "Businesses, event organisers, project teams, and institutions needing flexible IT access without full capital outlay.",
    benefits: [
      "Reduce upfront capital expenditure",
      "Scale up or down as needs change",
      "Access the latest equipment without depreciation risk",
      "Dedicated account management",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "infrastructure",
    title: "IT Infrastructure Deployment",
    tagline: "From blueprint to operational environment",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=900&q=80",
    description:
      "We plan, procure, install, and commission complete IT infrastructure environments. Our deployment methodology is structured, documented, and tested before handover.",
    includes: [
      "Infrastructure assessment and design",
      "Server room and data centre setup",
      "Hardware procurement and installation",
      "Configuration and commissioning",
      "System testing and documentation",
      "Staff handover and training",
    ],
    whoFor: "Offices, schools, hospitals, and institutions setting up or upgrading their core IT environment.",
    benefits: [
      "Single vendor accountability for the full project",
      "Properly documented and tested systems",
      "Reduced downtime risk from day one",
      "Structured handover process",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: "security",
    title: "Security & Surveillance Solutions",
    tagline: "Protection you can trust, systems you can manage",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900&q=80",
    description:
      "From CCTV installation to full access control systems, GoKeenn Ltd designs and deploys security infrastructure that keeps your premises, assets, and people protected.",
    includes: [
      "CCTV camera installation (indoor and outdoor)",
      "IP and analogue surveillance systems",
      "Digital video recording (DVR/NVR) setup",
      "Access control and biometric systems",
      "Remote monitoring configuration",
      "Alarm and alert integration",
    ],
    whoFor: "Offices, retail outlets, warehouses, residential estates, schools, and any premises requiring physical security oversight.",
    benefits: [
      "Deter theft, vandalism, and unauthorised access",
      "Remote visibility of your premises at any time",
      "Documented evidence capability",
      "Scalable from single site to multi-location",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    id: "software",
    title: "Software Deployment Solutions",
    tagline: "The right software, properly deployed and supported",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80",
    description:
      "Software is only useful when it is correctly configured and your team knows how to use it. We manage the full deployment lifecycle — from licensing and installation to configuration and user enablement.",
    includes: [
      "Operating system deployment and configuration",
      "Business application installation and setup",
      "License management and compliance",
      "User account and permissions configuration",
      "Software updates and patch management",
      "User training and documentation",
    ],
    whoFor: "Organisations deploying new software across teams, migrating platforms, or standardising their IT environment.",
    benefits: [
      "Consistent, correctly configured deployments",
      "Reduced IT burden on internal staff",
      "Proper documentation for future reference",
      "Faster onboarding for new employees",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "networking",
    title: "Networking & Management Solutions",
    tagline: "Connected infrastructure that stays connected",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80",
    description:
      "Reliable connectivity is the foundation of a productive organisation. GoKeenn Ltd designs, deploys, and manages wired and wireless networks that are fast, secure, and built to scale.",
    includes: [
      "LAN and WAN design and implementation",
      "Structured cabling and patch panel installation",
      "Wireless network (Wi-Fi) deployment",
      "Firewall and network security configuration",
      "Network monitoring and management",
      "VPN and remote access setup",
    ],
    whoFor: "Any organisation that depends on stable, fast internal and external connectivity — offices, campuses, hospitality venues, and multi-site businesses.",
    benefits: [
      "Eliminate connectivity bottlenecks",
      "Secure network perimeters",
      "Proactive monitoring to prevent downtime",
      "Scalable architecture for future growth",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="End-to-End IT Services for Every Organisation"
        subtitle="Five core service areas. One accountable partner. Complete technology delivery."
        image="https://images.unsplash.com/photo-1573164713712-03790a178651?w=1600&q=80"
      />

      {/* OVERVIEW GRID */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((svc, i) => (
              <a
                key={i}
                href={`#${svc.id}`}
                className="bg-white border border-slate-100 rounded-xl p-4 text-center hover:border-sky-200 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-500 group-hover:text-white transition-all duration-200">
                  {svc.icon}
                </div>
                <p className="text-slate-700 text-xs font-medium leading-snug">{svc.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INDIVIDUAL SERVICES */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
              {/* Content */}
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-2">
                  {svc.tagline}
                </p>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-5 accent-line">
                  {svc.title}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-8">{svc.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-slate-900 font-semibold text-sm uppercase tracking-wider mb-3">
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-2">
                      {svc.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                          <svg className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold text-sm uppercase tracking-wider mb-3">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {svc.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-slate-600 text-sm">
                          <svg className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 mb-8">
                  <p className="text-sky-800 text-sm">
                    <span className="font-semibold">Who is this for?</span>{" "}
                    {svc.whoFor}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 text-sm"
                >
                  Enquire About This Service
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <div className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABanner
        title="Not sure which service you need?"
        subtitle="Tell us about your organisation and what you are trying to achieve — we will recommend the right approach."
        primaryLabel="Talk to Our Team"
        primaryHref="/contact"
        secondaryLabel="View Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
