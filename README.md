# Yogita Mane Portfolio

A responsive, dark-theme personal portfolio built with React 18, Vite, React Router, Framer Motion and Lucide React.

## Features
- Responsive sticky navigation with mobile menu
- Animated hero section and modern dark UI
- Data-driven skills, experience, projects and services
- Project filtering and search
- Frontend contact validation with clear separation for future API integration
- `/projects` route and 404 page

## Install and run
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Customize
Edit `src/data/data.js` to update skills, projects, experience, services, testimonials and social links. Add your actual `public/resume.pdf` and project images under `public/images/`. Replace GitHub and LinkedIn placeholders with real URLs.

## Architecture
Pages compose reusable layout and section components. Static content is kept in `src/data`, while reusable UI lives under `src/components`. Global design tokens and responsive styles are in `src/styles/globals.css`.

## Deployment
Run `npm run build` and deploy the generated `dist` directory to Netlify, Vercel, GitHub Pages or any static hosting provider.
