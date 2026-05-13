# MetaVisitAR - Museum & Heritage Management Platform

MetaVisitAR is a high-fidelity, responsive content management system designed for Indian government museums, archeological sites, and cultural institutions. It provides a simplified workflow for digitizing heritage content with AI-enhanced descriptions and AR-ready visitor experiences.

## 🏛️ Heritage-Focused Design
- **Visual Identity**: Modern yet culturally respectful palette (Ivory, Sandstone, Copper, Saffron).
- **Typography**: Space Grotesk for a clean, institutional feel.
- **Responsive**: Fully optimized for both Desktop (1440px) and Mobile (390px) experiences.

## 🚀 Key Features
- **Dashboard**: High-level statistics on visitor engagement and content performance.
- **Artwork Upload**: Guided step-by-step workflow with AI-powered description generation and audio narration toggles.
- **Collection Management**: Intuitive organization of heritage artifacts with search and category filtering.
- **QR Generation**: Instant visitor access codes for museum exhibits.
- **Analytics**: Lightweight data visualization for tracking visitor trends and QR scans.

## 🛠️ Tech Stack
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4 & Shadcn UI
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Charts**: Recharts
- **Theming**: Next-themes (Light/Dark mode support)

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production
```bash
npm run build
```

## 📂 Project Structure

```text
Realmeta-india/
├── public/                 # Static assets and favicons
├── src/
│   ├── app/
│   │   ├── App.tsx         # Main application logic & navigation
│   │   ├── components/
│   │   │   ├── screens/    # Main feature pages (Dashboard, Upload, etc.)
│   │   │   ├── ui/         # Shadcn-based primitive components
│   │   │   └── figma/      # Figma-specific helper components
│   ├── styles/             # Global styles, fonts, and Tailwind theme
│   ├── main.tsx            # Application entry point
│   └── index.css           # Root CSS import
├── eslint.config.js        # Linting configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.js.bak   # PostCSS backup (deprecated in v4)
├── tailwind.config.js.bak  # Tailwind backup (deprecated in v4)
├── vite.config.js          # Vite configuration with Tailwind v4 plugin
└── tsconfig.json           # TypeScript configuration
```

## 📦 Installed Modules

The project leverages a modern React ecosystem:

- **Core**: React 18, TypeScript, Vite.
- **Styling**: Tailwind CSS v4, `@radix-ui/*` (Primitives), `lucide-react` (Icons).
- **UI Components**: Shadcn UI components (Accordion, Dialog, Select, etc.).
- **Visuals**: `recharts` (Analytics), `embla-carousel-react` (Carousels), `framer-motion`.
- **Utilities**: `next-themes` (Dark/Light mode), `date-fns` (Date handling), `clsx`, `tailwind-merge`.

## 📜 License
This project is proprietary and developed for the Real Meta Museum Platform.
