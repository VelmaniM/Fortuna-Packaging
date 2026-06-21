import { HiLightBulb, HiOutlineFlag } from 'react-icons/hi';
import { ABOUT_CONTENT } from '../../data/qualityTests';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-section__layout">
          <div className="reveal">
            <span className="about-section__subtitle">About Us</span>
            <h2 className="about-section__title">
              {ABOUT_CONTENT.title}{' '}
              <span className="about-section__title-highlight">{ABOUT_CONTENT.highlight}</span>
            </h2>
            <p className="about-section__description">{ABOUT_CONTENT.description}</p>

            <div className="about-section__features">
              <div className="about-section__feature">
                <div className="about-section__feature-icon-wrapper--red">
                  <HiLightBulb className="about-section__feature-icon--red" size={24} />
                </div>
                <div>
                  <h3 className="about-section__feature-title">Our Vision</h3>
                  <p className="about-section__feature-text">{ABOUT_CONTENT.vision}</p>
                </div>
              </div>
              <div className="about-section__feature">
                <div className="about-section__feature-icon-wrapper--navy">
                  <HiOutlineFlag className="about-section__feature-icon--navy" size={24} />
                </div>
                <div>
                  <h3 className="about-section__feature-title">Our Mission</h3>
                  <p className="about-section__feature-text">{ABOUT_CONTENT.mission}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal relative">
            <div className="about-section__image-container">
              <img
                src="/Fortuna-Packaging/images/brochure/company-plant-wide.jpg"
                alt="Fortuna Packaging corporate entrance"
                className="about-section__image"
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
