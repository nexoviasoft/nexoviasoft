"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import {
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Globe,
  Mail,
  MapPin
} from "lucide-react";

/**
 * Premium "Glass" Footer V2
 * Features:
 * - Bento-grid layout with glassmorphism
 * - Atmospheric cosmic glows
 * - Massive masked background text
 * - "Start Project" CTA
 * - Magnetic interactions
 */

const SocialLink = ({ href, icon: Icon, label }) => {
    return (
        <motion.a 
            href={href}
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-[#EFFC76] hover:bg-[#EFFC76]/10 hover:border-[#EFFC76]/30 transition-all duration-300 group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[#EFFC76]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Icon size={20} className="relative z-10" />
            <span className="sr-only">{label}</span>
        </motion.a>
    );
};

const FooterLink = ({ href, children }) => (
    <Link href={href} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-1">
        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#EFFC76]" />
        <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
    </Link>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer ref={containerRef} className="relative bg-[#050505] pt-24 pb-8 overflow-hidden">
        
      {/* 1. Atmospheric Glows & Background */}
      <div className="absolute inset-0 pointer-events-none select-none">
         <div className="absolute bottom-0 left-0 w-full h-[800px] bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"/>

         {/* Moving Orbs */}
         <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#EFFC76]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" 
         />
         <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" 
         />

          {/* Massive Text Mark */}
          <motion.div style={{ y, opacity }} className="absolute bottom-10 left-0 w-full z-0 pointer-events-none">
             <h1 className="text-[18vw] font-bold text-center leading-none text-white/[0.02] tracking-tighter mix-blend-overlay">
                SQUADLOG
             </h1>
          </motion.div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* 2. Top CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
            <div className="text-center md:text-left">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-medium text-white mb-4"
                >
                    Ready to scale?
                </motion.h2>
                <p className="text-gray-400 text-lg max-w-md">Let&apos;s build something extraordinary together.</p>
            </div>
            
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-[#EFFC76] rounded-full overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2 text-black font-semibold text-lg">
                    Start a Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
            </motion.button>
        </div>


        {/* 3. Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-24">
            
            {/* Card 1: Brand Info (Span 4) */}
            <div className="lg:col-span-5 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-between h-full min-h-[300px]">
                <div>
                     <Link href="/" className="inline-block mb-6">
                        <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                            <div className="w-10 h-10 bg-[#EFFC76] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(239,252,118,0.3)]">
                                <span className="text-black text-xl font-bold">S</span>
                            </div>
                            SquadLog.
                        </span>
                    </Link>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        We are a digital product agency that builds ambitious products for ambitious brands. From strategy to design and development.
                    </p>
                </div>
                
                <div className="flex gap-4">
                    <SocialLink href="#" icon={Twitter} label="Twitter" />
                    <SocialLink href="#" icon={Instagram} label="Instagram" />
                    <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
                    <SocialLink href="#" icon={Youtube} label="YouTube" />
                </div>
            </div>

            {/* Card 2: Combined Navigation (Span 4) */}
            <div className="lg:col-span-4 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-3xl p-8">
                 <div className="grid grid-cols-2 gap-8 h-full">
                    {/* Company */}
                    <div>
                        <h4 className="text-white font-medium mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EFFC76]" /> Company
                        </h4>
                        <div className="flex flex-col gap-3">
                            {['About', 'Work', 'Services', 'Agency', 'Contact'].map(item => (
                                <FooterLink key={item} href="#">{item}</FooterLink>
                            ))}
                        </div>
                    </div>

                     {/* Services */}
                     <div>
                        <h4 className="text-white font-medium mb-6 flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Services
                        </h4>
                        <div className="flex flex-col gap-3">
                            {['Web Dev', 'Mobile', 'SaaS', 'Design', 'Marketing'].map(item => (
                                <FooterLink key={item} href="#">{item}</FooterLink>
                            ))}
                        </div>
                    </div>
                 </div>
            </div>

            {/* Card 3: Newsletter (Span 3) */}
            <div className="lg:col-span-3 bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[#EFFC76]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 <div className="relative z-10">
                    <h4 className="text-xl font-medium text-white mb-2">Subscribe</h4>
                    <p className="text-gray-400 text-sm mb-6">Latest news and articles sent to your inbox.</p>
                    
                    <div className="space-y-4">
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#EFFC76]/50 transition-colors"
                        />
                        <button className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-[#EFFC76] transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                 </div>
            </div>
        </div>


        {/* 4. Bottom Info */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-sm text-gray-500">
                <span>&copy; {currentYear} SquadLog Inc.</span>
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
             </div>

             <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#EFFC76]" />
                    <span className="text-sm text-gray-400">New York, NY</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail size={14} className="text-[#EFFC76]" />
                     <span className="text-sm text-gray-400">hello@squadlog.com</span>
                </div>
             </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
