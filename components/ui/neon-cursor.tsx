"use client";

import { useEffect, useState } from "react";

export default function NeonCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const canUseMouse = window.matchMedia("(pointer: fine)").matches;

    if (!canUseMouse) return;

    document.body.classList.add("neon-cursor-enabled");

    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);

      const target = event.target;

      const isInteractive =
        target instanceof Element &&
        Boolean(
          target.closest(
            'a, button, input, select, textarea, [role="button"], [data-cursor-interactive]',
          ),
        );

      setIsHoveringInteractive(isInteractive);
    };

    const handlePointerLeave = () => setIsVisible(false);
    const handlePointerEnter = () => setIsVisible(true);

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("pointerenter", handlePointerEnter);

    return () => {
      document.body.classList.remove("neon-cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("pointerenter", handlePointerEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[9999] ${
        isHoveringInteractive ? "" : ""
      }`}
      style={{ left: position.x, top: position.y }}
    >
      {isHoveringInteractive ? (
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-red-500 stroke-red-200 stroke-[1.5] drop-shadow-[0_0_18px_rgba(255,0,60,1)]"
        >
          <circle cx="16" cy="16" r="10" fill="none" />
          <circle cx="16" cy="16" r="4" />
          <path d="M16 2v6M16 24v6M2 16h6M24 16h6" fill="none" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-6 w-6 fill-red-500 stroke-[1.5] drop-shadow-[0_0_5px_#ff003c]"
        >
          <path d="M5 4 26 16 15 18 12 28 5 4Z" />
        </svg>
      )}
    </div>
  );
}
