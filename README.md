# YogaFlow Pro - Complete Website Project

Welcome to YogaFlow Pro, a fully functional yoga session booking website built with modern web technologies. This project is ready to download, customize, and deploy.

---

## 📚 Documentation Guide

Choose the guide that matches your needs:

### 🚀 **For Beginners** → Start Here
**Read:** [`DOWNLOAD_INSTRUCTIONS.md`](./DOWNLOAD_INSTRUCTIONS.md)
- Step-by-step download & installation
- System requirements (Node.js setup)
- Troubleshooting common issues
- How to customize content
- Deployment options

### ⚡ **In a Hurry?** → 5 Minute Start
**Read:** [`QUICKSTART.md`](./QUICKSTART.md)
- Just the essentials
- Quick command reference
- Common customizations
- File structure overview

### 📖 **Need Full Details?** → Complete Guide
**Read:** [`SETUP.md`](./SETUP.md)
- Comprehensive setup instructions
- Project structure explanation
- All features described
- Technology stack details
- Deployment guides

### 📋 **Want File Listing?** → All Files Explained
**Read:** [`PROJECT_FILES.md`](./PROJECT_FILES.md)
- Complete file structure
- What each file does
- Key components explained
- Data organization
- File modification guide

### 🏢 **Business Information** → Project Details
**Read:** [`PROJECT_DESCRIPTION.md`](./PROJECT_DESCRIPTION.md)
- Business details
- Brand guidelines
- Content strategy
- Platform information

---

## ⚡ TL;DR - Ultra Quick Start

```bash
# 1. Install Node.js from nodejs.org (if not done)

# 2. Navigate to project folder
cd kRdMW9yE

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open http://localhost:3000 in your browser
```

Done! Website is running locally. 🎉

---

## 📦 What's Included

### Pages (6 Total)
✅ **Homepage** - Full landing page with all sections
✅ **Browse Classes** - Interactive yoga class listing
✅ **Login** - User authentication page
✅ **Signup** - User registration form
✅ **Contact** - Contact form and information
✅ **Privacy Policy** - Legal information

### Features
✅ **Responsive Design** - Works on mobile, tablet, desktop
✅ **Interactive Components** - React-based, smooth interactions
✅ **Beautiful UI** - shadcn/ui components with Tailwind CSS
✅ **Forms** - Multiple functional forms with validation
✅ **Indian Localization** - ₹ pricing, Indian names, phone numbers
✅ **Mobile Navigation** - Hamburger menu for smaller screens
✅ **Smooth Animations** - Engaging transitions and effects

### Technology Stack
- **Astro** 5.14.3 - Static site generation
- **React** 19.2.0 - Interactive components
- **Tailwind CSS** 4.1.14 - Utility-first styling
- **shadcn/ui** - Pre-built components
- **Vite** - Fast build tool
- **TypeScript** - Type safety

---

## 📂 Folder Structure

```
YogaFlowPro/
│
├── 📄 Documentation Files (START HERE)
│   ├── README.md                    ← You are here
│   ├── DOWNLOAD_INSTRUCTIONS.md     ← For download & setup
│   ├── QUICKSTART.md                ← Quick reference
│   ├── SETUP.md                     ← Full setup guide
│   ├── PROJECT_FILES.md             ← All files explained
│   └── PROJECT_DESCRIPTION.md       ← Business info
│
├── 📁 src/
│   ├── pages/                       ← Website pages (routes)
│   │   ├── index.astro              ├─ Homepage
│   │   ├── browse-classes.astro     ├─ Class browser
│   │   ├── login.astro              ├─ Login page
│   │   ├── signup.astro             ├─ Sign up page
│   │   ├── contact.astro            ├─ Contact page
│   │   └── privacy-policy.astro     └─ Privacy policy
│   │
│   ├── components/                  ← Reusable components
│   │   ├── Header.astro             ├─ Navigation
│   │   ├── Footer.astro             ├─ Footer
│   │   ├── ClassBrowser.tsx         ├─ Class listing
│   │   ├── TestimonialsCarousel.tsx ├─ Testimonials
│   │   ├── FAQAccordion.tsx         ├─ FAQ section
│   │   ├── MobileNav.tsx            └─ Mobile menu
│   │
│   ├── styles/
│   │   └── global.css               ← Colors, fonts, design tokens
│   │
│   └── [170+ UI Component Files]    ← shadcn/ui components
│
├── 📁 public/
│   └── favicon.svg                  ← Website icon
│
├── 📦 Configuration Files
│   ├── package.json                 ← Dependencies
│   ├── astro.config.mjs             ← Astro settings
│   ├── tailwind.config.js           ← Tailwind settings
│   ├── tsconfig.json                ← TypeScript settings
│   └── components.json              ← shadcn/ui config
│
└── 📁 Generated Folders (after running)
    ├── node_modules/                ← Installed packages
    └── dist/                        ← Production build
```

---

## 🎯 Key Information

### Team Members
- **Aarav Sharma** (Founder & CEO)
- **Vihaan Gupta** (Head of Technology)
- **Ishaan Verma** (Community Manager)
- **Ayaan Singh** (Lead Designer)

### Contact Information
- Phone 1: **+91 9856472589**
- Phone 2: **+91 7569874626**
- Email: **support@yogaflowpro.com**

### Pricing (in INR)
- Yoga Classes: ₹349 - ₹599
- All prices displayed with ₹ symbol

### Form IDs
- Signup Form: `102ad2cb-4f1d-49da-a1a7-5ab5897c8266`
- Intake Form: `567795fa-6bb0-4451-98e2-c09cfb8c5234`

