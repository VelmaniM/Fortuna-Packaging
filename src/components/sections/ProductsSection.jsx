import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';
import { PRODUCTS } from '../../data/products';
import './ProductsSection.css';

const PRODUCTS_PER_PAGE = 6;
const productPages = Array.from({ length: Math.ceil(PRODUCTS.length / PRODUCTS_PER_PAGE) }, (_, index) =>
  PRODUCTS.slice(index * PRODUCTS_PER_PAGE, index * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE)
);

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const visibleProducts = productPages[activePage] || productPages[0];

  const handlePreviousPage = () => {
    setSelectedProduct(null);
    setActivePage((page) => (page === 0 ? productPages.length - 1 : page - 1));
  };

  const handleNextPage = () => {
    setSelectedProduct(null);
    setActivePage((page) => (page === productPages.length - 1 ? 0 : page + 1));
  };

  useEffect(() => {
    if (!selectedProduct) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProduct(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProduct]);

  return (
    <section id="products" className="section-padding bg-soft">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-red font-semibold text-sm uppercase tracking-widest">We Produce</span>
          <h2 className="heading-xl mt-3">
            Wide Range of Flexible Packaging{' '}
            <span className="text-red-accent">Solutions</span>
          </h2>
          <p className="text-silver mt-4 leading-relaxed">
            From stand-up pouches to shrink sleeves — engineered for performance, shelf appeal, and brand impact.
          </p>
        </div>

        <div className="product-pages" aria-label="Product cards pages">
          <button
            type="button"
            className="product-page-arrow product-page-arrow--left"
            onClick={handlePreviousPage}
            aria-label="Show previous products"
          >
            <HiChevronLeft size={30} />
          </button>

          <div key={activePage} className="product-page-grid">
            {visibleProducts.map((product) => (
              <div key={product.id} className="product-card-shell h-[20rem] w-full">
                <button
                  type="button"
                  className={`relative w-full h-full rounded-2xl overflow-hidden shadow-xl shadow-slate-300/50 group text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(211,47,47,0.15)] border border-slate-200 hover:border-red/30 bg-white ${selectedProduct?.id === product.id ? ' ring-2 ring-red shadow-[0_20px_40px_rgba(211,47,47,0.25)] border-transparent' : ''}`}
                  onClick={() => setSelectedProduct((current) => (current?.id === product.id ? null : product))}
                  aria-label={`View details for ${product.name}`}
                  aria-expanded={selectedProduct?.id === product.id}
                >
                  {/* Centered, Uncropped, Maximum-Clarity Image Container */}
                  <div className="w-full h-[calc(100%-80px)] flex items-center justify-center p-8 bg-transparent select-none">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      width={300}
                      height={300}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Elegant Sliding Drawer Container */}
                  <div className="absolute bottom-0 left-0 right-0 bg-navy-dark/95 backdrop-blur-md border-t border-white/10 p-5 md:p-6 z-10 transition-all duration-300 ease-out translate-y-[calc(100%-80px)] group-hover:translate-y-0">
                    
                    {/* Header part - always visible by default */}
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-[10px] text-red font-bold uppercase tracking-widest block mb-1">
                          Fortuna Packaging
                        </span>
                        <h3 className="font-bold text-white text-lg md:text-xl tracking-tight">
                          {product.name}
                        </h3>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-red transition-all duration-300 flex-shrink-0">
                        <HiChevronRight size={18} className="transform group-hover:rotate-90 transition-transform duration-300" />
                      </span>
                    </div>

                    {/* Expandable content revealed on hover */}
                    <div className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                        {product.description}
                      </p>
                      
                      {/* Application tags for premium context & interaction */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.applications.slice(0, 3).map((app) => (
                          <span key={app} className="text-[10px] bg-white/10 text-slate-200 px-2 py-0.5 rounded font-medium border border-white/5">
                            {app}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-white/5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red hover:text-red-hover transition-colors duration-200">
                          View Full Details <HiArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="product-page-arrow product-page-arrow--right"
            onClick={handleNextPage}
            aria-label="Show next products"
          >
            <HiChevronRight size={30} />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3" aria-label="Product page selector">
          {productPages.map((page, index) => (
            <button
              key={page[0].id}
              type="button"
              className={`product-page-dot${activePage === index ? ' is-active' : ''}`}
              onClick={() => setActivePage(index)}
              aria-label={`Show product page ${index + 1}`}
              aria-current={activePage === index ? 'page' : undefined}
            />
          ))}
        </div>
      </div>

      {selectedProduct &&
        createPortal(
        <div
          className="product-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <div className="product-modal__panel">
            <button
              type="button"
              className="product-modal__close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              <HiX size={24} />
            </button>

            <div className="product-modal__media">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-full max-w-full object-contain"
                width={360}
                height={320}
              />
            </div>

            <div className="product-modal__content">
              <span className="text-red font-semibold text-xs uppercase tracking-widest">Product Detail</span>
              <h3 id="product-modal-title" className="text-3xl font-bold text-navy mt-3 mb-4">
                {selectedProduct.name}
              </h3>
              <p className="text-silver leading-relaxed mb-6">{selectedProduct.detail}</p>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <h4 className="font-bold text-navy mb-3">Applications</h4>
                  <ul className="space-y-2">
                    {selectedProduct.applications.map((item) => (
                      <li key={item} className="product-modal__list-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((item) => (
                      <li key={item} className="product-modal__list-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>,
          document.body
        )}
    </section>
  );
}
