'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  images: string[];
  proofLink?: string;
}

const experiences: ExperienceItem[] = [
  {
    position: 'Software Engineer',
    company: 'Caresept',
    period: 'Jan 2023 - Present',
    location: 'San Francisco, CA',
    description: [
      'Developed and maintained CRM solutions for healthcare providers',
      'Implemented real-time data synchronization between mobile and web platforms',
      'Optimized database queries, resulting in a 40% improvement in application performance',
    ],
    skills: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'GraphQL'],
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    proofLink: 'https://example.com/caresept-proof',
  },
  {
    position: 'Freelance Software Engineer',
    company: 'AvenCRM',
    period: 'Sep 2022 - Dec 2022',
    location: 'Remote',
    description: [
      'Designed and implemented custom CRM features for small businesses',
      'Created data visualization dashboards using D3.js',
      'Integrated third-party APIs for enhanced functionality',
    ],
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'D3.js'],
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    proofLink: 'https://example.com/avencrm-proof',
  },
  {
    position: 'Open Source Contributor',
    company: 'NextUI',
    period: 'Jun 2022 - Present',
    location: 'Remote',
    description: [
      'Contributed to the development of reusable UI components',
      'Improved accessibility features across the component library',
      'Wrote comprehensive documentation and usage examples',
    ],
    skills: ['React', 'TypeScript', 'Storybook', 'Jest'],
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    proofLink: 'https://github.com/nextui-org/nextui/pulls?q=is%3Apr+author%3AYourGitHubUsername',
  },
  {
    position: 'Software Development Intern',
    company: 'SkilledUp',
    period: 'Jan 2022 - May 2022',
    location: 'Bangalore, India',
    description: [
      'Assisted in the development of a learning management system',
      'Implemented user authentication and authorization features',
      'Conducted code reviews and participated in agile development processes',
    ],
    skills: ['Python', 'Django', 'JavaScript', 'PostgreSQL'],
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    proofLink: 'https://example.com/skilledup-internship-certificate',
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:text-left text-center mb-16 max-w-2xl"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
            Professional Experiences
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Specialized in CRM Development and Modern Web Applications
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0 hidden lg:block" />
          
          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ experience: ExperienceItem; index: number }> = ({
  experience,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-12 relative pl-8 lg:pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[5px] top-0 lg:top-8 w-[10px] h-[10px] rounded-full bg-blue-500 z-10">
        <div className="absolute -inset-2 rounded-full bg-blue-500/20 animate-pulse" />
      </div>

      <Card className="transform hover:scale-[1.02] transition-all duration-300 border dark:border-gray-700">
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
                {experience.position}
              </CardTitle>
              <CardDescription className="text-lg">
                <span className="font-semibold text-gray-700 dark:text-gray-300">{experience.company}</span>
                <div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {experience.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </div>
                </div>
              </CardDescription>
            </div>
            {experience.proofLink && (
              <Link
                href={experience.proofLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors group"
              >
                View Proof
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            )}
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Key Achievements:</h4>
              <ul className="space-y-2">
                {experience.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="mr-2 text-blue-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <Carousel images={experience.images} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden">
      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={`Work sample ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
