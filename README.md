# Portfolio Website

A modern, responsive portfolio website built with Vue.js and Nuxt 3, featuring smooth animations, dynamic content sections, and a clean, professional design.

## ✨ Features

- **Responsive Design** - Optimized for all device sizes with mobile-first approach
- **Smooth Animations** - CSS-based animations with intersection observer triggers
- **Dynamic Sections** - Interactive hero, skills, projects, and contact sections
- **Performance Optimized** - Built with Nuxt 3 for optimal loading speeds
- **Modern Tech Stack** - TypeScript, Vue 3 Composition API, and Tailwind CSS
- **Icon Integration** - Comprehensive icon system with Iconify
- **SEO Ready** - Meta tags and structured data for search optimization

## 🚀 Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) - The Intuitive Vue Framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework via @nuxt/ui
- **Icons**: [Iconify](https://iconify.design/) - Unified icon framework
- **Fonts**: Optimized web fonts via @nuxt/fonts. Using Host Grotesk for heading and body, and Satoshi for brand typeface
- **Images**: Optimized image handling via @nuxt/image
- **Content**: Dynamic content management via @nuxt/content
- **Code Quality**: ESLint with @nuxt/eslint configuration

## 📦 Dependencies

```json
{
  "@iconify-json/logos": "^1.2.4",
  "@iconify-json/uil": "^1.2.3",
  "@nuxt/content": "^3.5.1",
  "@nuxt/eslint": "^1.4.1",
  "@nuxt/fonts": "^0.11.4",
  "@nuxt/icon": "^1.13.0",
  "@nuxt/image": "^1.10.0",
  "@nuxt/scripts": "^0.11.7",
  "@nuxt/ui": "^3.1.2",
  "@unhead/vue": "^2.0.9",
  "eslint": "^9.27.0",
  "nuxt": "^3.17.3",
  "typescript": "^5.8.3",
  "vue-router": "^4.5.1",
  "vue": "^3.5.14"
}
```

## 🏗️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/azureiya85/Portfolio-Website-Vue.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Generate Static Site
```bash
npm run generate
```

## 📁 Project Structure

```
├── components/
│   └── templates/
│       ├── HeroSection.vue
│       ├── WhatIDoSection.vue
│       ├── MySkillsSection.vue
│       ├── ProjectsHighlightSection.vue
│       └── ContactMeSection.vue
├── pages/
│   └── index.vue                 # Main portfolio page
├── layouts/
│   └── default.vue              # Default layout
├── assets/
│   └── css/
├── public/
├── nuxt.config.ts               # Nuxt configuration
└── package.json
```

## 🎨 Key Features Breakdown

### Section Management
- **Intersection Observer** - Tracks section visibility for animations
- **Dynamic Active States** - Updates navigation based on scroll position
- **Smooth Animations** - CSS keyframes with staggered delays

### Skills Showcase
- **Categorized Skills** - Web development, game development, and creative skills
- **Interactive Cards** - Hover effects with scale and color transitions
- **Experience Timeline** - Visual timeline with professional history
- **Education Section** - Academic background and certifications

### Responsive Design
- **Mobile-First** - Optimized for mobile devices first
- **Grid Layouts** - CSS Grid and Flexbox for complex layouts
- **Breakpoint System** - Tailwind's responsive utilities

## 🎯 Performance Optimizations

- **Vue 3 Composition API** - Efficient reactivity system
- **Nuxt 3 Auto-imports** - Reduced bundle size with tree-shaking
- **Optimized Images** - @nuxt/image for responsive images
- **Font Optimization** - @nuxt/fonts for web font loading
- **Code Splitting** - Automatic route-based code splitting

## 🛠️ Customization

### Color Scheme
The website uses a custom color palette defined in Tailwind configuration:
- `custom-accent-700` - Primary accent color
- `custom-box-800` - Card background color
- `neutral-*` - Text and background variations

### Adding New Sections
1. Create a new component in `components/templates/`
2. Add the component to `pages/index.vue`
3. Update the intersection observer logic
4. Add corresponding visibility state

### Modifying Animations
Animation classes are defined in the component styles:
- `animate-fade-in` - Fade in animation
- `animate-slide-up` - Slide up animation
- `animate-slide-in-right` - Slide in from right
- `animate-bounce-in` - Bounce in animation

## 🚀 Deployment

This website can be deployed to any static hosting platform:

- **Vercel** (Recommended for Nuxt)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

For SSR deployment, use platforms that support Node.js:
- **Vercel**
- **Railway**
- **DigitalOcean App Platform**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---