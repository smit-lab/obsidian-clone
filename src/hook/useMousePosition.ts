import * as React from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const divRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    divRefs.current.forEach((divRef) => {
      if (divRef) {
        const handleMouseMove = (event: MouseEvent) => {
          const rect = divRef.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            divRef.style.setProperty("--mouse-x", `${x}px`);
            divRef.style.setProperty("--mouse-y", `${y}px`);
            setMousePosition({ x, y });
          }
        };

        const onMouseMove = (e: MouseEvent) => {
          requestAnimationFrame(() => handleMouseMove(e));
        };
        window.addEventListener("mousemove", onMouseMove);
        return () => {
          window.removeEventListener("mousemove", onMouseMove);
        };
      }
    });
  }, []);
  return { mousePosition, divRefs };
};

export default useMousePosition;
