"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_MS = 1600;

export default function TypewriterRole({ roles }: { roles: string[] }) {
  const [text, setText] = useState(roles[0] ?? "");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion || roles.length === 0) return;

    let roleIndex = 0;
    let charIndex = roles[0].length;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = roles[roleIndex];

      if (!deleting) {
        charIndex += 1;
        if (charIndex > current.length) {
          charIndex = current.length;
          deleting = false;
          setText(current.slice(0, charIndex));
          timeoutId = setTimeout(() => {
            deleting = true;
            tick();
          }, HOLD_MS);
          return;
        }
        setText(current.slice(0, charIndex));
        timeoutId = setTimeout(tick, TYPE_SPEED);
      } else {
        charIndex -= 1;
        if (charIndex <= 0) {
          charIndex = 0;
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setText("");
          timeoutId = setTimeout(tick, TYPE_SPEED);
          return;
        }
        setText(current.slice(0, charIndex));
        timeoutId = setTimeout(tick, DELETE_SPEED);
      }
    };

    timeoutId = setTimeout(() => {
      deleting = true;
      tick();
    }, HOLD_MS);

    return () => clearTimeout(timeoutId);
  }, [reduceMotion, roles]);

  return (
    <span>
      {text}
      {!reduceMotion && (
        <span className="typewriter-cursor ml-0.5 inline-block w-[1ch] text-accent">
          &#9615;
        </span>
      )}
    </span>
  );
}
