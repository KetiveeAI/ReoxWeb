"use client";

import { useRef, useState, ReactNode } from "react";

interface MouseTrackingCardProps {
  children: ReactNode;
  className?: string;
}

export default function MouseTrackingCard({ children, className = "" }: MouseTrackingCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl bg-[#0f111a]/40 backdrop-blur-2xl border border-white/5 p-8 transition-colors hover:border-secondary/30 group shadow-2xl ${className}`}
    >
      {/* Scanner Line */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-secondary/60 to-transparent blur-[1px] -left-1/2 animate-scan" />
      </div>

      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
