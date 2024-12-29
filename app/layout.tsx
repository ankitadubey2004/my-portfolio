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
    'Senior Software Engineer specializing in Next.js, FastAPI, and Cloud Infrastructure. Expert in building scalable enterprise applications, CRM systems, and high-performance web solutions.',
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
  ],
  creator: 'Abhinandan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhinandan.pro',
    title: 'Abhinandan - Senior Software Engineer & Technical Expert',
    description:
      'Full-stack developer specializing in Next.js, FastAPI, and enterprise solutions. Expert in building scalable, high-performance web applications.',
    siteName: 'Abhinandan Portfolio',
    images: [
      {
        url: 'https://abhinandan.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abhinandan - Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhinandan - Senior Software Engineer & Technical Expert',
    description: 'Full-stack developer specializing in Next.js, FastAPI, and enterprise solutions.',
    images: ['https://abhinandan.pro/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
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
