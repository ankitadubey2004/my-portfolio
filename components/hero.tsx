'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const achievements = [
  { number: '30+', label: 'Projects Launched' },
  { number: '7+', label: 'Enterprise Solutions' },
  { number: '15k+', label: 'Users Impacted' },
];

const StyledButton = ({ children, className, ...props }: any) => (
  <Button
    size="lg"
    className={`w-full md:w-auto  relative overflow-hidden transform transition-all duration-300 hover:scale-105 
    active:scale-95 shadow-lg hover:shadow-xl ${className}`}
    {...props}
  >
    {children}
  </Button>
);

const Hero = () => {
  const { theme } = useTheme();
  const [profileImage, setProfileImage] = useState('/p-1.jpg');

  useEffect(() => {
    setProfileImage(theme === 'dark' ? '/p-6.jpg' : '/p-6.jpg');
  }, [theme]);

  return (
    <section
      className="relative min-h-[98vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 mt-5 md:mt-0"
      id="hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] dark:opacity-20" />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Leadership Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm">
                Founder & Tech Leader
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Building the Future
                <span className="block text-blue-600 dark:text-blue-400">
                  One Solution at a Time
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Transforming ideas into enterprise-grade solutions with modern tech stacks.
              </motion.p>
            </div>

            {/* CTA Section */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <StyledButton
                className="group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 
                hover:to-blue-900 text-white px-6 md:px-8 py-4 md:py-6 backdrop-blur-sm rounded-full"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <span className="flex items-center">
                  Let&apos;s Build Together
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
                <div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 
                transition-opacity duration-300"
                />
              </StyledButton>

              <StyledButton
                variant="outline"
                className="group border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 
                dark:hover:bg-blue-900/20 px-6 md:px-8 py-4 md:py-6 backdrop-blur-sm rounded-full"
                asChild
              >
                <Link
                  href="https://calendly.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Schedule a Call
                  <motion.span
                    className="ml-2"
                    whileHover={{ rotate: 45 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </motion.span>
                </Link>
              </StyledButton>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image & Project Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative aspect-square max-w-sm md:max-w-md mx-auto">
              {/* Main Profile Image */}
              <div
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl 
                before:absolute before:inset-0 before:bg-blue-500/10 before:z-10"
              >
                <Image
                  src={profileImage}
                  alt="Your Name"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating Project Cards - Only visible on larger screens */}
              {/* <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -right-4 lg:-right-16 top-16 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg z-20 hidden md:block backdrop-blur-sm"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium whitespace-nowrap">
                    Latest: Enterprise CRM Solution
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-4 lg:-left-16 bottom-16 bg-white/70 dark:bg-gray-800 p-4 rounded-xl shadow-lg z-20 hidden md:block backdrop-blur-sm"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium whitespace-nowrap">
                    Featured: Solana dApp
                  </span>
                </div>
              </motion.div> */}

              {/* Background Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
