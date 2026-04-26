# How to Download & Run This Website Locally

## 📥 Download Methods

### Method 1: Via B12 Website Builder (Recommended)

1. Log in to your B12 account
2. Go to your website project (YogaFlow Pro)
3. Look for "Export" or "Download" button
4. Choose "Download as ZIP"
5. Extract the ZIP file to your computer
6. You now have the complete project folder

### Method 2: Via Git (If Available)

```bash
git clone <your-repository-url>
cd kRdMW9yE
```

### Method 3: Manual from B12

1. In B12 dashboard, look for Settings/Export option
2. Select all source files
3. Download the folder
4. Extract to your desired location

---

## 💻 System Requirements

Before you start, install these on your computer:

✅ **Node.js** (v18 or higher)
   - Download: https://nodejs.org/
   - Choose the LTS version
   - Installation includes npm

✅ **Text Editor** (any one)
   - VS Code (https://code.visualstudio.com/) - Recommended
   - Sublime Text
   - Notepad++

✅ **Terminal/Command Prompt**
   - Windows: CMD or PowerShell
   - Mac: Terminal
   - Linux: Any terminal

---

## 🚀 Installation (Step by Step)

### Step 1: Download Node.js

1. Go to https://nodejs.org/
2. Click "LTS" (Long Term Support)
3. Run the installer
4. Follow installation prompts (keep all defaults)
5. Restart your computer

**Verify installation:**
```bash
node --version
npm --version
```

Both commands should return version numbers.

### Step 2: Extract Project Folder

1. Download the project (see Download Methods above)
2. Extract the ZIP file
3. You'll have a folder like: `kRdMW9yE` or `YogaFlowPro`
4. Remember the folder location

### Step 3: Install Dependencies

1. Open your terminal/command prompt
2. Navigate to the project folder:
   ```bash
   cd path/to/your/kRdMW9yE
   ```

   **Example Windows:**
   ```bash
   cd C:\Users\YourName\Downloads\kRdMW9yE
   ```

   **Example Mac:**
   ```bash
   cd ~/Downloads/kRdMW9yE
   ```

3. Install all packages:
   ```bash
   npm install
   ```

   This will take 2-5 minutes. You'll see progress bars.

### Step 4: Start Development Server

While still in the project folder, run:
```bash
npm run dev
```

You should see something like:
```
  ▶ http://localhost:3000
```

### Step 5: Open in Browser

1. Open your web browser (Chrome, Firefox, Safari, etc.)
2. Go to: `http://localhost:3000`
3. You should see the YogaFlow Pro website! 🎉

---

## 📁 Complete Folder Structure

After extracting, your folder should look like:

```
kRdMW9yE/
├── src/
│   ├── components/          (170+ component files)
│   ├── pages/               (6 page files)
│   ├── styles/              (global.css)
│   └── b12Context.json
├── public/                  (favicon.svg)
├── node_modules/            (created after npm install)
├── dist/                    (created after npm run build)
├── package.json
├── astro.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── SETUP.md                 (detailed setup guide)
├── QUICKSTART.md            (quick reference)
├── PROJECT_FILES.md         (all files explained)
├── PROJECT_DESCRIPTION.md   (business info)
└── This file (DOWNLOAD_INSTRUCTIONS.md)
```

---

## ✅ Verify Everything Works

After following all steps above:

1. **Browser shows website:** ✓ Success!
2. **Can click buttons and links:** ✓ Working!
3. **Mobile view works:** ✓ Resize browser or check on phone
4. **All pages load:** ✓ Try clicking header links

---

## 🛠️ Common Commands Reference

Once installation is complete, use these commands:

```bash
# Start development server (local)
npm run dev

# Stop development server
Press Ctrl + C in terminal

# Create production build
npm run build

# Preview production build
npm run preview

# Reinstall all packages
npm install

# Clear cache and reinstall
rm -rf node_modules
npm install
```

---

## 🎨 Customize the Website

### Edit Homepage
→ Open: `src/pages/index.astro`
→ Save file (npm will auto-reload in browser)

### Change Colors
→ Open: `src/styles/global.css`
→ Look for color definitions (primary, secondary, etc.)
→ Change HEX values

### Update Navigation
→ Open: `src/components/Header.astro`
→ Edit navLinks array

### Change Text Anywhere
→ Find the `.astro` or `.tsx` file
→ Edit the text
→ Save (browser auto-reloads)

**Changes appear instantly in browser!** No restart needed.

---

## 📱 Test Mobile View

### In Browser:
1. Open Developer Tools (F12 or Cmd+Option+I)
2. Click phone icon (Toggle Device Toolbar)
3. Select different device sizes

### On Your Phone:
1. Get your computer's local IP:
   - Windows: `ipconfig` in CMD
   - Mac: `ifconfig` in Terminal
   - Look for "IPv4 Address" like `192.168.x.x`

2. Open phone browser and go to:
   ```
   http://192.168.x.x:3000
   ```

---

## 🌐 Deploy (When Ready)

Once you're happy with your website:

### Build for Production:
```bash
npm run build
```
This creates a `dist/` folder with optimized files.

### Deploy to Free Hosting:

**Option 1: Netlify**
1. Go to netlify.com
2. Sign up with GitHub/email
3. Drag & drop the `dist/` folder
4. Website is live! 🚀

**Option 2: Vercel**
1. Go to vercel.com
2. Sign up
3. Import project from GitHub or upload `dist/`
4. Website is live! 🚀

**Option 3: GitHub Pages**
1. Push `dist/` to GitHub
2. Enable GitHub Pages in settings
3. Website is live! 🚀

---

## 📞 Support Resources

- **Astro Docs**: https://docs.astro.build/
- **Node.js Help**: https://nodejs.org/en/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev/

---

## ❓ Troubleshooting

### Issue: "npm: command not found"
**Solution:** Node.js not installed. Download from nodejs.org

### Issue: "Port 3000 already in use"
**Solution:** Another app uses port 3000. Astro will use next port (3001+)

### Issue: "npm ERR! Cannot find module"
**Solution:** Run `npm install` again in project folder

### Issue: "Changes not showing in browser"
**Solution:**
- Try refreshing browser (Ctrl+R or Cmd+R)
- Stop and restart dev server (Ctrl+C then `npm run dev`)

### Issue: "npm install taking too long"
**Solution:**
- Check internet connection
- Wait 5-10 minutes (first install is large)
- Use pnpm instead: `npm install -g pnpm` then `pnpm install`

### Issue: "Node version error"
**Solution:** Update Node.js to v18+
- Uninstall current Node.js
- Download latest LTS from nodejs.org
- Reinstall

---

## 🎯 What You Now Have

✅ Complete professional yoga website
✅ 6+ fully functional pages
✅ Responsive design (works on all devices)
✅ Interactive components (carousels, forms, filters)
✅ Beautiful UI with shadcn/ui
✅ Customizable colors and content
✅ Production-ready code
✅ All source code accessible and editable

---

## 📝 Next Steps

1. **Download** and extract project
2. **Install** Node.js (if needed)
3. **Run** `npm install` in project folder
4. **Start** with `npm run dev`
5. **Customize** content in `src/` folder
6. **Deploy** when ready

---

## 📖 Documentation Files

After extracting, read these files:

1. **QUICKSTART.md** - Get running in 5 minutes
2. **SETUP.md** - Detailed setup guide
3. **PROJECT_FILES.md** - All files explained
4. **PROJECT_DESCRIPTION.md** - Business information

---

**You're all set!** 🎉

Open `http://localhost:3000` and start customizing your yoga website!

Questions? Refer to documentation files or check resources above.

Happy coding! 🧘‍♀️✨
