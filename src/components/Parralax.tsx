import { useEffect, useRef } from 'react';
import Rellax from 'rellax';

function Parallax() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      new Rellax(bgRef.current, {
        speed:-5,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false,
      });
    }
  }, []);

  return (
    <div className="parallax-container">
      <div ref={bgRef} className="parallax-bg" />
      <div className="parallax-text">JC STUDIOS</div>
    </div>
  );
}

export default Parallax;
