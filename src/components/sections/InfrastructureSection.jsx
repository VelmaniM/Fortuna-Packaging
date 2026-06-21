import './InfrastructureSection.css';

export default function InfrastructureSection() {
  const campusStats = [
    { label: 'Experience', value: '25+ Years' },
    { label: 'Process', value: 'End-to-End' },
    { label: 'Focus', value: 'Quality' },
  ];

  return (
    <section id="infrastructure" className="infrastructure-section">
      <div className="section-container">
        <div className="infrastructure-header">
          <span className="infrastructure-header__label">Infrastructure</span>
          <h2 className="infrastructure-header__title">
            State-of-the-Art Infrastructure for{' '}
            <span className="infrastructure-header__title-highlight">Superior Quality</span>
          </h2>
          <p className="infrastructure-header__description">
            Precision-engineered printing, lamination, and converting lines built for speed, accuracy, and consistent excellence.
          </p>
        </div>

        <div className="infrastructure-grid">
          <article className="campus-card">
            <div className="campus-card__layout">
              <div className="campus-card__image-container">
                <img
                  src="/Fortuna-Packaging/images/brochure/company-plant.jpg"
                  alt="Fortuna Packaging production campus"
                  className="campus-card__image"
                  width={480 }
                  height={320}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="campus-card__content">
                <span className="campus-card__label">
                  Production Campus
                </span>
                <h3 className="campus-card__title">
                  Integrated Packaging Plant
                </h3>
                <p className="campus-card__description">
                  Our facility brings printing, lamination, inspection, and finishing together under one
                  production flow for repeatable quality and dependable high-volume packaging output.
                </p>
                <div className="campus-card__stats-grid">
                  {campusStats.map((spec) => (
                    <div key={spec.label} className="campus-card__stat-item">
                      <p className="campus-card__stat-label">
                        {spec.label}
                      </p>
                      <p className="campus-card__stat-value">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="strength-card">
            <span className="strength-card__label">
              Production Strength
            </span>
            <h3 className="strength-card__title">
              Built for premium packaging companies that need consistency at scale.
            </h3>
            <p className="strength-card__description">
              From print registration to lamination, inspection, rewinding, and slitting, each stage is
              connected to keep color, finish, and delivery timelines under control.
            </p>
            <div className="strength-card__footer">
              <p className="strength-card__footer-text">
                Fortuna Packaging provides a fully-controlled, dust-free manufacturing environment conforming to international hygienic standards for food and pharmaceutical packing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
