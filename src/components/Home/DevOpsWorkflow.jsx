"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GitBranch, 
  Code2, 
  Rocket, 
  ShieldCheck, 
  Activity, 
  Terminal 
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 0.5,
    transition: { duration: 1.5, ease: "easeInOut", delay: 1 } // Delay to draw lines after cards appear
  },
};

const WorkflowCard = ({ icon: Icon, title, subtitle, className }) => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ scale: 1.05, borderColor: "#EFFC76" }}
    className={`bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl relative z-10 hover:shadow-[0_0_20px_rgba(239,252,118,0.15)] transition-colors duration-300 ${className}`}
  >
    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-[#EFFC76]">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{subtitle}</p>
  </motion.div>
);

const DevOpsWorkflow = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full border border-[#EFFC76]/30 bg-[#EFFC76]/10 text-[#EFFC76] text-xs font-bold tracking-widest uppercase mb-6"
          >
            Smarter Workflow
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Smarter Dev, <span className="text-[#EFFC76] italic">Supercharged By DevOps</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            From code to cloud, we optimize every step of your software lifecycle for speed, security, and scalability.
          </motion.p>
        </div>

        {/* Diagram Container */}
        <div className="relative flex justify-center items-center min-h-[600px] md:min-h-[800px]">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full h-full flex flex-col md:block" // Stack on mobile
          >
            {/* Central Hub */}
            <div className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 mb-12 md:mb-0 flex justify-center">
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-[#EFFC76] to-[#dce867] flex items-center justify-center shadow-[0_0_40px_rgba(239,252,118,0.4)] relative"
              >
                 {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full bg-[#EFFC76] animate-ping opacity-20"></div>
                
                <Code2 size={40} className="text-black" />
              </motion.div>
            </div>

            {/* Connecting Lines (Desktop Only) */}
            <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
               {/* Simplified Hub Connections */}
               {/* Top Left */}
               <motion.path variants={lineVariants} d="M50% 50% L20% 20%" stroke="#EFFC76" strokeWidth="1" fill="transparent" />
               {/* Top Center */}
               <motion.path variants={lineVariants} d="M50% 50% L50% 15%" stroke="#EFFC76" strokeWidth="1" fill="transparent" />
               {/* Top Right */}
               <motion.path variants={lineVariants} d="M50% 50% L80% 20%" stroke="#EFFC76" strokeWidth="1" fill="transparent" />
               {/* Bottom Left */}
               <motion.path variants={lineVariants} d="M50% 50% L20% 80%" stroke="#EFFC76" strokeWidth="1" fill="transparent" />
               {/* Bottom Center */}
               <motion.path variants={lineVariants} d="M50% 50% L50% 85%" stroke="#EFFC76" strokeWidth="1" fill="transparent" />
               {/* Bottom Right */}
               <motion.path variants={lineVariants} d="M50% 50% L80% 80%" stroke="#EFFC76" strokeWidth="1" fill="transparent" />
            </svg>

            {/* Cards Grid/Absolute Layout */}
            
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:absolute top-0 w-full">
               <WorkflowCard 
                  icon={GitBranch} 
                  title="Strategy & Planning" 
                  subtitle="Blueprint your success with data-driven roadmaps and agile methodologies." 
                  className="md:mx-auto md:w-80" 
               />
               <WorkflowCard 
                  icon={Terminal} 
                  title="Development" 
                  subtitle="Write clean, scalable code tailored to your business needs." 
                  className="md:mx-auto md:w-80"
               />
               <WorkflowCard 
                  icon={Rocket} 
                  title="CI/CD Automation" 
                  subtitle="Ship features faster with automated testing and deployment pipelines." 
                  className="md:mx-auto md:w-80"
               />
            </div>

             {/* Bottom Row - Positioned absolutely at bottom for desktop */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:absolute bottom-0 w-full mt-6 md:mt-0">
               <WorkflowCard 
                  icon={Activity} 
                  title="Monitoring" 
                  subtitle="Gain real-time insights into system health and user behavior." 
                  className="md:mx-auto md:w-80"
               />
               <WorkflowCard 
                  icon={ShieldCheck} 
                  title="Security (DevSecOps)" 
                  subtitle="Embed security at every stage to protect your data and compliance." 
                  className="md:mx-auto md:w-80"
               />
               <WorkflowCard 
                  icon={Rocket} // Using Rocket again for Deploy or similar
                  title="Cloud Infrastructure" 
                  subtitle="Resilient, auto-scaling infrastructure built for 99.99% uptime." 
                  className="md:mx-auto md:w-80"
               />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsWorkflow;
