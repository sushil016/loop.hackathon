# 🚀 Loop Hackathon Website

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)](https://tailwindcss.com/)

Official website for **Loop** - a 24-hour National Level Hackathon organized by the Innovation & Robotics Lab at Bharati Vidyapeeth College of Engineering, Navi Mumbai.

🌐 **Live Website:** [loophackathon.tech]

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Git Workflow & Best Practices](#git-workflow--best-practices)
- [File Naming Conventions](#file-naming-conventions)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## 🎯 About the Project

Loop Hackathon website is built with **Next.js 16** (App Router) and features premium animations, interactive components, and a modern design system. The site provides information about the hackathon, problem statements, prizes, timeline, and registration details.

### Key Highlights:
- 🎨 Premium UI with Aceternity & Magic UI components
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js 16 & Turbopack
- 🎭 Multi-step loader for enhanced UX
- 🌈 Rainbow buttons, animated text, and interactive highlights

---

## 🛠️ Tech Stack

### Core Technologies
- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript 5.x
- **UI Library:** React 19.2.3
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (motion) 12.24.0

### Component Libraries
- **Aceternity UI** - Timeline, Multi-Step Loader
- **Magic UI** - Rainbow Button, Ripple Button, Animated Text
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Build Tools
- **Package Manager:** pnpm (recommended)
- **Bundler:** Turbopack (Next.js 16 default)
- **PostCSS:** For Tailwind processing

---

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **pnpm** - [Install](https://pnpm.io/installation)
  ```bash
  npm install -g pnpm
  ```
- **Git** - [Download](https://git-scm.com/)

### Installation

Follow these steps to set up the project locally:

#### 1. Clone the Repository

```bash
# Clone the repo
git clone https://github.com/sushil016/loop.hackathon.git

# Navigate to project directory
cd loop.hackathon
```

#### 2. Install Dependencies

```bash
# Using pnpm 
pnpm install
```

#### 3. Verify Installation

Check if all dependencies are installed correctly:

```bash
pnpm list
```

### Running the Development Server

Start the development server:

```bash
# Using pnpm
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The page will auto-reload when you make changes to the code! 🔥

---

## 📁 Project Structure

```
loop.hackathon/
├── app/                          # Next.js App Router directory
│   ├── components/               # Page-specific components
│   │   ├── About.tsx            # About section with event details
│   │   ├── FAQ.tsx              # FAQ section with toggle
│   │   ├── Footer.tsx           # Footer with contact info
│   │   ├── Hero.tsx             # Landing hero section
│   │   ├── LoadingAnimation.tsx # Initial loading screen
│   │   ├── LoadingProvider.tsx  # Loading state management
│   │   ├── Navbar.tsx           # Navigation with active tracking
│   │   ├── Prizes.tsx           # Prize pool section
│   │   ├── RegistrationBanner.tsx # Top banner
│   │   ├── Rules.tsx            # Rules and guidelines
│   │   ├── Sponsors.tsx         # Sponsorship info
│   │   ├── Timeline.tsx         # Event timeline
│   │   └── Tracks.tsx           # Problem tracks
│   │
│   ├── downloads/               # Downloads page route
│   │   └── page.tsx            # Brochure & PPT downloads
│   │
│   ├── event-day-timeline/      # Event day schedule route
│   │   └── page.tsx            # 24-hour detailed timeline
│   │
│   ├── problem-statements/      # Problem statements route
│   │   └── page.tsx            # All problem statements
│   │
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Homepage (landing page)
│   ├── globals.css              # Global styles & Tailwind imports
│   └── favicon.ico              # Site favicon
│
├── components/                   # Reusable UI components
│   └── ui/                      # shadcn/ui & custom components
│       ├── animated-gradient-text.tsx
│       ├── animated-shiny-text.tsx
│       ├── confetti.tsx
│       ├── cover.tsx
│       ├── hero-highlight.tsx
│       ├── hyper-text.tsx
│       ├── layout-text-flip.tsx
│       ├── multi-step-loader.tsx
│       ├── pointer-highlight.tsx
│       ├── rainbow-button.tsx
│       ├── ripple-button.tsx
│       ├── shine-border.tsx
│       └── timeline.tsx
│
├── lib/                         # Utility functions
│   └── utils.ts                # CN utility for class merging
│
├── public/                      # Static assets
│   ├── Loop_Brochure.pdf       # Official brochure
│   ├── Loop-PPT.pdf            # PPT template
│   ├── loop-logo1.png          # Logo files
│   ├── loop-logo2.png
│   └── *.png, *.svg            # Images & icons
│
├── .gitignore                   # Git ignore file
├── components.json              # shadcn/ui config
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies & scripts
├── pnpm-lock.yaml              # pnpm lock file
├── postcss.config.mjs          # PostCSS config for Tailwind
├── README.md                    # This file
└── tsconfig.json               # TypeScript configuration
```

### Understanding the Structure

#### **`/app` Directory (Next.js 16 App Router)**
- All routes are file-system based
- `page.tsx` = route page component
- `layout.tsx` = shared layout wrapper
- Folders like `/downloads` create routes automatically

#### **`/components/ui` Directory**
- Reusable UI components
- Premium animation components
- Can be used across multiple pages

#### **`/app/components` Directory**
- Page-specific components
- Larger section components
- Only used in specific routes

---

## ✨ Key Features

### 🎨 Premium Animations
- **PointerHighlight**: Interactive pointer highlighting on headings
- **AnimatedGradientText**: Gradient color animations
- **Cover**: Text reveal animations
- **Highlight**: Inline text highlighting
- **Multi-Step Loader**: Loading progress indicator
- **Rainbow Button**: Gradient animated buttons

### 📄 Pages & Routes
- **`/`** - Landing page with all sections
- **`/problem-statements`** - Problem tracks & statements (with multi-step loader)
- **`/downloads`** - Download brochure & PPT template
- **`/event-day-timeline`** - Detailed 24-hour event schedule

### 🎯 Interactive Features
- Section-based navigation with active tracking
- Expandable FAQ section
- Confetti celebration buttons
- Download buttons with animations
- Responsive mobile menu

---

## 🌿 Git Workflow & Best Practices

### Initial Setup

```bash
# Configure your Git identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Clone and setup
git clone https://github.com/sushil016/loop.hackathon.git
cd loop.hackathon
pnpm install
```

### Working with Branches

#### Creating a New Branch

```bash
# Always create a new branch for features/fixes
git checkout -b feature/your-feature-name

# Examples:
git checkout -b feature/add-sponsors-section
git checkout -b fix/navbar-mobile-menu
git checkout -b update/prizes-content
```

#### Branch Naming Conventions

- `feature/` - New features (e.g., `feature/add-gallery`)
- `fix/` - Bug fixes (e.g., `fix/mobile-responsive`)
- `update/` - Content updates (e.g., `update/timeline-dates`)
- `refactor/` - Code refactoring (e.g., `refactor/footer-component`)

### Making Changes

```bash
# 1. Make your changes in code

# 2. Check status
git status

# 3. Stage specific files
git add app/components/NewComponent.tsx

# Or stage all changes
git add .

# 4. Commit with clear message
git commit -m "feat: add new sponsors section with animations"

# Commit message prefixes:
# feat: - new feature
# fix: - bug fix
# docs: - documentation changes
# style: - formatting changes
# refactor: - code restructuring
# test: - adding tests
# chore: - maintenance tasks
```

### Pushing Changes

```bash
# First time pushing a new branch
git push -u origin feature/your-feature-name

# Subsequent pushes
git push
```

### Keeping Your Branch Updated

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Switch back to your feature branch
git checkout feature/your-feature-name

# Merge main into your branch
git merge main

# Or rebase (cleaner history)
git rebase main
```

### Handling Merge Conflicts

```bash
# If conflicts occur during merge/rebase:

# 1. Check which files have conflicts
git status

# 2. Open conflicted files and resolve
# Look for <<<<<<< HEAD markers

# 3. After resolving, stage the files
git add resolved-file.tsx

# 4. Continue the merge/rebase
git rebase --continue
# or
git merge --continue
```

### Pull Request Workflow

1. **Push your branch** to GitHub
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request** on GitHub
   - Go to repository on GitHub
   - Click "Pull requests" → "New pull request"
   - Select your branch
   - Add description of changes
   - Request review

3. **After PR is merged**
   ```bash
   # Switch to main
   git checkout main
   
   # Pull merged changes
   git pull origin main
   
   # Delete local branch
   git branch -d feature/your-feature-name
   
   # Delete remote branch (optional)
   git push origin --delete feature/your-feature-name
   ```

### Common Git Commands Reference

```bash
# View commit history
git log --oneline --graph --all

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Discard changes in specific file
git checkout -- filename.tsx

# Stash changes temporarily
git stash
git stash pop

# View remote repositories
git remote -v

# Check which branch you're on
git branch

# Switch branches
git checkout branch-name
```

---

## 📝 File Naming Conventions

### Component Files
- **PascalCase** for React components: `About.tsx`, `HeroSection.tsx`
- **kebab-case** for UI components: `animated-text.tsx`, `rainbow-button.tsx`

### CSS/Style Files
- **kebab-case**: `globals.css`, `component-styles.css`

### Utility Files
- **camelCase**: `utils.ts`, `helperFunctions.ts`

### Image/Asset Files
- **kebab-case**: `loop-logo.png`, `hero-background.jpg`
- Keep names descriptive and lowercase

### Best Practices

✅ **DO:**
- Use descriptive names: `UserProfileCard.tsx` not `UPC.tsx`
- Keep file names consistent with component names
- Group related files in folders
- Use TypeScript (`.tsx`, `.ts`) for all components

❌ **DON'T:**
- Mix naming conventions
- Use special characters (except `-`, `_`)
- Create overly long file names
- Use abbreviations that aren't clear

---

## 🤝 Contributing

We welcome contributions! Here's how to contribute:

### Step-by-Step Guide

1. **Fork the repository** (click Fork on GitHub)

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/loop.hackathon.git
   cd loop.hackathon
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/sushil016/loop.hackathon.git
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

5. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments where necessary

6. **Test your changes**
   ```bash
   pnpm dev
   # Test in browser at http://localhost:3000
   ```

7. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

8. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

9. **Open a Pull Request**
   - Go to original repository on GitHub
   - Click "New Pull Request"
   - Describe your changes clearly

### Code Style Guidelines

- Use **TypeScript** for type safety
- Follow **React best practices** (hooks, functional components)
- Use **Tailwind CSS** for styling (avoid inline styles)
- Keep components **small and focused**
- Add **proper TypeScript types** for props
- Write **meaningful commit messages**

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### 1. **Port 3000 already in use**
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
pnpm dev -- -p 3001
```

#### 2. **Module not found errors**
```bash
# Clear cache and reinstall
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

#### 3. **Git merge conflicts**
```bash
# See conflicted files
git status

# Abort merge and start over
git merge --abort

# Or keep your version
git checkout --ours filename.tsx

# Or keep their version
git checkout --theirs filename.tsx
```

#### 4. **Build errors**
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
pnpm build
```

#### 5. **TypeScript errors**
```bash
# Check for type errors
pnpm tsc --noEmit
```

---

## 📚 Additional Resources

### Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Git Documentation](https://git-scm.com/doc)

### Component Libraries
- [Aceternity UI](https://ui.aceternity.com/)
- [Magic UI](https://magicui.design/)
- [Radix UI](https://www.radix-ui.com/)

### Tools
- [pnpm Documentation](https://pnpm.io/)
- [VS Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)

---

## 👥 Team

**Innovation & Robotics Lab**  
Bharati Vidyapeeth College of Engineering, Navi Mumbai

---

## 📄 License

This project is created for Loop Hackathon 2026. All rights reserved.

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Aceternity UI & Magic UI for beautiful components
- All contributors and organizers

---

**Built with ❤️ by the Technical Team of Robotics Club**

*Last Updated: January 6, 2026*
