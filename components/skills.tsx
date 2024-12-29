'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Database, Cloud, Code2, Box, Layout, Globe, Terminal } from 'lucide-react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Same skillCategories data as before...
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-6 h-6" />,
      skills: [
        {
          name: 'Next.js',
          level: 'Expert',
          experience: '3+ years',
          details: 'Advanced expertise in SSR, ISR, API Routes, and Next.js 13+ features',
          projects: 'NextUI Contribution, CRM Systems',
        },
        {
          name: 'React.js',
          level: 'Expert',
          experience: '4+ years',
          details: 'Deep understanding of React patterns, hooks, and performance optimization',
          projects: 'Multiple enterprise applications',
        },
        {
          name: 'TypeScript',
          level: 'Expert',
          experience: '3+ years',
          details: 'Advanced type systems, generics, and type safety patterns',
          projects: 'All recent projects',
        },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: [
        {
          name: 'FastAPI',
          level: 'Advanced',
          experience: '2+ years',
          details: 'High-performance API development, async operations',
          projects: 'CRM backend systems',
        },
        {
          name: 'Django',
          level: 'Advanced',
          experience: '2+ years',
          details: 'Full-stack Django applications, REST framework',
          projects: 'Enterprise applications',
        },
        {
          name: 'Express.js',
          level: 'Expert',
          experience: '3+ years',
          details: 'RESTful APIs, middleware development, authentication',
          projects: 'Multiple backend services',
        },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: <Database className="w-6 h-6" />,
      skills: [
        {
          name: 'PostgreSQL',
          level: 'Expert',
          experience: '3+ years',
          details: 'Complex queries, optimization, scaling',
          projects: 'CRM databases, Enterprise systems',
        },
        {
          name: 'MongoDB',
          level: 'Advanced',
          experience: '2+ years',
          details: 'Schema design, aggregation pipelines',
          projects: 'NoSQL applications',
        },
        {
          name: 'AWS',
          level: 'Advanced',
          experience: '2+ years',
          details: 'EC2, S3, Lambda, ECS deployment',
          projects: 'Cloud infrastructure',
        },
      ],
    },
    {
      title: 'DevOps & Infrastructure',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        {
          name: 'Docker',
          level: 'Advanced',
          experience: '2+ years',
          details: 'Container orchestration, multi-stage builds',
          projects: 'Microservices deployment',
        },
        {
          name: 'Kubernetes',
          level: 'Intermediate',
          experience: '1+ year',
          details: 'Cluster management, deployment strategies',
          projects: 'Container orchestration',
        },
      ],
    },
  ];
  return (
    <section className="py-20 relative">
      {/* Abstract gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(221.2,83.2%,53.3%,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(221.2,83.2%,53.3%,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Technical Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Specialized in modern web technologies with a focus on scalable, enterprise-grade
            applications and CRM systems development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white via-white/95 to-white/90 dark:from-gray-800 dark:via-gray-800/95 dark:to-gray-800/90 hover:shadow-xl transition-all duration-300">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map(skill => (
                      <motion.div
                        key={skill.name}
                        className="relative group"
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="p-4 rounded-lg bg-gradient-to-br from-gray-50/80 via-gray-50/90 to-white dark:from-gray-700/50 dark:via-gray-700/60 dark:to-gray-700/70 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium">{skill.name}</h4>
                            <Badge
                              variant={skill.level === 'Expert' ? 'default' : 'secondary'}
                              className={
                                skill.level === 'Expert'
                                  ? 'bg-gradient-to-r from-primary to-primary/80'
                                  : ''
                              }
                            >
                              {skill.level}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                            {skill.details}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge
                              variant="outline"
                              className="border-primary/30 text-primary dark:border-primary/50 dark:text-primary/80"
                            >
                              {skill.experience}
                            </Badge>
                            {skill.projects.split(', ').map(project => (
                              <Badge
                                key={project}
                                variant="secondary"
                                className="bg-gray-100 dark:bg-gray-700"
                              >
                                {project}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white to-white/90 dark:from-gray-800 dark:to-gray-800/90 inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
            <div className="relative p-6">
              <h4 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                Domain Expertise
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'CRM Systems',
                  'Enterprise Applications',
                  'Cloud Infrastructure',
                  'Microservices',
                  'API Development',
                ].map(domain => (
                  <Badge
                    key={domain}
                    variant="default"
                    className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                  >
                    {domain}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
