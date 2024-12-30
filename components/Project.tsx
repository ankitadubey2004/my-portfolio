'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
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
  apiEndpoints?: string[];
}

const projects: Project[] = [
  {
    title: 'Aven CRM - Real Estate CRM System',
    type: 'fullstack',
    description: [
      'Built a complete CRM solution with role-based access control',
      'Implemented real-time notifications using WebSockets and Redis',
      'Integrated payment processing and invoice generation with Stripe',
      'Automated email marketing campaigns',
      'Built analytics dashboard with real-time data visualization',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'React',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'AWS',
      'Stripe',
      'Docker',
      'CI/CD',
    ],
    images: [
      { url: '/placeholder.svg?height=400&width=800', alt: 'CRM Dashboard' },
      { url: '/placeholder.svg?height=400&width=800', alt: 'Analytics View' },
    ],
    githubLink: 'https://github.com/example/avencrm',
    previewLink: 'https://avencrm.com',
    highlights: ['99.9% Uptime', '50ms Average Response Time', '10k+ Daily Active Users'],
  },
  {
    title: 'Kobil - The SuperAPP platform',
    type: 'landing',
    description: [],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'NextUI'],
    images: [{ url: '/kobil.png', alt: 'Kobil SuperAPP Landing Page' }],
    githubLink: 'https://github.com/example/kobil-landing',
    previewLink: 'https://kobil.com',
  },
  {
    title: 'Brick - The Real Estate Property ',
    type: 'landing',
    description: [],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'CuiCui UI'],
    images: [{ url: '/brick-2.png', alt: 'Brick Landing Page' }],
    githubLink: 'https://github.com/example/brick-landing',
    previewLink: 'https://brick.com',
  },
  {
    title: 'Bistro - The Restaurant',
    type: 'landing',
    description: [],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    images: [{ url: '/projects/bistro-1.png', alt: 'Bistro Landing Page' }],
    githubLink: 'https://github.com/example/bistro-landing',
    previewLink: 'https://bistro.com',
  },
  {
    title: 'Chat Origin - The Chat App',
    type: 'landing',
    description: [],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    images: [{ url: '/projects/chat-origin.png', alt: 'Chat Origin Landing Page' }],
    githubLink: 'https://github.com/example/chat-origin-landing',
    previewLink: 'https://chatorigin.com',
  },
  {
    title: 'Navigator - Terrain Navigation',
    type: 'landing',
    description: [],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    images: [{ url: '/projects/navigator-2.png', alt: 'Navigator Landing Page' }],
    githubLink: 'https://github.com/example/navigator-landing',
    previewLink: 'https://navigator.com',
  },
  {
    title: 'SaaSy - The SaaS Platform',
    type: 'landing',
    description: [],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    images: [{ url: '/projects/sassy.png', alt: 'SaaSy Landing Page' }],
    githubLink: 'https://github.com/example/saasy-landing',
    previewLink: 'https://saasy.com',
  },
  {
    title: 'Travelog - The Travel Blog',
    type: 'landing',
    description: [],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    images: [{ url: '/projects/travelog.png', alt: 'Travelog Landing Page' }],
    githubLink: 'https://github.com/example/travelog-landing',
    previewLink: 'https://travelog.com',
  },
  {
    title: 'CourseSpace - The Online Learning Platform',
    type: 'landing',
    description: [],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    images: [{ url: '/projects/coursespace-2.png', alt: 'CourseSpace Landing Page' }],
    githubLink: 'https://github.com/example/coursespace-landing',
    previewLink: 'https://coursespace.com',
  },
  {
    title: 'Caresept - The CRM Provider',
    type: 'landing',
    description: [],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    images: [{ url: '/projects/caresept.png', alt: 'Caresept Landing Page' }],
    githubLink: 'https://github.com/example/caresept-landing',
    previewLink: 'https://caresept.com',
  },
  {
    title: 'E-commerce API',
    type: 'backend',
    description: [
      'Developed a scalable e-commerce API with Node.js and Express',
      'Implemented user authentication and authorization with JWT',
      'Created RESTful endpoints for product management and order processing',
      'Integrated with Stripe for secure payment processing',
    ],
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe API'],
    images: [{ url: '/placeholder.svg?height=400&width=800', alt: 'E-commerce API Architecture' }],
    githubLink: 'https://github.com/example/ecommerce-api',
    apiEndpoints: [
      'GET /api/products',
      'POST /api/orders',
      'PUT /api/users/:id',
      'DELETE /api/products/:id',
    ],
    highlights: ['5000 req/s', '99.99% Uptime', 'OAuth 2.0 Support'],
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'landing' | 'backend'>('all');

  const filteredProjects = projects.filter(project => filter === 'all' || project.type === filter);

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Showcasing 30+ production-ready applications and solutions
          </p>
        </motion.div>

        {/* Animated Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'fullstack', 'landing', 'backend'].map(type => (
            <motion.button
              key={type}
              onClick={() => setFilter(type as typeof filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                filter === type
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              } ${filter === type ? 'bg-gradient-to-r from-blue-600 to-blue-400' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {project.type === 'fullstack' && <FullStackCard project={project} />}
                {project.type === 'landing' && <LandingPageCard project={project} />}
                {project.type === 'backend' && <BackendCard project={project} />}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const FullStackCard: React.FC<{ project: Project }> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => setCurrentImageIndex(prev => (prev + 1) % project.images.length);
  const prevImage = () =>
    setCurrentImageIndex(prev => (prev - 1 + project.images.length) % project.images.length);

  return (
    <Card className="overflow-hidden group transform transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
      <div className="relative h-64">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[currentImageIndex].url}
              alt={project.images[currentImageIndex].alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex gap-2">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 dark:from-blue-900 dark:to-blue-800 dark:text-blue-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <ul className="space-y-2">
            {project.description.map((item, i) => (
              <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                <span className="mr-2 text-blue-500">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-6 bg-gray-50 dark:bg-gray-700">
        {project.githubLink && (
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <FaGithub className="h-5 w-5" />
            <span>Source Code</span>
          </Link>
        )}
        {project.previewLink && (
          <Link
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Live Preview</span>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

const LandingPageCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="aspect-[16/9] w-full relative overflow-hidden">
        <Image
          src={project.images[0].url}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Project Type Badge */}
        <div className="absolute top-4 right-4">
          <Badge 
            variant="secondary" 
            className="bg-blue-500 text-white px-3 py-1 text-xs uppercase tracking-wider backdrop-blur-sm"
          >
            {project.type}
          </Badge>
        </div>
      </div>

      {/* Content Container - Always visible but transforms on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 transition-transform duration-300">
        <motion.div
          animate={{ y: isHovered ? 0 : 60 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {/* Title and Tech Stack - Always Visible */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-white/10 text-white text-xs backdrop-blur-sm border border-white/20"
                >
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 3 && (
                <Badge
                  variant="secondary"
                  className="bg-white/10 text-white text-xs backdrop-blur-sm border border-white/20"
                >
                  +{project.techStack.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Description and Links - Visible on Hover/Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {project.description.length > 0 && (
              <p className="text-gray-200 text-sm line-clamp-2">
                {project.description[0]}
              </p>
            )}
            <div className="flex items-center gap-4">
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors text-sm"
                >
                  <FaGithub className="h-5 w-5" />
                  <span className="hidden md:inline">Source Code</span>
                </Link>
              )}
              {project.previewLink && (
                <Link
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors text-sm group"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="hidden md:inline group-hover:underline">Live Preview</span>
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Touch Indicator */}
      <div className="absolute bottom-2 right-2 md:hidden">
        <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" />
      </div>
    </motion.div>
  );
};

const BackendCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card className="overflow-hidden border-2 border-gray-200 dark:border-gray-700">
      <div className="p-6 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
            )}
            {project.previewLink && (
              <Link
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              API Endpoints
            </h4>
            <ul className="space-y-2 font-mono text-sm">
              {project.apiEndpoints?.map((endpoint, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-300">
                  {endpoint}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.highlights && (
          <div className="grid grid-cols-3 gap-4">
            {project.highlights.map((highlight, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center">
                <p className="text-sm text-blue-700 dark:text-blue-300">{highlight}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectsSection;
