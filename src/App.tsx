import { lazy, Suspense, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';

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
      <CustomCursor />
      <ScrollProgress />
      <Suspense fallback={null}>
        <FluidBackground />
      </Suspense>
      <Navigation />
      <Hero />
      <Suspense fallback={<div className="h-32 flex items-center justify-center" style={{ color: '#9ca3af' }}>Loading...</div>}>
        <div style={{ background: 'transparent', position: 'relative', zIndex: 1 }}>
          <Experience />
          <Projects />
          <Achievements />
          <Skills />
          <Contact />
        </div>
      </Suspense>
    </div>
  );
}

export default App;