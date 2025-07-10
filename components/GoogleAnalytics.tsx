'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { GA_TRACKING_ID, debugGA, pageview } from '@/lib/analytics';
import { usePathname } from 'next/navigation';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  // Track page views on route changes
  useEffect(() => {
    if (pathname) {
      pageview(window.location.href);
    }
  }, [pathname]);

  // Debug GA after component loads
  useEffect(() => {
    const timer = setTimeout(() => {
      debugGA();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Analytics script loaded successfully');
        }}
        onError={(e) => {
          console.error('Failed to load Google Analytics script:', e);
        }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Analytics configuration script loaded');
        }}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            debug_mode: true,
            send_page_view: true
          });
          
          // Log successful initialization
          console.log('Google Analytics initialized with ID: ${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
} 