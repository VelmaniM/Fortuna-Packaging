import { useEffect } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const RAW_MATERIALS = [
  { 
    id: 1, 
    title: 'Plastic Resin Pellets', 
    img: '/images/raw-materials/rm_plastic_pellets_1779799638127.png', 
    desc: 'High-grade polymer resins providing exceptional tensile strength and flexibility.' 
  },
  { 
    id: 2, 
    title: 'Aluminum Foil Rolls', 
    img: '/images/raw-materials/rm_aluminum_foil_1779799657817.png', 
    desc: 'Premium aluminum foil offering unparalleled barrier protection against moisture and oxygen.' 
  },
  { 
    id: 3, 
    title: 'Organic Kraft Paper', 
    img: '/images/raw-materials/rm_kraft_paper_1779799672891.png', 
    desc: 'Sustainable, high-durability kraft paper for eco-friendly packaging solutions.' 
  },
  { 
    id: 4, 
    title: 'Vibrant CMYK Inks', 
    img: '/images/raw-materials/rm_ink_pigments_1779799689525.png', 
    desc: 'Food-safe, highly pigmented liquid inks for vivid and precise flexographic printing.' 
  },
  { 
    id: 5, 
    title: 'Laminating Adhesives', 
    img: '/images/raw-materials/rm_adhesive_1779799708460.png', 
    desc: 'Industrial-grade adhesives ensuring unbreakable bonds between multi-layer films.' 
  },
  { 
    id: 6, 
    title: 'PET Film Rolls', 
    img: '/images/raw-materials/rm_pet_film_1779799727297.png', 
    desc: 'Crystal-clear PET plastic films delivering high gloss and puncture resistance.' 
  },
];

export default function RawMaterialPage() {
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
            Quality Inputs
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 tracking-tight">
            Raw Materials
          </h1>
          <p className="text-slate-500 leading-relaxed max-w-3xl mb-12 text-lg">
            Discover the high-grade films, inks, and substrates we use to manufacture industry-leading packaging that performs flawlessly under demanding conditions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RAW_MATERIALS.map((item) => (
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
