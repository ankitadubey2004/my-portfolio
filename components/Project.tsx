'use client';

import React, { useState, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectImage {
  url: string;
  alt: string;
}

interface Project {
  title: string;
  type: 'landing' | 'fullstack' | 'backend';
  description: string[];
  techStack: string[];
  images: ProjectImage[];
  githubLink: string;
  previewLink?: string;
  highlights?: string[];
}

const projects: Project[] = [
  {
    title: 'Enterprise CRM System',
    type: 'fullstack',
    description: [
      'Built a complete CRM solution with role-based access control',
      'Implemented real-time notifications using WebSockets',
      'Integrated payment processing with Stripe',
      'Automated email marketing campaigns',
      'Built analytics dashboard with real-time data visualization',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
    images: [
      { url: '/api/placeholder/800/400', alt: 'CRM Dashboard' },
      { url: '/api/placeholder/800/400', alt: 'Analytics View' },
    ],
    githubLink: 'https://github.com/yourusername/crm-system',
    previewLink: 'https://crm-demo.com',
    highlights: ['99.9% Uptime', '50ms Average Response Time', 'Handles 10k+ Daily Active Users'],
  },
  {
    title: 'Enterprise CRM System',
    type: 'fullstack',
    description: [
      'Built a complete CRM solution with role-based access control',
      'Implemented real-time notifications using WebSockets',
      'Integrated payment processing with Stripe',
      'Automated email marketing campaigns',
      'Built analytics dashboard with real-time data visualization',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
    images: [
      { url: '/api/placeholder/800/400', alt: 'CRM Dashboard' },
      { url: '/api/placeholder/800/400', alt: 'Analytics View' },
    ],
    githubLink: 'https://github.com/yourusername/crm-system',
    previewLink: 'https://crm-demo.com',
    highlights: ['99.9% Uptime', '50ms Average Response Time', 'Handles 10k+ Daily Active Users'],
  },
  // Add more projects following the same structure
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">
            Showcasing 30+ production-ready applications and solutions
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-gray-100/50 backdrop-blur-sm">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="landing">Landing Pages</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-12">
            <ProjectGrid projects={projects} />
          </TabsContent>
          {/* Add similar TabsContent for other categories */}
        </Tabs>
      </motion.div>
    </section>
  );
};

const ProjectGrid: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex(prev => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(prev => (prev - 1 + project.images.length) % project.images.length);
  }, [project.images.length]);

  // Auto-advance carousel
  React.useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="overflow-hidden group">
        <div className="relative h-64 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={project.images[currentImageIndex].url}
                alt={project.images[currentImageIndex].alt}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </Button>
          </div>

          {/* Project title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <ul className="space-y-2">
              {project.description.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start text-gray-600"
                >
                  <span className="mr-2 text-blue-500">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Highlights */}
            {project.highlights && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-600">{highlight}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between p-6 bg-gray-50">
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <Github className="h-5 w-5" />
            <span>Source Code</span>
          </Link>
          {project.previewLink && (
            <Link
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Live Preview</span>
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectsSection;
