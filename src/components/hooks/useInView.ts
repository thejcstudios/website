import { useEffect, useRef, useState } from "react";

export const useInView = (
  threshold = 0,
  rootMargin = "-20px",
  triggerOnce = false
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || (triggerOnce && hasBeenVisible)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasBeenVisible(true);
            observer.unobserve(entry.target); // stop observing
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, rootMargin, triggerOnce, hasBeenVisible]);

  return { ref, isVisible };
};
