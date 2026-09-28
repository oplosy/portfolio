"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Entrance and scroll-reveal choreography. Content is fully present without it.
export function Motion() {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap
        .timeline({ defaults: { ease: "expo.out", duration: 1.3 } })
        .from(".hero-title .line > span", { yPercent: 105, stagger: 0.09 })
        .from(".hero-meta, .hero-lede, .hero-actions", { y: 16, opacity: 0, stagger: 0.08, duration: 1 }, 0.35)
        .from(".topology", { opacity: 0, scale: 0.96, duration: 1.6 }, 0.2)
        .from(".topology-edges line", { strokeDashoffset: 260, stagger: 0.05, duration: 1.4 }, 0.4);

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          yPercent: 30,
          opacity: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: element, start: "top 85%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".principle").forEach((element, index) => {
        gsap.from(element.querySelector(".principle-rule"), {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1.2,
          delay: index * 0.08,
          ease: "expo.inOut",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.to(".progress-bar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      });
    });

    return () => media.revert();
  }, []);

  return null;
}
