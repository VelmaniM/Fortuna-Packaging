import { useState } from 'react';
import { HiMail, HiPhone, HiGlobe, HiLocationMarker, HiArrowRight, HiUser, HiChat, HiClock, HiCheck } from 'react-icons/hi';
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import FortunaLogo from '../ui/FortunaLogo';
import { COMPANY, NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../utils/scrollTo';
import './ContactSection.css';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) {
        error = 'Full name is required';
      } else if (value.trim().length < 3) {
        error = 'Name must be at least 3 characters';
      }
    }
    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!value.trim()) {
        error = 'Email address is required';
      } else if (!emailRegex.test(value)) {
        error = 'Please enter a valid email address';
      }
    }
    if (name === 'phone' && value.trim()) {
      const digits = value.replace(/[^0-9+]/g, '');
      if (digits.length < 8) {
        error = 'Phone number must be at least 8 digits';
      }
    }
    if (name === 'message') {
      if (!value.trim()) {
        error = 'Message content is required';
      } else if (value.trim().length < 10) {
        error = 'Message must be at least 10 characters';
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Looser phone input filter: allow numeric characters, plus sign, and spaces
    if (name === 'phone') {
      const filtered = value.replace(/[^0-9+\s-]/g, '');
      setForm((s) => ({ ...s, [name]: filtered }));
      if (touched[name]) {
        const error = validateField(name, filtered);
        setErrors((s) => ({ ...s, [name]: error }));
      }
      return;
    }

    setForm((s) => ({ ...s, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((s) => ({ ...s, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((s) => ({ ...s, [name]: true }));
    const error = validateField(name, value);
    setErrors((s) => ({ ...s, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields on submit
    const newErrors = {};
    const touchedAll = {};
    Object.keys(form).forEach((key) => {
      touchedAll[key] = true;
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    setTouched(touchedAll);
    setErrors(newErrors);
    setApiError('');

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // If the user hasn't set their key yet, simulate a success so the UI works
      if (COMPANY.WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitted(true);
          setForm({ name: '', email: '', phone: '', message: '' });
          setTouched({});
        }, 1500);
        return;
      }

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: COMPANY.WEB3FORMS_ACCESS_KEY,
            subject: 'New Contact Form Submission - Fortuna Packaging',
            from_name: form.name,
            ...form
          })
        });

        const result = await response.json();

        if (response.status === 200) {
          setSubmitted(true);
          setForm({ name: '', email: '', phone: '', message: '' });
          setTouched({});
        } else {
          setApiError(result.message || 'Something went wrong. Please try again later.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setApiError('Network error. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <footer id="contact" className="contact-section">
      {/* Background Image Layer - Spans the contact section softly */}
      <div className="contact-background contact-section__bg-layer" />
      
      {/* Premium white glass overlay sheet */}
      <div className="contact-section__glass-overlay" />

      {/* Dynamic light-grid matrix backdrop */}
      <div className="contact-grid-overlay contact-section__grid-overlay" />
      
      {/* Floating ultra-premium glowing ambient orbs (soft pastel light colors) */}
      <div className="contact-pulse-sky contact-section__orb-sky" />
      <div className="contact-section__orb-navy" />
      <div className="contact-pulse-red contact-section__orb-red" />

      <section className="contact-section__content">
        <div className="section-container">
          <div className="contact-section__header reveal">
            <span className="contact-section__tag">
              <span className="contact-section__tag-icon" />
              Contact
            </span>
            <h2 className="contact-section__title">
              Get in Touch With <span className="contact-section__title-highlight">Us</span>
            </h2>
            <p className="contact-section__description">
              Have questions about our packaging solutions or custom orders? Our team of specialists is standing by to assist you.
            </p>
          </div>

          <div className="contact-section__grid">
            {/* Left Column: Interactive Contact Dashboard - Combined into a single cohesive card with zero empty vertical gaps */}
            <div className="contact-card reveal">
              <div>
                <h3 className="contact-card__title">Contact Information</h3>
                
                <div className="contact-card__group">
                  {/* Phone Row */}
                  <a href={`tel:${COMPANY.phone}`} className="contact-card__row">
                    <div className="contact-card__row-icon">
                      <HiPhone size={18} />
                    </div>
                    <div>
                      <p className="contact-card__row-label">Phone</p>
                      <p className="contact-card__row-value">{COMPANY.phone}</p>
                    </div>
                  </a>

                  {/* Email Row */}
                  <a href={`mailto:${COMPANY.email}`} className="contact-card__row">
                    <div className="contact-card__row-icon">
                      <HiMail size={18} />
                    </div>
                    <div>
                      <p className="contact-card__row-label">Email</p>
                      <p className="contact-card__row-value--hover">{COMPANY.email}</p>
                    </div>
                  </a>

                  {/* Website Row */}
                  <div className="contact-card__row group">
                    <div className="contact-card__row-icon">
                      <HiGlobe size={18} />
                    </div>
                    <div>
                      <p className="contact-card__row-label">Website</p>
                      <p className="contact-card__row-value">{COMPANY.website}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office & Factory Address section inside the same card */}
              <div className="contact-card__group">
                {/* Corporate Office */}
                <div className="contact-card__location-row group">
                  <div className="contact-card__location-icon">
                    <HiLocationMarker size={18} />
                  </div>
                  <div>
                    <h4 className="contact-card__location-label">Corporate Office</h4>
                    <p className="contact-card__location-value">{COMPANY.corporate}</p>
                  </div>
                </div>

                {/* Factory */}
                <div className="contact-card__location-row group">
                  <div className="contact-card__location-icon">
                    <HiLocationMarker size={18} />
                  </div>
                  <div>
                    <h4 className="contact-card__location-label">Production Plant</h4>
                    <p className="contact-card__location-value">{COMPANY.factory}</p>
                  </div>
                </div>
              </div>

              {/* Operating Hours - Anchors the bottom cleanly and clears unnecessary vertical gaps */}
              <div className="contact-card__hours-row group">
                <div className="contact-card__hours-icon">
                  <HiClock size={18} />
                </div>
                <div>
                  <h4 className="contact-card__hours-label">Operating Hours</h4>
                  <p className="contact-card__hours-value">24 Hours / 7 Days a Week</p>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Modern Message Form or Success Feedback Card */}
            <div className="contact-form__card reveal">
              {/* Soft glow flare inside card */}
              <div className="contact-form__glow" />

              {submitted ? (
                /* Gorgeous Premium Success State with bounce animated checkmark */
                <div className="contact-form__success-container">
                  <div className="contact-form__success-icon-wrapper">
                    <HiCheck size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="contact-form__success-title">Message Sent!</h3>
                  <p className="contact-form__success-text">
                    Thank you for reaching out. A packaging expert from our team will contact you shortly to discuss your custom specifications.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="contact-form__success-button"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Elegant Inputs with clientside validation and real-time touched error styling */
                <form onSubmit={handleSubmit} noValidate className="contact-form__form">
                  <div>
                    <h3 className="contact-form__title">
                      Send Us a Message
                    </h3>
                    
                    <div className="contact-form__fields">
                      {[
                        { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', icon: <HiUser size={14} /> },
                        { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', icon: <HiMail size={14} /> },
                        { key: 'phone', label: 'Phone Number (Optional)', type: 'tel', placeholder: '+91 ', icon: <HiPhone size={14} /> },
                      ].map((f) => (
                        <div key={f.key} className="contact-form__field-group">
                          <label className="contact-form__label">{f.label}</label>
                          <div className="contact-form__input-wrapper group">
                            <span className={`contact-form__input-icon ${errors[f.key] && touched[f.key] ? 'text-red' : 'text-slate-400 group-focus-within:text-red'}`}>
                              {f.icon}
                            </span>
                            <input
                              type={f.type}
                              name={f.key}
                              value={form[f.key]}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder={f.placeholder}
                              maxLength={f.key === 'phone' ? 10 : undefined}
                              inputMode={f.key === 'phone' ? 'numeric' : undefined}
                              pattern={f.key === 'phone' ? '[0-9]*' : undefined}
                              className={`contact-form__input ${
                                errors[f.key] && touched[f.key]
                                  ? 'border-red/60 focus:border-red focus:ring-red/10'
                                  : 'border-slate-200/80 focus:border-red focus:ring-red/10'
                              }`}
                            />
                          </div>
                          {errors[f.key] && touched[f.key] && (
                            <p className="contact-form__error-text">
                              <span>⚠</span> {errors[f.key]}
                            </p>
                          )}
                        </div>
                      ))}
                      
                      <div className="contact-form__field-group">
                        <label className="contact-form__label">Message</label>
                        <div className="contact-form__input-wrapper group">
                          <span className={`contact-form__input-icon--textarea ${errors.message && touched.message ? 'text-red' : 'text-slate-400 group-focus-within:text-red'}`}>
                            <HiChat size={14} />
                          </span>
                          <textarea
                            name="message"
                            rows={3}
                            value={form.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="How can we help with your packaging needs?"
                            className={`contact-form__textarea ${
                              errors.message && touched.message
                                ? 'border-red/60 focus:border-red focus:ring-red/10'
                                : 'border-slate-200/80 focus:border-red focus:ring-red/10'
                            }`}
                          />
                        </div>
                        {errors.message && touched.message && (
                          <p className="contact-form__error-text">
                            <span>⚠</span> {errors.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {apiError && (
                    <div className="contact-form__api-error">
                      ⚠ {apiError}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`contact-form__submit-button group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {!isSubmitting && <div className="contact-form__submit-gradient" />}
                    <span className="contact-form__submit-content">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <HiArrowRight className="transform group-hover:translate-x-1 transition-transform duration-200" size={16} />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Base - Styled in standard corporate Navy dark */}
      <div className="contact-footer">
        <div className="section-container">
          <div className="contact-footer__grid">
            {/* Column 1: Brand & About */}
            <div className="contact-footer__brand-col">
              <FortunaLogo size="md" light showTagline />
              <p className="contact-footer__brand-desc">
                Delivering state-of-the-art flexible packaging solutions for global brands. Precision, quality, and innovation in every layer.
              </p>
              
              {/* Social Media Icons */}
              <div className="contact-footer__socials">
                <a href="#" className="contact-footer__social-link hover:bg-[#0077b5] hover:text-white">
                  <FaLinkedinIn size={14} />
                </a>
                <a href="#" className="contact-footer__social-link hover:bg-[#E1306C] hover:text-white">
                  <FaInstagram size={14} />
                </a>
                <a href="#" className="contact-footer__social-link hover:bg-[#25D366] hover:text-white">
                  <FaWhatsapp size={14} />
                </a>
                <a href="#" className="contact-footer__social-link hover:bg-[#FF0000] hover:text-white">
                  <FaYoutube size={14} />
                </a>
                <a href={`mailto:${COMPANY.email}`} className="contact-footer__social-link hover:bg-red hover:text-white">
                  <HiMail size={16} />
                </a>
                <a href={`tel:${COMPANY.phone}`} className="contact-footer__social-link hover:bg-emerald-500 hover:text-white">
                  <HiPhone size={16} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="contact-footer__col-title">Company</h4>
              <ul className="contact-footer__link-list">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="contact-footer__link"
                    >
                      <HiArrowRight size={12} className="contact-footer__link-icon" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Products */}
            <div>
              <h4 className="contact-footer__col-title">Products</h4>
              <ul className="contact-footer__link-list">
                {['Wrap Around Labels', 'Standup Pouches', 'Shrink Sleeves', 'Center Seal Pouches', 'Laminated Films', 'Zipper Pouches'].map((product) => (
                  <li key={product}>
                    <a
                      href="#products"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('#products');
                      }}
                      className="contact-footer__link"
                    >
                      <HiArrowRight size={12} className="contact-footer__link-icon" />
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="contact-footer__col-title">Connect With Us</h4>
              <ul className="contact-footer__contact-list">
                <li className="contact-footer__contact-item">
                  <HiLocationMarker size={18} className="contact-footer__contact-icon-top" />
                  <span className="leading-relaxed">{COMPANY.corporate}</span>
                </li>
                <li className="contact-footer__contact-item-center">
                  <HiPhone size={18} className="contact-footer__contact-icon" />
                  <a href={`tel:${COMPANY.phone}`} className="contact-footer__contact-link">{COMPANY.phone}</a>
                </li>
                <li className="contact-footer__contact-item-center">
                  <HiMail size={18} className="contact-footer__contact-icon" />
                  <a href={`mailto:${COMPANY.email}`} className="contact-footer__contact-link">{COMPANY.email}</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="contact-footer__bottom-bar">
            <p className="contact-footer__copyright">
              © {new Date().getFullYear()} {COMPANY.fullName}. All Rights Reserved. <br className="md:hidden" /> Designed & Developed by <span className="text-white font-medium">Velmani M</span>
            </p>
            <div className="contact-footer__legal-links">
              <a href="#" className="contact-footer__legal-link">Privacy Policy</a>
              <a href="#" className="contact-footer__legal-link">Terms of Service</a>
              <a href="https://maps.google.com/?q=9.872736,78.346081" target="_blank" rel="noopener noreferrer" className="contact-footer__legal-link">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
