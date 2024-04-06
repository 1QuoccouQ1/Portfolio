// File: src/app/ScrollToTop.jsx
"use client"
import { useEffect, useState } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top z-20">
      {isVisible && (
        <div onClick={scrollToTop} className='h-10 w-10'>
          <button className="bg-white text-black p-2 rounded-full px-3 py-2 fixed bottom-5 right-5 z-20">↑</button>
        </div>
      )}
    </div>  
  );
}

export default ScrollToTop;