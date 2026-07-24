import { useEffect, useRef, useState, lazy, Suspense } from "react";

const ProfileSphere = lazy(() => import("./ProfileSphere"));
const BIOS = [
  "AI Engineer specializing in <strong>Machine Learning, Deep Learning, Computer Vision, and Generative AI</strong>.",
  "Building <strong>end-to-end AI applications</strong> from data pipelines and model training to scalable APIs and modern web interfaces.",
  "Experienced with <strong>LLMs, RAG, Embedding Models, MCP, NLP, and AI Agent workflows</strong>.",
  "Working across <strong>Python, PyTorch, TensorFlow, FastAPI, React, Node.js, MongoDB, and Hugging Face</strong>.",
  "Focused on creating <strong>production-ready, scalable, and impactful AI solutions</strong>.",
];

export default function Hero() {
  const [currentBioIndex, setCurrentBioIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const typeWriter = (html: string, speed = 25) => {
    setIsTyping(true);
    setDisplayedText("");
    let i = 0;
    const stripped = html.replace(/<[^>]+>/g, "");
    const tick = () => {
      if (i <= stripped.length) {
        setDisplayedText(stripped.slice(0, i));
        i++;
        animationRef.current = setTimeout(tick, speed);
      } else {
        setDisplayedText(html);
        setIsTyping(false);
      }
    };
    tick();
  };

  useEffect(() => {
    typeWriter(BIOS[0]);
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  const generateNewBio = () => {
    if (isTyping) return;
    if (animationRef.current) clearTimeout(animationRef.current);
    const next = (currentBioIndex + 1) % BIOS.length;
    setCurrentBioIndex(next);
    typeWriter(BIOS[next]);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "4rem", paddingBottom: "5rem" }}
    >
      {/* 3D Interactive Sphere — sits behind everything */}
      <Suspense fallback={null}>
        <ProfileSphere />
      </Suspense>

      {/* SYSTEM ONLINE badge */}
      <div
        className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest border rounded-full animate-pulse"
        style={{
          fontFamily: "JetBrains Mono, monospace",
          letterSpacing: "0.15em",
          zIndex: 2,
          position: "relative",
          color: "#b0ff44",
          borderColor: "rgba(176,255,68,0.35)",
          background: "rgba(176,255,68,0.08)",
        }}
      >
        SYSTEM ONLINE
      </div>

      {/*
        ─── PROFILE PICTURE ───────────────────────────────────────────────────
        The circular photo sits visually INSIDE the sphere wireframe.
        → Replace /profile.png with your actual photo in the /public folder.
        → Recommended: square image, at least 400×400px, no background.
        → The ui-avatars fallback will show until you add your photo.
        ───────────────────────────────────────────────────────────────────────
      */}
      <div
        className="relative flex items-center justify-center mb-4"
        style={{ zIndex: 2 }}
      >
        <img
          src="/profile.png"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://ui-avatars.com/api/?name=Barath+Roshan&background=b0ff44&color=000&size=256&bold=true&font-size=0.33";
          }}
          alt="Barath Roshan S"
          className="rounded-full object-cover"
          style={{
            width: 'clamp(130px, 32vw, 200px)',
            height: 'clamp(130px, 32vw, 200px)',
            border: "4px solid rgba(176,255,68,0.25)",
            boxShadow: "0 0 32px rgba(176,255,68,0.15)",
          }}
          fetchPriority="high"
        />
      </div>

      {/* Name — centered inside the sphere area visually */}
      <h1
        className="font-bold text-center mb-1"
        style={{
          fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
          letterSpacing: "0.05em",
          fontFamily: "Inter, sans-serif",
          color: "#111111",
          textShadow:
            "0 0 60px rgba(176,255,68,0.35), 0 2px 4px rgba(0,0,0,0.1)",
          zIndex: 2,
          position: "relative",
        }}
      >
        BARATH ROSHAN S
      </h1>

      {/* Title */}
      <h2
        className="font-bold mb-8"
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "2.0rem",
          letterSpacing: "0.3em",
          color: "#111111",
          zIndex: 2,
          position: "relative",
        }}
      >
        AI & ML ENGINEER
      </h2>

      {/* Terminal bio box */}
      <div
        className="relative mx-auto mb-6"
        style={{
          maxWidth: 520,
          width: '92%',
          background: "rgba(0,0,0,0.06)",
          border: "1px solid rgba(176,255,68,0.3)",
          borderRadius: 8,
          padding: 'clamp(0.75rem, 3vw, 1.25rem)',
          zIndex: 2,
        }}
      >
        {/* Terminal dots header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
          <span
            className="ml-2 text-xs"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: "#6b7280",
            }}
          >
            NEURAL_CORE // BIO_GENERATOR
          </span>
        </div>

        <p
          className="text-sm leading-relaxed"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            minHeight: 60,
            color: "#1a1a1a",
          }}
        >
          <span style={{ color: "#b0ff44", marginRight: 4 }}>&gt;</span>
          {isTyping ? (
            <>
              {displayedText}
              <span
                className="inline-block ml-0.5 animate-pulse"
                style={{
                  width: 2,
                  height: 16,
                  background: "#6b7280",
                  verticalAlign: "middle",
                }}
              />
            </>
          ) : (
            <span dangerouslySetInnerHTML={{ __html: displayedText }} />
          )}
        </p>
      </div>

      {/* Generate bio button */}
      <button
        onClick={generateNewBio}
        disabled={isTyping}
        className="flex items-center gap-2 px-6 py-2.5 rounded-full transition-all mb-10"
        style={{
          background: "rgba(176,255,68,0.08)",
          border: "1px solid rgba(176,255,68,0.55)",
          color: "#6b7280",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          zIndex: 2,
          position: "relative",
          opacity: isTyping ? 0.5 : 1,
        }}
      >
        <span style={{ fontSize: "0.9rem" }}>✦</span>
        GENERATE NEW BIO
      </button>

      {/* Stats grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
        style={{ maxWidth: 480, width: "90%", zIndex: 2, position: "relative" }}
      >
        {[
          { value: "2+", label: "INTERNSHIPS" },
          { value: "12+", label: "PROJECTS", color: "#b0ff44" },
          { value: "7.91", label: "CGPA", color: "#a855f7" },
          { value: "1550+", label: "PROBLEMS" },
        ].map(({ value, label, color }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center p-3 rounded-lg"
            style={{
              background: "rgba(176,255,68,0.05)",
              border: "1px solid rgba(176,255,68,0.18)",
            }}
          >
            <span
              className="font-bold text-xl"
              style={{
                color: color ?? "#1a1a1a",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              {value}
            </span>
            <span
              className="text-xs mt-1"
              style={{
                color: "#6b7280",
                letterSpacing: "0.1em",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div
        className="flex flex-col sm:flex-row gap-3 items-center"
        style={{ zIndex: 2, position: "relative" }}
      >
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-2.5 rounded text-sm font-bold transition-all"
          style={{
            background: "rgba(176,255,68,0.1)",
            border: "1px solid rgba(176,255,68,0.5)",
            color: "#b0ff44",
            fontFamily: "JetBrains Mono, monospace",
            letterSpacing: "0.05em",
          }}
        >
          VIEW MY WORK
        </a>
        <a
          href="/BARATH_ROSHAN_S_RESUME.pdf"
          target="_blank"
          download="BARATH_ROSHAN_S_RESUME.pdf"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded text-sm font-bold transition-all"
          style={{
            background: "#b0ff44",
            color: "#000",
            fontFamily: "JetBrains Mono, monospace",
            letterSpacing: "0.05em",
          }}
        >
          DOWNLOAD CV
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 text-xs tracking-widest"
        style={{
          transform: "translateX(-50%)",
          fontFamily: "JetBrains Mono, monospace",
          color: "#9ca3af",
        }}
      >
        SCROLL ↓
      </div>
    </section>
  );
}