---

## 🚀 Quick Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server (http://localhost:3000)
npm run dev

# Stop the server
Ctrl + C

# Create production build
npm run build

# Preview the production build
npm run preview

# Clear and reinstall packages
rm -rf node_modules && npm install
```

---

## ✏️ Customization Quick Guide

### Change Homepage Text
→ Edit: `src/pages/index.astro`

### Change Colors & Fonts
→ Edit: `src/styles/global.css`

### Update Navigation Menu
→ Edit: `src/components/Header.astro` (navLinks array)

### Change Yoga Classes
→ Edit: `src/components/ClassBrowser.tsx` (classes array)

### Update Testimonials
→ Edit: `src/components/TestimonialsCarousel.tsx` (testimonials array)

### Add New Pages
→ Create new `.astro` file in `src/pages/`

### Update Footer
→ Edit: `src/components/Footer.astro`

**All changes auto-reload in browser!** No restart needed.

---

## 🌐 Deployment

### Build for Production
```bash
npm run build
```
Creates optimized files in `dist/` folder.

### Deploy Options (Free)
1. **Netlify** - netlify.com (drag & drop `dist/`)
2. **Vercel** - vercel.com (import from GitHub)
3. **GitHub Pages** - github.com (enable in settings)
4. **Cloudflare Pages** - pages.cloudflare.com

**All are free and support up to millions of visitors!**

---

## 📱 Mobile Testing

### Test in Browser
1. Press `F12` (or Cmd+Option+I on Mac)
2. Click phone icon in dev tools
3. Select different device sizes

### Test on Your Phone
1. Find your computer's IP: `ipconfig` (Windows) or `ifconfig` (Mac)
2. On phone, visit: `http://192.168.x.x:3000`

---

## 🔧 System Requirements

- **Node.js** v18 or higher
- **npm** (comes with Node.js)
- **200MB disk space** (for node_modules)
- **1GB for complete project** (including dist/)

---

## 📖 Documentation Files Overview

| File | Purpose | Who Should Read |
|------|---------|-----------------|
| **DOWNLOAD_INSTRUCTIONS.md** | How to download and install | Beginners, first-time setup |
| **QUICKSTART.md** | 5-minute quick reference | Everyone who wants quick answers |
| **SETUP.md** | Detailed setup and features | Intermediate, learning the platform |
| **PROJECT_FILES.md** | All files explained in detail | Developers, customizers |
| **PROJECT_DESCRIPTION.md** | Business and brand info | Content managers, owners |

---

## ❓ FAQ

**Q: Do I need to pay for anything?**
A: No! Node.js, npm, and all tools are free.

**Q: Can I customize the colors?**
A: Yes! Edit `src/styles/global.css` to change colors.

**Q: Can I add more pages?**
A: Yes! Create new `.astro` files in `src/pages/`

**Q: Can I change the team members?**
A: Yes! Edit `src/pages/index.astro` for team section.

**Q: How do I update the yoga classes?**
A: Edit `src/components/ClassBrowser.tsx` and modify the `classes` array.

**Q: Can I host this for free?**
A: Yes! Use Netlify, Vercel, or GitHub Pages (all free).

**Q: What if I break something?**
A: Everything is version controlled. You can always restore from git.

**Q: Can I use my own domain?**
A: Yes! Most hosting providers support custom domains.

---

## 🎓 Learning Resources

- **Astro**: https://docs.astro.build/
- **React**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Node.js**: https://nodejs.org/docs/
- **Web Development**: https://developer.mozilla.org/

---

## 📞 Next Steps

1. **Install Node.js** (if needed)
   → Download from nodejs.org

2. **Extract Project**
   → Unzip the downloaded folder

3. **Read Documentation**
   → Start with `DOWNLOAD_INSTRUCTIONS.md`

4. **Install & Run**
   → `npm install` then `npm run dev`

5. **Customize**
   → Edit files in `src/` folder

6. **Deploy**
   → Push to Netlify, Vercel, or similar

---

## ✨ Features at a Glance

- ✅ 6 full pages
- ✅ Responsive design
- ✅ Interactive components
- ✅ Beautiful animations
- ✅ Contact forms
- ✅ Mobile navigation
- ✅ Testimonial carousel
- ✅ FAQ accordion
- ✅ Class browser with filters
- ✅ Team section
- ✅ Blog section
- ✅ Events section
- ✅ Indian localization
- ✅ Production-ready code

---

## 📋 Checklist Before Going Live

- [ ] Read `DOWNLOAD_INSTRUCTIONS.md`
- [ ] Install Node.js
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] View at `http://localhost:3000`
- [ ] Test all pages and links
- [ ] Test on mobile devices
- [ ] Customize content as needed
- [ ] Run `npm run build`
- [ ] Deploy to hosting provider
- [ ] Test live website
- [ ] Set up custom domain (optional)

---

## 🎉 You're Ready!

Everything is set up and ready to go. Follow the documentation files, and you'll have a professional yoga website running locally in minutes.

**Start with:** [`DOWNLOAD_INSTRUCTIONS.md`](./DOWNLOAD_INSTRUCTIONS.md)

---

## 📝 License & Support

This project is ready to use and customize for your business.

**Questions?** Refer to the documentation files or check the learning resources above.

**Issues?** Check the troubleshooting section in `DOWNLOAD_INSTRUCTIONS.md`.

---

**Happy coding! 🧘‍♀️✨**

Built with ❤️ using Astro, React, and Tailwind CSS
