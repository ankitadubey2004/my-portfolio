'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { setTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add smooth scrolling
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          setIsOpen(false);
        }
      }
    };
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={cn(
        'fixed w-full top-0 z-[9999] transition-all duration-300',
        scrolled
          ? 'bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg shadow-sm border-b border-gray-200/20'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="relative z-10 flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={180}
                height={40}
                className="hidden lg:block"
              />
              <Image
                src="/logo-2.png"
                alt="Logo"
                width={40}
                height={40}
                className="block lg:hidden"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="relative z-[9999]">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-[999]"
            >
              <div className="flex flex-col items-center justify-center h-screen space-y-8">
                <NavLinks mobile onClick={() => setIsOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const NavLinks = ({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  const links = [
    { href: '#hero', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map(({ href, label }, index) => (
        <motion.div
          key={href}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: mobile ? index * 0.1 : 0 }}
        >
          <Link
            href={href}
            onClick={onClick}
            className={cn(
              'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary',
              'transition-colors duration-200',
              'font-medium relative group',
              mobile && 'text-2xl py-2'
            )}
          >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </Link>
        </motion.div>
      ))}
    </>
  );
};

const ThemeToggle = ({
  theme,
  setTheme,
}: {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}) => (
  <Button
    variant="ghost"
    size="icon"
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    className="h-9 w-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    <span className="sr-only">Toggle theme</span>
  </Button>
);

export default Header;
