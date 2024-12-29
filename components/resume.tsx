'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  FileText,
  Loader2,
  RotateCw,
  Maximize2,
  Share2,
  Printer,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ResumeViewer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const totalPages = 2;

  // Handle scroll to hide/show controls
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowControls(lastScrollPosition > currentScrollPos || currentScrollPos < 100);
      setLastScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPosition]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Abhinandan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoom = (factor: number) => {
    setScale(prevScale => {
      const newScale = prevScale + factor;
      return Math.min(Math.max(newScale, 0.5), 2);
    });
  };

  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
    setIsLoading(true);
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'My Resume',
        url: window.location.href
      });
    } catch (error) {
      console.log('Sharing failed', error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            My Resume
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            View my professional experience and qualifications. Use the controls below to adjust the view, 
            download, or share the resume.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Floating Controls */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="sticky top-4 z-50"
              >
                <Card className="mb-6 p-4 backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleZoom(-0.1)}
                              disabled={scale <= 0.5}
                              className="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <ZoomOut className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Zoom Out (Ctrl -)</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <span className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {Math.round(scale * 100)}%
                      </span>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleZoom(0.1)}
                              disabled={scale >= 2}
                              className="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <ZoomIn className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Zoom In (Ctrl +)</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={handleRotate}
                              className="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <RotateCw className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Rotate View</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="hover:bg-white dark:hover:bg-gray-600"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <span className="text-sm px-2">
                          {currentPage} / {totalPages}
                        </span>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="hover:bg-white dark:hover:bg-gray-600"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center space-x-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={toggleFullscreen}
                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                <Maximize2 className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Toggle Fullscreen (F11)</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={handleShare}
                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Share Resume</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={handlePrint}
                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                <Printer className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Print Resume</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <Button
                          variant="default"
                          onClick={handleDownload}
                          className="bg-primary hover:bg-primary/90"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden shadow-xl bg-white dark:bg-gray-800">
              <div className="relative min-h-[842px]">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Loader2 className="h-8 w-4 text-primary" />
                    </motion.div>
                  </div>
                )}
                <iframe
                  src={`/resume.pdf#page=${currentPage}`}
                  className="w-full h-full min-h-[842px] border-0 transition-transform duration-300"
                  style={{
                    transform: `scale(${scale}) rotate(${rotation}deg)`,
                    transformOrigin: 'top center',
                  }}
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </Card>
          </motion.div>

          {/* Mobile optimization notice */}
          <div className="mt-6 md:hidden">
            <Alert className="bg-primary/5 border-primary/20">
              <AlertDescription className="text-sm text-gray-600 dark:text-gray-400">
                <FileText className="h-6 w-6 float-left mr-2 text-primary" />
                For the best viewing experience on mobile devices, consider downloading the PDF version
                or rotating your device to landscape mode.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeViewer;