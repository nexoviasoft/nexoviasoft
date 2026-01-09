"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import SmoothButton from "@/Share/SmoothButton";

const testimonials = [
  {
    name: "Michael Chen",
    role: "CTO",
    company: "FinTech Innovations",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    text: "SquadLog transformed our legacy infrastructure into a scalable cloud-native system. Their expertise in AWS and DevOps is unmatched.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Founder",
    company: "EcoStyle E-commerce",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    text: "The custom Shopify solution they built increased our conversion rates by 40%. The UI/UX design is beautiful and highly functional.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    role: "Product Manager",
    company: "HealthPlus App",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    text: "We needed a complex mobile app for patient monitoring. SquadLog delivered a secure, HIPAA-compliant app ahead of schedule.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Marketing Director",
    company: "GrowthGuru",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    text: "Their digital marketing strategy was a game-changer. We saw a significant ROI within the first three months of engagement.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "CEO",
    company: "LogisticsPro",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    text: "The custom ERP software SquadLog developed has streamlined our entire supply chain. Their understanding of business logic is impressive.",
    rating: 5,
  },
  {
    name: "Lisa Wong",
    role: "Creative Director",
    company: "Artistry Studios",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    text: "As a design agency, we have high standards. SquadLog's frontend development brought our designs to life with pixel-perfect precision.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="bg-transparent py-20 px-4 md:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#EFFC76]/30 bg-[#EFFC76]/10 mb-6"
                    >
                        <div className="w-5 h-5 rounded-full bg-[#EFFC76] flex items-center justify-center mr-2">
                            <MessageSquare size={12} className="text-black" fill="currentColor" />
                        </div>
                        <span className="text-gray-300 text-sm font-medium">Testimonial</span>
                    </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium text-white mb-4 tracking-tight"
          >
            What Our Clients Say
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-medium text-gray-500 mb-6 tracking-tight"
          >
            About SquadLog's Excellence
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Discover how we've empowered businesses to achieve their digital goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <SmoothButton>Book An Appointment </SmoothButton>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} delay={0.2 + index * 0.1} />
          ))}
        </div>

        {/* Footer Logos Placeholder (as per design) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-8 mt-20 opacity-30 grayscale"
        >
          {/* Replace with actual logo SVGs if available, otherwise placeholders */}
          <div className="h-8 w-20 bg-white/20 rounded"></div>
          <div className="h-8 w-20 bg-white/20 rounded"></div>
          <div className="h-8 w-20 bg-white/20 rounded"></div>
          <div className="h-8 w-20 bg-white/20 rounded"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
