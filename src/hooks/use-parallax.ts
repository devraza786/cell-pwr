import { useEffect, useRef, useState } from "react";

export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = ref.current.offsetHeight;
        const windowHeight = window.innerHeight;

        // Only apply parallax when element is in viewport
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const scrolled = window.scrollY;
          setOffset(scrolled * speed);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
};
