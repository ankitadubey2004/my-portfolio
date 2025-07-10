// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: any
    ) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = 'G-MS2NZQLL8E';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
      page_title: document.title,
    });
    console.log('Page view tracked:', url);
  }
};

// Track events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
    console.log('Event tracked:', { action, category, label, value });
  }
};

// Check if Google Analytics is properly loaded
export const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.gtag === 'function' && 
         Array.isArray(window.dataLayer);
};

// Debug function to check GA status
export const debugGA = () => {
  if (typeof window === 'undefined') {
    console.log('Running on server side');
    return;
  }

  console.log('=== Google Analytics Debug Info ===');
  console.log('GA Tracking ID:', GA_TRACKING_ID);
  console.log('gtag function available:', typeof window.gtag === 'function');
  console.log('dataLayer available:', Array.isArray(window.dataLayer));
  console.log('dataLayer contents:', window.dataLayer);
  
  // Check cookies
  const cookies = document.cookie.split(';').map(c => c.trim());
  const gaCookies = cookies.filter(cookie => 
    cookie.startsWith('_ga') || 
    cookie.startsWith('_gid') ||
    cookie.startsWith('_gat')
  );
  
  console.log('GA cookies found:', gaCookies.length);
  gaCookies.forEach(cookie => console.log('  -', cookie));
  
  // Test gtag call
  if (window.gtag) {
    console.log('Testing gtag call...');
    window.gtag('event', 'debug_test', {
      event_category: 'debug',
      event_label: 'manual_test'
    });
  }
  
  console.log('=== End Debug Info ===');
}; 