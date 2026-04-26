# YogaFlow Pro - Quick Start (5 Minutes)

## TL;DR - Just Want to Run It?

### Step 1: Install Node.js
Download from https://nodejs.org/ (choose LTS version)

### Step 2: Get the Code
Choose ONE:

**Option A - From B12:**
- Go to B12 website builder
- Find export/download option
- Download the project folder

**Option B - Using Git:**
```bash
git clone <your-repo-url>
cd kRdMW9yE
```

**Option C - Manual Download:**
- Download as ZIP from B12
- Extract the folder

### Step 3: Install & Run
```bash
cd kRdMW9yE
npm install
npm run dev
```

### Step 4: Open in Browser
```
http://localhost:3000
```

Done! 🎉

---

## What's Inside?

✅ Full yoga class booking website
✅ 6+ pages (home, classes, login, signup, contact, privacy)
✅ Beautiful responsive design
✅ Interactive components (carousel, forms, filters)
✅ Indian localization (₹ pricing, Indian names, phone numbers)
✅ Ready to customize

---

## File Structure (Simple View)

```
Your Project/
├── src/pages/          → Website pages (/)
├── src/components/     → Reusable parts
├── src/styles/         → Colors & fonts
├── package.json        → Project info
├── SETUP.md            → Full setup guide
├── PROJECT_FILES.md    → All files explained
└── public/             → Images, favicon
```

---

## Common Commands

| What you want | Command |
|---|---|
| Start local server | `npm run dev` |
| Check for errors | `npm run dev` (in terminal) |
| Build for production | `npm run build` |
| Preview production | `npm run preview` |
| Install dependencies | `npm install` |
| Clear and reinstall | `rm -rf node_modules && npm install` |

---

## Update Content Quickly

### Change text on homepage:
→ Edit: `src/pages/index.astro`

### Change colors:
→ Edit: `src/styles/global.css`

### Change navigation menu:
→ Edit: `src/components/Header.astro`

### Change footer info:
→ Edit: `src/components/Footer.astro`

### Change yoga classes list:
→ Edit: `src/components/ClassBrowser.tsx` (find `const classes = [...]`)

### Change testimonials:
→ Edit: `src/components/TestimonialsCarousel.tsx` (find `const testimonials = [...]`)

---

## Current Content

### Team Members:
- Aarav Sharma (CEO)
- Vihaan Gupta (Tech)
- Ishaan Verma (Community)
- Ayaan Singh (Design)

### Pricing (in ₹):
- Classes: ₹349 to ₹599
- Currency shown with ₹ symbol

### Contact:
- Phone: +91 9856472589
- Phone: +91 7569874626
- Email: support@yogaflowpro.com

---

## Troubleshooting

### "npm command not found"
→ Install Node.js from nodejs.org

### "Port 3000 already in use"
→ Astro will automatically use next port (3001, 3002, etc.)

### "Module not found"
→ Run: `npm install` again

### "Build failed"
→ Check you have Node v18+ : `node --version`

---

## Deployment (When Ready)

1. Run: `npm run build`
2. Upload `dist/` folder to:
   - Netlify (free)
   - Vercel (free)
   - GitHub Pages
   - Any hosting provider

---

## Files You Can Safely Edit

✅ `src/pages/` - Page content
✅ `src/components/` - Component content
✅ `src/styles/global.css` - Colors & fonts
✅ `public/` - Images & static files
✅ `tailwind.config.js` - Tailwind settings

❌ Don't delete `node_modules/` (reinstall with npm install)
❌ Don't modify package.json unless you know what you're doing

---

## Next Steps

1. **Run it locally** using steps above
2. **Customize content** (see "Update Content Quickly")
3. **Test in browser** at http://localhost:3000
4. **Deploy** when ready

For detailed info, see:
- `SETUP.md` - Full setup guide
- `PROJECT_FILES.md` - All files explained
- `PROJECT_DESCRIPTION.md` - Business details

---

Happy coding! 🧘‍♀️✨
