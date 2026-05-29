import './InfrastructureSection.css';

export default function InfrastructureSection() {
  const campusStats = [
    { label: 'Experience', value: '25+ Years' },
    { label: 'Process', value: 'End-to-End' },
    { label: 'Focus', value: 'Quality' },
  ];

  return (
    <section id="infrastructure" className="section-padding bg-navy overflow-hidden">
      <div className="section-container">
        <div className="reveal text-center max-w-3xl mx-auto mb-12">
          <span className="text-red font-semibold text-sm uppercase tracking-widest">Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            State-of-the-Art Infrastructure for{' '}
            <span className="text-red">Superior Quality</span>
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Precision-engineered printing, lamination, and converting lines built for speed, accuracy, and consistent excellence.
          </p>
        </div>

        <div className="reveal grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-stretch">
          <article className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="grid md:grid-cols-[0.95fr_1.05fr] h-full">
              <div className="min-h-72 bg-slate-50 flex items-center justify-center p-8">
                <img
                  src="/Fortuna-Packaging/images/brochure/company-plant.jpg"
                  alt="Fortuna Packaging production campus"
                  className="h-full w-full object-cover"
                  width={480 }
                  height={320}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-7 md:p-9 flex flex-col justify-center">
                <span className="text-red font-semibold text-xs uppercase tracking-widest mb-3">
                  Production Campus
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                  Integrated Packaging Plant
                </h3>
                <p className="text-silver leading-relaxed mb-6">
                  Our facility brings printing, lamination, inspection, and finishing together under one
                  production flow for repeatable quality and dependable high-volume packaging output.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {campusStats.map((spec) => (
                    <div key={spec.label} className="rounded-lg border border-border bg-soft p-3">
                      <p className="text-[9px] font-semibold uppercase tracking-wider text-silver mb-1">
                        {spec.label}
                      </p>
                      <p className="text-[14px] font-bold text-navy">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="bg-white/8 border border-white/10 rounded-xl p-6 md:p-7 flex flex-col justify-center">
            <span className="text-red font-semibold text-xs uppercase tracking-widest mb-3">
              Production Strength
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              Built for premium packaging companies that need consistency at scale.
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              From print registration to lamination, inspection, rewinding, and slitting, each stage is
              connected to keep color, finish, and delivery timelines under control.
            </p>
            <div className="border-t border-white/10 pt-6">
              <p className="text-sm text-slate-400">
                Fortuna Packaging provides a fully-controlled, dust-free manufacturing environment conforming to international hygienic standards for food and pharmaceutical packing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
