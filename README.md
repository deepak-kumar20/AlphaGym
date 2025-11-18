# Alpha Gym Frontend

A modern, fully responsive React frontend for a gym website, built with **Vite**, **Tailwind CSS**, and **Framer Motion** animations.

## Features

- **🌓 Dark/Light Mode Toggle**: Seamless theme switching with persistent preference
- **Home Page**: Hero section, services, programs, trainers, testimonials, and gallery
- **About Page**: History, mission, and trainer cards
- **Membership Plans**: Monthly, Quarterly, and Yearly plans with pricing cards
- **Programs/Classes**: Workout programs with stagger animations
- **Gallery**: Responsive grid with **real gym equipment images** from Unsplash
- **Contact Page**: Contact form (frontend only), address, phone, WhatsApp button, and map placeholder

All sections use **Framer Motion** for smooth entrance and hover animations.

## Tech Stack

- React 18
- React Router v6
- Framer Motion
- Tailwind CSS
- Vite

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Folder Structure

```
/src
  /components  - Reusable UI components
  /pages       - Route pages
  /assets      - SVG placeholders
  /hooks       - Custom React hooks
  App.jsx      - Main app and routing
  main.jsx     - Entry point
  index.css    - Tailwind imports
```

## Notes

- **Dark/Light Mode**: Click the sun/moon icon in the navbar to toggle themes. Preference is saved in localStorage.
- The contact form is **frontend only** (no backend).
- Gallery images are fetched from **Unsplash** (real gym equipment photos).
- Fully responsive design (mobile-tablet-desktop).

---

**Alpha Gym** — Premium training. Modern facilities. Expert coaches.
