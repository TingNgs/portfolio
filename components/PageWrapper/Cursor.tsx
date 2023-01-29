import { useEffect, useRef } from "react";

const Cursor = () => {
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseMoveEvent = (e: MouseEvent) => {
      if (pointerRef.current) {
        pointerRef.current.style.display = "block";
        pointerRef.current.style.top = `${e.clientY}px`;
        pointerRef.current.style.left = `${e.clientX}px`;
        const element = e.target as Element | null;
        const size = element?.closest("a") ? "50px" : "";
        pointerRef.current.style.width = size;
        pointerRef.current.style.height = size;
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
      className="fixed hidden h-5 w-5 bg-black rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none z-50 transition-[width,height] duration-300"
    ></div>
  );
};

export default Cursor;
