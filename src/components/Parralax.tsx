import { useEffect, useRef } from 'react';
import Rellax from 'rellax';

function Parallax() {
  const bgRef = useRef<HTMLDivElement>(null);
  const rellaxInstance = useRef<Rellax | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && bgRef.current && !rellaxInstance.current) {
          // Initialize Rellax when element enters the viewport
          rellaxInstance.current = new Rellax(bgRef.current, {
            speed: -5,
            center: true,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false,
          });
        }
      },
      {
        root: null, // viewport
        threshold: 0.1, // 10% in view
      }
    );

    if (bgRef.current) {
      observer.observe(bgRef.current);
    }

    return () => {
      observer.disconnect();
      if (rellaxInstance.current) {
        rellaxInstance.current.destroy();
        rellaxInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="parallax-container">
      <div ref={bgRef} className="parallax-bg" />
      <div className="parallax-text">JC STUDIOS</div>
    </div>
  );
}

export default Parallax;
