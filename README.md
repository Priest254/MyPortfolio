# Allan Nickson's Portfolio

A modern, responsive portfolio website built with Angular 19 and Tailwind CSS, showcasing expertise in GIS, cartography, remote sensing, physical planning, and web development.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with a beautiful dark mode toggle
- **Project Showcase**: Display of projects across multiple categories including:
  - GIS and Remote Sensing
  - Cartography and Physical Planning
  - Web Development
  - App Development
- **Smooth Animations**: Elegant transitions and hover effects
- **Dark Mode Support**: Full dark theme support using Tailwind CSS
- **Modern Tech Stack**: Built with latest Angular 19 features

## 🛠️ Tech Stack

- **Framework**: Angular 19 (Standalone Components)
- **Styling**: Tailwind CSS
- **Icons**: Lucide Angular
- **Language**: TypeScript
- **Package Manager**: npm

## 📂 Project Structure

```
src/
├── app/
│   ├── components/        # Reusable Angular components
│   │   ├── about/
│   │   ├── academic/
│   │   ├── contact/
│   │   ├── header/
│   │   ├── personal/
│   │   ├── project-card/
│   │   ├── project-grid/
│   │   └── tech-stack/
│   ├── data/             # Static data and constants
│   │   ├── academic.data.ts
│   │   ├── personal.data.ts
│   │   └── projects.data.ts
│   ├── models/           # TypeScript interfaces and types
│   │   ├── academic.interface.ts
│   │   ├── personal.interface.ts
│   │   └── project.interface.ts
│   ├── services/         # Angular services
│   │   └── project.service.ts
│   ├── app.routes.ts     # Application routing
│   ├── app.config.ts     # App configuration
│   └── app.ts            # Root component
├── index.html
├── main.ts
└── styles.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Angular CLI 19+

### Installation

```bash
# Clone the repository or navigate to the project directory
cd MyPortfolio

# Install dependencies
npm install
```

### Development Server

```bash
# Start the development server
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you modify source files.

### Building for Production

```bash
# Build the project for production
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

```bash
# Run unit tests with Vitest
npm test
# or
ng test
```

## 🚀 Deploying to GitHub Pages

### Quick Start (Recommended - Automated)

1. **Commit your changes:**
```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

2. **GitHub Actions will automatically:**
   - Build your portfolio
   - Deploy to GitHub Pages on every push to `main`
   - Your site will be live at: `https://priest254.github.io/MyPortfolio/`

3. **Verify settings in GitHub repo:**
   - Go to **Settings → Pages**
   - Source: "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Wait 1-2 minutes for deployment

### Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# 1. Build for production
npm run build:gh-pages

# 2. Verify build succeeded
dir dist\portfolio

# 3. Deploy to GitHub Pages
npx gh-pages -d dist\portfolio

# 4. Push to GitHub
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Build Commands

```bash
# Development build
npm run build

# Production build (optimized for GitHub Pages)
npm run build:gh-pages

# Watch mode (rebuild on file changes)
npm run watch
```

### Troubleshooting

**404 Error:**
- Check that `baseHref` is set to `/MyPortfolio/` in `angular.json` (already configured)
- Verify the `gh-pages` branch exists in your GitHub repo

**CSP Script Errors:**
- Already handled with correct Content Security Policy in `src/index.html`
- The app uses safe inline scripts for Angular to work properly

**Site not updating:**
- GitHub Actions deployment can take 1-2 minutes
- Check the "Actions" tab in your GitHub repo to see build status
- Clear browser cache (Ctrl+Shift+Delete) or use incognito mode

## 📋 Key Components

### Project Card Component
Displays individual projects with:
- Project image and category badge
- Title and description (fully visible on all devices)
- Technology tags
- Social links (GitHub, Demo)
- Hover animations

### Project Grid Component
Responsive grid layout for displaying all projects:
- Adaptive grid layout for mobile and desktop
- Organized by project categories
- Smooth animations

### Header & Navigation
- Sticky header with navigation
- Dark mode toggle
- Responsive mobile menu

## 🎨 Customization

### Adding Projects

Edit `src/app/data/projects.data.ts`:

```typescript
{
  id: 'new-project',
  title: 'Project Title',
  description: 'Project description...',
  category: 'Category Name',
  imageUrl: 'image-name.jpg',
  tags: ['TAG1', 'TAG2'],
  links: {
    github?: 'https://github.com/...',
    demo?: 'https://demo-url...'
  }
}
```

### Styling

All styles use Tailwind CSS utility classes. Modify `tailwind.config.js` for custom theme configuration.

## 📝 License

This project is part of my personal portfolio. Feel free to use it as inspiration for your own portfolio.

## 📧 Contact

For inquiries or collaboration opportunities, please reach out through the contact section on the portfolio website.

---

Built with ❤️ using Angular 19 & Tailwind CSS
