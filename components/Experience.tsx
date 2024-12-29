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
    period: 'Sept 2024 - Dec 2024',
    location: 'Istanbul, Turkey',
    description: [
      'Developed and maintained CRM solutions for Europe and Middle East markets',
      'Implemented Google OAuth from scratch in FastAPI, resulting in a 20% increase in user engagement',
      'Built a full-fledged Document Editor using Tiptap Editor in Next.js resulting in a 30% increase in user engagement',
      'Built the bulk CSV upload feature using the csv-parser and Celery worker in FastAPI resulting in a 20% increase in user engagement',
      'Implemented the Bulk Email Sending feature using SendGrid API in FastAPI resulting in a 20% increase in user engagement',
      'Implemented Next.js Progressive Web App (PWA) ensuring global installability of application',
      'Enhanced the SEO of the application resulting in a 10% increase in application traffic',
      'Implemented the  Event Management and Calendar Management System  in Next.js',
      'Enhanced user experience with responsive design and accessibility features',
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
      'Redis',
      'WeasyPrint',
    ],
    images: ['/caresept.png'],
    proofLink: 'https://example.com/caresept-proof',
  },
  {
    position: 'Freelance Software Engineer',
    company: 'Aven Technologies',
    period: 'Nov 2024 - Dec 2024',
    location: 'Remote',
    description: [
      'Designed and implemented custom CRM features for Real Estate market of Dubai, Canada, and the US',
      'Built the end-to-end CRM solution from scratch using Next.js, Node.js, Express, PostgreSQL, Prisma, rechart.js, and Shadcn UI',
      'Implemented the Bulk Email Sending feature using Gmail API in Express resulting in a 20% increase in user engagement',
      'Impemented a highly robust CI-CD pipeline using GitHub Actions and Docker',
      'Deployed the complete CRM solution on AWS EC2 instance ensuring high availability and scalability',
      'Enhanced the SEO of the application resulting in a 10% increase in application traffic',
      'Implemented a robust Authentication and Authorization System using JWT and NextAuth.js',
      'Implemented the  Event Management and Calendar Management System  in Next.js',
      'Implemented the Custome Template Editor in Next.js',
      'Enhanced user experience with responsive design and accessibility features',
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
    proofLink: 'https://example.com/avencrm-proof',
  },
  {
    position: 'Open Source Contributor',
    company: 'NextUI',
    period: 'June 2024 - Aug 2024',
    location: 'Remote',
    description: [
      'Achieved a personal offer from the CEO to join NextUI after making good number of significant contributions',
      'Enhanced Developer Adoption & Product Reach: Delivered 7+  feature enhancements that significantly improved component flexibility and extensibility.',
      'User Experience Enhancement: Resolved 10+ bugs in essential components like Calendar and Pagination, leading to directly improving the product’s stability and usability.',
      'Contributed to the development of reusable and extensible UI components',
      'Contributed to comprehensive documentation and usage examples enhancing the developer experience',
      'Enhanced Developer Adoption & Product Reach: Delivered 7+  feature enhancements that significantly improved component flexibility and extensibility',
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
    proofLink: 'https://github.com/nextui-org/nextui/pulls?q=is%3Apr+author%3AYourGitHubUsername',
  },
  {
    position: 'Software Development Intern',
    company: 'SkilledUp Intelligence Pvt. Ltd.',
    period: 'March 2024 - June 2024',
    location: 'Bangalore, India',
    description: [
      'Assisted in the development of a Learning management system',
      'Implemented user authentication and authorization features using JWT and NextAuth.js leading to a 20% increase in user engagement',
      'Enhanced the User Experience with responsive design and accessibility features',
      'Built a robust Database Query Engine using MongoDB and Express.js',
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
    proofLink: 'https://example.com/skilledup-internship-certificate',
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
                  // Highlight numbers and percentages
                  const highlightedText = item.replace(
                    /(\d+%|\d+\+?)/g,
                    '<span class="font-semibold text-blue-600 dark:text-blue-400">$1</span>'
                  );

                  // Highlight technical terms
                  const technicalTerms = experience.skills.join('|');
                  const finalText = highlightedText.replace(
                    new RegExp(`(${technicalTerms})`, 'gi'),
                    '<span class="font-medium text-emerald-600 dark:text-emerald-400">$1</span>'
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
