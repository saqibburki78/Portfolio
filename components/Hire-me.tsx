"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { X, Mail, Github, Linkedin, MessageSquare, Send, Sparkles } from "lucide-react";

interface HireMeProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMe: React.FC<HireMeProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";

      const ctx = gsap.context(() => {
        // Overlay fade in
        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });

        // Content pop in
        gsap.fromTo(
          contentRef.current,
          {
            scale: 0.8,
            opacity: 0,
            y: 40,
            rotateX: -15,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: 0.1,
          }
        );

        // Stagger items
        gsap.from(".stagger-item", {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.3,
        });
      });

      return () => {
        ctx.revert();
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 md:p-6 md:items-center pointer-events-auto overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        ref={contentRef}
        className="relative w-full max-w-2xl bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)] opacity-0"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors z-10"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="p-6 md:p-10 space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="stagger-item text-3xl md:text-5xl font-black tracking-tighter text-white flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
              Let's Build Something Great
            </h2>
            <p className="stagger-item text-gray-400 text-lg">
              I'm currently available for freelance work and full-time opportunities.
            </p>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/saqibburki45@gmail.com"
            method="POST"
            className="space-y-4"
          >
            {/* Hidden FormSubmit Configurations */}
            <input type="hidden" name="_subject" value="New Hire Me Inquiry!" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="stagger-item group">
              <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300"
              />
            </div>

            <div className="stagger-item group">
              <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300"
              />
            </div>

            <div className="stagger-item group">
              <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
                rows={4}
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 resize-none"
              />
            </div>

            {/* Action Button */}
            <div className="stagger-item pt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};