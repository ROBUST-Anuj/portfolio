# Anuj Parashar — Portfolio

A premium, recruiter-focused developer portfolio built with modern web technologies. Designed to showcase software engineering, AI/ML, and backend development projects.

## 🚀 Live Demo

> Deploy to Vercel and add your URL here.

## ✨ Features

- **Dark-first premium design** with glassmorphism and subtle gradients
- **Interactive project cards** with expandable detail modals showing architecture, problem/solution, and tech stack
- **Smooth animations** powered by Framer Motion with `prefers-reduced-motion` support
- **Fully responsive** — optimized for desktop (1440px) down to mobile (360px)
- **SEO optimized** with Open Graph, Twitter cards, sitemap, and robots.txt
- **Recruiter-friendly** — key information visible within 10-15 seconds
- **Accessible** — semantic HTML, keyboard navigation, proper contrast, focus states
- **Resume download** — one-click resume access from navbar and hero section
- **Performance optimized** — minimal JS, optimized fonts, lazy loading

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter + JetBrains Mono (Google Fonts)

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume/
│       └── Anuj_Parashar_Resume.docx
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Main page composing all sections
│   │   ├── globals.css         # Global styles & Tailwind theme
│   │   ├── robots.ts           # SEO robots.txt
│   │   └── sitemap.ts          # SEO sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky nav with scroll detection
│   │   │   └── Footer.tsx      # Footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero with system architecture visual
│   │   │   ├── About.tsx       # About with highlight cards
│   │   │   ├── Skills.tsx      # Categorized skill grid
│   │   │   ├── Experience.tsx  # Timeline experience section
│   │   │   ├── Projects.tsx    # Interactive project cards + modals
│   │   │   ├── Education.tsx   # Education with expandable coursework
│   │   │   ├── Achievements.tsx # Awards & positions
│   │   │   └── Contact.tsx     # Contact links & CTA
│   │   └── ui/
│   │       ├── SectionHeading.tsx
│   │       └── AnimatedCard.tsx
│   ├── data/
│   │   ├── personal.ts         # Name, links, bio
│   │   ├── projects.ts         # Project details
│   │   ├── skills.ts           # Categorized skills
│   │   ├── experience.ts       # Work experience
│   │   ├── education.ts        # Education & coursework
│   │   └── achievements.ts     # Awards & responsibilities
│   └── lib/
│       └── utils.ts            # Utility functions
├── package.json
├── tsconfig.json
└── README.md
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/ROBUST-Anuj/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with default Next.js settings

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel --prod
```

## 📝 Updating Content

All portfolio content is stored in structured TypeScript files in `src/data/`:

- **Personal info:** `src/data/personal.ts`
- **Projects:** `src/data/projects.ts`
- **Skills:** `src/data/skills.ts`
- **Experience:** `src/data/experience.ts`
- **Education:** `src/data/education.ts`
- **Achievements:** `src/data/achievements.ts`

Update these files to change portfolio content without modifying components.

## 👤 Author

**Anuj Parashar**

- GitHub: [@ROBUST-Anuj](https://github.com/ROBUST-Anuj)
- LinkedIn: [Anuj Parashar](https://in.linkedin.com/in/anuj-parashar-77665022b)
- LeetCode: [ROBUST_Anuj](https://leetcode.com/u/ROBUST_Anuj/)
- Email: anujparashar15052005@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
