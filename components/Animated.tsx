import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerIndex?: number; // for staggered delays
}

const Animated: React.FC<AnimatedProps> = ({ children, className, delay = 0, staggerIndex }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const totalDelay = delay + ((staggerIndex ?? 0) * 50);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? 'is-visible' : ''} ${className || ''}`}
      style={{ transitionDelay: `${totalDelay}ms` }}
    >
      {children}
    </div>
  );
};

export default Animated;