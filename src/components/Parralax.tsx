import { useRef } from "react";

function Parralax() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  // No scroll handler, just a static background container

  return (
    <div
      className="parralaxcontainer"
      ref={parallaxRef}
    />
  );
}

export default Parralax;
