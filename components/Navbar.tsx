"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HireMe } from "./Hire-me";

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleHireMe = () => setIsHireMeOpen(!isHireMeOpen);

  useGSAP(
    () => {
      // Initial Animation
      gsap.from(containerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Scroll Show/Hide Animation
      const showAnim = gsap
        .from(containerRef.current, {
          yPercent: -130,
          paused: true,
          duration: 0.4,
          ease: "power3.out",
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          // If scrolling down and past a threshold, hide
          if (self.direction === 1 && self.progress > 0.01) {
            showAnim.reverse();
          }
          // If scrolling up, show
          else if (self.direction === -1) {
            showAnim.play();
          }
        },
      });
    },
    { scope: navRef }
  );

  return (
    <>
    <div
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 md:pt-6 pointer-events-none"
    >
      <nav
        ref={containerRef}
        className={`pointer-events-auto relative w-[95%] md:w-[85%] lg:w-[70%] max-w-5xl rounded-3xl 
          bg-white/50 dark:bg-black/50 backdrop-blur-3xl border border-white/20 dark:border-white/10 
          shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden`}
        style={{ height: isMenuOpen ? "auto" : "60px" }} // Dynamic height for smooth expansion
      >
        {/* Inner Glow */}
        <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none" />

        <div className="relative flex items-center justify-between px-5 py-3 md:px-8 md:py-4 h-[60px]">
          {/* Logo */}
          <div className="relative group cursor-pointer z-40">
            <Link href="/" className="block">
              <span className="text-xl md:text-3xl font-black tracking-tighter text-gray-800 dark:text-white transition-colors duration-300">
                SK<span className="text-blue-500">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-8 font-medium items-center">
            {["About Me", "skills", "Projects", "Contact"].map((item) => (
              <li key={item} className="relative group">
                <button
                  onClick={() => {
                    const sectionId = item.toLowerCase().replace(" ", "-");
                    const element = document.getElementById(sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="cursor-pointer"
                >
                  <span className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 text-sm tracking-wide uppercase">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Hire Me Button */}
          <div className="hidden lg:block">
            <button 
              onClick={toggleHireMe}
              className="relative overflow-hidden rounded-full bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300 active:scale-95 shadow-lg cursor-pointer"
            >
              <span className="relative z-10">Hire Me</span>
            </button>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer z-50 group"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown - Attached to the floating island */}
        <div
          className={`lg:hidden flex flex-col px-6 pb-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="w-full h-px bg-gray-200/20 dark:bg-gray-700/20 mb-6" />{" "}
          {/* Separator */}
          <div className="flex flex-col gap-5 items-center">
            {["About Me", "skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const sectionId = item.toLowerCase().replace(" ", "-");
                  const element = document.getElementById(sectionId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                  setIsMenuOpen(false);
                }}
                className="text-xl font-medium text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={toggleHireMe}
              className="mt-4 w-full rounded-2xl bg-black dark:bg-white text-white dark:text-black py-4 text-base font-bold uppercase tracking-wider shadow-lg active:scale-95 transition-transform cursor-pointer"
            >
              Hire Me
            </button>
          </div>
        </div>
      </nav>
    </div>
    
    {/* Hire Me Modal */}
    <HireMe isOpen={isHireMeOpen} onClose={() => setIsHireMeOpen(false)} />
    </>
  );
};
