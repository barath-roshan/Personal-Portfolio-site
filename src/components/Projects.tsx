import { motion } from "framer-motion";
import { Github, Play, Star } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Rakshitartha",
      category: "InsurTech · ML",
      description:
        "An intelligent, data-driven Disruption & Payout Engine for gig-worker protection. Leverages FastAPI and machine learning to predict delivery delays, detect real-time environmental disruptions, and automate dynamic compensation using Weather, AQI, and Geolocation APIs.",
      image: "/Project-1.png",
      technologies: [
        "Python",
        "FastAPI",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Weather APIs",
        "K-Means",
      ],
      github: "https://github.com/barath-roshan",
      live: "",
      impact: {
        zones: "K-Means",
        engine: "Real-time",
        stack: "FastAPI",
      },
      featured: true,
    },
    {
      title: "PropVision AI",
      category: "Computer Vision · PropTech",
      description:
        "AI-powered property discovery platform trained on 14,000+ real estate images. Integrates image super-resolution (Real-ESRGAN), room classification (EfficientNet-B4), and semantic search (CLIP) to enhance property exploration.",
      image: "/Project-2.png",
      technologies: [
        "Python",
        "FastAPI",
        "React.js",
        "Tailwind CSS",
        "Real-ESRGAN",
        "EfficientNet-B4",
        "CLIP",
        "PostgreSQL",
      ],
      github: "https://github.com/barath-roshan",
      live: "",
      impact: {
        images: "14K+",
        search: "Semantic",
        model: "CLIP",
      },
      featured: true,
    },
    {
      title: "InvoiceIQ",
      category: "Document AI · FinTech",
      description:
        "AI-powered invoice processing platform built by fine-tuning a Donut Document Understanding Transformer. Enables intelligent invoice analysis, automated field extraction, document validation, and structured financial data generation from scanned PDFs.",
      image: "/Project-3.png",
      technologies: [
        "Python",
        "FastAPI",
        "Donut Transformer",
        "PyTorch",
        "Hugging Face",
        "OpenCV",
        "MongoDB",
      ],
      github: "https://github.com/barath-roshan",
      live: "",
      impact: {
        model: "Donut",
        output: "JSON",
        source: "PDF/Scan",
      },
    },
    {
      title: "Gov Scheme Portal",
      category: "LLM · Full-Stack",
      description:
        "Full-stack Indian Government scheme discovery and application platform with multilingual support, LLM-powered eligibility assistance (Groq API / Llama 3), and a role-based admin dashboard for managing schemes and applications.",
      image: "/Project-4.png",
      technologies: [
        "React.js",
        "Vite",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Groq API (Llama 3)",
        "Axios",
      ],
      github: "https://github.com/barath-roshan",
      live: "",
      impact: {
        LLM: "Llama 3",
        auth: "JWT+RBAC",
        i18n: "Multilingual",
      },
    },
    {
      title: "Zone Segmentation Model",
      category: "ML · Geospatial",
      description:
        "End-to-end machine learning system for disruption prediction and payout optimization using environmental and geospatial data. K-Means clustering for zone risk segmentation with a FastAPI inference service and dynamic payout engine.",
      image: "/Project-5.png",
      technologies: [
        "Python",
        "FastAPI",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Uvicorn",
        "K-Means",
        "AQI APIs",
      ],
      github: "https://github.com/barath-roshan",
      live: "",
      impact: {
        method: "K-Means",
        api: "Swagger",
        data: "Geo+AQI",
      },
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 relative"
      style={{ background: "transparent", zIndex: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#b0ff44] to-[#9aef2a] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{ backgroundColor: "#b0ff44" }}
          />
          <p className="text-lg max-w-3xl mx-auto text-gray-400">
            A showcase of AI and machine learning projects that solve real-world
            problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                project.featured ? "lg:col-span-1" : "lg:col-span-1"
              }`}
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                borderColor: "rgba(255,255,255,0.13)",
              }}
            >
              {project.featured && (
                <div
                  className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                  style={{ backgroundColor: "#b0ff44", color: "#0a0a0a" }}
                >
                  <Star size={12} fill="currentColor" />
                  FEATURED
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "rgba(176,255,68,0.9)",
                      color: "#0a0a0a",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>

                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: "#cbd5e1" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded text-xs border"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.06)",
                        borderColor: "rgba(255,255,255,0.1)",
                        color: "#b0ff44",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-lg"
                  style={{ backgroundColor: "rgba(176,255,68,0.05)" }}
                >
                  {Object.entries(project.impact).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div
                        className="text-lg font-bold"
                        style={{ color: "#b0ff44" }}
                      >
                        {value}
                      </div>
                      <div
                        className="text-xs capitalize"
                        style={{ color: "#4a4a4a" }}
                      >
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: "rgba(176,255,68,0.3)",
                      color: "#4a4a4a",
                    }}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "#b0ff44",
                        color: "#0a0a0a",
                      }}
                    >
                      <Play size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
