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

## � Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

Create a `.github/workflows/build-and-deploy.yml` file:

```yaml
name: Build and Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build -- --configuration production

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist/portfolio'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Option 2: Manual Deployment

1. **Build the project for production:**

```bash
npm run build -- --configuration production
```

2. **The build output will be in `dist/portfolio/`**

3. **Push to GitHub Pages:**

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy (add to package.json scripts)
npx gh-pages -d dist/portfolio
```

4. **In your GitHub repository settings:**
   - Go to **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select **gh-pages** branch and `/ (root)` folder

### Build Commands

```bash
# Development build
npm run build

# Production build (optimized)
npm run build -- --configuration production

# Watch mode (rebuild on file changes)
npm run watch
```

## �📋 Key Components

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
