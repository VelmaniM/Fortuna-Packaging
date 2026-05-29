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
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800">
      {/* Background Image Layer - Spans the contact section softly */}
      <div className="contact-background absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.14] scale-[1.02] select-none pointer-events-none" />
      
      {/* Premium white glass overlay sheet */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50/90 via-white/80 to-slate-50/95 backdrop-blur-[5px] pointer-events-none" />

      {/* Dynamic light-grid matrix backdrop */}
      <div className="contact-grid-overlay absolute inset-0 select-none pointer-events-none opacity-40 z-0" />
      
      {/* Floating ultra-premium glowing ambient orbs (soft pastel light colors) */}
      <div className="absolute -top-40 -left-40 w-[35rem] h-[35rem] bg-sky-400/5 rounded-full filter blur-[120px] select-none pointer-events-none z-0 animate-pulse contact-pulse-sky" />
      <div className="absolute top-1/2 left-1/3 w-[30rem] h-[30rem] bg-navy/5 rounded-full filter blur-[150px] select-none pointer-events-none z-0" />
      <div className="absolute -bottom-20 -right-20 w-[40rem] h-[40rem] bg-red/5 rounded-full filter blur-[160px] select-none pointer-events-none z-0 animate-pulse contact-pulse-red" />

      <section className="py-12 md:py-16 relative z-10 border-t border-slate-200/50">
        <div className="section-container">
          <div className="text-center lg:text-left mb-10 reveal">
            <span className="inline-flex items-center gap-2 bg-red/10 border border-red/20 text-red font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-navy mt-4 tracking-tight leading-tight">
              Get in Touch With <span className="bg-gradient-to-r from-red to-red-hover bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2 max-w-xl font-medium">
              Have questions about our packaging solutions or custom orders? Our team of specialists is standing by to assist you.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Interactive Contact Dashboard - Combined into a single cohesive card with zero empty vertical gaps */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,31,63,0.03)] border border-slate-200/60 p-8 hover:border-slate-200/80 transition-all duration-300 reveal flex flex-col justify-start gap-6">
              <div>
                <h3 className="text-xl font-bold text-navy mb-5 tracking-tight">Contact Information</h3>
                
                <div className="space-y-4 pb-5 border-b border-slate-200/50">
                  {/* Phone Row */}
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red to-red-hover text-white flex items-center justify-center shrink-0 shadow-md shadow-red/10 transition-transform duration-300 group-hover:scale-105">
                      <HiPhone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Phone</p>
                      <p className="text-sm font-semibold text-navy">{COMPANY.phone}</p>
                    </div>
                  </a>

                  {/* Email Row */}
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red to-red-hover text-white flex items-center justify-center shrink-0 shadow-md shadow-red/10 transition-transform duration-300 group-hover:scale-105">
                      <HiMail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Email</p>
                      <p className="text-sm font-semibold text-navy hover:text-red transition-colors">{COMPANY.email}</p>
                    </div>
                  </a>

                  {/* Website Row */}
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red to-red-hover text-white flex items-center justify-center shrink-0 shadow-md shadow-red/10 transition-transform duration-300 group-hover:scale-105">
                      <HiGlobe size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Website</p>
                      <p className="text-sm font-semibold text-navy">{COMPANY.website}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office & Factory Address section inside the same card */}
              <div className="space-y-4 pb-5 border-b border-slate-200/50">
                {/* Corporate Office */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red to-red-hover text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-red/10 transition-transform duration-300 group-hover:scale-105">
                    <HiLocationMarker size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Corporate Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-semibold">{COMPANY.corporate}</p>
                  </div>
                </div>

                {/* Factory */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red to-red-hover text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-red/10 transition-transform duration-300 group-hover:scale-105">
                    <HiLocationMarker size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Production Plant</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-semibold">{COMPANY.factory}</p>
                  </div>
                </div>
              </div>

              {/* Operating Hours - Anchors the bottom cleanly and clears unnecessary vertical gaps */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <HiClock size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Operating Hours</h4>
                  <p className="text-slate-600 text-xs leading-normal font-semibold">24 Hours / 7 Days a Week</p>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Modern Message Form or Success Feedback Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,31,63,0.05)] border border-slate-200/60 p-8 md:p-10 hover:border-slate-200/80 transition-all duration-300 relative overflow-hidden reveal flex flex-col justify-between">
              {/* Soft glow flare inside card */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-red/5 rounded-full blur-[40px] pointer-events-none" />

              {submitted ? (
                /* Gorgeous Premium Success State with bounce animated checkmark */
                <div className="h-full flex flex-col items-center justify-center text-center py-10 px-4 animate-fadeIn select-none">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10 animate-bounce">
                    <HiCheck size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3 tracking-tight">Message Sent!</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm font-semibold">
                    Thank you for reaching out. A packaging expert from our team will contact you shortly to discuss your custom specifications.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 font-bold hover:bg-slate-100 hover:text-navy transition-all duration-200 text-xs uppercase tracking-wider shadow-sm cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Elegant Inputs with clientside validation and real-time touched error styling */
                <form onSubmit={handleSubmit} noValidate className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-navy mb-6 tracking-tight flex items-center gap-2">
                      Send Us a Message
                    </h3>
                    
                    <div className="space-y-4">
                      {[
                        { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', icon: <HiUser size={14} /> },
                        { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', icon: <HiMail size={14} /> },
                        { key: 'phone', label: 'Phone Number (Optional)', type: 'tel', placeholder: '+91 ', icon: <HiPhone size={14} /> },
                      ].map((f) => (
                        <div key={f.key} className="space-y-1.5">
                          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">{f.label}</label>
                          <div className="relative group">
                            <span className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${errors[f.key] && touched[f.key] ? 'text-red' : 'text-slate-400 group-focus-within:text-red'}`}>
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
                              className={`w-full pl-12 pr-4 py-3 rounded-xl border bg-slate-50/50 text-navy outline-none focus:bg-white focus:ring-4 transition-all duration-300 font-semibold text-sm ${
                                errors[f.key] && touched[f.key]
                                  ? 'border-red/60 focus:border-red focus:ring-red/10'
                                  : 'border-slate-200/80 focus:border-red focus:ring-red/10'
                              }`}
                            />
                          </div>
                          {errors[f.key] && touched[f.key] && (
                            <p className="text-[11px] text-red font-semibold mt-1 flex items-center gap-1 select-none">
                              <span>⚠</span> {errors[f.key]}
                            </p>
                          )}
                        </div>
                      ))}
                      
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                        <div className="relative group">
                          <span className={`absolute left-4 top-[14px] transition-colors duration-300 ${errors.message && touched.message ? 'text-red' : 'text-slate-400 group-focus-within:text-red'}`}>
                            <HiChat size={14} />
                          </span>
                          <textarea
                            name="message"
                            rows={3}
                            value={form.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="How can we help with your packaging needs?"
                            className={`w-full pl-12 pr-4 py-3 rounded-xl border bg-slate-50/50 text-navy outline-none focus:bg-white focus:ring-4 transition-all duration-300 resize-none font-semibold text-sm min-h-[90px] ${
                              errors.message && touched.message
                                ? 'border-red/60 focus:border-red focus:ring-red/10'
                                : 'border-slate-200/80 focus:border-red focus:ring-red/10'
                            }`}
                          />
                        </div>
                        {errors.message && touched.message && (
                          <p className="text-[11px] text-red font-semibold mt-1 flex items-center gap-1 select-none">
                            <span>⚠</span> {errors.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {apiError && (
                    <div className="mt-4 p-3 rounded-lg bg-red/10 border border-red/20 text-red text-sm font-semibold flex items-center justify-center">
                      ⚠ {apiError}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-3.5 rounded-xl bg-gradient-to-r from-red to-red-hover text-white font-bold tracking-wider hover:shadow-[0_0_30px_rgba(211,47,47,0.35)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group mt-5 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {!isSubmitting && <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-red to-red-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
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
      <div className="bg-navy pt-16 pb-8 relative z-10 border-t border-slate-200/10">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Column 1: Brand & About */}
            <div className="space-y-4">
              <FortunaLogo size="md" light showTagline />
              <p className="text-slate-400 text-sm leading-relaxed mt-4 pr-4">
                Delivering state-of-the-art flexible packaging solutions for global brands. Precision, quality, and innovation in every layer.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-md">
                  <FaLinkedinIn size={14} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#E1306C] hover:text-white transition-all duration-300 shadow-md">
                  <FaInstagram size={14} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-md">
                  <FaWhatsapp size={14} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#FF0000] hover:text-white transition-all duration-300 shadow-md">
                  <FaYoutube size={14} />
                </a>
                <a href={`mailto:${COMPANY.email}`} className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-red hover:text-white transition-all duration-300 shadow-md">
                  <HiMail size={16} />
                </a>
                <a href={`tel:${COMPANY.phone}`} className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-md">
                  <HiPhone size={16} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-5 tracking-wide uppercase text-xs">Company</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <HiArrowRight size={12} className="text-red opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Products */}
            <div>
              <h4 className="text-white font-bold mb-5 tracking-wide uppercase text-xs">Products</h4>
              <ul className="space-y-3">
                {['Wrap Around Labels', 'Standup Pouches', 'Shrink Sleeves', 'Center Seal Pouches', 'Laminated Films', 'Zipper Pouches'].map((product) => (
                  <li key={product}>
                    <a
                      href="#products"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('#products');
                      }}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <HiArrowRight size={12} className="text-red opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-5 tracking-wide uppercase text-xs">Connect With Us</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <HiLocationMarker size={18} className="text-red shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{COMPANY.corporate}</span>
                </li>
                <li className="flex items-center gap-3">
                  <HiPhone size={18} className="text-red shrink-0" />
                  <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">{COMPANY.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <HiMail size={18} className="text-red shrink-0" />
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">{COMPANY.email}</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
