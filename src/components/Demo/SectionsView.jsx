"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SectionsView = () => {
  const features = [
    {
      title: "Unified Metrics",
      description:
        "See your MRR and active users in one clean, unified view — no more switching tabs.",
      image: "/cover1.jpg",
      alt: "Unified Metrics Dashboard",
    },
    {
      title: "AI Growth Insights",
      description:
        "Actionable suggestions from your data, without digging into spreadsheets or dashboards.",
      image: "/cover2.jpg",
      alt: "AI Insights",
    },
    {
      title: "Product Usage Tracking",
      description:
        "Track how users engage with your app live to uncover patterns and optimize features.",
      image: "/cover3.jpg",
      alt: "Integration List",
    },
    {
      title: "Feature Impact Analysis",
      description:
        "Know exactly which features drive long-term retention—and which ones don't contribute.",
      image: "/bigbanner.jpg",
      alt: "Feature Impact Graph",
    },
  ];

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 font-medium text-sm mb-6">
            Unique Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Make Your Platform <br /> Work Harder For You
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Streamline your business with unified metrics and AI-powered
            analytics—all in one place.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative p-6 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-[#EFFC76]/50 transition-all duration-300 hover:bg-neutral-900/80 cursor-pointer"
            >
              {/* Hover Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#EFFC76]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Image Container */}
                <div className=" rounded-[24px]  mb-6 h-[300px] md:h-[400px] relative overflow-hidden  flex items-center justify-center   group-hover:border-[#EFFC76]/20 transition-all duration-300">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-contain rounded-2xl p-6 md:p-8 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="px-2">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#EFFC76] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionsView;
