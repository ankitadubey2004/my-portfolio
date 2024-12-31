'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    period: 'Sept 2024 - Dec 2024',
    location: 'Istanbul, Turkey',
    description: [
      'Architected and delivered end-to-end CRM solutions driving business growth across European and Middle Eastern markets',
      'Spearheaded Google OAuth integration in FastAPI, resulting in 20% boost in user acquisition and streamlined onboarding',
      'Engineered high-performance Document Editor using Tiptap in Next.js, achieving 30% increase in user engagement metrics',
      'Optimized data processing by implementing bulk CSV upload with csv-parser and Celery worker, reducing processing time by 40%',
      'Developed robust email automation system using MailGun, reducing email delivery time by 50%',
      'Led Progressive Web App implementation ensuring cross-platform accessibility and offline functionality',
      'Executed strategic SEO optimizations resulting in 45% improvement in organic traffic and search rankings',
      'Innovated comprehensive Event & Calendar Management System enhancing user scheduling efficiency by 25%',
      'Championed responsive design and accessibility improvements, achieving WCAG 2.1 compliance',
    ],
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'MUI',
      'Tiptap',
      'FastAPI',
      'Celery',
      'csv-parser',
      'MailGun',
      'Progressive Web App',
      'Redis',
      'WeasyPrint',
    ],
    images: ['/caresept.png'],
  },
  {
    position: 'Freelance Software Engineer',
    company: 'Aven Technologies',
    period: 'Nov 2024 - Dec 2024',
    location: 'Remote',
    description: [
      'Pioneered custom CRM development for high-value Real Estate markets in Dubai, Canada, and USA',
      'Architected scalable CRM platform from ground up utilizing Next.js, Node.js, Express, PostgreSQL, achieving 99.9% uptime',
      'Engineered enterprise-grade email automation system using Gmail API, processing 50,000+ emails monthly',
      'Established robust CI/CD pipeline with GitHub Actions and Docker, reducing deployment time by 70%',
      'Orchestrated AWS EC2 deployment with auto-scaling, capacity planning, and load handling, ensuring high availability',
      'Implemented advanced SEO strategies resulting in 200% increase in organic traffi',
      'Developed military-grade authentication system using JWT and NextAuth.js, ensuring zero security breaches',
      'Designed intuitive Event Management system reducing scheduling conflicts by 90%',
      'Created dynamic Template Editor enabling 60% faster document creation',
      'Delivered mobile-first responsive design achieving 95% user satisfaction rate',
    ],
    skills: [
      'Next.js',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Shadcn UI',
      'Prisma',
      'rechart.js',
      'Gmail API',
      'JWT',
      'NextAuth.js',
      'Docker',
      'GitHub Actions',
      'AWS EC2',
    ],
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    // proofLink: 'https://example.com/avencrm-proof',
  },
  {
    position: 'Open Source Contributor',
    company: 'NextUI',
    period: 'June 2024 - Aug 2024',
    location: 'Remote',
    description: [
      'Secured direct offer from CEO after delivering exceptional contributions to core framework',
      'Spearheaded 7+ major feature enhancements, driving 40% improvement in component adoption rate',
      'Resolved 10+ critical bugs in Calendar and Pagination components, achieving 99.9% stability',
      'Engineered enterprise-grade reusable UI components used by 1000+ developers globally',
      'Authored comprehensive documentation improving developer onboarding time by 50%',
      'Mentored 5+ junior contributors, fostering community growth and code quality',
    ],
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Storybook',
      'React-Aria',
      'Jest',
      'React Testing Library',
    ],
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    proofLink: '/nextui',
  },
  {
    position: 'Software Development Intern',
    company: 'SkilledUp Intelligence Pvt. Ltd.',
    period: 'March 2024 - June 2024',
    location: 'Bangalore, India',
    description: [
      'Engineered core features of enterprise Learning Management System serving 5000+ users',
      'Implemented secure authentication system using JWT and NextAuth.js, achieving zero security incidents',
      'Optimized UI/UX resulting in 35% reduction in user learning curve',
      'Developed high-performance Database Query Engine handling 10,000+ daily queries',
    ],
    skills: [
      'Next.js',
      'TypeScript',
      'JavaScript',
      'MongoDB',
      'Node.js',
      'Express.js',
      'JWT',
      'NextAuth.js',
      'Docker',
    ],
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    // proofLink: 'https://example.com/skilledup-internship-certificate',
  },
];

const Experience: React.FC = () => {
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
            {experience.proofLink && (
              <Link
                href={experience.proofLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group"
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

                  // Highlight technical skills
                  const technicalTerms = experience.skills.join('|');
                  const withTechHighlights = metrics.replace(
                    new RegExp(`(${technicalTerms})`, 'gi'),
                    '<span class="font-medium text-emerald-600 dark:text-emerald-400">$1</span>'
                  );

                  // Highlight impact keywords and action verbs
                  const impactKeywords = [
                    'Architected',
                    'Engineered',
                    'Spearheaded',
                    'Pioneered',
                    'Implemented',
                    'Optimized',
                    'Revolutionized',
                    'Innovated',
                    'Championed',
                    'Led',
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
                    'Mentored',
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

            <div>
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
            </div>

            {/* <Carousel images={experience.images} /> */}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};


export default Experience;
