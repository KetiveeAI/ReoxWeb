"use client";

import { useEffect, useState, useRef } from "react";

export default function LocCounter({ target, duration = 2000 }: { target: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          animationFrame = requestAnimationFrame(animate);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}
