# YogaFlow Pro - Complete Setup Guide

## Overview
YogaFlow Pro is a beautiful yoga session booking website built with Astro, React 19, Tailwind CSS v4, and shadcn/ui components.

## Prerequisites
Before you begin, make sure you have the following installed on your PC:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** or **pnpm** (Node package manager)
   - npm comes with Node.js by default
   - Or install pnpm: `npm install -g pnpm`

3. **Git** (optional, for cloning)
   - Download from: https://git-scm.com/

## Installation Steps

### Step 1: Download the Project
Choose one of the following options:

**Option A: Using Git (Recommended)**
```bash
git clone <repository-url>
cd kRdMW9yE
```

**Option B: Manual Download**
1. Download the complete folder to your PC
2. Extract the zip file
3. Navigate to the folder in your terminal

### Step 2: Install Dependencies
Open terminal/command prompt in the project folder and run:

```bash
npm install
```

Or if using pnpm:
```bash
pnpm install
```

This will install all required packages listed in package.json.

### Step 3: Run the Development Server
Start the local development server:

```bash
npm run dev
```

Or with pnpm:
```bash
pnpm run dev
```

The server will start and you'll see output like:
```
  ▶ http://localhost:3000
```

Open your browser and navigate to `http://localhost:3000` to view the website.

### Step 4: Build for Production (Optional)
To create an optimized production build:

```bash
npm run build
```

This generates a static `dist/` folder with all optimized files.

### Step 5: Preview Production Build (Optional)
To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
kRdMW9yE/
├── src/
│   ├── components/          # Reusable Astro & React components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ClassBrowser.tsx    # Interactive class booking component
│   │   ├── TestimonialsCarousel.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── MobileNav.tsx
│   │   └── ui/             # shadcn/ui components
│   ├── pages/              # Website pages (routes)
│   │   ├── index.astro     # Homepage
│   │   ├── browse-classes.astro
│   │   ├── login.astro
│   │   ├── signup.astro
│   │   ├── contact.astro
│   │   └── privacy-policy.astro
│   ├── styles/
│   │   └── global.css      # Global styles & design tokens
│   └── b12Context.json     # B12 configuration
├── public/                 # Static assets (images, fonts)
├── astro.config.mjs        # Astro configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## Key Features

✅ **Responsive Design** - Mobile, tablet, and desktop friendly
✅ **Interactive Components** - React-based class browser, testimonials carousel
✅ **Beautiful UI** - shadcn/ui components with Tailwind CSS v4
✅ **Contact Forms** - Functional forms for user signups and inquiries
✅ **Indian Localization** - Rupee pricing, Indian names, local phone numbers
✅ **Smooth Animations** - Engaging hover effects and transitions

## Main Pages

1. **Homepage** (`/`) - Landing page with all sections
   - Hero section with CTA
   - Services overview
   - How it works guide
   - Smart scheduling section
   - Testimonials carousel
   - Team section
   - FAQ accordion
   - Blog previews
   - Upcoming events

2. **Browse Classes** (`/browse-classes`) - Interactive class listing
   - Filter by type, level, and time
   - Book classes with visual feedback
   - View instructor details

3. **Login** (`/login`) - User authentication page

4. **Signup** (`/signup`) - New user registration form

5. **Contact** (`/contact`) - Contact form and information

6. **Privacy Policy** (`/privacy-policy`) - Legal information

## Customization

### Change Colors & Design
Edit `src/styles/global.css` to modify:
- Primary color
- Secondary color
- Accent color
- Font families
- Spacing tokens

### Update Content
- Homepage text: Edit `src/pages/index.astro`
- Navigation links: Edit `src/components/Header.astro`
- Footer content: Edit `src/components/Footer.astro`

### Add New Pages
1. Create a new `.astro` file in `src/pages/`
2. Import Header and Footer components
3. Add page content
4. Update navigation links in Header

### Add New Components
Create new React (`.tsx`) or Astro (`.astro`) files in `src/components/`

## Technology Stack

- **Astro** - Static site generation
- **React 19** - Interactive components
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - Pre-built UI components
- **Lucide** - Beautiful icons
- **Vite** - Build tool

## Troubleshooting

### Port 3000 Already in Use
If port 3000 is busy, Astro will automatically use the next available port.

### Dependencies Installation Fails
Try clearing cache and reinstalling:
```bash
rm -rf node_modules
npm cache clean --force
npm install
```

### Build Errors
Make sure you're using Node.js v18+:
```bash
node --version
```

## Performance Tips

- Images are optimized automatically by Astro
- CSS and JavaScript are minified in production
- Static site is incredibly fast to load

## Deployment

This website can be deployed to:
- **Netlify** - Free tier available
- **Vercel** - Free tier available
- **GitHub Pages** - Static hosting
- **Any static hosting provider**

To deploy:
1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting provider

## Support & Resources

- **Astro Docs**: https://docs.astro.build/
- **Tailwind CSS**: https://tailwindcss.com/
- **React**: https://react.dev/
- **shadcn/ui**: https://ui.shadcn.com/

## License

This project is ready to use. Modify and customize as needed for your business.

## Notes

- The B12 required scripts are included for compatibility
- All forms are configured with unique IDs for backend integration
- Images are hosted on B12 CDN - replace with local images if needed
- Phone numbers included: +91 9856472589, +91 7569874626

---

Happy building! 🧘‍♀️
