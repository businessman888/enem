# ENEM IA Pro - Project Overview

## Project Description
This is a Brazilian ENEM exam preparation landing page called "ENEM IA Pro". It's a Next.js application that showcases AI-powered tools for ENEM exam preparation including essay correction, intelligent summaries, and predictive questions.

## Technology Stack
- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Lucide React icons
- **Font**: Geist (Google Fonts)

## Project Structure
```
├── public/              # Static assets (SVG icons)
├── src/
│   └── app/            # Next.js App Router
│       ├── globals.css # Global styles with Tailwind
│       ├── layout.tsx  # Root layout
│       ├── page.tsx    # Home page
│       └── LandingPageClient.tsx # Main landing page component
├── next.config.ts      # Next.js configuration (Replit optimized)
├── package.json        # Dependencies and scripts
├── postcss.config.mjs  # PostCSS configuration for Tailwind
└── tsconfig.json       # TypeScript configuration
```

## Replit Environment Setup
- **Port**: 5000 (configured for Replit)
- **Host**: 0.0.0.0 (allows external access)
- **Cross-origin**: Configured for Replit proxy environment
- **Workflow**: Frontend Server running `npm run dev`

## Recent Changes (Sept 26, 2025)
- ✅ Installed all project dependencies
- ✅ Configured Next.js for Replit environment with proper host settings
- ✅ Set up development workflow on port 5000
- ✅ Configured deployment settings for autoscale
- ✅ Tested application functionality

## User Preferences
- Project imported from GitHub
- Focus on maintaining existing project structure and design
- No synthetic/mock data used - authentic Brazilian ENEM preparation content

## Deployment Configuration
- **Target**: Autoscale (stateless web application)
- **Build**: npm run build
- **Run**: npm start
- **Port**: 5000