import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import StructuredData from './structured-data';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abhinandan.pro'),
  title: {
    default: 'Abhinandan | Senior Software Engineer & Technical Expert',
    template: '%s | Abhinandan - Full Stack Engineer',
  },
  description:
    'Senior Software Engineer & Technical Expert specializing in Next.js, FastAPI, and Cloud Infrastructure. Expert in building scalable enterprise applications, CRM systems, and high-performance web solutions. Available for technical consulting and enterprise projects.',
  keywords: [
    'Senior Software Engineer',
    'Full Stack Developer',
    'Next.js Expert',
    'FastAPI Developer',
    'PostgreSQL Expert',
    'Technical Architect',
    'CRM Development',
    'Enterprise Solutions',
    'React Developer',
    'TypeScript Expert',
    'System Design Expert',
    'Cloud Architecture',
    'DevOps Engineer',
    'Freelance Developer',
    'Software Consultant',
    'Technical Lead',
    'Solution Architect',
    'Enterprise Applications',
    'Web Development Expert',
    'Performance Optimization',
    'Scalable Systems',
    'API Development',
    'Database Design',
    'Microservices Architecture',
    'Cloud Infrastructure',
    'AWS Expert',
    'Technical Leadership',
    'Software Architecture',
    'Full Stack Engineering',
    'Remote Developer',
    'Independent Consultant',
  ],
  alternates: {
    canonical: 'https://abhinandan.pro',
  },
  authors: [{ name: 'Abhinandan', url: 'https://abhinandan.pro' }],
  creator: 'Abhinandan',
  publisher: 'Abhinandan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhinandan.pro',
    title: 'Abhinandan - Senior Software Engineer & Technical Expert',
    description:
      'Expert Full Stack Engineer specializing in Next.js, FastAPI, and enterprise solutions. Building scalable, high-performance web applications and providing technical leadership.',
    siteName: 'Abhinandan Portfolio',
    images: [
      {
        url: 'https://abhinandan.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abhinandan - Senior Software Engineer & Technical Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhinandan - Senior Software Engineer & Technical Expert',
    description: 'Expert Full Stack Engineer specializing in Next.js, FastAPI, and enterprise solutions.',
    creator: '@awesome_v0',
    images: ['https://abhinandan.pro/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
