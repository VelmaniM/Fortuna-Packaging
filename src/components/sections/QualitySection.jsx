import { HiCheckCircle } from 'react-icons/hi';
import { QUALITY_CHECKS } from '../../data/qualityTests';
import './QualitySection.css';

export default function QualitySection() {
  return (
    <section id="quality" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <span className="text-red font-semibold text-sm uppercase tracking-widest">Quality</span>
            <h2 className="heading-xl mt-3 mb-6">
              Ensuring Quality at{' '}
              <span className="text-red-accent">Every Step</span>
            </h2>
            <p className="text-silver leading-relaxed mb-8">
              Our in-house laboratory runs comprehensive tests on every batch — guaranteeing strength, consistency, and compliance before products leave our facility.
            </p>
            <ul className="space-y-4">
              {QUALITY_CHECKS.map((check) => (
                <li key={check.id} className="flex items-center gap-3">
                  <HiCheckCircle className="text-red flex-shrink-0" size={22} />
                  <span className="font-medium text-navy">{check.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal relative rounded-2xl overflow-hidden shadow-card aspect-[16/10] max-w-lg mx-auto lg:ml-auto border border-slate-200/50">
            <img
              src="/images/quality-lab.jpg"
              alt="Fortuna Packaging quality control laboratory"
              className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-300"
              width={600}
              height={375}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
