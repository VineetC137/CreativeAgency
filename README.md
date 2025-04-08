# Responsive Portfolio Website

A mobile-first, responsive portfolio website for a creative agency or individual developer featuring five pages: Home, About, Services, Portfolio, and Contact.

## Features

- Mobile-first responsive design
- Modern UI with consistent design elements
- Interactive components with JavaScript
- Optimized for performance and accessibility
- Dark/Light theme toggle
- Animated page transitions

## Pages

1. **Home** - Hero section, introduction, services preview, testimonials, CTA
2. **About** - Company/personal story, mission & vision, timeline, skills
3. **Services** - Grid layout of services with icons and descriptions
4. **Portfolio** - Filterable gallery of projects with lightbox view
5. **Contact** - Contact form with validation, map, and social media links

## Tech Stack

- HTML5
- CSS3 (with SCSS preprocessor)
- JavaScript
- Git & GitHub (version control)

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. For development, use a local server like Live Server extension in VS Code

## Project Structure

```
project-root/
│
├── index.html
├── about.html
├── services.html
├── portfolio.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── style.css.map
│   │
│   ├── scss/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _reset.scss
│   │   ├── _typography.scss
│   │   ├── _utilities.scss
│   │   ├── _components.scss
│   │   └── style.scss
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── theme-toggle.js
│   │   └── portfolio-filter.js
│   │
│   └── images/
│       └── [all image assets]
│
├── README.md
└── .gitignore
```

## Responsive Breakpoints

- Mobile: 360px
- Tablet: 768px
- Laptop: 1024px
- Desktop: 1280px+

## Accessibility

- Semantic HTML
- ARIA roles
- Keyboard navigation
- Sufficient color contrast

## Performance Optimizations

- Lazy loading images
- Minified CSS/JS
- Optimized assets