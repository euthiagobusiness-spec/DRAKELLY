"use client";

import { useEffect } from "react";

const motionSurfaceSelector = ".motion-surface";
const revealSelector = ".reveal-surface";
const mouseFieldSelector = ".mouse-field";

type PointerFrame = {
  target: HTMLElement | null;
  field: HTMLElement | null;
  pageX: number;
  pageY: number;
  x: number;
  y: number;
  fieldX: number;
  fieldY: number;
  rotateX: number;
  rotateY: number;
};

export function MotionRuntime() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const surfaces = Array.from(
      document.querySelectorAll<HTMLElement>(motionSurfaceSelector),
    );
    let animationFrame = 0;
    let pendingFrame: PointerFrame | null = null;

    const applyPointerFrame = () => {
      animationFrame = 0;
      if (!pendingFrame) return;

      const frame = pendingFrame;
      pendingFrame = null;

      document.documentElement.style.setProperty("--page-mx", `${frame.pageX.toFixed(2)}%`);
      document.documentElement.style.setProperty("--page-my", `${frame.pageY.toFixed(2)}%`);

      if (frame.field) {
        frame.field.style.setProperty("--section-mx", `${frame.fieldX.toFixed(2)}%`);
        frame.field.style.setProperty("--section-my", `${frame.fieldY.toFixed(2)}%`);
      }

      if (!frame.target) return;

      frame.target.style.setProperty("--mx", `${frame.x.toFixed(2)}%`);
      frame.target.style.setProperty("--my", `${frame.y.toFixed(2)}%`);
      frame.target.style.setProperty("--rx", `${frame.rotateX.toFixed(3)}deg`);
      frame.target.style.setProperty("--ry", `${frame.rotateY.toFixed(3)}deg`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          target.dataset.visible = entry.isIntersecting ? "true" : "false";
        }
      },
      {
        root: null,
        rootMargin: prefersReducedMotion ? "-4% 0px -6% 0px" : "-8% 0px -10% 0px",
        threshold: prefersReducedMotion ? 0.08 : 0.18,
      },
    );

    for (const [index, element] of Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    ).entries()) {
      element.style.setProperty("--reveal-delay", `${(index % 4) * 140}ms`);
      observer.observe(element);
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const pageX = (event.clientX / window.innerWidth) * 100;
      const pageY = (event.clientY / window.innerHeight) * 100;
      const field = (event.target as Element | null)?.closest<HTMLElement>(
        mouseFieldSelector,
      ) ?? null;
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        motionSurfaceSelector,
      ) ?? null;

      let fieldX = pageX;
      let fieldY = pageY;

      if (field) {
        const fieldRect = field.getBoundingClientRect();
        fieldX = ((event.clientX - fieldRect.left) / fieldRect.width) * 100;
        fieldY = ((event.clientY - fieldRect.top) / fieldRect.height) * 100;
      }

      if (!target) {
        pendingFrame = {
          target: null,
          field,
          pageX,
          pageY,
          x: 50,
          y: 35,
          fieldX,
          fieldY,
          rotateX: 0,
          rotateY: 0,
        };

        if (!animationFrame) {
          animationFrame = window.requestAnimationFrame(applyPointerFrame);
        }

        return;
      }

      const rect = target.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      const rotateX = prefersReducedMotion ? (50 - y) * 0.01 : (50 - y) * 0.035;
      const rotateY = prefersReducedMotion ? (x - 50) * 0.012 : (x - 50) * 0.045;

      pendingFrame = {
        target,
        field,
        pageX,
        pageY,
        x,
        y,
        fieldX,
        fieldY,
        rotateX,
        rotateY,
      };

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(applyPointerFrame);
      }
    };

    const onPointerLeave = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        motionSurfaceSelector,
      );
      if (!target) return;

      target.style.setProperty("--mx", "50%");
      target.style.setProperty("--my", "35%");
      target.style.setProperty("--rx", "0deg");
      target.style.setProperty("--ry", "0deg");
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    for (const surface of surfaces) {
      surface.addEventListener("pointerleave", onPointerLeave, { passive: true });
    }

    return () => {
      observer.disconnect();
      document.removeEventListener("pointermove", onPointerMove);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      for (const surface of surfaces) {
        surface.removeEventListener("pointerleave", onPointerLeave);
      }
    };
  }, []);

  return null;
}
