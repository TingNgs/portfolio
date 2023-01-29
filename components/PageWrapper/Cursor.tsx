import { useEffect, useRef } from "react";

const Cursor = () => {
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseMoveEvent = (e: MouseEvent) => {
      if (pointerRef.current) {
        pointerRef.current.style.display = "block";
        pointerRef.current.style.top = `${e.clientY}px`;
        pointerRef.current.style.left = `${e.clientX}px`;
      }
    };
    document.addEventListener("mousemove", mouseMoveEvent);
    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
    };
  }, []);

  return (
    <div
      ref={pointerRef}
      className="fixed hidden h-5 w-5 bg-black rounded-full -translate-y-1/2 -translate-x-1/2 mix-blend-difference pointer-events-none"
    ></div>
  );
};

export default Cursor;
