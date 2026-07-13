# Amazon Q Agent Prompt — Barath Roshan S Portfolio
## (Exact clone of Gunasree portfolio architecture — white bg + #b0ff44 accent)

---

You are a senior frontend engineer. Build me a complete personal portfolio website that is a **pixel-precise structural clone** of the Gunasree portfolio codebase (React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Three.js), but with my data, a **white `#ffffff` background**, and **`#b0ff44`** (lime green) as the primary accent color replacing all cyan. Follow every instruction below exactly — do not skip or simplify any section.

---

## TECH STACK (exact same as reference)

```
React 18, TypeScript, Vite, Tailwind CSS 3, Framer Motion, Three.js, lucide-react
```

**package.json dependencies** (use these exact versions):
```json
{
  "dependencies": {
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "three": "^0.183.2",
    "@types/three": "^0.183.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "vite": "^7.0.0"
  }
}
```

---

## COLOR SYSTEM — CRITICAL

| Purpose | Color |
|---|---|
| Page background | `#ffffff` |
| Primary accent (sphere, borders, highlights) | `#b0ff44` |
| Accent hover / glow | `#9aef2a` |
| Primary text | `#0a0a0a` |
| Secondary text | `#4a4a4a` |
| Muted text | `#6b7280` |
| Card background | `rgba(0,0,0,0.04)` |
| Card border | `rgba(0,0,0,0.08)` |
| Card hover border | `rgba(176,255,68,0.5)` |
| Nav background (scrolled) | `rgba(255,255,255,0.92)` |
| Nav border (scrolled) | `rgba(176,255,68,0.2)` |
| Scroll progress bar | `#b0ff44` |
| Section vertical accent bar | `#b0ff44` |
| Timeline dot glow | `#b0ff44` |

Every place Gunasree uses `#06b6d4`, `cyan-400`, `cyan-500`, or `text-cyan-400` — replace with `#b0ff44` or the Tailwind custom class for it.

---

## FILE STRUCTURE

```
src/
  App.tsx
  main.tsx
  index.css
  vite-env.d.ts
  components/
    Navigation.tsx
    Hero.tsx
    ProfileSphere.tsx
    FluidBackground.tsx
    ScrollProgress.tsx
    Experience.tsx
    Projects.tsx
    ProjectImpactChart.tsx
    Skills.tsx
    Achievements.tsx
    Contact.tsx
index.html
tailwind.config.js
postcss.config.js
vite.config.ts
tsconfig.json
tsconfig.app.json
public/
  BARATH_ROSHAN_S_RESUME.pdf   ← placeholder empty file
  profile.png                   ← placeholder (use ui-avatars fallback)
```

---

## `index.html`

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BARATH ROSHAN S | AI & ML Engineer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;500;700&family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
  <meta name="description" content="Portfolio of Barath Roshan S, an AI & ML Engineer specializing in Computer Vision, Deep Learning, and Full-Stack AI Systems.">
</head>
<body>
  <div id="root">
    <div style="min-height:100vh;background:#ffffff;color:#0a0a0a;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:'Inter',sans-serif;">
      <h1 style="font-size:2.5rem;font-weight:bold;margin-bottom:1rem;color:#b0ff44;font-family:'JetBrains Mono',monospace;letter-spacing:0.2rem">BARATH<span style="color:#0a0a0a">.AI</span></h1>
      <h2 style="font-size:1rem;color:#6b7280;font-family:'JetBrains Mono',monospace;letter-spacing:0.1rem;font-weight:normal">SYSTEM INITIALIZING...</h2>
    </div>
  </div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
```

---

## `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --accent: #b0ff44;
  --accent-hover: #9aef2a;
  --bg: #ffffff;
  --text: #0a0a0a;
  --text-secondary: #4a4a4a;
  --glass-bg: rgba(0,0,0,0.04);
  --glass-border: rgba(0,0,0,0.08);
}

