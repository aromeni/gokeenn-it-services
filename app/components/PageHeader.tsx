import Image from "next/image";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80",
}: PageHeaderProps) {
  return (
    <section className="relative min-h-[320px] flex items-end pt-24 pb-16 overflow-hidden bg-slate-900">
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover opacity-20"
        priority
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent" />
      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 via-sky-400 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-slate-300 text-lg max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
