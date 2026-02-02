import React, { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?:
    | "fadeIn"
    | "slideUp"
    | "slideLeft"
    | "slideRight"
    | "scale"
    | "none";
  delay?: number;
  className?: string;
}

export function AnimatedSection({
  children,
  animation = "fadeIn",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const animationClasses = {
    fadeIn: isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
    slideUp: isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-12",
    slideLeft: isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-12",
    slideRight: isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-12",
    scale: isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
    none: "",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
}

// Stagger children animations
interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 100,
  className = "",
}: StaggerContainerProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimatedSection delay={index * staggerDelay} animation="slideUp">
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
}

// Fade in on scroll
export function FadeInOnScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <AnimatedSection animation="fadeIn" className={className}>
      {children}
    </AnimatedSection>
  );
}

// Slide up on scroll
export function SlideUpOnScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <AnimatedSection animation="slideUp" className={className}>
      {children}
    </AnimatedSection>
  );
}