html, body {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  color: #0a0a0a;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #f1f5f9; }
::-webkit-scrollbar-thumb { background: rgba(176,255,68,0.5); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: rgba(176,255,68,0.8); }

.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
```

---

## `tailwind.config.js`

```js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#b0ff44',
        'accent-hover': '#9aef2a',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
```

---

## `src/App.tsx`

```tsx
import { lazy, Suspense, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';

const FluidBackground = lazy(() => import('./components/FluidBackground'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10 min-h-screen" style={{ background: '#ffffff', color: '#0a0a0a' }}>
      <ScrollProgress />
      <Suspense fallback={null}>
        <FluidBackground />
      </Suspense>
      <Navigation />
      <Hero />
      <Suspense fallback={<div className="h-32 flex items-center justify-center text-gray-400">Loading...</div>}>
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
```

---

## `src/components/ScrollProgress.tsx`

Exact same as Gunasree's but use `#b0ff44` gradient:

```tsx
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
      style={{ scaleX, background: 'linear-gradient(to right, #b0ff44, #9aef2a, #b0ff44)' }}
    />
  );
}
```

---

## `src/components/FluidBackground.tsx`

Exact same canvas animation as Gunasree's, with these changes:
- `cometColor` = `{ r: 176, g: 255, b: 68 }` (i.e. `#b0ff44`)
- Background fill: `rgba(255, 255, 255, 0.15)` (white fade trail instead of dark)
- Stars color: `rgba(0, 0, 0, ${star.alpha * twinkle})` (dark dots on white)
- The bright core at mouse: `rgba(176, 255, 68, 1)`
- Particles: `rgba(176, 255, 68, ${p.life * 0.6})`
- Remove all `isLight` condition logic — it's always white. Keep all the parallax star/particle/spinner/comet animation exactly as-is, just with the above color swaps.

Full canvas: 400 stars, 3 spinners orbiting mouse at radius 20/20/35, particle trail on mouse move, bright glow core at cursor. Fixed position, full viewport, zIndex 0.

---

## `src/components/ProfileSphere.tsx`

**Exact same Three.js IcosahedronGeometry wireframe sphere as Gunasree's** — same size (container `width: 500px, height: 500px`), same camera z=3.8, same geometry `IcosahedronGeometry(2, 15)`, same mouse-tracking rotation, same render loop — with ONE change:

In the `fragmentShader`, change the color from cyan to `#b0ff44`:
```glsl
gl_FragColor = vec4(0.686, 1.0, 0.267, 0.35);
// #b0ff44 = rgb(176,255,68) = (0.690, 1.0, 0.267)
```

Container positioning: same as Gunasree's:
```tsx
style={{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -42%)',
  width: '500px',
  height: '500px',
  zIndex: 0,
  pointerEvents: 'none',
}}
```

---

## `src/components/Navigation.tsx`

Same structure as Gunasree's Navigation. Changes:
- Logo: `BARATH<span style={{ color: '#b0ff44' }}>.AI</span>` — text `#0a0a0a`
- Nav links color: active = `#b0ff44`, inactive = `#4a4a4a`, hover = `#0a0a0a`
- Active underline: `backgroundColor: '#b0ff44'`
- Scrolled nav bg: `rgba(255,255,255,0.92)` with `backdropFilter: blur(12px)` and `borderBottom: '1px solid rgba(176,255,68,0.2)'`
- Transparent when at top
- Download CV button: border `rgba(176,255,68,0.5)`, color `#b0ff44`, hover bg `#b0ff44` hover text `#000`
- Mobile hamburger: color `#4a4a4a` hover `#b0ff44`
- Mobile menu bg: `rgba(255,255,255,0.97)` border `rgba(176,255,68,0.2)`
- Remove the dark/light toggle button entirely — it's always white

**Nav items** (sections):
```ts
const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
];
```

Section IDs to observe: `['home', 'experience', 'projects', 'achievements', 'skills', 'contact']`

---

## `src/components/Hero.tsx`

Same structure as Gunasree's Hero. Include lazy-loaded `<ProfileSphere />` behind everything at zIndex 0.

**BIOS array** — 8 rotating bios for Barath, typed one-at-a-time with the same typewriter effect:
```ts
const BIOS = [
  'Specializing in <strong>Computer Vision, Deep Learning, and Full-Stack AI Systems</strong>. Building production-grade models that detect, decide, and deploy.',
  'From <strong>YOLO-based fire & violence detection</strong> to <strong>LLM-powered government portals</strong> — I ship AI that works in the real world.',
  'Fine-tuned <strong>Donut Transformers for invoice intelligence</strong> and built <strong>CLIP + EfficientNet</strong> property discovery systems trained on 14,000+ images.',
  'Top 100 at <strong>Guidewire DEVTrails 2026</strong> & Top 10 at <strong>Datathon 2026 (CIT)</strong> — competing and winning at the national level as an ML Engineer.',
  '<strong>600+ problems on CodeChef (Rating: 1235)</strong>, 250+ on LeetCode (1489), 700+ on SkillRack. DSA is not just a subject — it\'s a practice.',
  'Interned at <strong>NIELIT Calicut</strong> building real-time surveillance AI, and at <strong>Pinesphere Solutions</strong> delivering end-to-end AI-driven full-stack products.',
  'Tech stack: <strong>Python · PyTorch · FastAPI · React · MongoDB · HuggingFace</strong>. I build the model and the API and the UI — all of it.',
  'B.Tech <strong>AI & Data Science</strong> at Sri Eshwar College of Engineering. CGPA 7.86. Obsessed with turning research into real systems.',
];
```

**Stats grid** (4 items):
```ts
[
  { value: '2+', label: 'INTERNSHIPS' },
  { value: '5+', label: 'PROJECTS', color: '#b0ff44' },
  { value: '7.86', label: 'CGPA', color: '#a855f7' },
  { value: '1550+', label: 'PROBLEMS' },
]
```

**Terminal box** styling:
- Background: `rgba(0,0,0,0.05)` 
- Border: `1px solid rgba(176,255,68,0.3)`
- Terminal dots (red/yellow/green) same as Gunasree's
- Label: `NEURAL_CORE // BIO_GENERATOR` in `#6b7280`
- Prompt `>` symbol: `#b0ff44`
- Text: `#1a1a1a`
- Typing cursor: `bg-[#b0ff44]`

**SYSTEM ONLINE badge**: border `rgba(176,255,68,0.3)`, bg `rgba(176,255,68,0.1)`, text `#b0ff44`

**Generate Bio button**: border `rgba(176,255,68,0.5)`, bg `rgba(176,255,68,0.08)`, text `#b0ff44`

**Stat cards**: bg `rgba(0,0,0,0.04)`, border `rgba(0,0,0,0.08)`

**Profile image fallback**: `https://ui-avatars.com/api/?name=Barath+Roshan&background=b0ff44&color=000&size=256`
Alt: `Barath Roshan S`, border: `rgba(0,0,0,0.1)`

**Name**: `BARATH ROSHAN S` — color `#0a0a0a`, textShadow `0 0 40px rgba(176,255,68,0.2)`

**Title**: `AI & ML ENGINEER` — color `#b0ff44`, monospace

**CTA buttons**:
- "VIEW MY WORK" → `#projects` — border `rgba(176,255,68,0.5)`, bg `rgba(176,255,68,0.08)`, text `#b0ff44`
- "DOWNLOAD CV" → `/BARATH_ROSHAN_S_RESUME.pdf` download — bg `#b0ff44`, text `#000`, bold

**SCROLL ↓** indicator: color `#9ca3af`

---

## `src/components/Experience.tsx`

Same timeline layout as Gunasree's `About.tsx` (left-border timeline, dot per entry, card per entry). Section heading uses the same left vertical bar pattern.

**Section heading**:
```tsx
<span className="w-2 md:w-3 h-10 md:h-12 block rounded-r-lg" style={{ background: '#b0ff44' }} />
EXPERIENCE
```

**Two experience entries** (most recent first):

```ts
const EXPERIENCES = [
  {
    title: 'AI/ML Intern',
    company: 'Pinesphere Solutions Pvt Ltd',
    date: 'May 2026 – Jun 2026',
    color: '#b0ff44',
    bullets: [
      'Developed and fine-tuned deep learning models for intelligent information extraction, data processing, and automation using Python, PyTorch, and Hugging Face Transformers.',
      'Built scalable backend services and REST APIs using FastAPI, Node.js, and Express.js, integrating databases and cloud storage solutions.',
      'Designed and implemented full-stack applications with React, MongoDB, and modern software engineering practices to deliver end-to-end AI-driven solutions.',
    ],
  },
  {
    title: 'AI & Data Analytics Intern',
    company: 'NIELIT, Calicut',
    date: 'Dec 2025',
    color: '#a855f7',
    bullets: [
      'Developed and optimized computer vision models for fire detection and violence detection using deep learning techniques (YOLO, OpenCV, TensorFlow).',
      'Conducted dataset preparation, model training, evaluation, and performance tuning for real-time video analysis and surveillance applications.',
      'Implemented and tested AI solutions for surveillance and safety systems, improving detection accuracy and reliability. Integrated models with Django/FastAPI with real-time inference pipelines and monitoring dashboards.',
    ],
  },
];
```

Card styles: bg `rgba(0,0,0,0.04)`, border `rgba(0,0,0,0.06)`, hover `-translate-y-1`. Timeline dot glow uses `exp.color`. Timeline border-left: `border-slate-200`. Date badge: bg `rgba(0,0,0,0.06)` text `#4a4a4a`.

---

## `src/components/Projects.tsx` + `src/components/ProjectImpactChart.tsx`

**Same horizontal-scroll swipeable 3D-tilt card carousel** as Gunasree's Projects, with the same `useMotionValue / useSpring / useTransform` tilt, same `ChevronLeft`/`ChevronRight` desktop buttons, same touch swipe detection, same hide-scrollbar container, same CTA "View More on GitHub" card at the end.

**Color changes**:
- Card bg: `rgba(0,0,0,0.04)` 
- Card border: `rgba(0,0,0,0.08)` 
- Card hover border: `rgba(176,255,68,0.5)`
- Tech chip bg: `rgba(0,0,0,0.06)`, text `#374151`, border `rgba(0,0,0,0.1)`
- "Key Achievements" label: `#b0ff44`
- Scroll buttons: bg `rgba(0,0,0,0.08)` hover bg `#b0ff44` hover text `#000`
- Section heading gradient: use `#b0ff44` to `#9aef2a`
- Right panel (impact card) bg: `rgba(0,0,0,0.06)` — keep gradient per project

**`ProjectImpactChart`**: copy Gunasree's `ProjectImpactChart.tsx` exactly. It's a simple Recharts/SVG bar/radial chart showing the impact metric. If it uses recharts, keep it; if custom SVG, keep it. Update the bar/fill color to `#b0ff44`.

**5 projects**:

```ts
const projects = [
  {
    title: 'Rakshitartha',
    tagline: 'AI-Powered Parametric Insurance System',
    description: 'An intelligent, data-driven Disruption & Payout Engine for gig-worker protection and operational optimization, leveraging FastAPI and machine learning to predict delivery delays, detect real-time environmental disruptions, and automate dynamic compensation using Weather, AQI, and Geolocation API data, with K-Means–based risk zoning.',
    achievements: [
      'K-Means clustering for zone-level risk segmentation across delivery regions',
      'Real-time disruption detection via Weather, AQI, and Geolocation APIs',
      'Dynamic payout engine adapting compensation to disruption severity',
    ],
    tech: ['Python', 'FastAPI', 'Scikit-learn', 'Pandas', 'NumPy', 'Realtime APIs'],
    gradient: 'from-lime-400 to-green-500',
    impactMetric: { value: 5, label: 'Projects Built', prefix: '' },
    githubUrl: 'https://github.com/BarathRoshan',
    liveUrl: '',
  },
  {
    title: 'PropVision AI',
    tagline: 'AI-Powered Property Discovery Platform',
    description: 'An AI-powered property discovery platform trained on 14,000+ real estate images, integrating image super-resolution, room classification, and semantic search using deep learning and computer vision techniques to enhance property exploration and decision-making.',
    achievements: [
      '14,000+ real estate images used for training classification and search models',
      'Real-ESRGAN image super-resolution pipeline for low-quality property photos',
      'CLIP-based semantic search for intuitive natural-language property queries',
    ],
    tech: ['Python', 'FastAPI', 'React.js', 'Tailwind CSS', 'Real-ESRGAN', 'EfficientNet-B4', 'CLIP', 'PostgreSQL'],
    gradient: 'from-violet-500 to-purple-600',
    impactMetric: { value: 14000, label: 'Images Trained', prefix: '' },
    githubUrl: 'https://github.com/BarathRoshan',
    liveUrl: '',
  },
  {
    title: 'InvoiceIQ',
    tagline: 'AI-Powered Invoice Document Intelligence System',
    description: 'An AI-powered invoice processing platform built by fine-tuning a Donut Document Understanding Transformer on invoice datasets, enabling intelligent invoice analysis, automated field extraction, document validation, and structured financial data generation from scanned invoices and PDF documents.',
    achievements: [
      'Fine-tuned Donut Transformer for end-to-end invoice document understanding',
      'Automated field extraction: vendor, amount, dates, line items from scanned PDFs',
      'Document validation pipeline with structured JSON output for financial systems',
    ],
    tech: ['Python', 'FastAPI', 'Donut Transformer', 'PyTorch', 'Hugging Face', 'OpenCV', 'MongoDB'],
    gradient: 'from-orange-400 to-red-500',
    impactMetric: { value: 90, label: 'Extraction Accuracy' },
    githubUrl: 'https://github.com/BarathRoshan',
    liveUrl: '',
  },
  {
    title: 'Gov Scheme Portal',
    tagline: 'Indian Government Scheme Discovery Platform',
    description: 'A full-stack government scheme discovery and application platform with multilingual support, AI-powered assistance, eligibility verification, and a role-based admin dashboard. Integrated Groq API (Llama 3) to provide personalized LLM guidance and application tracking for citizens.',
    achievements: [
      'LLM-powered eligibility chatbot using Groq API / Llama 3 for personalized guidance',
      'Role-based access control (RBAC) with JWT for citizens and admin roles',
      'Multilingual support and real-time application tracking dashboard',
    ],
    tech: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC', 'Groq API (Llama 3)', 'Axios'],
    gradient: 'from-blue-500 to-cyan-500',
    impactMetric: { value: 100, label: 'Schemes Indexed', prefix: '' },
    githubUrl: 'https://github.com/BarathRoshan',
    liveUrl: '',
  },
  {
    title: 'Zone Segmentation Model',
    tagline: 'ML System for Disruption Prediction & Payout Optimization',
    description: 'An end-to-end machine learning system for disruption prediction and payout optimization using environmental and geospatial data. Built a FastAPI-based inference service, implemented K-Means clustering for zone risk segmentation, and developed dynamic payout optimization based on disruption severity.',
    achievements: [
      'K-Means clustering pipeline for geographic zone risk profiling',
      'FastAPI inference service with Swagger UI and Uvicorn deployment',
      'Dynamic payout optimization engine driven by AQI and weather severity scores',
    ],
    tech: ['Python', 'FastAPI', 'Scikit-learn', 'Pandas', 'NumPy', 'Uvicorn', 'K-Means', 'Weather & AQI APIs'],
    gradient: 'from-teal-500 to-emerald-500',
    impactMetric: { value: 95, label: 'Prediction Accuracy' },
    githubUrl: 'https://github.com/BarathRoshan',
    liveUrl: '',
  },
];
```

For `impactMetric.value` where the number is large (14000), display it as `14K+` in the chart. For values that are percentages, append `%`. Show the GitHub button on every card. If `liveUrl` is empty, don't render the Live Demo button.

---

## `src/components/Achievements.tsx`

Same 4-column card grid as Gunasree's `Awards.tsx`. Section heading uses left-bar in `#eab308` (yellow, same as Gunasree).

**4 achievement cards**:

```ts
const ACHIEVEMENTS = [
  {
    icon: '🏆',
    category: 'HACKATHON',
    title: 'Top 100 — Guidewire DEVTrails 2026',
    desc: 'Contributed as ML Engineer at the Guidewire DEVTrails University Hackathon 2026, building predictive models for an intelligent insurance automation system.',
    color: '#eab308',
  },
  {
    icon: '🥇',
    category: 'DATATHON',
    title: 'Top 10 — Datathon 2026 (CIT)',
    desc: 'Contributed as ML Engineer at the Datathon 2026 conducted by Coimbatore Institute of Technology. Developed ML workflows for image enhancement, room classification, semantic property search, AI-agent query understanding, and automated image processing pipelines.',
    color: '#b0ff44',
  },
  {
    icon: '📜',
    category: 'CERTIFICATIONS',
    title: 'Elements of AI · Gen AI (NVIDIA) · Python (Coursera)',
    desc: 'Certified in Elements of AI (2025), Generative AI by NVIDIA (2025), and Python by Coursera (2025). Continuously upskilling in cutting-edge AI/ML technologies.',
    color: '#a855f7',
  },
  {
    icon: '💻',
    category: 'COMPETITIVE CODING',
    title: '1550+ Problems Solved Across Platforms',
    desc: 'CodeChef: 600+ problems, Max Rating 1235. LeetCode: 250+ problems, Max Rating 1489. SkillRack: 700+ problems, 160+ Bronze badges. HackerRank: 3-star in Python.',
    color: '#22c55e',
  },
];
```

Card: bg `rgba(0,0,0,0.04)`, `border-l-4` with `award.color`, hover `-translate-y-2`, shadow. Category label: `award.color`, monospace. Title: `#0a0a0a`. Desc: `#4a4a4a`.

---

## `src/components/Skills.tsx`

Same 2×2 grid of 3D-tilt skill cards as Gunasree's, same `useMotionValue/useSpring/useTransform` tilt, same progress bars animating on scroll, same layout.

**Color**: card border default `rgba(176,255,68,0.15)`, hover `rgba(176,255,68,0.5)`. Section heading gradient `#b0ff44` to `#9aef2a`. Progress bar gradients use each category's own colors but the `%` text is `#b0ff44`.

**4 skill categories**:

```ts
const skillCategories = [
  {
    title: 'AI & Deep Learning',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'PyTorch', level: 85 },
      { name: 'TensorFlow', level: 83 },
      { name: 'Scikit-learn', level: 88 },
      { name: 'Computer Vision (YOLO)', level: 84 },
      { name: 'Hugging Face Transformers', level: 80 },
    ],
    color: 'from-lime-400 to-green-500',
  },
  {
    title: 'Full-Stack & Backend',
    skills: [
      { name: 'FastAPI', level: 87 },
      { name: 'React.js', level: 82 },
      { name: 'Node.js / Express', level: 78 },
      { name: 'Django', level: 76 },
      { name: 'JavaScript / TypeScript', level: 80 },
      { name: 'REST API Design', level: 88 },
    ],
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Data & ML Engineering',
    skills: [
      { name: 'Pandas / NumPy', level: 90 },
      { name: 'EDA & Visualization', level: 85 },
      { name: 'SQL (MySQL / PostgreSQL)', level: 83 },
      { name: 'MongoDB', level: 80 },
      { name: 'Statistical Analysis', level: 78 },
      { name: 'API Integration', level: 88 },
    ],
    color: 'from-orange-400 to-red-500',
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'OpenCV', level: 85 },
      { name: 'Roboflow', level: 78 },
      { name: 'Power BI', level: 74 },
      { name: 'Google Colab', level: 88 },
      { name: 'Docker (basics)', level: 65 },
    ],
    color: 'from-teal-500 to-emerald-500',
  },
];
```

---

## `src/components/Contact.tsx`

Same layout as Gunasree's Contact — 5-column contact method cards + bottom CTA box.

**5 contact method cards** (same icon, label, value, href, gradient pattern):

```ts
const contactMethods = [
  { icon: Mail, label: 'Email', value: 'barathroshan.s2024aids@sece.ac.in', href: 'mailto:barathroshan.s2024aids@sece.ac.in', color: 'from-lime-400 to-green-500' },
  { icon: Phone, label: 'Phone', value: '+91 9159222256', href: 'tel:+919159222256', color: 'from-violet-500 to-purple-600' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/barathroshan', href: 'https://linkedin.com/in/barathroshan', color: 'from-blue-500 to-cyan-500' },
  { icon: Github, label: 'GitHub', value: 'github.com/BarathRoshan', href: 'https://github.com/BarathRoshan', color: 'from-teal-500 to-emerald-500' },
  { icon: MapPin, label: 'Location', value: 'Dindigul, Tamil Nadu, India', color: 'from-orange-400 to-red-500' },
];
```

Import `Phone` from `lucide-react`. Card bg `rgba(0,0,0,0.04)`, border `rgba(176,255,68,0.15)` hover `rgba(176,255,68,0.5)`. Icon circles use their own gradient. Card hover: `scale: 1.05, rotate: 2`. Icon hover: `rotate: 360`.

**Bottom CTA box**:
- bg: `rgba(176,255,68,0.06)`, border `rgba(176,255,68,0.2)`, rounded-3xl, p-12, text-center
- Heading: "Ready to Build Something Intelligent?"
- Body: "I'm actively seeking opportunities where I can apply my AI/ML skills to solve real-world problems. Whether it's a full-time role, internship, or project collaboration — let's connect."
- CTA button: bg `#b0ff44`, text `#000`, bold, rounded-full, hover shadow `rgba(176,255,68,0.5)`
- Send icon: color `#b0ff44`

**Footer**: `© 2026 Barath Roshan S. Built with React, Three.js & Framer Motion.` — color `#9ca3af`

---

## ANIMATION NOTES

- Every section uses `motion.div` with `initial={{ opacity: 0, y: 30 }}` + `whileInView={{ opacity: 1, y: 0 }}` + `viewport={{ once: true }}` — same as Gunasree's
- Experience timeline uses `initial={{ opacity: 0, x: -50 }}` slide-in
- Project cards use `initial={{ opacity: 0, scale: 0.9 }}` with `index * 0.1` delay
- Skill cards use `initial={{ opacity: 0, y: 30 }}` with `index * 0.1` delay
- Achievement cards use `initial={{ opacity: 0, y: 40 }}` with `index * 0.1` delay
- Progress bars: `initial={{ width: 0 }}` → `whileInView={{ width: skill.level + '%' }}` duration 1s

---

## FINAL CHECKLIST

Before delivering the code, verify:
1. Background is `#ffffff` white throughout — no dark panels anywhere except the terminal bio box which is `rgba(0,0,0,0.05)`
2. Sphere wireframe is `#b0ff44` (`vec4(0.690, 1.0, 0.267, 0.35)` in fragment shader), 500×500px container
3. All 5 projects are present in the horizontal scroll carousel
4. Both internships appear in the Experience timeline (Pinesphere first, NIELIT second)
5. All 4 achievement cards are present
6. Nav has 6 items and the correct section IDs
7. `npm install && npm run dev` works with zero errors
8. All text on white cards is dark (`#0a0a0a` / `#4a4a4a`) — no white text on white background
9. FluidBackground particles and stars are dark-colored (visible on white)
10. The resume download button links to `/BARATH_ROSHAN_S_RESUME.pdf`

---
