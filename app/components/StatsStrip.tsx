const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Satisfied Clients" },
  { value: "5", label: "Core Service Areas" },
  { value: "24/7", label: "Technical Support" },
];

export default function StatsStrip() {
  return (
    <section className="bg-sky-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sky-100 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
