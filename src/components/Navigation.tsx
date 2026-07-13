import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
      style={{
        background: isScrolled 
          ? (isPastHero ? 'rgba(33,33,33,0.92)' : 'rgba(255,255,255,0.92)')
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled 
          ? `1px solid ${isPastHero ? 'rgba(176,255,68,0.2)' : 'rgba(176,255,68,0.15)'}`
          : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold font-mono tracking-wider"
          style={{ 
            color: isPastHero ? '#ffffff' : '#0a0a0a',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 'bold',
            fontSize: '1rem',
            letterSpacing: '0.1em'
          }}
        >
          BARATH<span style={{ color: '#b0ff44' }}>.AI</span>
        </motion.div>
        
        <div className="flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative text-sm font-medium transition-colors duration-200 hover:text-black"
              style={{ 
                color: activeSection === item.id 
                  ? '#b0ff44' 
                  : (isPastHero ? '#9ca3af' : '#4a4a4a')
              }}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5"
                  style={{ backgroundColor: '#b0ff44' }}
                  layoutId="activeIndicator"
                />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}