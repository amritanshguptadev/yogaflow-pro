# Complete Project Files List

## Essential Configuration Files

```
package.json                 # Dependencies and scripts
astro.config.mjs            # Astro configuration
tailwind.config.js          # Tailwind CSS configuration
tsconfig.json               # TypeScript configuration
components.json             # shadcn/ui configuration
```

## Source Code Structure

### Pages (Astro files - these become routes)
```
src/pages/
├── index.astro              # Homepage (/)
├── browse-classes.astro     # Browse yoga classes (/browse-classes)
├── login.astro              # User login page (/login)
├── signup.astro             # User registration page (/signup)
├── contact.astro            # Contact page (/contact)
└── privacy-policy.astro     # Privacy policy (/privacy-policy)
```

### Components (Reusable UI pieces)
```
src/components/
├── Header.astro             # Navigation header (used on all pages)
├── Footer.astro             # Footer section (used on all pages)
├── Button.astro             # Button component
├── B12Link.astro            # B12 attribution link
├── RequiredB12HeadScripts.astro   # Required head scripts
├── RequiredB12FooterScripts.astro # Required footer scripts
│
├── React Components (Interactive):
├── ClassBrowser.tsx         # Interactive class listing & booking
├── TestimonialsCarousel.tsx # Testimonials slider
├── FAQAccordion.tsx         # FAQ accordion section
├── MobileNav.tsx            # Mobile navigation menu
│
└── UI Components (shadcn/ui):
    ├── ui/accordion.tsx
    ├── ui/alert.tsx
    ├── ui/alert-dialog.tsx
    ├── ui/aspect-ratio.tsx
    ├── ui/avatar.tsx
    ├── ui/badge.tsx
    ├── ui/breadcrumb.tsx
    ├── ui/button.tsx
    ├── ui/button-group.tsx
    ├── ui/calendar.tsx
    ├── ui/card.tsx
    ├── ui/carousel.tsx
    ├── ui/chart.tsx
    ├── ui/checkbox.tsx
    ├── ui/collapsible.tsx
    ├── ui/command.tsx
    ├── ui/context-menu.tsx
    ├── ui/dialog.tsx
    ├── ui/drawer.tsx
    ├── ui/dropdown-menu.tsx
    ├── ui/empty.tsx
    ├── ui/field.tsx
    ├── ui/form.tsx
    ├── ui/hover-card.tsx
    ├── ui/input.tsx
    ├── ui/input-group.tsx
    ├── ui/input-otp.tsx
    ├── ui/item.tsx
    ├── ui/kbd.tsx
    ├── ui/label.tsx
    ├── ui/menubar.tsx
    ├── ui/navigation-menu.tsx
    ├── ui/pagination.tsx
    ├── ui/popover.tsx
    ├── ui/progress.tsx
    ├── ui/radio-group.tsx
    ├── ui/resizable.tsx
    ├── ui/scroll-area.tsx
    ├── ui/select.tsx
    ├── ui/separator.tsx
    ├── ui/sheet.tsx
    ├── ui/sidebar.tsx
    ├── ui/skeleton.tsx
    ├── ui/slider.tsx
    ├── ui/sonner.tsx
    ├── ui/spinner.tsx
    ├── ui/switch.tsx
    ├── ui/table.tsx
    ├── ui/tabs.tsx
    ├── ui/textarea.tsx
    ├── ui/toggle.tsx
    ├── ui/toggle-group.tsx
    └── ui/tooltip.tsx

Recaptcha Components:
    ├── recaptcha/RecaptchaV2.astro
    └── recaptcha/RecaptchaV3.astro
```

### Styles
```
src/styles/
└── global.css               # Global styles and design tokens
```

### Configuration
```
src/
├── b12Context.json          # B12 platform context
└── env.d.ts                 # TypeScript environment definitions
```

### Public Assets
```
public/
└── favicon.svg              # Website favicon
```

## Generated Files (created after build)

```
dist/                        # Production-ready build output
node_modules/                # Installed dependencies
.astro/                      # Astro cache
```

## Key Custom Files We Created

### Setup & Documentation
- `SETUP.md` - Complete setup guide
- `PROJECT_FILES.md` - This file
- `PROJECT_DESCRIPTION.md` - Business information

## Important Components to Note

