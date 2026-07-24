import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero',         label: 'Home' },
    { href: '#experience',   label: 'Experience' },
    { href: '#projects',     label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#skills',       label: 'Skills' },
    { href: '#contact',      label: 'Contact' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 transition-all duration-300"
        style={{
          background: isScrolled
            ? isPastHero ? 'rgba(13,17,23,0.92)' : 'rgba(255,255,255,0.92)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(176,255,68,0.2)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
            className="text-xl font-bold font-mono tracking-wider"
            style={{ color: isPastHero ? '#ffffff' : '#0a0a0a' }}
          >
            BARATH<span style={{ color: '#b0ff44' }}>.AI</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={e => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(item.href.slice(1));
                }}
                className="relative text-sm font-medium transition-colors duration-200"
                style={{ color: activeSection === item.href.slice(1) ? '#b0ff44' : isPastHero ? '#9ca3af' : '#4a4a4a' }}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5" style={{ backgroundColor: '#b0ff44' }} />
                )}
              </a>
            ))}
            <a
              href="/BARATH_ROSHAN_S_RESUME.pdf"
              target="_blank"
              download
              className="px-4 py-1.5 rounded text-xs font-bold font-mono tracking-wider transition-all duration-200 hover:bg-[#b0ff44] hover:text-black"
              style={{ border: '1px solid rgba(176,255,68,0.5)', color: '#b0ff44' }}
            >
              CV ↓
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setIsMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: '#b0ff44', transform: isMenuOpen ? 'rotate(45deg) translate(3px, 4px)' : 'none' }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: '#b0ff44', opacity: isMenuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: '#b0ff44', transform: isMenuOpen ? 'rotate(-45deg) translate(3px, -4px)' : 'none' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        className="fixed top-0 left-0 right-0 z-40 md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: isMenuOpen ? '100vh' : '0',
          background: 'rgba(13,17,23,0.97)',
          backdropFilter: 'blur(16px)',
          paddingTop: isMenuOpen ? '5rem' : '0',
          paddingBottom: isMenuOpen ? '2rem' : '0',
        }}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={e => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(item.href.slice(1));
                setIsMenuOpen(false);
              }}
              className="text-lg font-bold font-mono tracking-widest transition-colors duration-200"
              style={{ color: activeSection === item.href.slice(1) ? '#b0ff44' : '#e2e8f0' }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/BARATH_ROSHAN_S_RESUME.pdf"
            target="_blank"
            download
            className="mt-2 px-8 py-3 rounded font-bold font-mono text-sm tracking-wider"
            style={{ background: '#b0ff44', color: '#000' }}
            onClick={() => setIsMenuOpen(false)}
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </>
  );
}
