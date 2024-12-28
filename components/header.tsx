"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Header = () => {
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="py-4 px-2 md:px-6 bg-white/5 dark:bg-gray-900/50 sticky top-0 backdrop-blur-sm z-96">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image src="/logo.png" alt="Logo" width={220} height={50} className="hidden lg:block" />
          <Image src="/logo-2.png" alt="Logo" width={50} height={50} className="block lg:hidden" />
        </Link>
        <div className="hidden md:flex space-x-4">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button className="md:hidden" onClick={toggleMenu}>
            Menu
          </Button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 space-y-2"
        >
          <NavLink href="#about" onClick={toggleMenu}>About</NavLink>
          <NavLink href="#skills" onClick={toggleMenu}>Skills</NavLink>
          <NavLink href="#experience" onClick={toggleMenu}>Experience</NavLink>
          <NavLink href="#projects" onClick={toggleMenu}>Projects</NavLink>
          <NavLink href="#contact" onClick={toggleMenu}>Contact</NavLink>
        </motion.div>
      )}
    </header>
  )
}

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link href={href} className="text-primary hover:text-primary/80 font-semibold transition-colors" onClick={onClick}>
    {children}
  </Link>
)

export default Header
