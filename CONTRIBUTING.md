# Contributing to YogaFlow Pro

Thanks for taking the time to contribute! 🙏

This is a personal project, but I'm open to bug reports, suggestions, and pull requests.

---

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/yogaflow-pro.git
   cd yogaflow-pro
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

---

## How to Contribute

### Reporting Bugs

If you find a bug, please [open an issue](https://github.com/amritanshguptadev/yogaflow-pro/issues) and include:

- What you were doing when the bug occurred
- What you expected to happen
- What actually happened
- Screenshots if possible
- Your browser and OS

### Suggesting Features

Open an issue with the label `enhancement` and describe:

- What problem the feature would solve
- How you'd expect it to work

### Submitting a Pull Request

1. Create a new branch for your change:
   ```bash
   git checkout -b fix/your-bug-description
   # or
   git checkout -b feat/your-feature-name
   ```
2. Make your changes and commit with a clear message:
   ```bash
   git commit -m "fix: correct mobile nav close button alignment"
   ```
3. Push and open a PR against the `main` branch.

---

## Code Style

- Use **TypeScript** where possible
- Keep components small and focused
- Follow existing naming conventions (PascalCase for components, camelCase for utils)
- Don't commit `node_modules`, `.env`, or generated `.astro/` files

---

## Commit Message Format

I follow a loose version of [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | When to use |
|--------|-------------|
| `feat:` | Adding a new feature |
| `fix:` | Fixing a bug |
| `docs:` | Documentation only changes |
| `style:` | CSS / formatting changes |
| `refactor:` | Code restructuring without feature changes |
| `chore:` | Build process, dependencies, config |

---

## Questions?

Feel free to reach out via [GitHub Issues](https://github.com/amritanshguptadev/yogaflow-pro/issues).
