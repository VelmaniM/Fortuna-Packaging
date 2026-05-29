import { useEffect } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-soft pt-28 pb-20">
      <div className="section-container">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-red transition-colors mb-8"
        >
          <HiArrowLeft size={16} /> Back
        </button>

        <div className="bg-white rounded-3xl p-6 md:p-12 lg:p-16 shadow-xl shadow-slate-200/50 border border-slate-200">
          <span className="text-red font-semibold text-xs uppercase tracking-widest mb-3 block">
            Our Products
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 tracking-tight">
            Finished Goods
          </h1>
          <p className="text-slate-500 leading-relaxed max-w-3xl mb-12 text-lg">
            Explore our comprehensive range of premium flexible packaging solutions, ready to elevate your brand's shelf presence and protect your product's integrity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FINISHED_GOODS.map((item) => (
              <div key={item.id} className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300">
                <div className="aspect-square relative overflow-hidden bg-white">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive CTA Section */}
          <div className="mt-16 bg-navy-dark rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-red/20 to-transparent opacity-40 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-red/30 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-400/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block bg-white/10 border border-white/20 text-white font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm shadow-sm">
                Partner With Fortuna
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4 tracking-tight leading-tight">
                Ready to Elevate Your Packaging?
              </h2>
              <p className="text-slate-300 text-base md:text-lg mb-8 font-medium leading-relaxed">
                Join industry leaders who trust us to deliver stunning, high-performance packaging that protects products and captivates customers. Let's build something exceptional together.
              </p>
              <button 
                onClick={() => navigate('/#contact')}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red to-red-hover text-white font-bold tracking-widest uppercase text-sm rounded-xl hover:shadow-[0_0_30px_rgba(211,47,47,0.4)] hover:-translate-y-1 transition-all duration-300 group"
              >
                Discuss Your Project <HiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
