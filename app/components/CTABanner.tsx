import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Ready to upgrade your IT infrastructure?",
  subtitle = "Talk to our team about your requirements. We deliver tailored solutions for businesses of all sizes.",
  primaryLabel = "Request a Quote",
  primaryHref = "/contact",
  secondaryLabel = "View Our Services",
  secondaryHref = "/services",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-400/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/30 hover:shadow-sky-400/40 hover:-translate-y-0.5"
          >
            {primaryLabel}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/15 hover:border-white/25"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
