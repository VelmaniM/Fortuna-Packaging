import { useState, useEffect } from 'react';
import { HiArrowLeft, HiArrowRight, HiSearch } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import './FinishedGoodsPage.css';

const FINISHED_GOODS = [
  { 
    id: 1, 
    title: 'Stand-up Snack Pouches', 
    img: '/Fortuna-Packaging/images/finished-goods/fg_pouch_snack_1779799377312.png', 
    desc: 'Premium organic snack pouches with matte finish and robust ziplock.' 
  },
  { 
    id: 2, 
    title: 'Coffee Bean Bags', 
    img: '/Fortuna-Packaging/images/finished-goods/fg_pouch_coffee_1779799394358.png', 
    desc: 'Specialty coffee packaging featuring one-way degassing valves and elegant metallic accents.' 
  },
  { 
    id: 3, 
    title: 'Vibrant Shrink Sleeves', 
    img: '/Fortuna-Packaging/images/finished-goods/fg_shrink_sleeve_1779799413916.png', 
    desc: '360-degree colorful shrink sleeve labels providing maximum branding real estate.' 
  },
  { 
    id: 4, 
    title: 'Printed Laminate Rolls', 
    img: '/Fortuna-Packaging/images/finished-goods/fg_laminate_roll_1779799430156.png', 
    desc: 'High-gloss printed laminate films engineered for high-speed automated packaging lines.' 
  },
  { 
    id: 5, 
    title: 'Liquid Spout Pouches', 
    img: '/Fortuna-Packaging/images/finished-goods/fg_spout_pouch_1779799446947.png', 
    desc: 'Durable spout pouches ideal for purees, beverages, and liquid cosmetics.' 
  },
  { 
    id: 6, 
    title: 'Luxury Sachets', 
    img: '/Fortuna-Packaging/images/finished-goods/fg_sachet_pack_1779799466595.png', 
    desc: 'Flat sachet packaging delivering a luxury feel for cosmetics, spices, and samples.' 
  },
];

export default function FinishedGoodsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredGoods = FINISHED_GOODS.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="fg-page">
      <div className="section-container">
        <button 
          onClick={() => navigate(-1)}
          className="fg-page__back-btn"
        >
          <HiArrowLeft size={16} /> Back
        </button>

        <div className="fg-page__card">
          <span className="fg-page__subtitle">
            Our Products
          </span>
          <h1 className="fg-page__title">
            Finished Goods
          </h1>
          <p className="fg-page__desc dark:text-gray-300">
            Explore our comprehensive range of premium flexible packaging solutions, ready to elevate your brand's shelf presence and protect your product's integrity.
          </p>

          <div className="relative my-8 max-w-md">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-red focus:ring-1 focus:ring-red outline-none transition-all dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <div className="fg-page__grid">
            {filteredGoods.map((item) => (
              <div key={item.id} className="fg-item">
                <div className="fg-item__image-wrapper">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="fg-item__image"
                  />
                  <div className="fg-item__overlay" />
                </div>
                <div className="fg-item__content dark:bg-gray-800">
                  <h3 className="fg-item__title">{item.title}</h3>
                  <p className="fg-item__desc dark:text-gray-300">{item.desc}</p>
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
                onClick={() => navigate('/#contact')}
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
