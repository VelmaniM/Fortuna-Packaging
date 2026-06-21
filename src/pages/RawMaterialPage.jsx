import { useState, useEffect } from 'react';
import { HiArrowLeft, HiArrowRight, HiSearch } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import './RawMaterialPage.css';

const RAW_MATERIALS = [
  { 
    id: 1, 
    title: 'Plastic Resin Pellets', 
    img: '/Fortuna-Packaging/images/raw-materials/rm_plastic_pellets_1779799638127.png', 
    desc: 'High-grade polymer resins providing exceptional tensile strength and flexibility.' 
  },
  { 
    id: 2, 
    title: 'Aluminum Foil Rolls', 
    img: '/Fortuna-Packaging/images/raw-materials/rm_aluminum_foil_1779799657817.png', 
    desc: 'Premium aluminum foil offering unparalleled barrier protection against moisture and oxygen.' 
  },
  { 
    id: 3, 
    title: 'Organic Kraft Paper', 
    img: '/Fortuna-Packaging/images/raw-materials/rm_kraft_paper_1779799672891.png', 
    desc: 'Sustainable, high-durability kraft paper for eco-friendly packaging solutions.' 
  },
  { 
    id: 4, 
    title: 'Vibrant CMYK Inks', 
    img: '/Fortuna-Packaging/images/raw-materials/rm_ink_pigments_1779799689525.png', 
    desc: 'Food-safe, highly pigmented liquid inks for vivid and precise flexographic printing.' 
  },
  { 
    id: 5, 
    title: 'Laminating Adhesives', 
    img: '/Fortuna-Packaging/images/raw-materials/rm_adhesive_1779799708460.png', 
    desc: 'Industrial-grade adhesives ensuring unbreakable bonds between multi-layer films.' 
  },
  { 
    id: 6, 
    title: 'PET Film Rolls', 
    img: '/Fortuna-Packaging/images/raw-materials/rm_pet_film_1779799727297.png', 
    desc: 'Crystal-clear PET plastic films delivering high gloss and puncture resistance.' 
  },
];

export default function RawMaterialPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredMaterials = RAW_MATERIALS.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="rm-page">
      <div className="section-container">
        <button 
          onClick={() => navigate(-1)}
          className="rm-page__back-btn"
        >
          <HiArrowLeft size={16} /> Back
        </button>

        <div className="rm-page__card">
          <span className="rm-page__subtitle">
            Quality Inputs
          </span>
          <h1 className="rm-page__title">
            Raw Materials
          </h1>
          <p className="rm-page__desc dark:text-gray-300">
            Discover the high-grade films, inks, and substrates we use to manufacture industry-leading packaging that performs flawlessly under demanding conditions.
          </p>

          <div className="relative my-8 max-w-md">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search raw materials..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-red focus:ring-1 focus:ring-red outline-none transition-all dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <div className="rm-page__grid">
            {filteredMaterials.map((item) => (
              <div key={item.id} className="rm-item">
                <div className="rm-item__image-wrapper">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="rm-item__image"
                  />
                  <div className="rm-item__overlay" />
                </div>
                <div className="rm-item__content dark:bg-gray-800">
                  <h3 className="rm-item__title">{item.title}</h3>
                  <p className="rm-item__desc dark:text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive CTA Section */}
          <div className="cta-section">
            {/* Ambient Background Effects */}
            <div className="cta-section__bg-overlay" />
            <div className="cta-section__glow-1" />
            <div className="cta-section__glow-2" />
            
            <div className="cta-section__content">
              <span className="cta-section__badge">
                Partner With Fortuna
              </span>
              <h2 className="cta-section__title">
                Ready to Elevate Your Packaging?
              </h2>
              <p className="cta-section__desc">
                Join industry leaders who trust us to deliver stunning, high-performance packaging that protects products and captivates customers. Let's build something exceptional together.
              </p>
              <button 
                onClick={() => navigate('/', { state: { scrollTo: '#contact' } })}
                className="cta-section__btn"
              >
                Discuss Your Project <HiArrowRight className="cta-section__btn-icon" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
