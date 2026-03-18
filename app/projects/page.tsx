import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore GoKeenn Ltd's portfolio of IT infrastructure deployments, networking projects, security installations, and technology solutions across Ghana.",
};

const categories = [
  "All",
  "Infrastructure",
  "Networking",
  "Security",
  "Software",
  "IT Rental",
];

const projects = [
  {
    title: "Corporate Office Network Deployment",
    category: "Networking",
    scope: "Full LAN/WAN setup across 3 floors, structured cabling, managed switches, and enterprise Wi-Fi",
    sector: "Corporate",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80",
    tags: ["Networking", "Structured Cabling", "Wi-Fi"],
  },
  {
    title: "School Campus IT Infrastructure",
    category: "Infrastructure",
    scope: "Complete computer lab setup, server installation, and campus-wide network for a secondary school",
    sector: "Education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80",
    tags: ["Infrastructure", "Education", "Servers"],
  },
  {
    title: "Multi-Site CCTV Installation",
    category: "Security",
    scope: "IP surveillance deployment across 5 retail locations, DVR setup, and remote monitoring configuration",
    sector: "Retail",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=700&q=80",
    tags: ["CCTV", "Security", "Retail"],
  },
  {
    title: "Office Software Rollout",
    category: "Software",
    scope: "Enterprise software deployment and configuration across 80 workstations for a financial services firm",
    sector: "Financial Services",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80",
    tags: ["Software Deployment", "Finance", "Workstations"],
  },
  {
    title: "Hospital IT Infrastructure Upgrade",
    category: "Infrastructure",
    scope: "Server room upgrade, structured cabling replacement, and network segmentation for a private clinic",
    sector: "Healthcare",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=700&q=80",
    tags: ["Healthcare", "Infrastructure", "Networking"],
  },
  {
    title: "Event IT Equipment Rental",
    category: "IT Rental",
    scope: "Short-term deployment of 120 workstations, networking, and technical support for a multi-day conference",
    sector: "Events",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=700&q=80",
    tags: ["IT Rental", "Events", "Workstations"],
  },
  {
    title: "Warehouse Access Control System",
    category: "Security",
    scope: "Biometric access control, 24-camera CCTV installation, and alarm integration for a logistics facility",
    sector: "Logistics",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80",
    tags: ["Access Control", "CCTV", "Logistics"],
  },
  {
    title: "Hotel Connectivity Infrastructure",
    category: "Networking",
    scope: "Guest and staff Wi-Fi segmentation, POS networking, and back-office connectivity for a boutique hotel",
    sector: "Hospitality",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80",
    tags: ["Hospitality", "Wi-Fi", "POS"],
  },
  {
    title: "SME Complete IT Setup",
    category: "Infrastructure",
    scope: "End-to-end IT setup for a growing professional services firm — networking, workstations, software, and CCTV",
    sector: "Professional Services",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80",
    tags: ["SME", "Full Setup", "Managed"],
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "12+", label: "Industry Sectors" },
  { value: "200+", label: "Client Organisations" },
  { value: "5", label: "Service Disciplines" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Projects That Speak for Themselves"
        subtitle="A snapshot of the deployments, installations, and engagements we have delivered across sectors and organisation types."
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
      />

      {/* STATS */}
      <section className="py-14 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold text-sky-400 mb-1">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Deployments"
            subtitle="Representative projects across our core service areas. Every deployment is different — these illustrate the breadth of what we deliver."
            center
          />

          {/* Category filter tabs (visual only) */}
          <div className="mt-10 mb-12 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-default ${
                  cat === "All"
                    ? "bg-sky-500 text-white border-sky-500"
                    : "bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-600"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((proj) => (
              <article
                key={proj.title}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-200 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-sky-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {proj.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-slate-900/70 text-slate-200 text-xs px-2.5 py-1 rounded-full">
                      {proj.sector}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-slate-900 font-semibold text-base mb-2 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{proj.scope}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-50 text-slate-600 text-xs px-2 py-0.5 rounded border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Approach Every Project"
            center
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Scoping & Requirements",
                desc: "We start by understanding your environment, objectives, constraints, and timeline — before recommending anything.",
              },
              {
                step: "02",
                title: "Design & Proposal",
                desc: "We design the solution and present a clear proposal with scope, specifications, timeline, and pricing.",
              },
              {
                step: "03",
                title: "Deployment",
                desc: "Our technical team executes the deployment to plan — with regular communication and zero surprises.",
              },
              {
                step: "04",
                title: "Handover & Support",
                desc: "We hand over documented, tested systems and remain available for support and future expansion.",
              },
            ].map((step) => (
              <div key={step.step} className="relative bg-white border border-slate-100 rounded-2xl p-7">
                <div className="text-sky-400/30 font-bold text-5xl font-mono absolute top-4 right-5 leading-none">
                  {step.step}
                </div>
                <div className="relative">
                  <div className="text-sky-500 font-bold text-sm mb-3 font-mono">{step.step}</div>
                  <h3 className="text-slate-900 font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to add your project to our portfolio?"
        subtitle="Share your requirements with us and we will design a deployment plan that meets your specifications."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
