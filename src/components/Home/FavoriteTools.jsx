"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  SiGithub, 
  SiSlack, 
  SiJirasoftware, 
  SiNotion, 
  SiLinear,
  SiFigma,
  SiVercel,
  SiMongodb,
  SiDocker,
  SiSentry,
  SiHubspot,
  SiZendesk,
  SiSalesforce,
  SiShopify,
  SiMailchimp
} from "react-icons/si";
import { Sparkles } from "lucide-react";

const FavoriteTools = () => {
    // Defines the grid of tools. 
    // We'll create a layout that centers the sparkle and surrounds it with tools.
    // Row 1: 5 icons
    // Row 2: 2 icons, SPARKLE, 2 icons
    // Row 3: 5 icons
    
    const row1 = [
        { Icon: SiGithub, color: "text-white" },
        { Icon: SiSlack, color: "text-[#E01E5A]" },
        { Icon: SiJirasoftware, color: "text-[#0052CC]" },
        { Icon: SiNotion, color: "text-white" },
        { Icon: SiLinear, color: "text-[#5E6AD2]" },
    ];

    const row2Left = [
        { Icon: SiFigma, color: "text-[#F24E1E]" },
        { Icon: SiVercel, color: "text-white" },
    ];

    const row2Right = [
        { Icon: SiMongodb, color: "text-[#47A248]" },
        { Icon: SiDocker, color: "text-[#2496ED]" },
    ];

    const row3 = [
        { Icon: SiSentry, color: "text-[#362D59]" },
        { Icon: SiHubspot, color: "text-[#FF7A59]" },
        { Icon: SiZendesk, color: "text-[#03363D]" },
        { Icon: SiSalesforce, color: "text-[#00A1E0]" },
        { Icon: SiShopify, color: "text-[#96BF48]" },
    ];

    const ToolBubble = ({ Icon, color, delay }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
                duration: 0.5, 
                delay: delay,
                type: "spring",
                stiffness: 100 
            }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shadow-lg shadow-black/50 group cursor-pointer relative overflow-hidden"
        >
             {/* Hover Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-current ${color}`} />
            
            <Icon className={`text-2xl md:text-3xl opacity-50 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 ${color}`} />
        </motion.div>
    );

    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
                        Integrate with your <br/>
                        <span className="text-gray-500">favorite tools.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Connect SquadLog with the apps you use every day. 
                        Streamline your workflow without leaving your dashboard.
                    </p>
                </motion.div>


                {/* Tools Grid - Logo Wall */}
                <div className="flex flex-col items-center gap-4 md:gap-6">
                    
                    {/* Row 1 */}
                    <div className="flex gap-4 md:gap-6">
                        {row1.map((tool, i) => (
                            <ToolBubble key={i} {...tool} delay={i * 0.05} />
                        ))}
                    </div>

                     {/* Row 2 (Middle with Sparkle) */}
                    <div className="flex gap-4 md:gap-6 items-center">
                        {row2Left.map((tool, i) => (
                            <ToolBubble key={i} {...tool} delay={0.25 + i * 0.05} />
                        ))}

                        {/* Central Glow Sparkle */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                             transition={{ 
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                                delay: 0.4
                            }}
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center relative shadow-[0_0_60px_rgba(239,252,118,0.15)] z-20"
                        >
                             <div className="absolute inset-0 rounded-full animate-pulse bg-[#EFFC76]/5"></div>
                             <Sparkles size={48} className="text-[#EFFC76] fill-[#EFFC76]" />
                        </motion.div>

                        {row2Right.map((tool, i) => (
                            <ToolBubble key={i} {...tool} delay={0.35 + i * 0.05} />
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex gap-4 md:gap-6">
                        {row3.map((tool, i) => (
                            <ToolBubble key={i} {...tool} delay={0.5 + i * 0.05} />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FavoriteTools;
