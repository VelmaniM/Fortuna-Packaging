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
    <section id="products" className="products-section">
      <div className="section-container">
        <div className="products-header">
          <span className="products-header__label">We Produce</span>
          <h2 className="products-header__title">
            Wide Range of Flexible Packaging{' '}
            <span className="products-header__title-highlight">Solutions</span>
          </h2>
          <p className="products-header__description">
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
                  className={`product-card ${selectedProduct?.id === product.id ? 'product-card--active' : ''}`}
                  onClick={() => setSelectedProduct((current) => (current?.id === product.id ? null : product))}
                  aria-label={`View details for ${product.name}`}
                  aria-expanded={selectedProduct?.id === product.id}
                >
                  {/* Centered, Uncropped, Maximum-Clarity Image Container */}
                  <div className="product-card__image-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card__image"
                      width={300}
                      height={300}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Elegant Sliding Drawer Container */}
                  <div className="product-card__drawer">
                    
                    {/* Header part - always visible by default */}
                    <div className="product-card__drawer-header">
                      <div>
                        <span className="product-card__brand-label">
                          Fortuna Packaging
                        </span>
                        <h3 className="product-card__title">
                          {product.name}
                        </h3>
                      </div>
                      <span className="product-card__icon-wrapper">
                        <HiChevronRight size={18} className="product-card__icon" />
                      </span>
                    </div>

                    {/* Expandable content revealed on hover */}
                    <div className="product-card__content">
                      <p className="product-card__description">
                        {product.description}
                      </p>
                      
                      {/* Application tags for premium context & interaction */}
                      <div className="product-card__tags">
                        {product.applications.slice(0, 3).map((app) => (
                          <span key={app} className="product-card__tag">
                            {app}
                          </span>
                        ))}
                      </div>

                      <div className="product-card__footer">
                        <span className="product-card__link">
                          View Full Details <HiArrowRight size={14} className="product-card__link-icon" />
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

        <div className="products-pagination" aria-label="Product page selector">
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
              <span className="product-modal__title-wrapper">Product Detail</span>
              <h3 id="product-modal-title" className="product-modal__title">
                {selectedProduct.name}
              </h3>
              <p className="product-modal__description">{selectedProduct.detail}</p>

              <div className="product-modal__grid">
                <div>
                  <h4 className="product-modal__list-title">Applications</h4>
                  <ul className="product-modal__list">
                    {selectedProduct.applications.map((item) => (
                      <li key={item} className="product-modal__list-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="product-modal__list-title">Key Features</h4>
                  <ul className="product-modal__list">
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
