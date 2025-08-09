'use client';

import { useState, useEffect, useRef } from 'react';
import { MdArrowDownward } from 'react-icons/md';
import IconButton from './IconButton';

const ScrollIndicator = ({ scrollAreaRef, className = '' }) => {
  const [showIndicator, setShowIndicator] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const scrollElement = scrollAreaRef?.current?.querySelector(
      '[data-radix-scroll-area-viewport]'
    );

    if (!scrollElement) return;

    const checkScrollability = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollElement;
      const isScrollable = scrollHeight > clientHeight;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px threshold

      setShowIndicator(isScrollable && !isAtBottom);
    };

    // Initial check
    checkScrollability();

    // Check on scroll
    const handleScroll = () => {
      checkScrollability();
    };

    // Check on resize
    const handleResize = () => {
      checkScrollability();
    };

    scrollElement.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Use MutationObserver to detect content changes
    const observer = new MutationObserver(checkScrollability);
    observer.observe(scrollElement, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [scrollAreaRef]);

  // Auto-hide after 3 seconds of no scroll activity
  useEffect(() => {
    if (!showIndicator) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    const scrollElement = scrollAreaRef?.current?.querySelector(
      '[data-radix-scroll-area-viewport]'
    );

    const handleActivity = () => {
      setIsVisible(true);
      clearTimeout(timer);
    };

    scrollElement?.addEventListener('scroll', handleActivity);
    scrollElement?.addEventListener('mousemove', handleActivity);

    return () => {
      clearTimeout(timer);
      scrollElement?.removeEventListener('scroll', handleActivity);
      scrollElement?.removeEventListener('mousemove', handleActivity);
    };
  }, [showIndicator, scrollAreaRef]);

  const handleClick = () => {
    const scrollElement = scrollAreaRef?.current?.querySelector(
      '[data-radix-scroll-area-viewport]'
    );
    if (scrollElement) {
      scrollElement.scrollBy({
        top: 300,
        behavior: 'smooth',
      });
    }
  };

  if (!showIndicator) return null;

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-2'
      } ${className}`}
    >
      {/* Main indicator button */}
      <IconButton
        variant="outlined"
        onClick={handleClick}
        size="lg"
        aria-label="Scroll down to see more content"
        className="group"
      >
        <MdArrowDownward className="w-6 h-6 text-primary relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
      </IconButton>

      {/* Subtle hint text */}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          Scroll for more
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
