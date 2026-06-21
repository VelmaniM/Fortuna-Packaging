import { HiCheckCircle } from 'react-icons/hi';
import { QUALITY_CHECKS } from '../../data/qualityTests';
import './QualitySection.css';

export default function QualitySection() {
  return (
    <section id="quality" className="quality-section">
      <div className="section-container">
        <div className="quality-section__layout">
          <div className="reveal">
            <span className="quality-section__subtitle">Quality</span>
            <h2 className="quality-section__title">
              Ensuring Quality at{' '}
              <span className="quality-section__title-highlight">Every Step</span>
            </h2>
            <p className="quality-section__description">
              Our in-house laboratory runs comprehensive tests on every batch — guaranteeing strength, consistency, and compliance before products leave our facility.
            </p>
            <ul className="quality-section__list">
              {QUALITY_CHECKS.map((check) => (
                <li key={check.id} className="quality-section__list-item">
                  <HiCheckCircle className="quality-section__list-icon" size={22} />
                  <span className="quality-section__list-text">{check.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal relative quality-section__image-container">
            <img
              src="/Fortuna-Packaging/images/quality-lab.jpg"
              alt="Fortuna Packaging quality control laboratory"
              className="quality-section__image"
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
