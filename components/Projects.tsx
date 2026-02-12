"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Project cards with stagger and 3D effects
      projectCardsRef.current.forEach((card, index) => {
        if (card) {
          // Card reveal animation
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              scrub: 1,
            },
            opacity: 0,
            y: 100,
            rotationY: index % 2 === 0 ? -15 : 15,
            scale: 0.8,
            duration: 1.5,
            immediateRender: false,
          });

          // Parallax effect on image
          const imageWrapper = card.querySelector(".project-image-wrapper");
          if (imageWrapper) {
            gsap.to(imageWrapper, {
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
              y: -20,
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      image: "/Screenshot From 2025-12-04 21-58-34.png",
      text: "fsociety",
      description:
        "A blog website where I share paid courses links and giveaways with a vibrant community",
      link: "https://github.com/username/project1",
      tags: ["Next.js", "React", "Tailwind"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      image: "/Screenshot From 2025-12-04 21-58-34.png",
      text: "Lillith",
      description:
        "An AI chatbot that can answer your questions and get realtime weather updates with advanced NLP",
      link: "https://github.com/username/project1",
      tags: ["AI", "Node.js", "API"],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 perspective-1000"
          >
            <span className="inline-block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Featured{" "}
              <span className="inline-flex items-center gap-2">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-amber-400 animate-pulse" />
                Projects
              </span>
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Explore my latest work showcasing cutting-edge web technologies and
            creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                projectCardsRef.current[index] = el;
              }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-6 sm:p-8 md:p-10">
                  {/* Left: Image Section */}
                  <div className="relative order-2 lg:order-1">
                    <div className="project-image-wrapper relative aspect-video rounded-2xl overflow-hidden bg-slate-950/50 border border-white/5 group-hover:border-white/20 transition-all duration-500">
                      {/* Image glow effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}
                      ></div>

                      <Image
                        src={project.image}
                        alt={project.text}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs sm:text-sm font-semibold rounded-full bg-slate-800/50 border border-white/10 text-gray-300 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Content Section */}
                  <div className="flex flex-col justify-center order-1 lg:order-2 space-y-4 sm:space-y-6">
                    {/* Project Number */}
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-6xl sm:text-7xl md:text-8xl font-black bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent opacity-30`}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                      {project.text}
                    </h3>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-bold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 flex items-center gap-2`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          View Project
                          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                      </Link>

                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-slate-800/50 border border-white/10 hover:border-white/30 text-white font-bold text-sm sm:text-base backdrop-blur-sm transition-all duration-300 hover:bg-slate-700/50 flex items-center gap-2"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        Source Code
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
