import { motion } from 'framer-motion';

const ROW1 = [
  { slug: 'python',      name: 'Python' },
  { slug: 'pytorch',     name: 'PyTorch' },
  { slug: 'tensorflow',  name: 'TensorFlow' },
  { slug: 'sklearn',     name: 'Scikit-learn' },
  { slug: 'huggingface', name: 'Hugging Face' },
  { slug: 'opencv',      name: 'OpenCV' },
  { slug: 'fastapi',     name: 'FastAPI' },
  { slug: 'react',       name: 'React.js' },
  { slug: 'nodejs',      name: 'Node.js' },
  { slug: 'mongodb',     name: 'MongoDB' },
  { slug: 'postgres',    name: 'PostgreSQL' },
  { slug: 'git',         name: 'Git' },
];

const ROW2 = [
  { slug: 'js',       name: 'JavaScript' },
  { slug: 'ts',       name: 'TypeScript' },
  { slug: 'django',   name: 'Django' },
  { slug: 'express',  name: 'Express.js' },
  { slug: 'mysql',    name: 'MySQL' },
  { slug: 'docker',   name: 'Docker' },
  { slug: 'vscode',   name: 'VS Code' },
  { slug: 'github',   name: 'GitHub' },
  { slug: 'linux',    name: 'Linux' },
  { slug: 'sqlite',   name: 'SQLite' },
  { slug: 'postman',  name: 'Postman' },
  { slug: 'figma',    name: 'Figma' },
];

// Triple to guarantee seamless loop on all screen widths
const R1 = [...ROW1, ...ROW1, ...ROW1];
const R2 = [...ROW2, ...ROW2, ...ROW2];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative" style={{ background: 'transparent', zIndex: 1 }}>
      <style>{`
        @keyframes slide-left {
          0%   { transform: translateX(0) translateZ(0); }
          100% { transform: translateX(-33.333%) translateZ(0); }
        }
        @keyframes slide-right {
          0%   { transform: translateX(-33.333%) translateZ(0); }
          100% { transform: translateX(0) translateZ(0); }
        }
        .skills-track-left {
          display: flex;
          width: max-content;
          animation: slide-left 40s linear infinite;
          will-change: transform;
        }
        .skills-track-right {
          display: flex;
          width: max-content;
          animation: slide-right 44s linear infinite;
          will-change: transform;
        }
        .skills-track-left:hover,
        .skills-track-right:hover {
          animation-play-state: paused;
        }
        .skills-fade-mask {
          overflow: hidden;
          width: 100%;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#b0ff44] to-[#9aef2a] bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: '#b0ff44' }} />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            Skills across the full AI/ML engineering stack — from model training to production deployment
          </p>
        </motion.div>

        {/* Row 1 — slides LEFT */}
        <div className="skills-fade-mask mb-5">
          <div className="skills-track-left">
            {R1.map((skill, i) => (
              <SkillChip key={`r1-${i}`} slug={skill.slug} name={skill.name} />
            ))}
          </div>
        </div>

        {/* Row 2 — slides RIGHT */}
        <div className="skills-fade-mask">
          <div className="skills-track-right">
            {R2.map((skill, i) => (
              <SkillChip key={`r2-${i}`} slug={skill.slug} name={skill.name} />
            ))}
          </div>
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 px-10 py-6 rounded-2xl border"
            style={{
              backgroundColor: 'rgba(176,255,68,0.05)',
              borderColor: 'rgba(176,255,68,0.20)',
            }}
          >
            {[
              { value: '1550+', label: 'Problems Solved' },
              { value: '24+',   label: 'Skills & Tools' },
              { value: '12+',   label: 'Projects Shipped' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold font-mono" style={{ color: '#b0ff44' }}>{value}</div>
                <div className="text-sm mt-0.5" style={{ color: '#94a3b8' }}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillChip({ slug, name }: { slug: string; name: string }) {
  return (
    <div
      className="flex items-center gap-3 mx-2.5 px-5 py-3 rounded-full border select-none transition-all duration-200"
      style={{
        background: 'rgba(255,255,255,0.06)',
        borderColor: 'rgba(176,255,68,0.18)',
        color: '#e2e8f0',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.82rem',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'rgba(176,255,68,0.70)';
        el.style.background = 'rgba(176,255,68,0.10)';
        el.style.color = '#b0ff44';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'rgba(176,255,68,0.18)';
        el.style.background = 'rgba(255,255,255,0.06)';
        el.style.color = '#e2e8f0';
      }}
    >
      <img
        src={`https://skillicons.dev/icons?i=${slug}`}
        alt={name}
        width={26}
        height={26}
        loading="lazy"
        style={{ display: 'block', flexShrink: 0 }}
        onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
      <span>{name}</span>
    </div>
  );
}
