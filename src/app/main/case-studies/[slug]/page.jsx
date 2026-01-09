"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { caseStudiesData } from "@/constants/caseStudies";
import CosmicBackground from "@/components/Home/CosmicBackground";
import { motion } from "framer-motion";
import Link from "next/link";
import SmoothButton from "@/Share/SmoothButton";
import { ArrowLeft, ExternalLink, CheckCircle, Layers, Cpu, Trophy } from "lucide-react";
import Image from "next/image";

const CaseStudyDetail = () => {
  const params = useParams();
  const slug = params.slug;
  const project = caseStudiesData.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <CosmicBackground />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/main/case-studies"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </Link>

        {/* Hero Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-[#EFFC76]">
                {project.client}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
                {project.year}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <SmoothButton className="flex items-center gap-2">
                  Visit Live Site <ExternalLink size={16} />
                </SmoothButton>
              </a>
            )}
          </motion.div>
        </div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-20 border border-white/10"
        >
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <div className="w-12 h-12 rounded-full bg-[#EFFC76]/20 flex items-center justify-center mb-6">
              <Layers className="text-[#EFFC76]" size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-400 leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <div className="w-12 h-12 rounded-full bg-[#EFFC76]/20 flex items-center justify-center mb-6">
              <Cpu className="text-[#EFFC76]" size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-gray-400 leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>

        {/* Results Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 flex flex-col items-center text-center"
              >
                <Trophy className="text-[#EFFC76] mb-4" size={24} />
                <span className="text-lg font-medium text-gray-200">{result}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second Image */}
        {project.images[1] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10"
          >
            <Image
              src={project.images[1]}
              alt={`${project.title} secondary`}
              fill
              className="object-cover"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyDetail;
