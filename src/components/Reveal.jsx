import { useEffect, useRef, useState } from "react";


/*
  Wrap any block you want to fade in when it scrolls into view.

    <Reveal>                              fades up (default)
    <Reveal delay={150}>                  waits 150ms first (use for staggering)
    <Reveal direction="left">             slides in from the left
    <Reveal as="li" className="...">      renders as a different tag and keeps your classes

  direction: "up" | "down" | "left" | "right" | "none"
*/

// Full class names are written out so Tailwind can find them (it can't see built-up names).
const HIDDEN_OFFSET = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "-translate-x-8",
  right: "translate-x-8",
  none: "",
};

export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // If animations are turned off (or the browser is very old), just show the content.
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // play once; it won't hide again when you scroll back up
        }
      },
      // threshold 0 = "as soon as any part shows", so tall blocks on small phones still trigger.
      // The negative bottom margin waits until the block is slightly inside the screen.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const state = visible
    ? "opacity-100 translate-x-0 translate-y-0"
    : `opacity-0 ${HIDDEN_OFFSET[direction] ?? HIDDEN_OFFSET.up}`;

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${state} ${className}`}
    >
      {children}
    </Tag>
  );
}