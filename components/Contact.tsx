"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Send, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation with split text effect
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
          opacity: 0,
          y: 100,
          scale: 0.8,
          duration: 1,
          immediateRender: false,
        });
      }

      // Description fade in
      if (descRef.current) {
        gsap.from(descRef.current, {
          scrollTrigger: {
            trigger: descRef.current,
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

      // Contact info cards stagger
      if (contactInfoRef.current) {
        const cards = contactInfoRef.current.querySelectorAll(".contact-card");
        gsap.from(cards, {
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
          opacity: 0,
          x: -100,
          stagger: 0.2,
          duration: 1,
          immediateRender: false,
        });
      }

      // Form animation
      if (formRef.current) {
        const formElements = formRef.current.querySelectorAll(
          "input, textarea, button"
        );
        gsap.from(formElements, {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
          opacity: 0,
          y: 50,
          stagger: 0.1,
          duration: 1,
          immediateRender: false,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden "
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Got A{" "}
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-400 animate-spin-slow" />
            Project
          </span>{" "}
          or Partnership in Mind?
        </h2>

        {/* Description */}
        <p
          ref={descRef}
          className="text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed"
        >
          Let's collaborate and bring your vision to life. Whether it's a
          cutting-edge web application, a dynamic portfolio, or an innovative
          digital solution, I'm here to help transform your ideas into reality
          with modern technologies and creative excellence.
        </p>

        {/* Contact Info and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-6">
            {/* Phone Card */}
            <div className="contact-card group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 group-hover:from-cyan-500/30 group-hover:to-cyan-600/20 transition-all duration-300">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-cyan-300 mb-1">
                    Phone
                  </label>
                  <a
                    href="tel:+923419494572"
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    +92 341 9494572
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-card group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 group-hover:from-purple-500/30 group-hover:to-purple-600/20 transition-all duration-300">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-purple-300 mb-1">
                    Email
                  </label>
                  <a
                    href="mailto:saqibburki45@gmail.com"
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-purple-400 transition-colors break-all"
                  >
                    saqibburki45@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
            <form
              action="https://formsubmit.co/saqibburki45@gmail.com" method="POST"
              ref={formRef}
              className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-6"
            >
              {/* Name Input */}
              <div className="group">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="w-full px-6 py-4 rounded-xl bg-slate-950/50 border border-slate-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-slate-600"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="w-full px-6 py-4 rounded-xl bg-slate-950/50 border border-slate-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 group-hover:border-slate-600"
                  required
                />
              </div>

              {/* Subject Input */}
              <div className="group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-6 py-4 rounded-xl bg-slate-950/50 border border-slate-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/50 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 group-hover:border-slate-600"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl bg-slate-950/50 border border-slate-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none group-hover:border-slate-600"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full px-8 py-4 sm:mb-56 lg:mb-0 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
