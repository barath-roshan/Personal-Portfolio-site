import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "AI/ML Intern",
      company: "Pinesphere Solutions Pvt Ltd",
      link: "https://pinesphere.com/",
      location: "Coimbatore, Tamil Nadu, India",
      period: "May 2026 – Jun 2026",
      description:
        "Developed and fine-tuned deep learning models for intelligent information extraction, data processing, and automation using Python, PyTorch, and Hugging Face Transformers. Built scalable backend services and full-stack applications integrating AI capabilities end-to-end.",
      technologies: [
        "Python",
        "PyTorch",
        "Hugging Face",
        "FastAPI",
        "Node.js",
        "Express.js",
        "React",
        "MongoDB",
      ],
      achievements: [
        "Developed and fine-tuned deep learning models for intelligent data extraction and automation using PyTorch and Hugging Face Transformers",
        "Built scalable REST APIs using FastAPI, Node.js, and Express.js, integrating databases and cloud storage solutions",
        "Designed and implemented full-stack applications with React and MongoDB following modern software engineering best practices",
      ],
    },
    {
      title: "AI & Data Analytics Intern",
      company: "National Institute of Electronics and Information Technology, Calicut",
      link: "https://www.nielit.gov.in/NielitMain/CLT",
      location: "Calicut, Kerala, India",
      period: "Dec 2025",
      description:
        "Developed AI-based Fire Detection and Violence Detection systems using Python, OpenCV, TensorFlow, and YOLO for real-time surveillance applications. Implemented end-to-end pipelines from data collection through model deployment with real-time inference and monitoring dashboards.",
      technologies: [
        "Python",
        "YOLO",
        "OpenCV",
        "TensorFlow",
        "Django",
        "FastAPI",
        "Computer Vision",
      ],
      achievements: [
        "Developed and optimized computer vision models for fire detection and violence detection using YOLO and TensorFlow for real-time surveillance",
        "Conducted dataset preparation, model training, evaluation, and performance tuning for real-time video analysis applications",
        "Integrated AI models with Django/FastAPI, implementing real-time inference pipelines and monitoring dashboards for end-to-end deployment",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 relative"
      style={{ background: "transparent", position: "relative", zIndex: 1 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Experience
          </h2>
          <div
            className="w-20 h-1 mx-auto"
            style={{ backgroundColor: "#b0ff44" }}
          />
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: "rgba(176,255,68,0.25)" }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-10 md:mb-16 ml-10 md:ml-16"
            >
              <div
                className="absolute -left-[35px] top-6 w-4 h-4 rounded-full border-2 shadow-lg"
                style={{
                  backgroundColor: "#b0ff44",
                  borderColor: "#b0ff44",
                  boxShadow: "0 0 12px rgba(176,255,68,0.6)",
                }}
              />

              <div
                className="p-4 md:p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  borderColor: "rgba(255,255,255,0.13)",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xl font-semibold"
                        style={{ color: "#b0ff44" }}
                      >
                        {exp.company}
                      </span>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${exp.company}`}
                      >
                        <ExternalLink
                          size={16}
                          style={{ color: "#b0ff44", opacity: 0.7 }}
                        />
                      </a>
                    </div>
                  </div>

                  <div
                    className="flex flex-col md:items-end gap-2 text-sm"
                    style={{ color: "#9ca3af" }}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "#cbd5e1" }}
                >
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-white">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3"
                        style={{ color: "#cbd5e1" }}
                      >
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: "#b0ff44" }}
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm font-medium border"
                      style={{
                        backgroundColor: "rgba(176,255,68,0.1)",
                        borderColor: "rgba(176,255,68,0.3)",
                        color: "#b0ff44",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
