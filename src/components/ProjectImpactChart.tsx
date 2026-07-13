import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Code } from 'lucide-react';

export default function ProjectImpactChart() {
  const impacts = [
    {
      icon: Users,
      label: 'Users Impacted',
      value: '100K+',
      description: 'People using my AI solutions',
      progress: 85
    },
    {
      icon: Code,
      label: 'Lines of Code',
      value: '500K+',
      description: 'Across all projects',
      progress: 92
    },
    {
      icon: Award,
      label: 'Model Accuracy',
      value: '95%',
      description: 'Average across ML models',
      progress: 95
    },
    {
      icon: TrendingUp,
      label: 'Performance Gain',
      value: '40%',
      description: 'Average optimization improvement',
      progress: 78
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-3xl border"
      style={{ 
        backgroundColor: 'rgba(0,0,0,0.04)',
        borderColor: 'rgba(0,0,0,0.08)'
      }}
    >
      <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#0a0a0a' }}>
        Project Impact Overview
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impacts.map((impact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center group"
          >
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: 'rgba(176,255,68,0.1)' }}
            >
              <impact.icon size={24} style={{ color: '#b0ff44' }} />
            </div>
            
            <div className="text-3xl font-bold mb-2" style={{ color: '#b0ff44' }}>
              {impact.value}
            </div>
            
            <div className="font-semibold mb-2" style={{ color: '#0a0a0a' }}>
              {impact.label}
            </div>
            
            <div className="text-sm mb-4" style={{ color: '#4a4a4a' }}>
              {impact.description}
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <motion.div
                className="h-2 rounded-full"
                style={{ backgroundColor: '#b0ff44' }}
                initial={{ width: 0 }}
                whileInView={{ width: `${impact.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </div>
            
            <div className="text-xs" style={{ color: '#6b7280' }}>
              {impact.progress}% efficiency
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}