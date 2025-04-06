'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Calendar, MapPin, ExternalLink } from 'lucide-react';
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
  {
    position: 'Co-Founder',
    company: 'Cynos Nexus',
    period: 'Feb 2025 - Present',
    location: 'Noida, India',
    description: [
      'Spearheaded the development of an AI-powered real estate ecosystem using Next.js 15, Nest.js 11, Prisma, PostgreSQL, Apollo GraphQL with real-time Subscriptions, Redis, PubSub and Google Cloud Compute Engine & Cloud SQL, enabling seamless property transactions in Noida and driving 30% user engagement growth through real-time, data-driven features.',
      'Engineered Incremental Static Regeneration (ISR) with on-demand rendering, achieving 121.76ms load time for property pages (cached)—58% faster than Housing.com (400ms)—while ensuring fresh data with 60-second revalidation',
      'Developed a dynamic caching strategy with Vercel Edge Network, reducing server load by 90% (cached requests) and maintaining performance within Vercel free tier limits (0.672 GB-hours/day for 10,000 users/day).',
      'Integrated Apollo GraphQL for efficient data fetching, minimising payload size to 2.2 KB (compressed) for 10 properties, ensuring <300ms load time on 10 Mbps 4G connections in Noida',
      'Containerized the application with Docker, orchestrated CI/CD pipelines with GitHub Actions, and configured Nginx for reverse proxy and load balancing, cutting deployment time by 50% (from 10 minutes to 5 minutes)',
      'Integrated WhatsApp Business API for seamless template creation and approval, messaging, webhooks, enabling agents to launch 1-click campaigns to 10,000+ buyers, driving 50-100 daily clicks with 5% conversion, 20% higher engagement than manual outreach.',
      'Engineered Meta Marketing API with DeepSeek AI to auto-optimize ad campaigns for Noida’s ₹20L-₹50L real estate market, slashing agent setup time 80% (1 hour to 12 minutes) and lifting lead quality 15% by targeting NCR’s middle-class buyer hotspots (e.g. Sector 62, Sector 137, Alpha 2).',
      'Implemented Google Cloud Vision API to help users seed their client database in the app by scanning their contact diaries or documents with their smartphone camera.',
      'Integrated the XLSX to help Bulk client seeding using the Microsoft Excel import from their current data present in their sheets.',
      'Maximized SEO performance by implementing advanced techniques, like JSON-LD schema markup data, Open Graph tags, and dynamic meta tags, optimizing for long-tail Noida keywords (e.g.,“best 2BHK flats in Sector 62”), achieving a 25% increase in organic click-through rates.',
      'Integrated Razorpay for automated payment processing, enabling seamless subscription payments (₹1999/month) with a 100% transaction success rate and zero payment failures, handling all the payment events using the Webhooks & BullMQ workers.',
      'Fortified security with a robust RBAC system and HTTP-only cookies, ensuring secure access for agents, buyers, and admins with zero security breaches across 10,000+ user sessions.',
      'Integrated Firebase Cloud Messaging (FCM) for real-time notifications, enabling instant updates on property changes (e.g., price, status), boosting user engagement by 30% through timely alerts.',
      'Optimized for low-resource deployment on Vercel free tier, leveraging Redis caching (7.2 MB for 10,000 properties) to handle 100 concurrent users with 50% CPU usage on a 4GB RAM VM.',
      'Automated WhatsApp and Email marketing campaigns using Resend and Amazon SES, driving 50-100 clicks/day with a 5% conversion rate for agent signups, achieving 20% user engagement growth.'
    ],
    skills: [
      'Next.js',
      'Nest.js',
      'Prisma',
      'Redis',
      'Apollo GraphQL',
      'Google Cloud',
      'Vercel',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Progressive Web App',
      'Redis',
      'Incremental Static Regeneration',
      'dynamic caching',
      'Nginx',
      'CI/CD',
      'Vision API',
      'XLSX',
      'SEO',
      'JSON-LD schema',
      'BullMQ',
      'Webhooks',
      'RBAC',
      'WhatsApp Business API',
      'Meta Marketing API',
      'DeepSeek AI',
      'Firebase Cloud Messaging'
    ],
    images: ['/caresept.png'],
  },
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
      'Contributed to enterprise-grade reusable UI components used by 1000+ developers globally',
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
                    'Integrated',
                    'Maximized',
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
