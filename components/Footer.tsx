import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/yourusername",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yourusername",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Email",
      href: "mailto:your.email@example.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative mt-12">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="bg-gradient-to-b from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          {/* Main footer content */}
          <div className="py-12 flex flex-col md:flex-row justify-between">
            {/* Logo and description */}
            <div className="flex flex-col space-y-4">
              <Link href="/">
                <Image 
                  src="/logo.png" 
                  alt="Logo" 
                  width={220} 
                  height={50} 
                  className="dark:invert"
                />
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
                From Pro to Ultra Pro.
              </p>
            </div>

            {/* Quick Links
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Quick Links
              </h3>
              <nav className="flex flex-col space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary/80 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div> */}

            {/* Social Links */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Connect
              </h3>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-primary/10 transition-colors duration-200"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary/80"
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="py-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Abhinandan. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;