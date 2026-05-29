# Fortuna Packaging Website

Corporate website for **Fortuna Packaging** — Impress With Impressions.

## Run

```bash
npm install
npm run dev
```

## Project structure

```
fortuna-packaging-3d/
├── public/
│   ├── images/          # SVG illustrations (hero, products, machines)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/      # Navbar, LoadingScreen, SEO, SmoothScroll
│   │   ├── sections/    # Hero, About, Infrastructure, Products, Quality, Contact
│   │   └── ui/          # FortunaLogo, FingerprintIcon, ErrorBoundary
│   ├── data/            # products, machines, qualityTests
│   ├── hooks/           # useLenis
│   ├── pages/           # HomePage
│   └── utils/           # constants, preloadTextures
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## License

© Fortuna Packaging
