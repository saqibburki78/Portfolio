"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Sparkles, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const skillCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with 3D rotation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          opacity: 0,
          y: -100,
          rotationX: -90,
          transformOrigin: "center bottom",
          duration: 1.5,
          immediateRender: false,
        });
      }

      // Subtitle fade in
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
          opacity: 0,
          y: 50,
          duration: 1,
          immediateRender: false,
        });
      }

      // Skill cards with wave-like stagger animation
      skillCardsRef.current.forEach((card, index) => {
        if (card) {
          // Card reveal with 3D rotation
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
              scrub: 1,
            },
            opacity: 0,
            y: 100,
            rotationY: index % 2 === 0 ? -20 : 20,
            scale: 0.7,
            duration: 1,
            immediateRender: false,
          });

          // Floating animation on icon
          const icon = card.querySelector(".skill-icon");
          if (icon) {
            gsap.to(icon, {
              y: -10,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: index * 0.1,
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    // Frontend Framework
    {
      src: "/icons8-nextjs.svg",
      name: "Next.js",
      category: "Framework",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      src: "/react.svg",
      name: "React",
      category: "Library",
      gradient: "from-blue-500 to-cyan-400",
    },

    // Backend (MERN Stack)
    {
      src: "/MongoDB.svg",
      name: "MongoDB",
      category: "Database",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      src: "/Express.svg",
      name: "Express",
      category: "Backend",
      gradient: "from-gray-500 to-slate-500",
    },
    {
      src: "/Node.js.svg",
      name: "Node.js",
      category: "Runtime",
      gradient: "from-green-600 to-lime-500",
    },

    // Core Web Technologies
    {
      src: "/HTML5.svg",
      name: "HTML5",
      category: "Markup",
      gradient: "from-orange-500 to-red-500",
    },
    {
      src: "/CSS3.svg",
      name: "CSS3",
      category: "Styling",
      gradient: "from-blue-500 to-indigo-500",
    },

    // Styling & Animation
    {
      src: "/Tailwind CSS.svg",
      name: "Tailwind CSS",
      category: "Framework",
      gradient: "from-cyan-400 to-teal-500",
    },
    {
      src: "/gsap.svg",
      name: "GSAP",
      category: "Animation",
      gradient: "from-green-500 to-lime-400",
    },

    // Programming Languages
    {
      src: "/JavaScript.svg",
      name: "JavaScript",
      category: "Language",
      gradient: "from-yellow-400 to-amber-500",
    },
    {
      src: "/TypeScript.svg",
      name: "TypeScript",
      category: "Language",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      src: "/Vercel.svg",
      name: "Vercel",
      category: "Deployment",
      gradient: "from-gray-800 to-slate-700",
    },
    {
      src: "/Git.svg",
      name: "Git",
      category: "Version Control",
      gradient: "from-orange-600 to-red-600",
    },
    {
      src: "/GitHub.svg",
      name: "GitHub",
      category: "Version Control",
      gradient: "from-gray-700 to-slate-800",
    },
    {
      src: "/langchain.svg",
      name: "LangChain",
      category: "AI",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      src: "/openai.svg",
      name: "OpenAI",
      category: "AI",
      gradient: "from-blue-600 to-blue-400",
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 perspective-1000"
          >
            <span className="inline-block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Tech{" "}
              <span className="inline-flex items-center gap-2">
                <Code2 className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-amber-400 animate-pulse" />
                Stack
              </span>
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5 text-amber-400" />
            Technologies I use to build robust, scalable, and beautiful web
            applications
            <Sparkles className="w-5 h-5 text-amber-400" />
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => {
                skillCardsRef.current[index] = el;
              }}
              className="group relative"
            >
              {/* Skill Card */}
              <div className="relative h-full p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:scale-105 hover:-translate-y-2">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon Container with floating animation */}
                <div className="skill-icon relative flex justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 rounded-full`}
                  ></div>
                  <Image
                    width={60}
                    height={60}
                    src={skill.src}
                    alt={skill.name}
                    className={`relative z-10 transition-all duration-500 ${
                      skill.src === "/GitHub.svg" ? "invert" : ""
                    }`}
                  />
                </div>

                {/* Tech Name */}
                <h3 className="text-center text-sm sm:text-base md:text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                  {skill.name}
                </h3>

                {/* Category Badge */}
                <div className="flex justify-center">
                  <span
                    className={`px-2 sm:px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${skill.gradient} bg-opacity-20 border border-white/10 text-gray-300 backdrop-blur-sm`}
                  >
                    {skill.category}
                  </span>
                </div>

                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 md:mt-32 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          <div className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              {skills.length}+
            </div>
            <div className="text-sm sm:text-base text-gray-400 font-semibold">
              Technologies Mastered
            </div>
          </div>

          <div className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              3+
            </div>
            <div className="text-sm sm:text-base text-gray-400 font-semibold">
              Years of Experience
            </div>
          </div>

          <div className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-amber-500/20 hover:border-amber-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-sm sm:text-base text-gray-400 font-semibold">
              Commitment to Quality
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
