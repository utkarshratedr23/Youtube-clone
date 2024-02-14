"use client"
import { useState, useCallback, useEffect } from "react";

interface ScrollProps {
  children: React.ReactNode;
}

const Scrollbar: React.FC<ScrollProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return <div className={`scroll-handler ${isScrolled ? 'scrolled' : ''}`}>{children}</div>;
};

export default Scrollbar;