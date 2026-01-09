"use client"
import React from 'react';
import { Clock, Smartphone, Zap, Shield, FileText, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

const Beifect = () => {
    const benefits = [
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Real-Time Tracking",
            description: "Monitor user activity instantly for smarter decision-making.",
            color: "bg-[#EFFC76]/10 text-[#EFFC76]"
        },
        {
            icon: <Smartphone className="w-8 h-8" />, // Using Smartphone as a proxy for "All-in-One" or "Device"
            title: "All-in-One View",
            description: "Keep all your analytics in one place, without jumping between tools.",
            color: "bg-[#EFFC76]/10 text-[#EFFC76]"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Actionable Insights",
            description: "Track the metrics that matter most for sustainable business growth.",
            color: "bg-[#EFFC76]/10 text-[#EFFC76]"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Secure Data",
            description: "Keep your analytics safe with advanced security and strong encryption.",
            color: "bg-[#EFFC76]/10 text-[#EFFC76]"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Custom Reports",
            description: "Create tailored reports that fit your needs and highlight key insights.",
            color: "bg-[#EFFC76]/10 text-[#EFFC76]"
        },
        {
            icon: <Layout className="w-8 h-8" />,
            title: "Simple to Use",
            description: "Navigate easily—no steep learning curve, start making better decisions quickly.",
            color: "bg-[#EFFC76]/10 text-[#EFFC76]"
        }
    ];

    return (
        <section id="benefits" className="py-24 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 font-medium text-sm mb-6">
                        Benefits
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Benefits That Truly <br /> Matter To You
                    </h2>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Monitor metrics as they happen, so you can respond quickly and keep your goals on track.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 30 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} 
                            className="group relative p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-[#EFFC76]/50 transition-all duration-300 hover:bg-neutral-900/80" 
                        > 
                            {/* Hover Gradient Border Effect */} 
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#EFFC76]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" /> 
                
                            <div className="relative z-10 flex flex-col items-center text-center"> 
                                <div 
                                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#EFFC76]/20 group-hover:scale-110 transition-transform duration-300 ${benefit.color}`} 
                                > 
                                    {benefit.icon} 
                                </div> 
                
                                <h3 className="text-2xl font-semibold text-white mb-4"> 
                                    {benefit.title} 
                                </h3> 
                
                                <p className="text-gray-400 leading-relaxed"> 
                                    {benefit.description} 
                                </p> 
                            </div> 
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Beifect;
