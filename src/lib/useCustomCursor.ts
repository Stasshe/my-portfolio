"use client";

import gsap from "gsap";
import type { MutableRefObject, RefObject } from "react";
import { useEffect } from "react";

type UseCustomCursorOptions = {
  extraSelectors?: string;
  hoverClass?: string;
  moveDuration?: number;
  easing?: string;
};

export function useCustomCursor<T extends HTMLElement = HTMLElement>(
  cursorRef: RefObject<T | null> | MutableRefObject<T | null>,
  options?: UseCustomCursorOptions,
) {
  useEffect(() => {
    if (!cursorRef) return;

    const extraSelectors = options?.extraSelectors ?? "";
    const hoverClass = options?.hoverClass ?? "hovering";
    const moveDuration = options?.moveDuration ?? 0.5;
    const easing = options?.easing ?? "power2.out";

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: moveDuration,
          ease: easing as any,
        });
      }
    };
    window.addEventListener("mousemove", moveCursor);

    const baseSelectors = ["a", "button", ".nav-link"];
    const extra = extraSelectors
      ? extraSelectors.split(",").map((s) => s.trim()).filter(Boolean)
      : [];
    const selector = [...baseSelectors, ...extra].join(", ");

    const interactives = Array.from(document.querySelectorAll(selector));

    const listeners: Array<{
      el: Element;
      enter: EventListenerOrEventListenerObject;
      leave: EventListenerOrEventListenerObject;
    }> = [];

    interactives.forEach((el) => {
      const enter = () => cursorRef.current?.classList.add(hoverClass);
      const leave = () => cursorRef.current?.classList.remove(hoverClass);
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      listeners.push({ el, enter, leave });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      listeners.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [cursorRef, options?.extraSelectors, options?.hoverClass, options?.moveDuration, options?.easing]);
}