### Homepage Components
The homepage includes:
1. **Hero Section** - Main introduction with CTAs
2. **About Section** - Company overview
3. **Services Section** - Three main services highlighted
4. **How It Works** - 4-step process guide
5. **Scheduling Section** - Smart scheduling features
6. **Intake Form** - Personalized preference form (form-id: 567795fa-6bb0-4451-98e2-c09cfb8c5234)
7. **Testimonials** - Carousel with 4 testimonials
8. **Upcoming Events** - 3 event cards
9. **Blog Section** - 3 blog post previews
10. **FAQ Section** - Expandable questions
11. **Team Section** - 4 team members
12. **Contact Section** - CTA buttons

### Interactive Components
- **ClassBrowser** - Displays 6 yoga classes with:
  - Instructor names (Indian names)
  - Pricing in INR (₹)
  - Level filters
  - Time slots
  - Spot availability

- **TestimonialsCarousel** - Shows testimonials with:
  - Rotation controls
  - Author names and emails
  - Quote text
  - Navigation arrows

- **FAQAccordion** - Expandable FAQ items

- **MobileNav** - Responsive hamburger menu

### Forms Integrated
1. **Signup Form** (`/signup`)
   - Form ID: 102ad2cb-4f1d-49da-a1a7-5ab5897c8266
   - Fields: First name, Last name, email, password

2. **Intake Form** (Homepage #intake-form)
   - Form ID: 567795fa-6bb0-4451-98e2-c09cfb8c5234
   - Fields: Goals, experience level, preferred times, class types

3. **Contact Form** (`/contact`)
   - Various contact form fields

## Data & Content

### Team Members (Indian Names)
- Aarav Sharma - Founder & CEO
- Vihaan Gupta - Head of Technology
- Ishaan Verma - Community Manager
- Ayaan Singh - Lead Designer

### Testimonial Authors
- Aarav Sharma - aarav.sharma@gmail.com
- Vihaan Gupta - vihaan.gupta@gmail.com
- Ishaan Verma - ishaan.verma@gmail.com
- Ayaan Singh - ayaan.singh@gmail.com

### Instructors (Class Browser)
- Aarav Sharma
- Vihaan Gupta
- Ishaan Verma
- Ayaan Singh
- Arnav Mehta
- Reyansh Agarwal

### Contact Information
- Phone 1: +91 9856472589
- Phone 2: +91 7569874626
- Email: support@yogaflowpro.com

## Design System

### Colors (Tailwind CSS v4)
- Primary: Green (#6b9967)
- Secondary: Soft background shade
- Accent: Complementary accent
- Background: Light background
- Foreground: Dark text
- Border: Subtle borders
- Muted: Muted text colors

### Typography
- Heading Font: Custom heading family
- Body Font: Default sans-serif
- Sizes: Responsive (sm, base, lg, xl, 2xl, etc.)

### Spacing
- Uses Tailwind's 4px grid system
- Responsive padding/margin classes

## How to Use These Files Locally

1. **Download/Clone** the entire project folder
2. **Navigate** to the folder: `cd kRdMW9yE`
3. **Install dependencies**: `npm install`
4. **Start dev server**: `npm run dev`
5. **Open browser**: `http://localhost:3000`

## Modifying Content

### To Update Homepage Text
→ Edit `src/pages/index.astro`

### To Update Navigation
→ Edit `src/components/Header.astro` (navLinks array)

### To Update Footer
→ Edit `src/components/Footer.astro`

### To Update Colors/Styles
→ Edit `src/styles/global.css`

### To Update Class Data
→ Edit `src/components/ClassBrowser.tsx` (classes array)

### To Update Testimonials
→ Edit `src/components/TestimonialsCarousel.tsx` (testimonials array)

### To Add New Pages
→ Create new `.astro` file in `src/pages/`

## Dependencies Installed

Total: 75+ dependencies including:
- astro 5.14.3
- react 19.2.0
- tailwindcss 4.1.14
- shadcn/ui components
- date-fns, recharts, sonner, zod, and more

All dependencies are listed in `package.json`

## File Sizes (Approximate)

- Source code: ~500KB
- node_modules: ~800MB
- dist/ (after build): ~2-3MB
- Total project: ~1GB with node_modules

## Commands Reference

```bash
npm install              # Install all dependencies
npm run dev             # Start development server (http://localhost:3000)
npm run build           # Create production build
npm run preview         # Preview production build locally
npm run astro           # Run Astro CLI commands
```

## Notes for Developers

- All React components use `client:` directives for interactivity
- Astro components are static by default (faster)
- Forms are connected to B12 backend
- Images are hosted on B12 CDN (update in code if needed)
- Responsive design uses Tailwind's mobile-first approach
- Dark mode support included via next-themes

---

Ready to customize! 🎉
