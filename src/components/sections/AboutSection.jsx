import { HiLightBulb, HiOutlineFlag } from 'react-icons/hi';
import { ABOUT_CONTENT } from '../../data/qualityTests';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <span className="text-red font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="heading-xl mt-3 mb-6">
              {ABOUT_CONTENT.title}{' '}
              <span className="text-red-accent">{ABOUT_CONTENT.highlight}</span>
            </h2>
            <p className="text-silver leading-relaxed mb-10">{ABOUT_CONTENT.description}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-red/10 flex items-center justify-center flex-shrink-0">
                  <HiLightBulb className="text-red" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Our Vision</h3>
                  <p className="text-sm text-silver leading-relaxed">{ABOUT_CONTENT.vision}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                  <HiOutlineFlag className="text-navy" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Our Mission</h3>
                  <p className="text-sm text-silver leading-relaxed">{ABOUT_CONTENT.mission}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal relative">
            <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <img
                src="/Fortuna-Packaging/images/brochure/company-plant-wide.jpg"
                alt="Fortuna Packaging corporate entrance"
                className="w-full h-full object-cover"
                width={700}
                height={520}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
