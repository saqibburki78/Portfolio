"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  User,
  MapPin,
  Briefcase,
  Code,
  Search,
  Wrench,
  Sparkles,
  Brain,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Image parallax effect
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          y: -20,
        });

        // Image scale on scroll
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            end: "top 20%",
            scrub: 1,
          },
          scale: 0.8,
          opacity: 0,
          duration: 1,
          immediateRender: false,
        });
      }

      // Name reveal
      if (nameRef.current) {
        gsap.from(nameRef.current, {
          scrollTrigger: {
            trigger: nameRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
          opacity: 0,
          x: -100,
          duration: 1,
          immediateRender: false,
        });
      }

      // Info badges stagger
      if (infoRef.current) {
        const badges = infoRef.current.querySelectorAll(".info-badge");
        gsap.from(badges, {
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 1,
          immediateRender: false,
        });
      }

      // Bio fade in
      if (bioRef.current) {
        gsap.from(bioRef.current, {
          scrollTrigger: {
            trigger: bioRef.current,
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

      // Service cards with 3D rotation
      serviceCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
              scrub: 1,
            },
            opacity: 0,
            y: 80,
            rotationY: index % 2 === 0 ? -15 : 15,
            scale: 0.8,
            duration: 1,
            immediateRender: false,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Code,
      title: "Development",
      description:
        "Building scalable and performant web applications using the MERN stack and Next.js.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Optimizing websites for search engines to improve visibility and ranking.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description:
        "Regular updates and maintenance to keep websites running smoothly.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description:
        "Integrating AI-powered features to enhance user experience and automate processes.",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section
      id="about-me"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto max-w-7xl">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-16 md:mb-24 perspective-1000"
        >
          <span className="inline-block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            About{" "}
            <span className="inline-flex items-center gap-2">
              <User className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-amber-400 animate-pulse" />
              Me
            </span>
          </span>
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Left: Image Section */}
          <div ref={imageRef} className="relative order-2 lg:order-1">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,158,11,0.4)]">
              {/* Gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/10 opacity-50 blur-2xl"></div>

              <Image
                loading="eager"
                priority
                src="/croped-removebg-preview.png"
                alt="Saqib Khan"
                fill
                className="object-contain p-4 relative z-10"
              />

              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-tr-full"></div>
            </div>
          </div>

          {/* Right: Info Section */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Name */}
            <h1
              ref={nameRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
            >
              Saqib Khan
            </h1>

            {/* Info Badges */}
            <div ref={infoRef} className="flex flex-wrap gap-3">
              <div className="info-badge group relative px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <div className="flex items-center gap-2 text-cyan-300">
                  <User className="w-4 h-4" />
                  <span className="font-semibold">18 years</span>
                </div>
              </div>

              <div className="info-badge group relative px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/10 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <div className="flex items-center gap-2 text-purple-300">
                  <MapPin className="w-4 h-4" />
                  <span className="font-semibold">Pakistan</span>
                </div>
              </div>

              <div className="info-badge group relative px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-500/30 backdrop-blur-sm hover:border-amber-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                <div className="flex items-center gap-2 text-amber-300">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-semibold">Freelancer</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p
              ref={bioRef}
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              Hello! I'm Saqib, a Full Stack Developer who speaks fluent
              JavaScript (and English, Urdu, Hindi, and Pashto!). For over 3
              years, I've been building robust applications with the MERN stack
              and Next.js, fueled by a passion for creating meaningful digital
              experiences. I don't just write code; I craft eye-catching,
              GSAP-powered interfaces that dance on the screen. If you're
              looking for someone to build something extraordinary—and have a
              laugh while doing it—let's team up and make some magic happen!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-cyan-500/20">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-semibold mt-1">
                  Years Exp
                </div>
              </div>

              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-purple-500/20">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-semibold mt-1">
                  Projects
                </div>
              </div>

              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-amber-500/20">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  4
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-semibold mt-1">
                  Languages
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-8">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-amber-400" />
            My Services
            <Sparkles className="w-8 h-8 text-amber-400" />
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    serviceCardsRef.current[index] = el;
                  }}
                  className="group relative"
                >
                  <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:scale-105 hover:-translate-y-2">
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                    ></div>

                    {/* Icon */}
                    <div className="relative mb-4">
                      <div
                        className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-20 border border-white/10 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
