'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  return (
    <header
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="relative z-10 flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={180} height={40} className="hidden lg:block" />
            <Image
              src="/logo-2.png"
              alt="Logo"
              width={40}
              height={40}
              className="block lg:hidden"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="relative z-10">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out md:hidden',
            isOpen ? 'translate-x-0' : 'translate-x-full',
            'pt-24 px-6'
          )}
        >
          <div className="flex flex-col space-y-8">
            <NavLinks mobile onClick={() => setIsOpen(false)} />
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavLinks = ({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={onClick}
          className={cn(
            'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
            'transition-colors duration-200',
            'font-medium',
            mobile && 'text-3xl py-2'
          )}
        >
          {label}
        </Link>
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
    className="h-9 w-9 rounded-full"
  >
    <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    <span className="sr-only">Toggle theme</span>
  </Button>
);

export default Header;
