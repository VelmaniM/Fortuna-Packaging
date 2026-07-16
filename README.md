# Fortuna Packaging Website

Corporate website for **Fortuna Packaging** — Impress With Impressions.

A modern, responsive, and performance-optimized React SPA (Single Page Application) built with Vite, Tailwind CSS, and React Router. Features seamless theme switching (Dark/Light mode), interactive UI components, an AI-powered ChatBot, and Progressive Web App (PWA) capabilities.

## Live Demo
Currently hosted on GitHub Pages.
- **Run Deployment:** `npm run deploy` (requires configuring `gh-pages`)

## Key Features
- **Responsive Design:** Fully mobile-responsive interface powered by Tailwind CSS.
- **Theme Switcher:** Integrated Light and Dark mode with responsive logo and assets.
- **Routing:** Multi-page layout using React Router (Home, Finished Goods, Raw Materials, Privacy Policy, Terms of Service).
- **Interactive UI:** Smooth scrolling, custom animations, and a dynamic Loading Screen.
- **PWA Ready:** Includes `vite-plugin-pwa` for offline capabilities and app-like experience.
- **ChatBot:** Interactive floating ChatBot integrated directly into the UI.

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/VelmaniM/Fortuna-Packaging.git

# Navigate into the directory
cd Fortuna-Packaging

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Building for Production
```bash
npm run build
```
Compiled files will be generated in the `docs/` directory (configured for GitHub Pages deployment).

## Project Structure

```
Fortuna-Packaging/
├── docs/                # Production build output (served by GitHub Pages)
├── public/
│   ├── images/          # Image assets, SVG illustrations, and icons
│   └── favicon.*        # App icons and PWA assets
├── src/
│   ├── components/
│   │   ├── layout/      # Navbar, LoadingScreen, SEO, Footer
│   │   ├── sections/    # Hero, About, Infrastructure, Products, Quality, Contact
│   │   └── ui/          # FortunaLogo, ChatBot, Modals, Buttons
│   ├── data/            # Local JSON/JS data (products, machines, tests)
│   ├── hooks/           # Custom React hooks (useReveal, etc.)
│   ├── pages/           # HomePage, FinishedGoods, RawMaterials, PrivacyPolicy, etc.
│   └── utils/           # Helper functions, constants, scroll utilities
├── index.html           # Main entry HTML (with skeleton loader)
├── package.json         # Project metadata and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration with PWA plugin
```

## Technologies Used
- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router v7](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite PWA](https://vite-pwa-org.netlify.app/)

## License

© Fortuna Packaging. All Rights Reserved. Designed & Developed by [Velmani M](https://nexor.in/).
