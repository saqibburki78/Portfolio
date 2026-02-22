"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.05, // Linear interpolation (0 - 1) for smoother feel
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
      smoothWheel: true,
    });

    // RAF function for GSAP ticker
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Use GSAP ticker for Lenis RAF
    gsap.ticker.add(update);

    gsap.ticker.lagSmoothing(0);

    // Force ScrollTrigger to recalculate on mount
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  return null;
}
