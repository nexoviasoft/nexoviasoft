"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
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
  MapPin,
} from "lucide-react";

/**
 * Premium "Glass" Footer V3 - Enhanced with Animations
 * Features:
 * - Bento-grid layout with glassmorphism
 * - Atmospheric cosmic glows with animations
 * - Massive masked background text with parallax
 * - Animated "Start Project" CTA
 * - Magnetic interactions
 * - Staggered reveals
 * - Smooth micro-interactions
 */

const SocialLink = ({ href, icon: Icon, label, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-[#EFFC76] hover:bg-[#EFFC76]/10 hover:border-[#EFFC76]/30 transition-all duration-300 group relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-[#EFFC76]/20 blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <Icon size={20} className="relative z-10" />
      <span className="sr-only">{label}</span>

      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm pointer-events-none"
      >
        {label}
      </motion.span>
    </motion.a>
  );
};

const FooterLink = ({ href, children, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    viewport={{ once: true }}
  >
    <Link
      href={href}
      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-1"
    >
      <motion.div
        initial={{ opacity: 0, x: -5 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowUpRight size={14} className="text-[#EFFC76]" />
      </motion.div>
      <motion.span
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {children}
      </motion.span>
    </Link>
  </motion.div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer
      ref={containerRef}
      className="relative bg-[#050505] pt-24 pb-8 overflow-hidden"
    >
      {/* 1. Atmospheric Glows & Background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute bottom-0 left-0 w-full h-[800px] bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />

        {/* Moving Orbs with enhanced animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#EFFC76]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"
        />

        {/* Massive Text Mark with parallax */}
        <motion.div
          style={{ y: smoothY, opacity }}
          className="absolute bottom-10 left-0 w-full z-0 pointer-events-none"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.02 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[18vw] font-bold text-center leading-none text-white tracking-tighter mix-blend-overlay"
          >
            SQUADLOG
          </motion.h1>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 2. Top CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20"
        >
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-medium text-white mb-4"
            >
              Ready to scale?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg max-w-md"
            >
              Let&apos;s build something extraordinary together.
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-2.5 bg-[#EFFC76] rounded-full overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center gap-2 text-black font-semibold text-lg">
              Start a Project
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>

        {/* 3. Main Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-24"
        >
          {/* Card 1: Brand Info (Span 4) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="lg:col-span-5 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-between h-full min-h-[300px] relative overflow-hidden group"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-[#EFFC76]/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Link href="/" className="inline-block mb-6">
                  <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 bg-[#EFFC76] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(239,252,118,0.3)]"
                    >
                      <span className="text-black text-xl font-bold">S</span>
                    </motion.div>
                    SquadLog.
                  </span>
                </Link>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 leading-relaxed mb-8"
              >
                We are a digital product agency that builds ambitious products
                for ambitious brands. From strategy to design and development.
              </motion.p>
            </div>

            <div className="flex gap-4 relative z-10">
              {[
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
              ].map((social, index) => (
                <SocialLink key={social.label} {...social} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Card 2: Combined Navigation (Span 4) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="lg:col-span-4 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden group"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="grid grid-cols-2 gap-8 h-full relative z-10">
              {/* Company */}
              <div>
                <motion.h4
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white font-medium mb-6 flex items-center gap-2"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-[#EFFC76]"
                  />
                  Company
                </motion.h4>
                <div className="flex flex-col gap-3">
                  {["About", "Work", "Services", "Agency", "Contact"].map(
                    (item, index) => (
                      <FooterLink key={item} href="#" index={index}>
                        {item}
                      </FooterLink>
                    )
                  )}
                </div>
              </div>

              {/* Services */}
              <div>
                <motion.h4
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white font-medium mb-6 flex items-center gap-2"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-500"
                  />
                  Services
                </motion.h4>
                <div className="flex flex-col gap-3">
                  {["Web Dev", "Mobile", "SaaS", "Design", "Marketing"].map(
                    (item, index) => (
                      <FooterLink key={item} href="#" index={index}>
                        {item}
                      </FooterLink>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Newsletter (Span 3) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="lg:col-span-3 bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-[#EFFC76]/5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-12 h-12 bg-[#EFFC76]/10 rounded-xl flex items-center justify-center mb-4"
                >
                  <Mail className="text-[#EFFC76]" size={24} />
                </motion.div>
              </motion.div>

              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl font-medium text-white mb-2"
              >
                Subscribe
              </motion.h4>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-sm mb-6"
              >
                Latest news and articles sent to your inbox.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#EFFC76]/50 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-[#EFFC76] transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* 4. Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-sm text-gray-500">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              &copy; {currentYear} SquadLog Inc.
            </motion.span>
            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </motion.div>
              )
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <MapPin size={14} className="text-[#EFFC76]" />
              <span className="text-sm text-gray-400">New York, NY</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Mail size={14} className="text-[#EFFC76]" />
              <span className="text-sm text-gray-400">hello@squadlog.com</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
