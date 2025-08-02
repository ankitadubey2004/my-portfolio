'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Calendar, MapPin, ExternalLink, Cloud } from 'lucide-react';
import Image from 'next/image';

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
  // {
  //   position: 'Software Engineer',
  //   company: 'Novostack',
  //   period: 'June 2025 - Present',
  //   location: 'Noida, India',
  //   description: [
  //     'Collaborated with cross-functional teams to build the HelloTrade platform, a B2B e-commerce platform for credit score by IndiaMART',
  //     'Engineered high-performance PDF converter using Puppter.js achieving 20% increase in processing speed.',
  //     'Innovated comprehensive Analytic Dashboard for tracking user behavior and performance metrics.',
  //     'Containerized application using Docker for consistent deployment across environments.',
  //   ],
  //   skills: [
  //     'Next.js',
  //     'Nest.js',
  //     'React',
  //     'TypeScript',
  //     'PostgreSQL',
  //     'Shadcn UI',
  //     'Puppeteer',
  //     'Redis',
  //   ],
  //   images: ['/caresept.png'],
  // },
{
  position: 'Software Developer Intern',
  company: 'Novexus Technologies Pvt. Ltd.',
  period: 'May 2025 - Present',
  location: 'Remote',
  description: [
    'Collaborated with frontend & backend teams on live enterprise-level applications.',
    'Contributed to UI/UX improvements, reducing user drop-off by .',
    'Integrated RESTful APIs and implemented JWT authentication in MERN stack apps.',
    'Worked on the official Novexus website and its internship page.',
    'Developed QuickCart – a one-swipe shopping solution.',
    'BuiltNutrinext– a dynamic food delivery platform.',
  ],
  skills: [
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'JWT',
    'REST API',
    'HTML',
    'CSS',
    'JavaScript',
    'UI/UX',
    'Figma',
  ],
  images: ['/placeholder.svg?height=300&width=400'],
},
{
  position: 'Web Development Intern',
  company: 'VaultofCodes (AICTE Recognized)',
  period: 'July 2024 - August 2024',
  location: 'Remote',
  description: [
    'Built a responsive login & registration system using HTML, CSS, and JavaScript.',
    'Improved UI/UX across pages, enhancing task completion speed by ~30%.',
    'Developed a full-featured To-Do List app with data persistence and user-specific tasks.',
  ],
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'DOM Manipulation',
    'Local Storage',
    'UI Design',
    'Responsiveness',
  ],
  images: ['/placeholder.svg?height=300&width=400'],
},
{
  position: 'Java Programmer Intern',
  company: 'CodSoft',
  period: 'June 2024 - July 2024',
  location: 'Remote',
  description: [
    'Developed Java applications using OOP principles.',
    'Improved exception handling and modularity through real-world project tasks.',
    'Simulated banking operations in an 20+ test transactions.',
  ],
  skills: [
    'Java',
    'OOP',
    'Exception Handling',
    'CLI',
    'ATM Simulation',
    'Modular Code',
  ],
  images: ['/placeholder.svg?height=300&width=400'],
},
];

const Experience: React.FC = () => {
  // Extract all unique technical skills across all experiences
  const allTechnicalSkills = useMemo(() => {
    const skillsSet = new Set<string>();
    experiences.forEach(exp => {
      exp.skills.forEach(skill => skillsSet.add(skill));
    });
    return Array.from(skillsSet);
  }, []);

  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
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
            <TimelineItem 
              key={index} 
              experience={exp} 
              index={index} 
              allTechnicalSkills={allTechnicalSkills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ 
  experience: ExperienceItem; 
  index: number;
  allTechnicalSkills: string[];
}> = ({
  experience,
  index,
  allTechnicalSkills,
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

      <Card className="transform hover:scale-[1.02] transition-all duration-300 border dark:border-gray-700 lg:max-w-3xl hover:shadow-xl dark:hover:shadow-blue-500/10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
               {experience.position}
              </CardTitle>
              <CardDescription className="text-lg">
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  {experience.company}
                </span>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {experience.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {experience.location}
                    </span>
                  </div>
                </div>
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Key Achievements:
              </h4>
              <ul className="space-y-2">
                {experience.description.map((item, i) => {
                  // Enhanced regex patterns for different categories
                  const metrics = item.replace(
                    /(\d+(?:\.\d+)?[%+]?|\$\d+(?:\.\d+)?[MK]?\+?|\d+,\d+\+?)/g,
                    '<span class="font-bold text-blue-600 dark:text-blue-400">$1</span>'
                  );

                  // Highlight technical skills using ALL technical skills from all experiences
                  const technicalTerms = allTechnicalSkills.join('|');
                  const withTechHighlights = metrics.replace(
                    new RegExp(`(${technicalTerms})`, 'gi'),
                    '<span class="font-medium text-emerald-600 dark:text-emerald-400">$1</span>'
                  );

                  // Highlight impact keywords and action verbs
                  const impactKeywords = [
                    'Collaborated',
                    'Executed',
                    'Integrated',
                    'Maximized',
                    'Optimised',
                    'Containerized',
                    'Architected',
                    'Engineered',
                    'Spearheaded',
                    'Pioneered',
                    'Implemented',
                    'Optimized',
                    'Revolutionized',
                    'Innovated',
                    'Championed',
                   
                    'Orchestrated',
                    'Developed',
                    'Designed',
                    'Created',
                    'Delivered',
                    'Achieved',
                    'Improved',
                    'Enhanced',
                    'Reduced',
                    'Increased',
                    'Streamlined',
                    'Automated',
                    'Secured',
                    'Resolved',
                    'Contributed',
                  ].join('|');

                  const finalText = withTechHighlights.replace(
                    new RegExp(`(${impactKeywords})`, 'gi'),
                    '<span class="font-semibold text-purple-600 dark:text-purple-400">$1</span>'
                  );

                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start group"
                    >
                      <span className="mr-2 text-blue-500 transform group-hover:scale-125 transition-transform">
                        •
                      </span>
                      <span
                        className="text-gray-700 dark:text-gray-300"
                        dangerouslySetInnerHTML={{ __html: finalText }}
                      />
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* <div>
              <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Technologies Used:
              </h4>
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
                      className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 hover:from-blue-100 hover:to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 dark:text-blue-300 dark:hover:from-blue-900/50 dark:hover:to-blue-800/50 transition-all duration-300 transform hover:scale-105 cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div> */}

            {/* <Carousel images={experience.images} /> */}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};


export default Experience;
