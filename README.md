# Tech Shop

A modern React e-commerce application built with Vite, React 18, Redux, and React Router v6.

## Features

- 🛍️ Product catalog with filtering and search
- 🛒 Shopping cart functionality
- 💖 Wishlist with localStorage persistence
- 📱 Responsive design with Bootstrap 5
- 🎨 Styled with Styled Components
- 🔄 State management with Redux
- 🚀 Fast development with Vite

## Tech Stack

- **Build Tool**: Vite 7.1.0
- **Framework**: React 18.2.0
- **Routing**: React Router v6
- **State Management**: Redux with Redux Thunk
- **Styling**: Bootstrap 5 + Styled Components
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-tech-shop
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment

### Vercel

This application is configured for deployment on Vercel with proper routing support.

To deploy to Vercel:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

**Note**: The application uses BrowserRouter with Vercel's rewrite rules for proper client-side routing.

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

## Migration from Create React App

This project was successfully migrated from Create React App to Vite. Key changes include:

- ✅ Updated to React 18 with `createRoot` API
- ✅ Migrated to React Router v6 with `Routes` and `Route` components
- ✅ Updated to Bootstrap 5 for better compatibility
- ✅ Upgraded all dependencies to latest stable versions
- ✅ Configured Vite for optimal development experience
- ✅ Fixed security vulnerabilities in dependencies

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
