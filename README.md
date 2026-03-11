# Tech Shop

Tech Shop is a small, fast storefront demo built with React + Vite. It’s intentionally lightweight, but still covers the core e‑commerce flows: browse, filter, add to cart, and now a wishlist that persists across sessions.

## What’s Inside

- 🛍️ Product catalog with search + filters
- 🛒 Cart with totals and quick access
- 💖 Wishlist with localStorage persistence
- 📱 Responsive layout built on Bootstrap 5
- 🎨 Styled Components for custom UI polish
- 🔄 Redux (Thunk) for state management

## Tech Stack

- **Build Tool**: Vite
- **Framework**: React 18
- **Routing**: React Router v6
- **State**: Redux + Redux Thunk
- **Styling**: Bootstrap 5 + Styled Components
- **Icons**: React Icons

## Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Vite will print the local URL (typically `http://localhost:5173`).

### Build + Preview

```bash
npm run build
npm run preview
```

## Deployment

This project is configured for Vercel with proper client-side routing support.

```bash
npm i -g vercel
vercel
```

If you connect the GitHub repo in Vercel, it will deploy automatically on push.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CartPage/       # Cart-related components
│   ├── ContactPage/    # Contact page components
│   ├── HomePage/       # Home page components
│   └── ProductsPage/   # Product listing components
├── pages/              # Page components
│   ├── WishlistPage.jsx # Wishlist page
├── store/              # Redux store configuration
│   ├── actions/        # Redux actions
│   └── reducers/       # Redux reducers
├── images/             # Static images
├── App.jsx            # Main application component
└── index.jsx          # Application entry point
```

## Why Vite

This project originally started as Create React App and was migrated to Vite for a faster dev loop and smaller baseline bundle.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

