import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal, BookOpen, Users } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Top 100 — Guidewire DEVTrails 2026',
      organization: 'Guidewire University Hackathon',
      description: 'Contributed as ML Engineer, building predictive models for an intelligent insurance automation system at a national university-level hackathon.',
      date: '2026',
      category: 'Hackathon'
    },
    {
      icon: Medal,
      title: 'Top 10 — Datathon 2026',
      organization: 'Coimbatore Institute of Technology',
      description: 'Contributed as ML Engineer developing workflows for image enhancement, room classification, semantic property search, AI-agent query understanding, and automated image processing pipelines.',
      date: '2026',
      category: 'Datathon'
    },
    {
      icon: Award,
      title: 'Elements of AI',
      organization: 'University of Helsinki / Reaktor',
      description: 'Certified in the fundamentals of artificial intelligence, covering core concepts, machine learning methods, and real-world AI applications.',
      date: '2025',
      category: 'Certification'
    },
    {
      icon: Star,
      title: 'Generative AI',
      organization: 'NVIDIA Deep Learning Institute',
      description: 'Certified in Generative AI fundamentals by NVIDIA, covering diffusion models, LLMs, prompt engineering, and production deployment patterns.',
      date: '2025',
      category: 'Certification'
    },
    {
      icon: BookOpen,
      title: 'Python (Programming)',
      organization: 'Coursera',
      description: 'Certified in Python programming covering data structures, algorithms, OOP, and practical application development.',
      date: '2025',
      category: 'Certification'
    },
    {
      icon: Users,
      title: 'Competitive Coding — 1550+ Problems',
      organization: 'CodeChef · LeetCode · HackerRank · SkillRack',
      description: 'CodeChef: 600+ problems, Max Rating 1235. LeetCode: 250+ problems, Max Rating 1489. HackerRank: 3-star in Python. SkillRack: 700+ problems, 160+ Bronze badges.',
      date: '2024–2026',
      category: 'Coding'
    }
  ];

  const stats = [
    { label: 'Internships', value: '2', icon: BookOpen },
    { label: 'Projects Built', value: '12+', icon: Star },
    { label: 'Problems Solved', value: '1550+', icon: Award },
    { label: 'Certifications', value: '3', icon: Users }
  ];

  return (
    <section id="achievements" className="py-20 relative" style={{ background: 'transparent', zIndex: 1 }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: '#b0ff44' }} />
          <p className="text-lg max-w-3xl mx-auto text-gray-400">
            Awards, certifications, and recognition received for contributions to AI & ML
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl border"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.07)',
                borderColor: 'rgba(255,255,255,0.13)'
              }}
            >
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(176,255,68,0.1)' }}
              >
                <stat.icon size={20} style={{ color: '#b0ff44' }} />
              </div>
              <div className="text-2xl font-bold mb-2" style={{ color: '#b0ff44' }}>
                {stat.value}
              </div>
              <div className="text-sm font-medium" style={{ color: '#9ca3af' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-4 md:p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.07)',
                borderColor: 'rgba(255,255,255,0.13)'
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'rgba(176,255,68,0.1)' }}
                >
                  <achievement.icon size={28} style={{ color: '#b0ff44' }} />
                </div>
                
                <div className="text-right">
                  <div 
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ 
                      backgroundColor: 'rgba(176,255,68,0.1)',
                      color: '#b0ff44'
                    }}
                  >
                    {achievement.category}
                  </div>
                  <div className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    {achievement.date}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">
                {achievement.title}
              </h3>
              
              <div className="text-sm font-medium mb-4" style={{ color: '#b0ff44' }}>
                {achievement.organization}
              </div>
              
              <p className="leading-relaxed" style={{ color: '#94a3b8' }}>
                {achievement.description}
              </p>

              <motion.div
                className="mt-6 pt-4 border-t flex items-center justify-center"
                style={{ borderColor: 'rgba(176,255,68,0.2)' }}
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(176,255,68,0.1)' }}
                >
                  <Star size={16} style={{ color: '#b0ff44' }} fill="currentColor" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div 
            className="inline-block p-8 rounded-3xl border"
            style={{ 
              backgroundColor: 'rgba(176,255,68,0.05)',
              borderColor: 'rgba(176,255,68,0.2)'
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Let's Build Something Amazing Together
            </h3>
            <p className="mb-6 max-w-2xl text-gray-400">
              Interested in collaborating on cutting-edge AI projects or discussing innovative solutions?
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: '#b0ff44',
                color: '#0a0a0a'
              }}
              whileHover={{ backgroundColor: '#9aef2a' }}
            >
              Get In Touch
              <Award size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}