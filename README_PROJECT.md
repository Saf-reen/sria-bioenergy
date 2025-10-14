# SRIA BIOENERGY - Biomass Trading Platform

A complete frontend replication of the CM Biomass website, built for SRIA BIOENERGY using modern React technologies.

## 🚀 Features

- **Beautiful Design System**: Custom forest green and earth tone color palette with semantic tokens
- **Smooth Animations**: Framer Motion animations throughout (hero sections, counters, cards, page transitions)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Global Presence**: Interactive Mapbox map showing 11 office locations worldwide
- **Product Showcase**: Detailed product cards with specifications
- **Team Profiles**: Leadership section with modal biographies
- **Career Portal**: Job listings with detailed descriptions
- **Contact Forms**: Validated forms with react-hook-form and Zod
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features
- **Performance**: Lazy loading, optimized images, smooth scroll behavior

## 📁 Project Structure

```
src/
├── assets/              # Images and static assets
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Sticky navigation with dropdowns
│   ├── Footer.tsx      # Site footer with links
│   ├── Hero.tsx        # Reusable hero section
│   ├── AnimatedCounter.tsx  # Scroll-triggered counters
│   ├── ProductCard.tsx # Product display card
│   ├── MapComponent.tsx # Mapbox interactive map
│   └── Layout.tsx      # Main layout wrapper
├── data/               # Mock data
│   └── mockData.ts     # Products, offices, jobs, certificates
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # Company history and team
│   ├── Products.tsx    # Product catalog
│   ├── GlobalPresence.tsx  # Office map and locations
│   ├── Sustainability.tsx  # Certifications and commitments
│   ├── Careers.tsx     # Job listings
│   ├── Contact.tsx     # Contact form
│   ├── Privacy.tsx     # Privacy policy
│   ├── Terms.tsx       # Terms of service
│   └── CookiePolicy.tsx # Cookie policy
├── hooks/              # Custom React hooks
├── lib/                # Utilities
└── App.tsx            # Main app with routing

```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **React Router v6** - Client-side routing
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Mapbox GL JS** - Interactive maps
- **shadcn/ui** - UI component library
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. **Important: Configure Mapbox** (for Global Presence map)

The map component requires a Mapbox access token. Open `src/components/MapComponent.tsx` and replace the placeholder token:

```typescript
const MAPBOX_TOKEN = "your-actual-mapbox-token-here";
```

To get a token:
- Sign up at https://mapbox.com
- Go to Account → Tokens
- Copy your default public token or create a new one

4. Start development server:
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

## 📦 Build & Deploy

### Production Build

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy

The built files in `dist/` can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

## 🎨 Design System

The design system uses semantic color tokens defined in `src/index.css`:

- **Primary**: Deep forest green (biomass/nature theme)
- **Secondary**: Warm earth/wood tones
- **Accent**: Bright green for sustainability highlights
- **Gradients**: Hero overlays and subtle backgrounds
- **Shadows**: Elegant elevation for cards and buttons
- **Animations**: Smooth transitions and scroll-reveal effects

### Using Design Tokens

Always use semantic tokens instead of hard-coded colors:

```tsx
// ❌ Wrong
<div className="bg-green-700 text-white">

// ✅ Correct
<div className="bg-primary text-primary-foreground">
```

## 🔧 Customization

### Update Mock Data

All mock data is in `src/data/mockData.ts`:

- **Products**: `products` array
- **Office Locations**: `offices` array
- **Job Listings**: `jobs` array
- **Certifications**: `certificates` array
- **Team Members**: `teamMembers` array
- **Statistics**: `stats` object

### Add Backend Integration

The project is designed to easily connect to a backend:

1. **Contact Form** (`src/pages/Contact.tsx`):
   - Replace the mock submission in `onSubmit` with actual API call
   - Update form schema if needed

2. **Job Applications** (`src/pages/Careers.tsx`):
   - Add API endpoint in job detail modal
   - Implement file upload for resumes

3. **Newsletter/Marketing**:
   - Add email capture forms
   - Connect to email marketing platform

4. **CMS Integration**:
   - Replace mock data with API calls
   - Consider using Strapi, Contentful, or Sanity

### Change Branding

1. Update colors in `src/index.css`
2. Replace logo text in `src/components/Header.tsx`
3. Update company name throughout the site
4. Replace generated images in `src/assets/`
5. Update meta tags in `index.html`

## 🗺️ Mapbox Configuration

The Global Presence page uses Mapbox GL JS for the interactive map. 

**Free tier**: 50,000 map loads/month

To customize:
- Update office coordinates in `src/data/mockData.ts`
- Modify map style in `src/components/MapComponent.tsx`
- Add custom markers or popups

## ♿ Accessibility

The site follows accessibility best practices:
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus management in modals
- Respects `prefers-reduced-motion`
- Color contrast WCAG AA compliant

## 🔍 SEO

SEO features implemented:
- Meta tags for each page (title, description, OG, Twitter)
- Semantic HTML structure
- Image alt attributes
- Canonical URLs
- robots.txt in public folder
- Sitemap ready structure

To add dynamic meta tags per page, consider using:
- `react-helmet-async` for client-side meta tags
- Server-side rendering with Next.js or Remix

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: > 1440px

## 🐛 Known Issues / TODOs

- [ ] Mapbox token needs to be replaced with actual token
- [ ] Form submissions are mocked - need backend integration
- [ ] Certificate images use placeholder - replace with actual PDFs/images
- [ ] Team member images use same placeholder - add unique photos
- [ ] Cookie consent banner not implemented (only policy page exists)
- [ ] Analytics integration pending
- [ ] Add actual PDF downloads for documents

## 📄 License

This project is proprietary to SRIA BIOENERGY.

## 🤝 Contributing

For internal development team:
1. Create a feature branch
2. Make changes
3. Test thoroughly across devices
4. Submit pull request for review

## 📞 Support

For questions or issues:
- Email: dev@sriabioenergy.com
- Internal Slack: #bioenergy-web

---

**Built with ❤️ for a greener tomorrow**
