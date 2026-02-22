"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function FirstComponent() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const helloTextRef = useRef<HTMLDivElement>(null);
  const textanimationRef = useRef(null);
  const text = useRef(null);
  const nameref = useRef(null);

  // Advanced GSAP animations
  useGSAP(
    () => {
      // Hero section entrance with stagger
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate "Hello, I'm" with letter reveal
      if (helloTextRef.current) {
        const letters = helloTextRef.current.textContent?.split("") || [];
        helloTextRef.current.innerHTML = letters
          .map((letter: string) => `<span class="inline-block">${letter === " " ? "&nbsp;" : letter}</span>`)
          .join("");

        tl.from(helloTextRef.current.children as any, {
          opacity: 0,
          y: 100,
          rotationX: -90,
          stagger: 0.03,
          duration: 0.8,
        });
      }

      // Animate name with scale and rotation effect
      tl.from(
        nameref.current,
        {
          // y: -100,
          scale: 0.5,
          opacity: 0,
          stagger: 0.03,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.3"
      );

      // // Add floating animation to name
      // gsap.to(nameref.current, {
      //   // y: -10,
      //   duration: 2,
      //   repeat: -1,
      //   yoyo: true,
      //   ease: "sine.inOut",
      // });

      // Gradient color shift animation on name
      gsap.to(nameref.current, {
        backgroundPosition: "200% center",
        duration: 3,
        repeat: -1,
        ease: "none",
      });

      // Calculate responsive animation distance for horizontal text
      // const getTranslateDistance = () => {
      //   const width = window.innerWidth;
      //   if (width < 640) return "-120vw";
      //   if (width < 768) return "-120vw";
      //   return "-80vw";
      // };

      // Horizontal scrolling text animation - smooth continuous scroll
      // Start from right side of screen, scroll all the way to left
      gsap.fromTo(
        text.current,
        {
          x: "140vw", // Start off-screen right
          opacity: 1,
        },
        {
          // x: getTranslateDistance(), // End off-screen left
          x:"-140vw",
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: textanimationRef.current,
            start: "top 10%",
            end: "bottom 60%",
            scrub: 4,
            pin: true,
            // markers: true,
          },
        }
      );

      // Hero section scroll fade
      gsap.to(textRef.current, {
        opacity: 0,
        y: -100,
        scale: 0.9,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="wrapper relative min-h-screen text-[RGB(27, 27, 31)] flex flex-col justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 opacity-50" />
      
      {/* Glowing orbs for ambient effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Hero Section */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center text-amber-100 text-center px-4 sm:px-6 mt-22"
      >
        <div
          ref={helloTextRef}
          className="font-medium text-4xl sm:text-6xl md:text-7xl lg:text-9xl mb-2 tracking-wide"
        >
          Hello, I&apos;m
        </div>
         <div
          ref={textRef}
          className="font-black text-orange-300 font-rubikWetPaint text-5xl sm:text-6xl md:text-7xl lg:text-9xl lg:mt-8  tracking-wide whitespace-nowrap"
        >
          Saqib Burki
        </div>
      </div>

      {/* Horizontal Scrolling Text Section */}
      <div
        ref={textanimationRef}
        className=" flex items-center justify-start overflow-hidden"
      >
        <div
          ref={text}
          className="text-orange-300 z-40 mt-20 md:mt-0 lg:mt-0 text-[15vw] xs:text-[15vw] sm:text-[15vw] md:text-[15vw] lg:text-[15vw] xl:text-[18vw] font-extrabold tracking-tight uppercase whitespace-nowrap will-change-transform transform translate-x-[120vw] sm:translate-x-[120vw] md:translate-x-[90vw] drop-shadow-[0_0_30px_rgba(251,146,60,0.5)]"
        >
          Creative Web Developer
        </div>
      </div>
    </div>
  );
}
